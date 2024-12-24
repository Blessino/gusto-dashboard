import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../../data/ProductService';

export default function DynamicColumnsDemo() {
  const [products, setProducts] = useState([]);
  const columns = [
    { id: 1, field: 'code', header: 'Code' },
    { id: 2, field: 'name', header: 'Name' },
    { id: 2, field: 'category', header: 'Category' },
    { id: 2, field: 'quantity', header: 'Quantity' },
  ];

  useEffect(() => {
    setProducts(ProductService);
  }, []);

  return (
    <div className="card">
      <DataTable value={products} tableStyle={{ minWidth: '50rem' }} size='small'>
        {columns.map((col) => (
          <Column key={col.id} field={col.field} header={col.header} />
        ))}
      </DataTable>
    </div>
  );
}
