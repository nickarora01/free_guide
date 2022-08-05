import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <>
            <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="container">
            <a className="navbar-brand" href="https://www.freeguides.com/home"><img src={require('../images/logo2.png')}/>FreeGuides</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/experience"> Experience </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.freeguides.com/organisationguide">Partner With Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Become A Guide</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link signup_btn" href="https://app.freeguides.com/signup"><img src={require('../images/user-black.png')}/> Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</header>
        </>
    )
}
export default Header;