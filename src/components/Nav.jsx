import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar.jsx";
import logo from "../assets/logo.png"

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <Link to='/'>
        <span className="navbar-brand">
        <img id="logoHenry" src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            Henry - Weather App
        </span>
        </Link>
        <Link to='/about'>
            <span>About</span>
        </Link>
        <Link to='/ciudad'>
            <span>Ciudad</span>
        </Link>
          
        <SearchBar onSearch={onSearch}
        />
    </nav>
);
};

export default Nav;