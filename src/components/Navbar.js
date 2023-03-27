// import { useNavigate } from 'react-router-dom';

// function Navbar() {
//   const navigate = useNavigate();

//   function handleLoginClick() {
//     navigate('/login');
//   }

//   return (
//     <nav>
//       <ul>
//         <li>
//           <button onClick={handleLoginClick}>Login</button>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import { NavLink } from 'react-router-dom';
import logo from "../Images/moviegeek.png";
import './Navbar.css'
import TextField from "@mui/material/TextField";

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li className='navbar-left'>
          <img src={logo} />
        </li>
        
        <li className='navbar-left'>
        <NavLink to="/home" className="active hover">
            MOVIEGEEKS
          </NavLink>
        </li>

        <li className='navbar-right'>
          GENRES
        </li>

        <li className='navbar-right'>
          FILMS
        </li>

        <li className='navbar-right'>
          LISTS
        </li>

        <li className='navbar-right'>
          GEEKS
        </li>
        <li className='navbar-right'>
          <input placeholder='search'/>
        </li>
    
        <li className='navbar-right'>
          <NavLink to="/login" className="active hover">
            LOGIN
          </NavLink>
        </li>

        <li className='navbar-right'>
        <NavLink to="/signup" className="active hover">
            SIGN UP
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
