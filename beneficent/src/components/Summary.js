import React from 'react';

const Summary = () => {
    return (
        <section className="first-step-section container">
            <div className="step-content">
                <div className="summary-title content">Podsumowanie Twojej darowizny</div>
                <div className="sum-give content">Oddajesz:</div>
                <div className="icon-sum content">
                    <div className="icon-pic content"></div>
                    <div className="icon-info content">4 worki, ubrania w dobrym stanie, dzieciom</div>
                </div>
                <div className="icon-sum content">
                    <div className="icon-pic-sec content"></div>
                    <div className="icon-info-loc content">dla lokalizacji: Warszawa</div>
                </div>
                <div className="summary-div content">
                    <div className="sum-left content">
                        <div className="sum-info-title">Adres odbioru: </div>
                        <div className="all-sum-div">
                            <div className="sum-div-left">
                                <div className="sum-info">Ulica: </div>
                                <div className="sum-info">Miasto: </div>
                                <div className="sum-info">Kod pocztowy: </div>
                                <div className="sum-info">Numer telefonu: </div>
                            </div>
                            <div className="sum-div-right">
                                <div className="sum-info-get">Lubelska 77</div>
                                <div className="sum-info-get">Rzeszów</div>
                                <div className="sum-info-get">35-233</div>
                                <div className="sum-info-get">55555555</div>
                            </div>
                        </div>
                    </div>
                    <div className="sum-right content">
                        <div className="sum-info-title">Termin odbioru: </div>
                        <div className="all-sum-div">
                            <div className="sum-div-left">
                                <div className="sum-info">Data: </div>
                                <div className="sum-info">Godzina: </div>
                                <div className="sum-info">Uwagi dla kuerira: </div>
                            </div>
                            <div className="sum-div-right">
                                <div className="sum-info-get">23.10.2019</div>
                                <div className="sum-info-get">12.30</div>
                                <div className="sum-info-get">djdjdjdjdj nfnfnfnn ldldldldl</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="submit-div-content content">
                        <div className="submit-btn-div">
                            <button className="submit-btn third-step-btn" type="submit">Wstecz</button>
                            <button className="submit-btn third-step-btn submit-btn-sec" type="submit">Potwierdzam</button>
                        </div>
                </div>

            </div>

        </section>
    )
}

export default Summary;