import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

export default function BasicDemo() {
  const [value, setValue] = useState('');

  return (
    <div className="card justify-content-center flex h-10 border-[1.5px] border-solid border-gray-300">
      <InputText
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search.."
        className="p-1"
      />
    </div>
  );
}
