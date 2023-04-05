import { Link } from "react-router-dom";
import designs from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={designs.header}>
      <div className={designs.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
