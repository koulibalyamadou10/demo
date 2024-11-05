import "./assets/header.css"
import { Link } from 'react-router-dom';

export function Header() {

    return(
        <div>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div
                    className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                    <a
                        href="index.html"
                        className="logo d-flex align-items-center me-auto me-xl-0"
                    >
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.png" alt=""> */}
                        <h1 className="sitename">Mercure</h1>
                    </a>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li>
                                <Link to="/" className="active">Acceuil</Link>
                            </li>
                            <li>
                                <Link to="/about">A propos</Link>
                            </li>
                            <li>
                                <Link to="/features">Facultés et Départements</Link>
                            </li>
                            <li>
                                <Link to="/services">Programmes et Formations</Link>
                            </li>
                            <li>
                                <Link to="/pricing">Admissions</Link>
                            </li>
                            <li>
                                <Link to="/contact">Vie Étudiante</Link>
                            </li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"/>
                    </nav>
                    <a className="btn-getstarted" href="index.html#about">Commencer</a>
                </div>
            </header>
        </div>
    );
}