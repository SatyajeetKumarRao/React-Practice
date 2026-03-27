import React from "react";

const Profile = ({ data, handleChange, handleTabChange }) => {
  const { name, email, age } = data;
  return (
    <div className="profile-tab">
      <div className="input-container">
        <label className="input-label" htmlFor="name">
          Name
        </label>
        <input
          className="input-box"
          type="text"
          id="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => handleChange({ value: e.target.value, key: "name" })}
        />
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
          className="input-box"
          type="email"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            handleChange({ value: e.target.value, key: "email" })
          }
        />
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="age">
          Age
        </label>
        <input
          className="input-box"
          type="number"
          id="age"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => handleChange({ value: e.target.value, key: "age" })}
        />
      </div>
      <button onClick={() => handleTabChange({ tab: "interest" })}>Next</button>
    </div>
  );
};

export default Profile;
