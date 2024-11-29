import React from 'react';
import { BiSolidStore } from 'react-icons/bi';
import { BsCreditCard2FrontFill } from 'react-icons/bs';
import { MdLocalConvenienceStore } from 'react-icons/md';
import ActiveStore from "../ui/store/ActiveStore"

function Store() {
  return (
    <div className='m-auto w-[96%] pt-4'>
      <div>
        <h1>Grocery Store</h1>
      </div>
      <div>
        <div className="flex items-center justify-around pt-4">
          <div>
            <span className="flex items-center justify-center gap-2 text-xl">
              <BiSolidStore />
              <h2>324</h2>
            </span>
            <h6 className="text-gray-600">Total Grocery Stores </h6>
          </div>
          <div>
            <span className="flex items-center justify-center gap-2 text-xl">
              <MdLocalConvenienceStore />
              <h2>324</h2>
            </span>
            <h6 className="text-gray-600">Open Grocery Stores</h6>
          </div>
          <div>
            <span className="flex items-center justify-center gap-2 text-xl">
              <BsCreditCard2FrontFill />
              <h2>324</h2>
            </span>
            <h6 className="text-gray-600">Total Products</h6>
          </div>
          <div>
            <span className="flex items-center justify-center gap-2 text-xl">
              <BsCreditCard2FrontFill />
              <h2>324</h2>
            </span>
            <h6 className="text-gray-600">Total Active Product</h6>
          </div>
        </div>
      </div>

      <ActiveStore />
    </div>
  );
}

export default Store;
