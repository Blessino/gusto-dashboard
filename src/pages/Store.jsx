import React, { useState } from 'react';
import { BiSolidStore } from 'react-icons/bi';
import { BsCreditCard2FrontFill } from 'react-icons/bs';
import { MdLocalConvenienceStore } from 'react-icons/md';
import ActiveStore from '../ui/store/ActiveStore';
import AwaitingStore from '../ui/store/AwaitingStore';
import BlockedStore from '../ui/store/BlockedStore';

function Store() {
  const [activeComponent, setActiveComponent] = useState('active');

  function renderComponent() {
    switch (activeComponent) {
      case 'active':
        return <ActiveStore />;
      case 'awaiting':
        return <AwaitingStore />;
      case 'blocked':
        return <BlockedStore />;
    }
  }

  return (
    <div className="m-auto w-[96%] pt-4">
      <section className="mb-4">
        <div className="text-2xl font-normal text-slate-700 uppercase">
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
                setActiveComponent('awaiting');
              }}
              className={`transition-colors duration-1000 ${
                activeComponent === 'awaiting'
                  ? 'text-blue-500 underline decoration-blue-500 decoration-solid decoration-2 underline-offset-[22px]'
                  : ' '
              }`}
            >
              Awaiting Approval
            </button>
            <button
              onClick={() => setActiveComponent('blocked')}
              className={`transition-all duration-1000 ease-in ${
                activeComponent === 'blocked'
                  ? 'text-blue-500 underline decoration-blue-500 decoration-solid decoration-2 underline-offset-[22px]'
                  : ' '
              }`}
            >
              Blocked
            </button>
          </nav>
          <div></div>
          <div>{renderComponent()}</div>
        </div>
      </section>
    </div>
  );
}

export default Store;
