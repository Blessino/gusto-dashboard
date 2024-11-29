import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../../data/ProductService';

export default function DynamicColumnsDemo() {
  const [products, setProducts] = useState([]);
  const columns = [
    { id: 1, field: 'code', header: 'Order ID' },
    { id: 2, field: 'date', header: 'Date & Time' },
    { id: 2, field: 'name', header: 'Customer' },
    { id: 2, field: 'address', header: 'Address' },
  ];

     useEffect(() => {
       setProducts(ProductService);
     }, []);

  return (
    <div className="card">
      <DataTable value={products} tableStyle={{ minWidth: '50rem' }} >
        {columns.map((col) => (
          <Column key={col.id} field={col.field} header={col.header} />
        ))}
      </DataTable>
    </div>
  );
}
