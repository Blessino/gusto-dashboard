import  Logo  from "../ui/Logo";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="header">
        <a href="#">view website</a>
        <a href="#">pickup & delivery Dashboard </a>
        <a>Language</a>
        <figure className="header__figure-logo">

        <Logo />
        </figure>
      </div>
    </header>
  );
}

export default Header;
