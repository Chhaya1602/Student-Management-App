import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fs-4" to="/home">Welcome</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold fs-4" aria-current="page" to="/home">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold fs-4" to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item p-0 me-3">
                                <NavLink className="nav-link fw-bold fs-4" to="/register">REGISTER</NavLink>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink className="nav-link fw-bold fs-4 me-2" to="/admin">ADMIN</NavLink>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink className="nav-link fw-bold fs-4 me-2" to="/studentlogin">STUDENT LOGIN</NavLink>
                            </li>
                            {/* <li className="nav-item text-dark p-0">
                                <NavLink className="nav-link  fw-bold fs-4" to="/show">SHOW</NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar
