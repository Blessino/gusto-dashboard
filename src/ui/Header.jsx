import { HiGlobeAlt } from 'react-icons/hi2';
import Logo from '../ui/Logo';
import {DropDown} from './Dropdown';

function Header() {
  return (
    <header className='h-10'>
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
        <a
          href="#"
          className="flex items-center justify-between gap-1 hover:text-teal-400"
        >
          <p>Language</p>
          <DropDown />
        </a>
        <figure className="w-24 h-10">
          <Logo />
        </figure>
      </div>
    </header>
  );
}

export default Header;
