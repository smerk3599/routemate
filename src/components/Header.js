import { Link, NavLink } from "react-router-dom";
import Robot from "../assets/robot.png";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={Robot} alt="Routemate Logo" />
        <span>Routemate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/products" className="link">
          Products
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
