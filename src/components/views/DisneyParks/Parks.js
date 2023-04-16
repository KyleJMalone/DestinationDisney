import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Parks.css"
import MickeyMouse from "./MickeyMouse.jpg"
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
<h1>Disney Parks</h1>
  <img src={MickeyMouse} alt="Mickey Mouse" />
  <div className="parksContainer">
    {parks.map((park) => (
      <section key={park.id} className="DisneyPark">
        <h2>{park.parkName}</h2>
        <div className="parkInfo">
          <h3>Location</h3>
          <p>{park.parkLocation}</p>
          <h3>Hours</h3>
          <p>{park.parkHours}</p>
          <h3>Transportation</h3>
          <p>{park.transportType}</p>
        </div>
      </section>
    ))}
  </div>
</article>

    </>
  );
};
