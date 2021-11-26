import {BrowserRouter as Router, Routes, Route, Navigate, NavLink} from "react-router-dom";
import logo from '../logo.svg';
import { routes } from '../01-lazyload/router/routes';
import { Suspense } from "react";

const Navigation = () => {

  return (
    <Suspense fallback={null}>
      <Router>
        <div className='main-layout'>
          <nav>
              <img src={logo} alt='logo'/>
            <ul>
              {
                routes.map(({to, name}, index) =>(
                  <li key={index}>
                    <NavLink key={index} className={({ isActive }) => (isActive ? "nav-active" : "")} to={to}>{name}</NavLink>
                  </li>
                ))
              }
              
            </ul>
          </nav>
          <Routes>
            {
              routes.map(({path, Component}, index )=> (
                <Route
                  key={index} 
                  path={path} 
                  element={<Component/>}
                  />
              ))
            }
            <Route path='*/' element={<Navigate replace to={routes[0].to} />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}
export default Navigation;