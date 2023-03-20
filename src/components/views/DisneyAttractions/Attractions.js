import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Attractions.css"
export const AttractionsForm = () => {
  const navigate = useNavigate();
  const localProjectUser = localStorage.getItem("capstone_user");
  const projectUserObject = JSON.parse(localProjectUser);
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8088/attractions?userId=${projectUserObject.id}`)
      .then((response) => response.json())
      .then((attractionsArray) => {
        setAttractions(attractionsArray);
      });
  }, []);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
    
      <article className="attractionsPage">
        <h3>Disney Attractions:</h3>
       
        {attractions.map((attraction) => (
          <section key={attraction.id} className="Disney Attractions">
            <br />
            <br />
            <div class="container-fluid">
            <h2>Attraction Name:</h2>
            <header>{attraction.attractionName}</header>
            <h2>Description:</h2>
            <div>{attraction.attractionDescription}</div>
            <h2>Attraction Type:</h2>
            <div>{attraction.attractionType}</div>
            <h2>Location:</h2>
            <div>{attraction.attractionParkLocation}</div>
            <h2>Wait Time:</h2>
            <div>{attraction.attractionWaitTime}</div>
            </div>
          </section>
        ))}
      </article>
    </>
  );
};
