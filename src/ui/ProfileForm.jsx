import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { cities } from '../data/VendorLIst';
import FileUploder from './FileUploder';


function ProfileForm() {
  const [value, setValue] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div>
      <section className="pt-4">
        <form>
          <div>
            <FileUploder />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <InputText
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-8 rounded-sm border-[1.5px] border-gray-400 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Email</label>
              <InputText
                type="email"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-8 rounded-sm border-[1.5px] border-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Contect</label>
              <InputText
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-8 rounded-sm border-[1.5px] border-gray-400"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Company Address</label>
              <InputText
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-8 rounded-sm border-[1.5px] border-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Conpany name</label>
              <InputText
                type="email"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-8 rounded-sm border-[1.5px] border-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Country</label>
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="country"
                className="md:w-14rem w-44 rounded-md border-[1.5px] border-gray-400 text-center"
                checkmark={true}
                highlightOnSelect={false}
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ProfileForm;
