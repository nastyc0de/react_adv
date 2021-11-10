import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";
import logo from '../logo.svg';
import { routes } from './routes';


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
          <Route path="/" element={<ShoppingPage/>}/>
          <Route path='*' element={<Navigate replace to={routes[0].path} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default Navigation;