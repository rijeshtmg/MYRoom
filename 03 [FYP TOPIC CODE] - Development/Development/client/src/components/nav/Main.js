import { NavLink } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';

export default function Main() {
    const location = useLocation();
    if (location.pathname === '/login') {
        return null;
    }
    return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="/"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <div className="justify-content-end  w-50"> 
        <ul className="nav justify-content-between">
               
                <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                </NavLink>
           
             
                <NavLink className="nav-link " to="/register">
                    Register
                </NavLink>
          

                <NavLink className="nav-link " to="/login">
                    Login
                </NavLink>
      
  
                <NavLink className="nav-link disabled " to="/">Disabled</NavLink>

                <div className="dropdown">
                <li
                    className="nav-link pointer dropdown-toggle"
                    data-bs-toggle="dropdown"
                >
                    User
             
                <ul className="dropdown-menu">
                    <li><NavLink className="nav-link" to='/dashboard'>Dashboard</NavLink>
                    </li>
                    <li>
                    <a className="nav-link" href="/">Logout</a>
                    </li>
                </ul>
                </li>
                </div>
         </ul>
    </div>
   
    </div>
  </div>
</nav>




        // <div className="d-flex justify-content-end">
        //     <ul className="nav justify-content-between w-50">
        //         <li className="nav-item">
        //         <NavLink className="nav-link" aria-current="page" to="/">
        //             Home
        //         </NavLink>
        //         </li>
        //         <li className="nav-item">
        //         <NavLink className="nav-link " to="/register">
        //             Register
        //         </NavLink>
        //         </li>
        //         <li className="nav-item">
        //         <NavLink className="nav-link " to="/login">
        //             Login
        //         </NavLink>
        //         </li>
        //         <li className="nav-item">
        //         <NavLink className="nav-link disabled " to="/">Disabled</NavLink>
        //         </li>
            //     <div className="dropdown">
            //     <li>
            //     <NavLink
            //         className="nav-link pointer dropdown-toggle"
            //         data-bs-toggle="dropdown"
            //     >
            //         User
            //     </NavLink>
            //     <ul className="dropdown-menu">
            //         <li>
            //         <NavLink className="nav-link" to={`/dashboard`}>
            //             Dashboard
            //         </NavLink>
            //         </li>
            //         <li>
            //         <NavLink className="nav-link">Logout</NavLink>
            //         </li>
            //     </ul>
            //     </li>
            //     </div>
            //     </ul>
            //  </div>
     
        );
        }
