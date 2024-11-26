import React from 'react';
import { FaUser, FaUserClock } from 'react-icons/fa';
import { GrLogin } from 'react-icons/gr';

function Customers() {
  return (
    <div className="m-auto w-[96%] pt-4">
      <h1>Customers</h1>
      <div className="flex items-center justify-around">
        <div>
          <span className="flex items-center justify-center gap-2 text-xl">
            <FaUser />
            <h2>24</h2>
          </span>
          <h6 className="text-gray-600">Active User Count</h6>
        </div>
        <div>
          <span className="flex items-center justify-center gap-2 text-xl">
            <FaUserClock />
            <h2>324</h2>
          </span>
          <h6 className="text-gray-600">Active user count</h6>
        </div>
        <div>
          <span className="flex items-center justify-center gap-2 text-xl">
            <GrLogin />
            <h2>324</h2>
          </span>
          <h6 className="text-gray-600">Active user count</h6>
        </div>
      </div>
    </div>
  );
}

export default Customers;
