import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EditProfile";
import "./Profile.css";

export const ProfileForm = () => {
  const navigate = useNavigate();

  // Get user profile from localStorage
  const localProjectUser = localStorage.getItem("capstone_user");
  const projectUserObject = JSON.parse(localProjectUser);

  // Set default values for user profile state
  const [userProfile, setUserProfile] = useState({
    id: projectUserObject.id,
    name: projectUserObject.name,
    email: projectUserObject.email,
    phoneNumber: projectUserObject.phoneNumber,
    profilePicture: "",
  });

  // Handle profile picture selection
  const handleProfilePictureSelect = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      setUserProfile((prevState) => ({
        ...prevState,
        profilePicture: reader.result,
      }));
    };
  };

  // Fetch user profile from server on component mount
  useEffect(() => {
    fetch(`http://localhost:8088/users/${projectUserObject.id}`)
      .then((response) => response.json())
      .then((profileArray) => {
        setUserProfile(profileArray);
      });
  }, []);

  // Handle save button click
  const handleSaveButtonClick = (event) => {
    event.preventDefault();
    saveUserProfile(userProfile);
  };

  // Save user profile to server
  const saveUserProfile = (profile) => {
    fetch(`http://localhost:8088/users/${profile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: profile.name,
        email: profile.email,
        phoneNumber: profile.phoneNumber,
        profilePicture: profile.profilePicture,
      }),
    })
      .then((response) => response.json())
      .then((updatedProfile) => {
        setUserProfile(updatedProfile);
        alert("Profile saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving profile: ", error);
      });
  };

  return (
    <>
      <h3>Welcome, {userProfile.name}</h3>

      <article className="userProfile">
        {userProfile.profilePicture && (
          <img src={userProfile.profilePicture} alt="Profile Picture" />
        )}

        <h2>Profile Picture:</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePictureSelect}
        />

        <h2>Name:</h2>
        <header>{userProfile.name}</header>

        <h2>Email:</h2>
        <div>{userProfile.email}</div>

        <h2>Phone Number:</h2>
        <div>{userProfile.phoneNumber}</div>

        <button
          className="btn comment_edit"
          onClick={() => {
            navigate(`/EditProfile/${userProfile.id}`);
          }}
        >
          Edit
        </button>
        <section>
          <button
            className="btn comment_delete"
            onClick={() => {
              navigate(`/DeleteProfile/${userProfile.id}`);
            }}
          >
            Delete
          </button>
        </section>
        <section></section>
      </article>
    </>
  );
};
