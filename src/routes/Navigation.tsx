import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import logo from '../logo.svg'

const Navigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
            <img src={logo} alt='logo'/>
          <ul>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<h1>About</h1>}>
            {/* <About /> */}
          </Route>
          <Route path="/users" element={<h1>Users</h1>}>
            {/* <Users /> */}
          </Route>
          <Route path="/" element={<h1>Home</h1>}>
            {/* <Home /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default Navigation;