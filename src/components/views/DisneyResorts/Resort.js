import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Resort.css"
export const ResortsForm = () => {
  const navigate = useNavigate();
  const localProjectUser = localStorage.getItem("capstone_user");
  const projectUserObject = JSON.parse(localProjectUser);
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8088/resort?userId=${projectUserObject.id}`)
      .then((response) => response.json())
      .then((resortArray) => {
        setResorts(resortArray);
      });
  }, []);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
    
    <article className="resortsPage">
  <h1>Stay At Disney Resorts</h1>
  <div className="resortsContainer">
    {resorts.map((resort) => (
      <section key={resort.id} className="DisneyResort">
        <h2>{resort.resortName}</h2>
        <div className="resortInfo">
          <p><strong>Guests:</strong> {resort.nameOfGuests}</p>
          <p><strong>Location:</strong> {resort.resortLocation}</p>
          <p><strong>Arrival Date:</strong> {resort.dateArrived}</p>
          <p><strong>Departure Date:</strong> {resort.dateDeparted}</p>
          <p><strong>Transportation:</strong> {resort.transportType}</p>
        </div>
      </section>
    ))}
  </div>
</article>
    </>
  );
};