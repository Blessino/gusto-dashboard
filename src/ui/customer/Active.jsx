import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../../data/ProductService'; // Import the provided JSON data
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';

export default function RowExpansionDemo() {
  const [products, setProducts] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);

  // const toast = useRef(null);

  useEffect(() => {
    setProducts(ProductService);
  }, []);

  // const onRowExpand = (event) => {
  //   toast.current.show({
  //     severity: 'info',
  //     summary: 'Product Expanded',
  //     detail: event.data.name,
  //     life: 3000,
  //   });
  // };

  // const onRowCollapse = (event) => {
  //   toast.current.show({
  //     severity: 'success',
  //     summary: 'Product Collapsed',
  //     detail: event.data.name,
  //     life: 3000,
  //   });
  // };

  // const expandAll = () => {
  //   let _expandedRows = {};
  //   products.forEach((p) => (_expandedRows[`${p.id}`] = true));

  //   setExpandedRows(_expandedRows);
  // };

  // const collapseAll = () => {
  //   setExpandedRows(null);
  // };

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const priceBodyTemplate = (products) => {
    return formatCurrency(products.price);
  };

  const allowExpansion = (products) => {
    return products.length > 0;
  };

  const expand = () => {
    if (allowExpansion) {
      // products.forEach((p) => (_expandedRows[`${p.id}`] = true));
      console.log();

      setExpandedRows(products.id);
    } else {
      setExpandedRows(null);
    }
  };

  const header = (
    <div className="justify-content-end expand flex flex-wrap gap-2">
      <Button
        icon={expandedRows }
        // onClick={`${icon ? 'pi pi-plus' : 'pi pi-minus'}`}
      />
      {/* <Button icon="pi pi-minus" onClick={collapseAll} text /> */}
    </div>
  );

  const rowExpansionTemplate = (rowData) => {
    console.log(rowData);
    return (
      <div className="p-3">
        <h5>Details for {rowData.name}</h5>
        <div>
          <p>
            <strong>Price:</strong> {formatCurrency(rowData.price)}
          </p>
          <p>
            <strong>Category:</strong> {rowData.category}
          </p>
          <p>
            <strong>Description:</strong> {rowData.description}
          </p>
          <p>
            <strong>Quantity:</strong> {rowData.quantity}
          </p>
          <p>
            <strong>Address:</strong> {rowData.address}
          </p>
          <p>
            <strong>Inventory Status:</strong> {rowData.inventoryStatus}
          </p>
          <p>
            <strong>Rating:</strong> {rowData.rating} Stars
          </p>
          <p>
            <strong>Date:</strong> {rowData.date}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      {/* <Toast ref={toast} /> */}
      <DataTable
        value={products}
        expandedRows={expandedRows} // Control the expanded rows using state
        onRowToggle={(e) => setExpandedRows(e.value)} // Update state when row expands or collapses
        // onRowExpand={onRowExpand}
        // onRowCollapse={onRowCollapse}
        // rowExpansionTemplate={rowExpansionTemplate}
        dataKey="id"
        tableStyle={{ minWidth: '60rem' }}
        size="small"
      >
        <Column
          
          expander={allowExpansion}
          body={header}
          style={{ width: '5rem' }}
        />
        <Column field="name" header="Name" />
        <Column
          header="Image"
          body={(product) => (
            <img src={product.image} alt={product.name} width="64px" />
          )}
        />
        <Column field="price" header="Price" body={priceBodyTemplate} />
        <Column field="category" header="Category" />
        <Column
          field="rating"
          header="Rating"
          body={(product) => (
            <Rating value={product.rating} readOnly cancel={false} />
          )}
        />
        <Column
          field="inventoryStatus"
          header="Status"
          body={(product) => (
            <Tag value={product.inventoryStatus} severity="success" />
          )}
        />
      </DataTable>
    </div>
  );
}
