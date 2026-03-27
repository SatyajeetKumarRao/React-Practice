import React, {
  Fragment,
  useMemo,
  lazy,
  Suspense,
  useState,
  useCallback,
  useEffect,
} from "react";
import "./Tabs.css";
import { useSearchParams } from "react-router";
import { getValuesFromURL } from "./helpers";

const Profile = lazy(() => import("./Profile"));
const Interest = lazy(() => import("./Interest"));
const Setting = lazy(() => import("./Setting"));

const Tabs = () => {
  const [searchParam, setSearchParams] = useSearchParams();

  const { selectedTab } = getValuesFromURL({ searchParam });

  const [activeTab, setActiveTab] = useState(selectedTab);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    interest: [],
    theme: "dark",
  });

  useEffect(() => {
    setActiveTab(selectedTab);
  }, [selectedTab]);

  useEffect(() => {
    const param = new URLSearchParams(searchParam);
    param.set("tab", activeTab);
    setSearchParams(param);
  }, [activeTab, setSearchParams, searchParam]);

  const handleProfileDataChange = useCallback(({ value, key }) => {
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  }, []);

  const handleInterestDataChange = useCallback(({ value, key }) => {
    setFormData((prev) => {
      return {
        ...prev,
        interest: value
          ? [...prev.interest, key]
          : prev.interest.filter((inter) => inter != key),
      };
    });
  }, []);

  const handleTabChange = useCallback(({ tab }) => {
    setActiveTab(tab);
  }, []);

  const handleSubmit = useCallback(() => {
    console.log("Form submitted:", formData);
  }, [formData]);

  const tabConfig = useMemo(
    () => [
      {
        label: "Profile",
        key: "profile",
        children: (
          <Profile
            data={formData}
            handleChange={handleProfileDataChange}
            handleTabChange={handleTabChange}
          />
        ),
      },
      {
        label: "Interest",
        key: "interest",
        children: (
          <Interest
            data={formData}
            handleChange={handleInterestDataChange}
            handleTabChange={handleTabChange}
          />
        ),
      },
      {
        label: "Setting",
        key: "setting",
        children: (
          <Setting
            data={formData}
            handleChange={handleProfileDataChange}
            handleSubmit={handleSubmit}
          />
        ),
      },
    ],
    [
      formData,
      handleProfileDataChange,
      handleInterestDataChange,
      handleSubmit,
      handleTabChange,
    ],
  );

  const tabConfigMap = useMemo(
    () =>
      tabConfig.reduce((acc, curr) => {
        acc[curr.key] = curr.children;
        return acc;
      }, {}),
    [tabConfig],
  );

  return (
    <Fragment>
      <h2>Tabs</h2>
      <div className="tab-container">
        <div className="tab-header">
          {tabConfig.map((tab) => (
            <button
              type="button"
              className={`tab ${tab.key === activeTab ? "active" : ""}`}
              key={tab.key}
              onClick={() => handleTabChange({ tab: tab.key })}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-body">
          <Suspense fallback={<p>Loading...</p>}>
            {tabConfigMap[activeTab]}
          </Suspense>
        </div>
      </div>
    </Fragment>
  );
};

export default Tabs;
