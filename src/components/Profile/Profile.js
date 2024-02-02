import React, { useState } from "react";
import ProfileForm from "./ProfileForm";

const Profile = () => {
  const [showProfileForm, setShowProfileForm] = useState(false);

  const handleForm = () => {
    setShowProfileForm(true);
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
          <ProfileForm />
        </div>
      )}
    </div>
  );
};

export default Profile;
