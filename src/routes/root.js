import { Outlet, Link } from 'react-router-dom';
import React, { useState } from 'react';
import userImageLarge from '../icon/user-image-400.webp';
import { Image } from 'react-bootstrap';
import Stack  from 'react-bootstrap/Stack';

export default function Root() {
  // Untuk menambahkan class active pada menu
  const [activeItem, setActiveItem] = useState('Dashboard');
  const menuItems = [
    { 
      id: 1,
      name: 'Dashboard', 
      path: '/', 
      icon: 'home' 
    },
    { 
      id: 2,
      name: 'Courses', 
      path: '/courses', 
      icon: 'graduation-cap' 
    },
    { 
      id: 3,
      name: 'Progress', 
      path: '/progress', 
      icon: 'chart-simple' 
    },
    { 
      id: 4,
      name: 'Profile', 
      path: '/profile', 
      icon: 'user' 
    },
    { 
      id: 5,
      name: 'Settings', 
      path: '/settings', 
      icon: 'settings' 
    },
    
  ];

  return (
    <>
      <Stack direction='horizontal' gap={4}>
        <nav id="sidenav" className="sidenav col-4">
        <div className="sidenav__user">
          <p className="sidenav__logo"><span><i class="fi fi-sr-message-code"></i></span> React Dashboard</p>
            {/* <Image src={userImageLarge} roundedCircle thumbnail fluid alt="User image" height='70' width='70'/>
            <h2 className="sidenav__user-name">Bagaspati Virendra</h2> */}
        </div>

        <ul className="nav flex-column mb-auto menu">
          {menuItems.map((item) => (
              <li
                key={item.id}
                className={`nav-item menu__item ${item.id === activeItem ? 'menu--active' : ''}`}
                onClick={() => setActiveItem(item.id)}
              >
                <Link
                  to={item.path}
                  className="menu__link"
                  aria-current={item.id === activeItem ? 'page' : undefined}
                >
                  <span className="menu__icon">
                    <i className={`fi fi-${item.id === activeItem ? 'sr' : 'rr'}-${item.icon}`}></i>
                  </span>
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>

      </nav>
      <div id="content" className='content'>
        <Outlet />
      </div>
      </Stack>
    </>
  );
}