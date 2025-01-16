import React, { useState } from 'react';
import { FaUser, FaUserClock } from 'react-icons/fa';
import { GrLogin } from 'react-icons/gr';
import Active from '../ui/customer/Active';
import InActive from '../ui/customer/InActive';


function Customers() {
  const [activeComponent, setActiveComponent] = useState('active');

  function renderComponent() {
    switch (activeComponent) {
      case 'active':
        return <Active />;
      case 'inactive':
        return <InActive />;
      default:
        return <Active />;
    }
  }

  return (
    <div className="m-auto w-[96%] pt-4">
      <section className="">
        <h2 className="text-2xl font-normal uppercase text-slate-700">
          Customers
        </h2>
        <div className="flex items-center justify-around py-12">
          <div>
            <span className="flex items-center justify-center gap-2 text-xl">
              <FaUser color=" #60a5fa" />
              <h2>24</h2>
            </span>
            <h6 className="text-gray-600">Active User Count</h6>
          </div>
          <div>
            <span className="flex items-center justify-center gap-2 text-xl">
              <FaUserClock color=" #60a5fa" />
              <h2>324</h2>
            </span>
            <h6 className="text-gray-600">Active user count</h6>
          </div>
          <div>
            <span className="flex items-center justify-center gap-2 text-xl">
              <GrLogin color=" #60a5fa" />
              <h2>324</h2>
            </span>
            <h6 className="text-gray-600">Active user count</h6>
          </div>
        </div>
      </section>

      <section>
        <div>
          <nav className="flex items-center justify-start gap-4 border-b-2 border-solid border-gray-300 pb-4">
            <button
              onClick={() => setActiveComponent('active')}
              className={`pl-4 transition-colors duration-1000 ${
                activeComponent === 'active'
                  ? 'text-blue-500 underline decoration-blue-500 decoration-solid decoration-2 underline-offset-[22px]'
                  : ' '
              }`}
            >
              Active Order
            </button>
            <button
              onClick={() => {
                setActiveComponent('inactive');
              }}
              className={`transition-colors duration-1000 ${
                activeComponent === 'inactive'
                  ? 'text-blue-500 underline decoration-blue-500 decoration-solid decoration-2 underline-offset-[22px]'
                  : ' '
              }`}
            >
              InActive
            </button>
          </nav>
          <div></div>
          <div>{renderComponent()}</div>
        </div>
      </section>
    </div>
  );
}

export default Customers;
