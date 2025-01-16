import React from 'react';

function GlobalFilter({ globalFilter, setglobalFilter }) {

  return (
    <span className="">
      <input
        value={globalFilter}
        onChange={(e) => setglobalFilter(e.target.value)}
        placeholder="Search..."
        className="rounded-sm border border-gray-300 py-2 pl-10 pr-4 focus:border-indigo-50 focus:ring-indigo-50"
      />
    </span>
  );
}

export default GlobalFilter;
