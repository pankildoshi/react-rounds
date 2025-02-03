import React from "react";

const Interests = ({ data, setData, setActiveTab }) => {
  const handleChange = (e, interest) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, interest] // Add interest
        : prev.interests.filter((i) => i !== interest), // Remove interest
    }));
  };

  const saveAndNext = () => {
    setActiveTab((curr) => curr + 1);
  };

  return (
    <div className="form-container">
      <div className="form-field">
        <input
          type="checkbox"
          id="Music"
          checked={data.interests.includes("Music")}
          onChange={(e) => handleChange(e, "Music")}
        />
        <label htmlFor="Music"> Music </label>
      </div>
      <div className="form-field">
        <input
          type="checkbox"
          id="Game"
          checked={data.interests.includes("Game")}
          onChange={(e) => handleChange(e, "Game")}
        />
        <label htmlFor="Game"> Game </label>
      </div>
      <div className="form-field">
        <input
          type="checkbox"
          id="Swimming"
          checked={data.interests.includes("Swimming")}
          onChange={(e) => handleChange(e, "Swimming")}
        />
        <label htmlFor="Swimming"> Swimming </label>
      </div>

      <div className="form-field">
        <button type="submit" onClick={saveAndNext}>
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default Interests;
