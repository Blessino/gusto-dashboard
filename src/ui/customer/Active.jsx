import React, { useState } from 'react';
import { ProductService } from '../../data/ProductService';
import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import { DropdownList } from '../Dropdown';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('Children', {
    header: null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <button
          onClick={row.getToggleExpandedHandler()}
          className="rounded-full border-4 border-white"
        >
          {row.getIsExpanded() ? (
            <FaCircleMinus color="red" />
          ) : (
            <FaCirclePlus color="blue" />
          )}
        </button>
      ) : (
        ''
      );
    },
  }),
  columnHelper.accessor('id', {
    id: 'id',
    cell: (info) => info.getValue(),
    header: () => <span className="flex items-center">#</span>,
  }),
  columnHelper.accessor('image', {
    id: 'image',
    cell: ({ getValue }) => (
      <img
        src={getValue()}
        alt={getValue()}
        className="h-10 w-10 rounded-full border-2"
      />
    ),
    header: () => <span className="flex items-center">Image</span>,
  }),
  columnHelper.accessor('name', {
    cell: (info) => (
      <span className="text-blue-400 hover:text-blue-600">
        {info.getValue()}
      </span>
    ),
    header: () => <span className="flex items-center">Name</span>,
  }),
  columnHelper.accessor('address', {
    header: () => <span className="flex items-center">Adress</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('date', {
    header: () => <span className="flex items-center">Date</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('inventory', {
    header: () => <span className="flex items-center">Inventory</span>,
    cell: (info) => info.getValue(),
  }),
];

function InActive() {
  const [data] = useState(() => [...ProductService]);
  const [globalFilter, setglobalFilter] = useState('');

  // Create the table instance
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),

    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: (row) => !!row.original,

    onGlobalFilterChange: setglobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      <section className="">
        <div className="flex items-center justify-end gap-60 border-b-2 p-2">
          <span className="w-48">
            <DropdownList />
          </span>
          <span>
            <input
              value={globalFilter}
              onChange={(e) => setglobalFilter(e.target.value)}
              placeholder="Search..."
              className="rounded-sm border border-gray-300 py-2 pl-10 pr-4 focus:border-indigo-50 focus:ring-indigo-50"
            />
          </span>
        </div>
      </section>

      <div className="mx-auto flex max-w-full flex-col pb-4 sm:px-2 lg:px-2">
        <div className="overflow-x-auto bg-white">
          <table className="min-w-full divide-y divide-gray-600">
            <thead className="table-auto border-collapse border-b-2 border-gray-300">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-2 text-left font-semibold text-gray-600 first:pr-0"
                    >
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  <tr className="odd:bg-blue-50">
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-4 py-4 text-left text-gray-600 first:pr-0"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                  {row.getIsExpanded() && (
                    <tr>
                      <td colSpan={row.getVisibleCells().length}>
                        <div className="w-fit">
                          <div className="border-b px-2 py-4">
                            <h5 className="inline">Address: </h5>
                            <p className="inline text-sm">
                              {row.original.address}
                            </p>
                          </div>
                          <div className="border-b px-2 py-4">
                            <h5 className="inline">Date: </h5>
                            <p className="inline text-sm">
                              {row.original.date}
                            </p>
                          </div>
                          <div className="border-b px-2 py-4">
                            <h5 className="inline">Name: </h5>
                            <p className="inline text-sm">
                              {row.original.name}
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default InActive;
