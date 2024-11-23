import React from 'react';
import DatePicker from '../ui/DatePicker';
import { DropdownList } from '../ui/Dropdown';
import Search from "../ui/Search"

function Order() {
  return (
    <div>
      <section className="m-auto flex items-center justify-between p-10">
        <h1>Order</h1>
        <div className="flex items-center justify-center gap-4">
          <div className="w-48 rounded-sm border-[1.5px] border-gray-300">
            <DatePicker showIcon={false} />
          </div>
          <div className="w-48 rounded-sm border-[1.5px]">
            <DropdownList />
          </div>
          <div>
            <Search />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;
