import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import SignOutButton from './SignOut';

const NavigationBar = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth/> : <NavigationNonAuth/>}</div>
)
const NavigationAuth = () => {
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
                            <li className="nav-item">
                                <SignOutButton/>
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
                                <Link to="organizations"><a className="nav-link">Fundacja i organizacje</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact"><a className="nav-link">Kontakt</a></Link>
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
                        <NavLink to="/login"><button className="main-btn">Oddaj<br/>rzeczy</button></NavLink>
                        <NavLink to="/login"><button className="main-btn">Zorganizuj<br/>zbiórkę</button></NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

const NavigationNonAuth = () => {
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
                                <Link to="organizations"><a className="nav-link">Fundacja i organizacje</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact"><a className="nav-link">Kontakt</a></Link>
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
                        <NavLink to="/login"><button className="main-btn">Oddaj<br/>rzeczy</button></NavLink>
                        <NavLink to="/login"><button className="main-btn">Zorganizuj<br/>zbiórkę</button></NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default NavigationBar;