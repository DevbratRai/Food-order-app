import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import axios from "axios";

const Profile = () => {
  const [showProfileForm, setShowProfileForm] = useState(false);

  const handleForm = () => {
    setShowProfileForm(true);
  };

  const handleProfileCancel = () => {
    setShowProfileForm(false);
  };

  const handleFormUpdate = ({ fullName, profilePhotoUrl }) => {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAP1-eVHrp1KJc8tPZNQOeQQDpl_LdLxdE",
        {
          fullName: fullName,
          profilePhotoUrl: profilePhotoUrl,
        }
      )
      .then((response) => {
        // Handle successful response
        console.log("User details updated successfully");
        // onCancel(); // Close the form
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating user details", error);
      });
  };
  return (
    <div>
      <h3>Welcome to Expense Tracker!!!</h3>
      <p>
        Your profile is incomplete.
        <button onClick={handleForm}>Complete now</button>
      </p>
      {showProfileForm && (
        <div>
          <ProfileForm
            onCancel={handleProfileCancel}
            onUpdate={handleFormUpdate}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
