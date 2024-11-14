import React from "react";
import "./card.css";

function Card({ title, iconPath, countIcon, count, reportNum }) {
  return (
    <>
      <section className="card-body">
        <div className="card-header">
          <h4>{title}</h4>

          <figure className="card-icon">
            <img src={iconPath} alt={title} />
          </figure>
        </div>
        <h4 className= "card-count" ><i className={countIcon}/>{count}</h4>
        <p className="card-report">
          <span>{reportNum}</span> Since last month
        </p>
      </section>
    </>
  );
}

export default Card;
