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
import Checkbox from './Checkbox';


const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('select-col', {
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()} 
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
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

function InActive({ globalFilter, setglobalFilter }) {
  const [data] = useState(() => [...ProductService]);
  const [rowSelection, setRowSelection] = useState("");

  // Create the table instance
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      rowSelection,
    },
    getCoreRowModel: getCoreRowModel(),

    onRowSelectionChange: setRowSelection,
    getRowId: row => row.uuid,

    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: (row) => !!row.original,

    onGlobalFilterChange: setglobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
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
