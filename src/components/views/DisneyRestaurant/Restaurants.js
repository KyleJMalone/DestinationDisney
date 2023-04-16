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
  <h1>Dine At Disney Restaurants</h1>
  <div className="restaurantsContainer">
    {restaurant.map((restaurants) => (
      <section key={restaurants.id} className="DisneyRestaurant">
        <h2>{restaurants.restarauntName}</h2>
        <div className="restaurantInfo">
          <p><strong>Location:</strong> {restaurants.restaurantParkLocation}</p>
          <p><strong>Description:</strong> {restaurants.restaurantDescription}</p>
          <p><strong>Food Type:</strong> {restaurants.restaurantFoodType}</p>
          <p><strong>Restaurant Type:</strong> {restaurants.restaurantType}</p>
          <p><strong>Price Range:</strong> {restaurants.priceRange}</p>
          <p><strong>Plant Based Options:</strong> {restaurants.plantBasedOptions}</p>
        </div>
      </section>
    ))}
  </div>
</article> 
    </>
  );
};
