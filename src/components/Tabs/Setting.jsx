import React, { Fragment } from "react";

const Setting = ({ data, handleChange, handleSubmit }) => {
  const { theme } = data;
  return (
    <div className="setting-tab">
      <p>Theme</p>
      <div className="input-container">
        <label className="input-label" htmlFor="dark">
          Dark
        </label>
        <input
          className="input-box"
          type="radio"
          id="dark"
          name="theme"
          checked={theme === "dark"}
          onChange={(e) => handleChange({ value: "dark", key: "theme" })}
        />
        <label className="input-label" htmlFor="light">
          Light
        </label>
        <input
          className="input-box"
          type="radio"
          id="light"
          name="theme"
          checked={theme === "light"}
          onChange={(e) => handleChange({ value: "light", key: "theme" })}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Setting;
