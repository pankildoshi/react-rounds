import React, { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabbedForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Pankil",
    email: "pankil@gmail.com",
    age: 18,
    interests: ["Music"],
    theme: "dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <>
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <div key={index} className="tab" onClick={() => setActiveTab(index)}>
            {tab.name}
          </div>
        ))}
      </div>
      <ActiveTabComponent
        data={data}
        setData={setData}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export default TabbedForm;
