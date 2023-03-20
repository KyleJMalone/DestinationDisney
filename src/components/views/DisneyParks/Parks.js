import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Parks.css"
export const ParksForm = () => {
  const navigate = useNavigate();
  const localProjectUser = localStorage.getItem("capstone_user");
  const projectUserObject = JSON.parse(localProjectUser);
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8088/parks?userId=${projectUserObject.id}`)
      .then((response) => response.json())
      .then((parksArray) => {
        setParks(parksArray);
      });
  }, []);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
    
      <article className="parksPage">
        <h3>Disney Parks:</h3>
       
        {parks.map((park) => (
          <section key={park.id} className="Disney Parks">
            <br />
            <br />
            <div class="container-fluid">
            <h2>Park Name:</h2>
            <header>{park.parkName}</header>
            <h2>Location:</h2>
            <div>{park.parkLocation}</div>
            <h2>Hours:</h2>
            <div>{park.parkHours}</div>
            <h2>Transportation:</h2>
            <div>{park.transportType}</div>
            </div>
          </section>
        ))}
      </article>
    </>
  );
};
