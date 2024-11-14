import Calender from "./Calender";
import Card from "./card";
import "./dashboard.css"

function Dashboard() {
  return (
    <div>
      <section className="dash__header">
        <h4>Dashboard</h4>
        <div>
          <Calender />
          <span className="pi pi-calendar "></span>
          <span className="pi pi-cart-plus "></span>
          <span className="pi pi-sync "></span>
        </div>
      </section>
      <section className="dash__body">
        <div className="card__body">
        <Card />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
