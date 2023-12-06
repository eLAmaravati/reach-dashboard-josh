import { Outlet, Link, NavLink } from 'react-router-dom';
import { TogaIcon, PeopleOutline, LogoIcon } from "../components/Icon";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem } from 'react-bootstrap';
export default function Root() {
  return (
    <>
      <nav id="sidenav" className="sidenav">
        <div className="sidenav__logo">
            <h1 className="site__logo"><a href="/">F.</a></h1>
        </div>

        <ul className="nav nav-pills flex-column mb-auto sidenav__menu">
          <li className='nav-item'>
            <Link to={`/`} className='nav-link active'><span className="menu__icon"><TogaIcon /></span> Dashboard</Link>
          </li>
          <li className='nav-item'>
            <Link to={`courses`} className='nav-link active'><span className="menu__icon"><TogaIcon /></span> Courses</Link>
          </li>
          <li className='nav-item'>
            <Link to={`profile`} className='nav-link active'><span className="menu__icon"><TogaIcon /></span> Profile</Link>
          </li>
          <li className='nav-item'>
            <Link to={`courses`} className='nav-link active'><span className="menu__icon"><TogaIcon /></span> Courses</Link>
          </li>
          <li className='nav-item'>
            <Link to={`courses`} className='nav-link active'><span className="menu__icon"><TogaIcon /></span> Courses</Link>
          </li>
        </ul>

      </nav>
      <div id="content" className='content'>
        <Outlet />
      </div>
    </>
  );
}