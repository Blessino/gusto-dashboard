import React, { useState } from 'react';
import DatePicker from '../ui/DatePicker';
import { DropdownList } from '../ui/Dropdown';
import Search from '../ui/Search';
import { Button } from 'primereact/button';
import ActiveOrder from '../ui/order/ActiveOrder';
import PendingOrder from '../ui/order/PendingOrder';
import Ordered from '../ui/order/Ordered';

function Order() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'active':
        return <ActiveOrder />;
      case 'pending':
        return <PendingOrder />;
      case 'order':
        return <Ordered />;
      default:
        return <ActiveOrder />;
    }
  };

  return (
    <div className="m-auto w-[96%] pt-4">
      <section className="m-auto flex items-center justify-between py-10">
        <div className="size-10 font-medium">
          <h4>Order</h4>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="w-48 rounded-sm border-[1.5px] border-gray-300">
            <DatePicker showIcon={false} />
          </div>
          <div className="w-48 rounded-sm border-[1.5px]">
            <DropdownList />
          </div>
          <div className="justify-content-center flex h-10 w-7 rounded-md bg-red-500">
            <Button
              icon="pi pi-times text-white"
              severity="danger"
              aria-label="Cancel"
            />
          </div>
          <div>
            <Search />
          </div>
        </div>
      </section>
      <section>
        <div>
          <nav className="flex items-center justify-start gap-4">
            <button
              onClick={() => setActiveComponent('active')}
              className="active:text-blue-400"
            >
              Active Order
            </button>
            <button onClick={() => setActiveComponent('pending')}>
              Pending Order
            </button>
            <button onClick={() => setActiveComponent('order')}>
              Order History
            </button>
          </nav>
          <div>{renderComponent()}</div>
        </div>
      </section>
    </div>
  );
}

export default Order;
