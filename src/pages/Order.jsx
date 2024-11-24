import React from 'react';
import DatePicker from '../ui/DatePicker';
import { DropdownList } from '../ui/Dropdown';
import Search from "../ui/Search"
import { Button } from 'primereact/button';

function Order() {
  return (
    <div className="m-auto w-[96%]">
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
          <div className=" justify-content-center flex bg-red-500 rounded-md h-10 w-7 ">
            <Button icon="pi pi-times text-white" severity="danger" aria-label="Cancel" />
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
