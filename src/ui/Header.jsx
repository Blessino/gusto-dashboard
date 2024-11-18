import { HiChevronDown, HiGlobeAlt } from 'react-icons/hi2';
import Logo from '../ui/Logo';
import Dropdown from './Dropdown';
// import './header.css';
// import './logo.css';

function Header() {
  return (
    <header>
      <div className="flex items-center justify-end gap-[2.5rem] p-2">
        <a
          href="#"
          className="flex items-center justify-end gap-1 transition-all duration-300 ease-in hover:text-teal-400 hover:underline"
        >
          <span className="header__icon">
            <HiGlobeAlt />
          </span>
          view website
        </a>
        <a
          href="#"
          className="flex items-center justify-between gap-1 transition-all duration-300 ease-in hover:text-teal-400 hover:underline"
        >
          <span className="header__icon">
            <HiGlobeAlt />
          </span>
          pickup & delivery Dashboard
        </a>
        <a href="#" className=" flex items-center justify-between gap-1 hover:text-teal-400">
          Language
          <Dropdown /> <HiChevronDown />
        </a>
        <figure className="fig__logo-head">
          <Logo />
        </figure>
      </div>
    </header>
  );
}

export default Header;
