import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const NavigationBar = () => {
    return (
        <header className="container header">
            <div className="home-img">
            </div>
            <div>
                <div className="log-nav">
                    <nav>
                        <ul>
                        <li className="nav-item">
                                <NavLink to="/login"><a className="nav-link-log">Zaloguj</a></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register"><a className="nav-link-log">Załóż konto</a></NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="navigation">
                    <nav>
                        <ul>
                            <li className="nav-item">
                                <Link to="/"><a className="nav-link">Start</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="whatsUp"><a className="nav-link">O co chodzi?</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="aboutUs"><a className="nav-link">O nas</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to=""><a className="nav-link">Fundacja i organizacje</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="kontakt"><a className="nav-link">Kontakt</a></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header-box">
                    <div className="header-title">
                        Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce!
                    </div>
                    <div className="pattern-div"><div className="pattern-div-img"></div></div>
                    <div className="header-form">
                        <NavLink to="/login"><div className="form-box"><div className="form-box-text">Oddaj<br/>rzeczy</div></div></NavLink>
                        <NavLink to="/login"><div className="form-box"><div className="form-box-text">Zorganizuj<br/>zbiórkę</div></div></NavLink>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavigationBar;