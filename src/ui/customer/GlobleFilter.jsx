import React from 'react';

function GlobleFilter({ filter, setFilter }) {
  return (
    <span className="">
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search"
        className="rounded border-[1.5px] border-slate-200 py-2 pl-2 pr-40"
      />
    </span>
  );
}

export default GlobleFilter;
