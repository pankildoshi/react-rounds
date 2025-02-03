import React from "react";

const Profile = ({ data, setData, setActiveTab }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const saveAndNext = () => {
    setActiveTab((curr) => curr + 1);
  };

  return (
    <div className="form-container">
      <div className="form-field">
        <label>Name : </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-field">
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-field">
        <label>Age : </label>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="form-field">
        <button type="submit" onClick={saveAndNext}>
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default Profile;
