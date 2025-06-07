import "../Styles/Header.css";
import { logo } from "../Assets/icons_assets"; 
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
        <img src={logo} alt="Little Lemon Logo" className="logo-image" />
        </Link>
      </div>

      <nav className="header__nav">
        <ul>
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#specials">Specials</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#about">About</a></li>
          <li><Link to="/reserve">Reserve</Link></li> 
        </ul>
      </nav>
    </header>
  );
}

export { Header };
