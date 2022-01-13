import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import { FormikBasicPage, Register, FormikAbstract, FormikComponents, FormikYupPage } from "../03-forms/pages";
import logo from '../logo.svg'

const Navigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
            <img src={logo} alt='logo'/>
          <ul>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/register">Register Page</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/formik-basic">Formik Basic</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/formik-yup">Formik Yup</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/formik-components">Formik Components</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/formik-abstract">Formik Abstract</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register/>}>
            {/* <About /> */}
          </Route>
          <Route path="/formik-basic" element={<FormikBasicPage/>}>
            {/* <Users /> */}
          </Route>
          <Route path="/" element={<h1>Home</h1>}>
            {/* <Home /> */}
          </Route>
          <Route path="/formik-yup" element={<FormikYupPage/>}>
            {/* <Home /> */}
          </Route>
          <Route path="/formik-components" element={<FormikComponents/>}/>
          <Route path="/formik-abstract" element={<FormikAbstract/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default Navigation;