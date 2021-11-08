import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import logo from '../logo.svg';


const Navigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
            <img src={logo} alt='logo'/>
          <ul>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/lazy1">Lazy 1</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/lazy2">Lazy 2</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/lazy3">Lazy 3</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/lazy1" element={<LazyPage1/>}>
            {/* <About /> */}
          </Route>
          <Route path="/lazy2" element={<LazyPage2/>}>
            {/* <Users /> */}
          </Route>
          <Route path="/lazy3" element={<LazyPage3/>}>
            {/* <Home /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default Navigation;