import { useState } from 'react';
export default function Settings() {
  const [key, setKey] = useState('settings');

  return (
    <>
    <div id="settings">
      <h1 className="section__title">Ini adalah halaman settings</h1>

      <p>Halaman progress belajar</p>
    </div>
    </>
  );
}