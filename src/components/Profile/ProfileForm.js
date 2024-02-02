import React, { useState } from "react";

const ProfileForm = ({ onCancel, onUpdate }) => {
  const [fullName, setFullName] = useState("");
  const [profilePhotoUrl, setProfilePhotoUrl] = useState("");

  const handleUpdate = () => {
    onUpdate({ fullName, profilePhotoUrl });
  };

  return (
    <div className="profile-form-container">
      <h2>Complete Your Profile</h2>
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Profile Photo URL:</label>
        <input
          type="text"
          value={profilePhotoUrl}
          onChange={(e) => setProfilePhotoUrl(e.target.value)}
          required
        />
      </div>

      <button onClick={handleUpdate}>Update</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ProfileForm;
