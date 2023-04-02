import { Route, Routes } from "react-router-dom";
import { Authorized } from "../Authorized";
import { ApplicationViews } from "../ApplicationViews";
import { NavBar } from ".views/NavBar";
import { Login } from "../../auth/Login";
import { Register } from "../../auth/Register";

export const DisneyHome = () => {
  return (
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
  );
};
