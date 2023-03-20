import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Restaurants.css"
export const RestaurantsForm = () => {
  const navigate = useNavigate();
  const localProjectUser = localStorage.getItem("capstone_user");
  const projectUserObject = JSON.parse(localProjectUser);
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8088/restaurant?userId=${projectUserObject.id}`)
      .then((response) => response.json())
      .then((restaurantArray) => {
        setRestaurant(restaurantArray);
      });
  }, []);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
    
      <article className="restaurantsPage">
        <h3>Disney Restaurants:</h3>
       
        {restaurant.map((restaurants) => (
          <section key={restaurants.id} className="Disney Restaurants">
            <br />
            <br />
            <div class="container-fluid">
            <h2>Restaurant Name:</h2>
            <header>{restaurants.restarauntName}</header>
            <h2>Location:</h2>
            <div>{restaurants.restaurantParkLocation}</div>
            <h2>Description:</h2>
            <div>{restaurants.restaurantDescription}</div>
            <h2>Food Type:</h2>
            <div>{restaurants.restaurantFoodType}</div>
            <h2>Restaurant Type:</h2>
            <div>{restaurants.restaurantType}</div>
            <h2>Price Range:</h2>
            <div>{restaurants.priceRange}</div>
            <h2>Plant Based Options:</h2>
            <div>{restaurants.plantBasedOptions}</div>
            </div>
          </section>
        ))}
      </article>
    </>
  );
};
