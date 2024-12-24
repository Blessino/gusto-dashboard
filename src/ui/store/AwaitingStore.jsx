import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { InputSwitch } from 'primereact/inputswitch';
import { ProductService } from '../../data/ProductService';

export default function CheckboxRowSelectionDemo() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(null);
  //   const [rowClick, setRowClick] = useState(true);

  useEffect(() => {
    setProducts(ProductService);
  }, []);

  const imageBodyTemplate = (product) => {
    return (
      <img
        src={product.image}
        alt={product.name}
        className="shadow-2 border-round w-12"
      />
    );
  };

  return (
    <div className="card">
      {/* <div className="justify-content-center align-items-center mb-4 flex gap-2">
        <InputSwitch
          inputId="input-rowclick"
          checked={rowClick}
          onChange={(e) => setRowClick(e.value)}
        />
        <label htmlFor="input-rowclick">Row Click</label>
      </div> */}
      <DataTable
        value={products}
        // selectionMode={rowClick ? null : 'checkbox'}
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id"
        tableStyle={{ minWidth: '50rem' }}
        size='small'
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: '3rem' }}
        ></Column>
        <Column header="icon" body={imageBodyTemplate}></Column>
        <Column field="name" header="Name"></Column>
        <Column field="inventoryStatus" header="Status"></Column>
        <Column field="address" header="Address"></Column>
        <Column field="quantity" header="Offer"></Column>
        <Column field="quantity" header="Can Add Category"></Column>
        <Column field="quantity" header="Commission Percentage"></Column>
        <Column field="quantity" header="Product"></Column>
        <Column field="quantity" header="Booking"></Column>
        <Column field="quantity" header="Active Booking"></Column>
        <Column field="quantity" header="Action"></Column>
      </DataTable>
    </div>
  );
}
