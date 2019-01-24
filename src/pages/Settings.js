import React from 'react'
import { UnitSelector } from '../components/settings/UnitSelector';

export default function Settings() {
  return (
    <div className="page">
      <div className="container">
        <h1>Settings</h1>
        <section>
          <UnitSelector />
        </section>
        <hr />
      </div>
    </div>
  )
}
