import React from "react";

const Settings = ({ data, setData }) => {
  const handleChange = (event, theme) => {
    setData((prev) => ({
      ...prev,
      theme: theme,
    }));
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <div className="form-field">
        <input
          type="radio"
          id="light"
          checked={data.theme === "light"}
          onChange={(e) => handleChange(e, "light")}
        />
        <label htmlFor="light"> Light </label>
      </div>

      <div className="form-field">
        <input
          type="radio"
          id="dark"
          checked={data.theme === "dark"}
          onChange={(e) => handleChange(e, "dark")}
        />
        <label htmlFor="dark"> Dark </label>
      </div>

      <div className="form-field">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Settings;
