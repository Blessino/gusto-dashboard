import React, { useState } from 'react';
import ProfileForm from '../ui/ProfileForm';

function Profile() {
 
  return (
    <div className="w-[75%] pl-8 pt-10">
      <div className="card">
        <h1>PROFILE</h1>

        <section className="pt-10">
          <div className="flex items-center justify-between">
            <div className="leading-8">
              <h2>Organization details</h2>
              <p className="text-sm text-gray-500">
                View and edit your {`organization's`} profile details
              </p>
            </div>
            <div className="h-6 w-20 rounded-lg border-2 border-blue-500 text-center text-sm text-blue-500">
              <button> Update </button>
            </div>
          </div>
        </section>

        <ProfileForm />
      </div>
    </div>
  );
}

export default Profile;
