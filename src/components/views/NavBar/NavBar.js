import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate();
    const localUser = localStorage.getItem("capstone_user");
    const userObject = JSON.parse(localUser);

    return (
        <ul className="navbar">
          <li className="navbar__item active">
            <Link className="navbar__link" to="/">
              Home
            </Link>
          </li>
          <li className="navbar__item active">
            <Link className="navbar__link" to="./DisneyParks/Parks">
              Parks
            </Link>
          </li>
          <li className="navbar__item active">
            <Link className="navbar__link" to="./DisneyAttractions/Attractions"> 
            Things To Do
            </Link>
          </li>
          <li className="navbar__item active">
            <Link className="navbar__link" to="./DisneyResorts/Resort">
              Places To Stay
            </Link>
          </li>
          <li className="navbar__item active">
            <Link className="navbar__link" to="./DisneyRestauraunts/Restaurants">
              Places To Dine
            </Link>
          </li>
          {localStorage.getItem("capstone_user") ? (
            <li className="navbar__item navbar__logout">
              <Link
                className="navbar__link"
                to="/Login"
                onClick={() => {
                  localStorage.removeItem("project_user");
                  navigate("/", { replace: true });
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      );
    };