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
        <h3>Disney Resorts:</h3>
       
        {resorts.map((resort) => (
          <section key={resort.id} className="Disney Resorts">
            <br />
            <br />
            <div class="container-fluid">
            <h2>Resort Name:</h2>
            <header>{resort.resortName}</header>
            <h2>Name Of Guests:</h2>
            <div>{resort.nameOfGuests}</div>
            <h2>Resort Location:</h2>
            <div>{resort.resortLocation}</div>
            <h2>Date Arrived:</h2>
            <div>{resort.dateArrived}</div>
            <h2>Date Departed:</h2>
            <div>{resort.dateDeparted}</div>
            <h2>Transportation:</h2>
            <div>{resort.transportType}</div>
            </div>
          </section>
        ))}
      </article>
    </>
  );
};