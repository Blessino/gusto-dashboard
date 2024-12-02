import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../../../data/ProductService';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';

export default function RowExpansionDemo() {
  const [products, setProducts] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const toast = useRef(null);

  useEffect(() => {
    
      setProducts(ProductService)
    
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onRowExpand = (event) => {
    toast.current.show({
      severity: 'info',
      summary: 'Product Expanded',
      detail: event.data.name,
      life: 3000,
    });
  };

  const onRowCollapse = (event) => {
    toast.current.show({
      severity: 'success',
      summary: 'Product Collapsed',
      detail: event.data.name,
      life: 3000,
    });
  };

  const expandAll = () => {
    let _expandedRows = {};

    products.forEach((p) => (_expandedRows[`${p.id}`] = true));

    setExpandedRows(_expandedRows);
  };

  const collapseAll = () => {
    setExpandedRows(null);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const amountBodyTemplate = (product) => {
    return formatCurrency(product.amount);
  };

  const statusOrderBodyTemplate = (product) => {
    return (
      <Tag
        value={product.status.toLowerCase()}
        severity={getOrderSeverity(product)}
      ></Tag>
    );
  };

  const searchBodyTemplate = () => {
    return <Button icon="pi pi-search" />;
  };

  const imageBodyTemplate = (product) => {
    return (
      <img
        src={`${product.image}`}
        alt={product.name}
        width="64px"
        className="shadow-4"
      />
    );
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.price);
  };

  const ratingBodyTemplate = (product) => {
    return <Rating value={product.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (product) => {
    return (
      <Tag
        value={product.inventoryStatus}
        severity={getProductSeverity(product)}
      ></Tag>
    );
  };

  const getProductSeverity = (product) => {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

  const getOrderSeverity = (order) => {
    switch (order.status) {
      case 'DELIVERED':
        return 'success';

      case 'CANCELLED':
        return 'danger';

      case 'PENDING':
        return 'warning';

      case 'RETURNED':
        return 'info';

      default:
        return null;
    }
  };

  const allowExpansion = (product) => {
    return product.length > 0;
  };

  const rowExpansionTemplate = (data) => {
    return (
      <div className="p-3">
        <h5>Orders for {data.name}</h5>
        <DataTable value={data.orders}>
          <Column field="id" header="Id" ></Column>
          <Column field="customer" header="Customer" ></Column>
          <Column field="date" header="Date" ></Column>
          <Column
            field="amount"
            header="Amount"
            body={amountBodyTemplate}
            sortable
          ></Column>
          <Column
            field="status"
            header="Status"
            body={statusOrderBodyTemplate}
            sortable
          ></Column>
          <Column
            headerStyle={{ width: '4rem' }}
            body={searchBodyTemplate}
          ></Column>
        </DataTable>
      </div>
    );
  };

  const header = (
    <div className="justify-content-end flex flex-wrap gap-2">
      <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} text />
      <Button
        icon="pi pi-minus"
        label="Collapse All"
        onClick={collapseAll}
        text
      />
    </div>
  );

  return (
    <div className="card">
      <Toast ref={toast} />
      <DataTable
        value={products}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        onRowExpand={onRowExpand}
        onRowCollapse={onRowCollapse}
        rowExpansionTemplate={rowExpansionTemplate}
        dataKey="id"
        header={header}
        tableStyle={{ minWidth: '60rem' }}
      >
        <Column expander={allowExpansion} style={{ width: '5rem' }} />
        <Column field="name" header="Name"  />
        <Column header="Image" body={imageBodyTemplate} />
        <Column
          field="price"
          header="Price"
          
          body={priceBodyTemplate}
        />
        <Column field="category" header="Category"  />
        <Column
          field="rating"
          header="Reviews"
          
          body={ratingBodyTemplate}
        />
        <Column
          field="inventoryStatus"
          header="Status"
          
          body={statusBodyTemplate}
        />
      </DataTable>
    </div>
  );
}
