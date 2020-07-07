import React from 'react';
import {NavLink} from 'react-router-dom';

const FourColumns = () => {
    return (
        <section id="whatsUp" className="third-section container">
            <div className="third-section-main">
                <div className="third-section-title">Wystarczą 4 proste kroki</div>
                <div className="third-pattern-div">
                    <div className="third-pattern"></div>
                </div>
            </div>
            <div className="four-steps">
                <div className="step-box">
                    <div className="icon-first"></div>
                    <div className="title-step">Wybierz rzeczy</div>
                    <div className="info-step">ubrania, zabawki,<br/>sprzęt i inne</div>
                </div>
                <div className="step-box">
                    <div className="icon-second"></div>
                    <div className="title-step">Spakuj je</div>
                    <div className="info-step">skorzystaj<br/>z worków na śmieci</div>
                </div>
                <div className="step-box">
                    <div className="icon-third"></div>
                    <div className="title-step">Zdecyduj komu chcesz pomóc</div>
                    <div className="info-step">wybierz zaufane<br/>miejsce</div>
                </div>
                <div className="step-box">
                    <div className="icon-fourth"></div>
                    <div className="title-step">Zamów kuriera</div>
                    <div className="info-step">kurier przyjedzie<br/>w dogodnym terminie</div>
                </div>

            </div>
            <div className="third-section-btn">
            <NavLink to="/login"><button className="main-btn">Oddaj<br/>rzeczy</button></NavLink>
            </div>

        </section>
    )
}

export default FourColumns;