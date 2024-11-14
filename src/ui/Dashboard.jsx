import Calender from "./Calender";
import Card from "./card";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="container">
      <section className="dash__header">
        <h4>Dashboard</h4>
        <div>
          <Calender />
          <span className="pi pi-calendar pi-icon "></span>
          <span className="pi pi-cart-plus pi-icon"></span>
          <span className="pi pi-sync pi-icon"></span>
        </div>
      </section>
      <section className="dash__body">
        <div className="card__body">
          <Card
            title="customer"
            iconPath="./public/group.png"
            count="0"
            reportNum="0%"
          />
          <Card
            title="Booking"
            iconPath="./public/cart.png"
            count="0"
            reportNum="⬇50%"
          />
          <Card
            title="Grocery Store"
            iconPath="./public/group.png"
            count="25"
          />
        </div>
        <div className="card__body">
          <Card
            title="Total Revenue"
            iconPath="./public/dollar-symbol.png"
            countIcon="pi pi-indian-rupee"
            count="0"
            reportNum="⬇64.74%"
          />
          <Card
            title="Total Sold Product"
            iconPath="./public/dollar-symbol.png"
            count="0"
          />
          <Card
            title="Products"
            iconPath="./public/trending.png"
            countIcon="pi pi-plus"
            count="0"
            reportNum="⬇64.74%"
          />
          <Card title="Manager" iconPath="./public/group.png" count="0" />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
