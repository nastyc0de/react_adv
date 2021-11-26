import {BrowserRouter as Router, Routes, Route, Navigate, NavLink} from "react-router-dom";
import logo from '../logo.svg';
import { routes } from '../01-lazyload/router/routes';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';


const Navigation = () => {

  return (
    <Router>
      <div className='main-layout'>
        <nav>
            <img src={logo} alt='logo'/>
          <ul>
            {
              routes.map(({path, name}, index) =>(
                <li key={index}>
                  <NavLink key={index} className={({ isActive }) => (isActive ? "nav-active" : "")} to={path}>{name}</NavLink>
                </li>
              ))
            }
            
          </ul>
        </nav>
        <Routes>
          <Route path="/page1" element={<LazyPage1/>}/>
          <Route path="/page2" element={<LazyPage2/>}/>
          <Route path="/page3" element={<LazyPage3/>}/>
          <Route path='*' element={<Navigate replace to={routes[0].path} />} />
        </Routes>
        {/* <Routes>
          <Route path="/" element={<ShoppingPage/>}/>
          <Route path='*' element={<Navigate replace to={routes[0].path} />} />
        </Routes> */}
      </div>
    </Router>
  );
}
export default Navigation;