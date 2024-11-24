import React from 'react';
import { Button } from 'primereact/button';

export default function BasicDemo() {
  return (
    <div className="card justify-content-center flex">
      <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
    </div>
  );
}
