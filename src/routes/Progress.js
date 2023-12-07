import { useState } from 'react';
export default function Progress() {
  const [key, setKey] = useState('progress');

  return (
    <>
    <div id="progress">
      <h1 className="section__title">My Learning Progress</h1>

      <p>Halaman progress belajar</p>
    </div>
    </>
  );
}