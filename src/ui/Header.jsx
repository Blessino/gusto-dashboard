import Logo from "../ui/Logo";
import Dropdown from "./Dropdown";
import "./header.css";
import "./logo.css";

function Header() {
  return (
    <header>
      <div className="header">
        
        <a href="#" className="header__link">
          <span className="header__icon">
            <img src="./public/world-wide-web.png" />
          </span>
          view website
        </a>
        <a href="#">
          <span className="header__icon">
            <img src="./public/world-wide-web.png" />
          </span>
          pickup & delivery Dashboard
        </a>
        <a href="#">
          Language
          <Dropdown />
        </a>
        <figure className="fig__logo-head">
          <Logo />
        </figure>
      </div>
    </header>
  );
}

export default Header;


