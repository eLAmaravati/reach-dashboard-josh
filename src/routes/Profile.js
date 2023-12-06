import { useState } from 'react';
export default function Profile() {
  const [key, setKey] = useState('profile');

  return (
    <>
    <div id="profile">
      <h1 className="section__title">My Profile</h1>

      <p>Ini halaman profile</p>
    </div>
    </>
  );
}