import Card from '../ui/Card';

import { BsCartPlus } from 'react-icons/bs';
import { TfiReload } from 'react-icons/tfi';
import DatePicker from '../ui/DatePicker';
import BasicDemo from '../ui/Basic';
import Line from '../ui/Line';

function Dashboard() {
  return (
    <div className="">
      <section className="flex items-center justify-between p-10 uppercase">
        <div className="size-10 font-medium">
          <h4>Dashboard</h4>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="rounded-md border-gray-500 shadow-sm">
            <DatePicker showIcon={true} />
          </div>
          <div className="rounded-sm bg-blue-400 p-3 text-white">
            <TfiReload />
          </div>
          <div className="rounded-sm bg-blue-400 p-3 text-white">
            <BsCartPlus />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between">
        <section className="dash__body">
          <div className="flex items-center justify-between">
            <Card
              title="customer"
              iconPath="/group.png"
              count="0"
              reportNum="0%"
            />
            <Card
              title="Booking"
              iconPath="/cart.png"
              count="0"
              reportNum="⬇50%"
            />
            <Card title="Grocery Store" iconPath="/group.png" count="25" />
          </div>
          <div className="flex items-center justify-between">
            <Card
              title="Total Revenue"
              iconPath="/dollar-symbol.png"
              countIcon="pi pi-indian-rupee"
              count="0"
              reportNum="⬇64.74%"
            />
            <Card
              title="Total Sold Product"
              iconPath="/dollar-symbol.png"
              count="0"
            />
            <Card
              title="Products"
              iconPath="/trending.png"
              countIcon="pi pi-plus"
              count="0"
              reportNum="⬇64.74%"
            />
            <Card title="Manager" iconPath="/group.png" count="0" />
          </div>
        </section>
        <div>
          <BasicDemo />
        </div>
      </div>

      <div>
        <Line />
      </div>
    </div>
  );
}

export default Dashboard;
