import React, { useState } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    // set initial state for user's settings
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send request to server to update user's settings
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Setting 1:
        <input
          type="text"
          name="setting1"
          value={settings.setting1}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Setting 2:
        <input
          type="text"
          name="setting2"
          value={settings.setting2}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default Settings;
