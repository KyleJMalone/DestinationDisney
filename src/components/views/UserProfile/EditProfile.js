import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Profile";

export const EditProfileForm = () => {
  const localProjectUser = localStorage.getItem("capstone_user");
  const projectUserObject = JSON.parse(localProjectUser);
  console.log(projectUserObject);
  const [user, updateProfile] = useState({
    id: projectUserObject.id,
    name: "",
    email: "",
    phoneNumber: "",
    profilePicture: "",
  });

  const { usersId } = useParams();
  const navigate = useNavigate();
  console.log(usersId);
  useEffect(() => {
    fetch(`http://localhost:8088/users/${usersId}`)
      .then((response) => response.json())
      .then((user) => {
        updateProfile(user);
        console.log(user);
      });
  }, [usersId]);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    const saveProfile = async () => {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      const response = await fetch (`http://localhost:8088/users/${user.id}`,
      options);
      await response.json();
    };
    saveProfile();
    navigate("/");


  };
  
  

  return (
    <>
      <section>
        <form className="profile">
          <h2 className="profile">Profile Edit</h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="Name">Name:</label>
              <input
                required
                autoFocus
                type="text"
                className="form-control"
                value={user.name}
                onChange={(evt) => {
                  const copy = { ...user };
                  copy.name = evt.target.value;
                  updateProfile(copy);
                }}
              />
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <label htmlFor="name">UserName:</label>
              <input
                type="text"
                className="form-control"
                value={user.userName}
                onChange={(evt) => {
                  const copy = { ...user };
                  copy.userName = evt.target.value;
                  updateProfile(copy);
                }}
              />
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Email:</label>
              <input
                type="text"
                className="form-control"
                value={user.email}
                onChange={(evt) => {
                  const copy = { ...user };
                  copy.name = evt.target.value;
                  updateProfile(copy);
                }}
              />
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <label htmlFor="name">PhoneNumber:</label>
              <input
                type="text"
                className="form-control"
                value={user.phoneNumber}
                onChange={(evt) => {
                  const copy = { ...user };
                  copy.phoneNumber = evt.target.value;
                  updateProfile(copy);
                }}
              />
            </div>
          </fieldset>
          <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary"
          >
            Save Profile
          </button>
        </form>
      </section>
    </>
  );
};
