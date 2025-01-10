import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist Or devloping .</p>
      <buttom className="flex items-center justify-center gap-1 rounded-md border px-2 py-1 text-teal-500 transition-all duration-200 ease-in-out hover:translate-x-1 hover:cursor-pointer hover:rounded-md hover:bg-blue-100 ">
        <IoHomeOutline />
        <Link to="/">Go to Home</Link>
      </buttom>
    </div>
  );
};

export default PageNotFound;
