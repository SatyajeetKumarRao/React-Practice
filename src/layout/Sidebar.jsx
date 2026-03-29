import { useMemo } from "react";
import { NavLink } from "react-router";
import "./Sidebar.css";

const Sidebar = () => {
  const routeList = useMemo(() => {
    return [
      {
        path: "/",
        label: "Home",
      },
      {
        path: "/auto-complete-search",
        label: "Auto Complete Search",
      },
      {
        path: "/tabs",
        label: "Tabs",
      },
      {
        path: "/accordion",
        label: "Accordion",
      },
      {
        path: '/pagination',
        label: 'Pagination'
      },
      {
        path: '/todo',
        label: 'Todo'
      },
      {
        path: '/chips-input',
        label: 'Chips Input'
      },
      {
        path: '/nested-checkbox',
        label: 'Nested Checkbox'
      },
      {
        path: '/file-explorer',
        label: 'File Explorer'
      },
      {
        path: '/nested-checkbox',
        label: 'Nested Checkbox'
      },
      {
        path: '/debounce',
        label: 'Debounce Example'
      },
      {
        path: '/throttle',
        label: 'Throttle Example'
      },
      {
        path: "/infinite-scroll",
        label: "Infinite Scroll",
      },
      {
        path: '/virtual-list',
        label: 'Virtual List'
      },
      {
        path: "/memoization-example",
        label: "Memoization Example",
      },
      {
        path: "/custom-hook-example",
        label: "Custom Hook Example",
      },
      {
        path: "/context-example",
        label: "Context Example",
      },
      {
        path: "/core-redux-example",
        label: "Core Redux Example",
      },
      {
        path: "/react-redux-example",
        label: "React Redux Example",
      },
      {
        path: "/react-redux-saga-example",
        label: "React Redux Saga Example",
      },
      {
        path: "/click-game",
        label: "Box Click Game",
      },
    ];
  }, []);
  return (
    <div className="sidebar-container">
      <ul>
        {routeList.map((route) => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                `navlink ${isActive ? "active" : ""}`
              }
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
