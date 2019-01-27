import React from 'react'
import { UnitSelector } from '../components/settings/UnitSelector';
import { ManagezipCodes } from '../components/settings/ManageZipCodes';

export const Settings = () => {
  return (
    <div className="page">
      <div className="container">
        <h2>Settings</h2>
        <section>
          <UnitSelector />
        </section>
        <hr />
        <section>
          <ManagezipCodes />
        </section>
      </div>
    </div>
  )
}
