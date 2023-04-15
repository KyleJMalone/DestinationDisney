import { Route, Routes } from "react-router-dom";
import { Authorized } from "../Authorized";
import { ApplicationViews } from "../ApplicationViews";
import NavBar from "../NavBar/NavBar";
import { Login } from "../../auth/Login";
import { Register } from "../../auth/Register";
import React from "react";
import "./DisneyHome.css"

export const DisneyHome = () => {
  return (
    <div className="landingPage">
      <h1>Welcome to Disney World!</h1>
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
                <ApplicationViews />
              </>
            </Authorized>
          }
        />
      </Routes>
    </div>
    
  );
};
