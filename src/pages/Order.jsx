import React from 'react';
import DatePicker from '../ui/DatePicker';
import { DropdownCity } from '../ui/Dropdown';

function Order() {
  return (
    <div>
      <section className='flex items-center justify-between'>
        <h1>order</h1>
        <div className="w-48 rounded-sm border-[1.5px] border-gray-300">
          <DatePicker showIcon={false} />
        </div>
        <div className="w-48 rounded-sm border-[1.5px]">
          <DropdownCity />
        </div>
      </section>
    </div>
  );
}

export default Order;
