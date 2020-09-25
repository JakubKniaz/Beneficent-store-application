import React from 'react';
import {NavLink} from 'react-router-dom';

const Logout = () => {
    return (
        <section className="logout-section container">
            <div className="logout-content">
                <div className="logout-title">Wylogowanie nastąpiło<br/>pomyślnie!</div>
                <div className="seventh-pattern-div">
                    <div className="seventh-pattern"></div>
                </div>
                <NavLink to="/"><button className="page-btn">Strona główna</button></NavLink>
           </div>
           
        </section>
    )
}

export default Logout;