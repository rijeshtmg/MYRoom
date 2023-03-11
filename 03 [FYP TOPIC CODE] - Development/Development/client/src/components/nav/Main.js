import { NavLink } from "react-router-dom";

export default function Main() {
    return (
//   <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="nav justify-content-between">
//                 <li className="nav-item">
//                 <NavLink className="nav-link" aria-current="page" to="/">
//                     Home
//                 </NavLink>
//                 </li>
//                 <li className="nav-item">
//                 <NavLink className="nav-link " to="/register">
//                     Register
//                 </NavLink>
//                 </li>
//                 <li className="nav-item">
//                 <NavLink className="nav-link " to="/login">
//                     Login
//                 </NavLink>
//                 </li>
//                 <li className="nav-item">
//                 <NavLink className="nav-link disabled " to="/">Disabled</NavLink>
//                 </li>
//             </ul>
//     </div>
//   </div>
// </nav>




        <div className="d-flex justify-content-end">
            <ul className="nav justify-content-between w-50">
                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link " to="/register">
                    Register
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link " to="/login">
                    Login
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link disabled " to="/">Disabled</NavLink>
                </li>
                <div className="dropdown">
                <li>
                <NavLink
                    className="nav-link pointer dropdown-toggle"
                    data-bs-toggle="dropdown"
                >
                    User
                </NavLink>
                <ul className="dropdown-menu">
                    <li>
                    <NavLink className="nav-link" to={`/dashboard`}>
                        Dashboard
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className="nav-link">Logout</NavLink>
                    </li>
                </ul>
                </li>
                </div>
                </ul>
             </div>
     
        );
        }
