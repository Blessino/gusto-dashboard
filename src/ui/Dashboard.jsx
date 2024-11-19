import { LuCalendarDays } from 'react-icons/lu';
import Card from './Card';

function Dashboard() {
  return (
    <div className=" ">
      <section className="flex items-center justify-between">
        <h4>Dashboard</h4>
        <div className="">
          <span>
            <LuCalendarDays />
          </span>
          <span className="pi pi-cart-plus pi-icon"></span>
          <span className="pi pi-sync pi-icon"></span>
        </div>
      </section>
      <div className="">
        <section className="dash__body">
          <div className="card__body">
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
            <Card
              title="Grocery Store"
              iconPath="/group.png"
              count="25"
            />
          </div>
          <div className="card__body">
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

       
      </div>
    </div>
  );
}

export default Dashboard;
