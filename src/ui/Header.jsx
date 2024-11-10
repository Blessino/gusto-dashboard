import Logo from "../ui/Logo";
import "./header.css";
import "./logo.css"

function Header() {
  return (
    <header>
      <div className="header">
        <a href="#">view website</a>
        <a href="#">pickup & delivery Dashboard </a>
        <a href="#">
          <label htmlFor="cars">Language</label>
          <select name="lang" className="header__select-lang">
            <option value="english">en</option>
          </select>
        </a>
        <figure className="fig__logo-head">
          <Logo />
        </figure>
      </div>
    </header>
  );
}

export default Header;
