import React from 'react';

const FourStepSection = () => {
    return (
        <section className="first-step-section container">
            <div className="attention-div">
                <div className="attention-content content"><div className="important-text">Ważne!</div><div className="attention-text">Podaj
                     adres oraz termin odbioru rzeczy.</div>
                </div>
            </div>
            <div className="step-content">
                <div className="step-number content">Krok 4/4</div>
                <div className="checkbox-one content"><div className="step-info">Podaj adres oraz termin odbioru rzecz przez kuriera</div>
                <form className="data-form content">
                    <div className="data-form-content">
                        <div className="addres-form-div"><div className="address-text">Adres odbioru:</div>
                            <label id="street">Ulica
                                <input type="text" name="street" className="street-input" value="" onChange=""/>
                            </label>
                            <label id="city">Miasto
                                <input type="text" name="city" className="city-input" value="" onChange=""/>
                            </label>
                            <label id="code">Kod pocztowy
                                <input type="text" name="code" className="code-input" value="" onChange=""/>
                            </label>
                            <label id="phone">Numer telefonu
                                <input type="text" name="phone" className="phone-input" value="" onChange=""/>
                            </label>

                        </div>
                        <div className="time-form-div"><div className="time-text">Termin odbioru:</div>
                            <label id="date">Data
                                <input type="text" name="date" className="date-input" value="" onChange=""/>
                            </label>
                            <label id="time">Godzina
                                <input type="text" name="time" className="time-input" value="" onChange=""/>
                            </label>
                            <label id="comment">Uwagi dla kuriera
                                <input type="text" name="comment" className="comment-input" value="" onChange=""/>
                            </label>
                        </div>
                    </div>
                    <div className="submit-div-content content">
                        <div className="submit-btn-div">
                            <button className="submit-btn third-step-btn" type="submit">Wstecz</button>
                            <button className="submit-btn submit-btn-sec third-step-btn" type="submit">Dalej</button>
                        </div>
                    </div>
                </form>

                </div>
            </div>

        </section>
    )
}

export default FourStepSection;