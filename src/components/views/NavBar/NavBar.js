import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBarStyles.css";

export default function NavBar() {
  const navigate = useNavigate();
  const localUser = localStorage.getItem("capstone_user");
  const userObject = JSON.parse(localUser);

  return (
    <nav className="navbar">
     
      <ul className="navbar__links">
        <li className="navbar__item">
          <NavLink className="navbar__link" activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" activeClassName="active" to="/Resort">
            Places To Stay
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" activeClassName="active" to="/Parks">
            Places To Go
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" activeClassName="active" to="/Restaurant">
            Places To Dine
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" activeClassName="active" to="/Attractions">
            Things To Do
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" activeClassName="active" to="/Profile">
            View Profile
          </NavLink>
        </li>
        <li className="navbar__item navbar__search">
          <input className="navbar__search-input" type="text" placeholder="Search..." />
          <button className="navbar__search-button">Search</button>
        </li>
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
      </ul>
    </nav>
  );
}