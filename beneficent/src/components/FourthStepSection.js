import React from 'react';

const FourthStepSection = () => {
    return (
        <header className="header container">
            <div className="left-img">
            </div>
            <div className="header-box">
                <div className="header-title">
                    Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM
                </div>
                <div className="pattern-div"><div className="pattern-div-img"></div></div>
                <div className="four-steps-text">Wystarczą cztery proste kroki:</div>
                <div className="four-steps-content">
                    <div className="step-column">
                        <div className="step-div">
                            <div className="num-step">1</div>
                            <div className="describe-step">Wybierz rzeczy</div>
                        </div>
                    </div>
                    <div className="step-column">
                        <div className="step-div">
                            <div className="num-step">2</div>
                            <div className="describe-step">Spakuj je w worki</div>
                        </div>
                    </div>
                    <div className="step-column">
                        <div className="step-div">
                            <div className="num-step">3</div>
                            <div className="describe-step">Wybierz fundację</div>
                        </div>
                    </div>
                    <div className="step-column">
                        <div className="step-div">
                            <div className="num-step">4</div>
                            <div className="describe-step">Zamów kuriera</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default FourthStepSection;