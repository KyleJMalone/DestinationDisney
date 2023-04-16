import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Authorized } from "../Authorized";
import { ApplicationViews } from "../ApplicationViews";
import NavBar from "../NavBar/NavBar";
import { Login } from "../../auth/Login";
import { Register } from "../../auth/Register";
import Castle from "./Castle.jpg";
import "./DisneyHome.css";

export const DisneyHome = () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Orlando&units=metric&appid=dd9c3936652932f34f444a844a10915f"
      );
      const data = await response.json();
      setWeather(data);
    };
    fetchWeather();
  }, []);

  return (
    <div className="landingPage">
      <div className="heroSection">
        <h1>Welcome to Destination Disney!</h1>
        <p>Where magic and wonder are just around the corner.</p>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              <Authorized>
                <>
                  <NavBar />
                  <img src={Castle} alt="Cinderella's Castle" />
                  {weather && (
                    <div className="weather">
                      <p>Temperature: {weather.main.temp} °C</p>
                      <p>Description: {weather.weather[0].description}</p>
                    </div>
                  )}
                  <ApplicationViews />
                </>
              </Authorized>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
