import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { ProductService } from '../../data/ProductService';
import { COLOUMS } from './Coloum';
import GlobleFilter from './GlobleFilter';
import { DropdownList } from '../Dropdown';


function InActive() {
  // Memoize columns and data
  const columns = useMemo(() => COLOUMS, []);
  const data = useMemo(() => ProductService, []);

  // Create the table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  return (
    <>
      <div className="flex items-center justify-end gap-2 border-b-2 p-2">
        <span className="w-48 ">
          <DropdownList />
        </span>
        <GlobleFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>

      <table {...getTableProps()} className="min-w-full">
        <thead className="table-auto border-collapse border-b-2 border-gray-300 shadow-slate-800 drop-shadow-xl">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                  className="px-4 py-2 text-left font-semibold text-gray-700"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? '⬇'
                        : '⬆'
                      : ' '}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                className="even:bg-blue-50"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.column.id}
                    className="border-b-2 border-gray-300 px-4 py-2 text-gray-600"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default InActive;
