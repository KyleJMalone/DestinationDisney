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
  <h3 className="funTitle">Explore Disney Attractions:</h3>
  <div className="attractionsContainer">
    {attractions.map((attraction) => (
      <section key={attraction.id} className="DisneyAttraction">
        <div className="attractionHeader">
          <h2 className="attractionName">{attraction.attractionName}</h2>
          <div className="attractionType">{attraction.attractionType}</div>
        </div>
        <div className="attractionBody">
          <h4>Description:</h4>
          <p>{attraction.attractionDescription}</p>
          <h4>Location:</h4>
          <p>{attraction.attractionParkLocation}</p>
          <h4>Wait Time:</h4>
          <p>{attraction.attractionWaitTime}</p>
        </div>
      </section>
    ))}
  </div>
</article>
    </>
  );
};
