import React from "react";

const Interest = ({ data, handleChange, handleTabChange }) => {
  const { interest } = data;
  return (
    <div className="interest-tab">
      <div className="input-container">
        <input
          className="input-box"
          type="checkbox"
          id="music"
          name="interest"
          checked={interest.includes("music")}
          onChange={(e) =>
            handleChange({ value: e.target.checked, key: "music" })
          }
        />
        <label className="input-label" htmlFor="music">
          Music
        </label>
      </div>
      <div className="input-container">
        <input
          className="input-box"
          type="checkbox"
          id="game"
          name="interest"
          checked={interest.includes("game")}
          onChange={(e) =>
            handleChange({ value: e.target.checked, key: "game" })
          }
        />
        <label className="input-label" htmlFor="game">
          Game
        </label>
      </div>
      <div className="input-container">
        <input
          className="input-box"
          type="checkbox"
          id="reading"
          name="interest"
          checked={interest.includes("reading")}
          onChange={(e) =>
            handleChange({ value: e.target.checked, key: "reading" })
          }
        />
        <label className="input-label" htmlFor="reading">
          Reading
        </label>
      </div>
      <button onClick={() => handleTabChange({ tab: "setting" })}>Next</button>
    </div>
  );
};

export default Interest;
