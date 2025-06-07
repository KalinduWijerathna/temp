import "../Styles/Welcome.css";
import { restaurant } from "../Assets/icons_assets";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <section id="welcome" className="welcome">
      <div className="welcome__text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/reserve"><button className="welcome__button">Reserve a Table</button></Link>
      </div>
      <div className="welcome__image">
        <img src={restaurant} alt="Little Lemon restaurant" />
      </div>
    </section>
  );
}

export { Welcome };
