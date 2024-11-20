import React from 'react';

function Card({ title, iconPath, countIcon, count, reportNum }) {
  return (
    <>
      <section className="mt-4 p-4">
        <div className="flex items-center justify-between gap-3">
          <h4>{title}</h4>

          <figure className="block h-10 w-10 rounded-sm bg-blue-300 p-3">
            <img src={iconPath} alt={title} />
          </figure>
        </div>
        <h4 className="py-5 text-2xl font-semibold">
          <i className={countIcon} />
          {count}
        </h4>
        <p>
          <span className="text-red-500">{reportNum}</span> Since last month
        </p>
      </section>
    </>
  );
}

export default Card;
