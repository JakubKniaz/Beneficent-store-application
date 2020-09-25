import React from 'react';

const SecondStepSection = () => {
    return (
        <section className="first-step-section container">
            <div className="attention-div">
                <div className="attention-content content"><div className="important-text">Ważne!</div><div className="attention-text">Wszystkie rzeczy do oddania
                 zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</div>
                </div>
            </div>
            <div className="step-content">
                    <div className="step-number content">Krok 2/4</div>
                    <div className="checkbox-one content"><div className="step-info">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</div>
                        <form className="bag-form">
                            <label id="baggy">Liczba 60l worków: </label>
                            <select name="" id="bag-quantity" onChange="" value="">
                                <option selected value="wybierz"> -- wybierz -- </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <div className="submit-div-content content">
                                <div className="submit-btn-div">
                                    <button className="submit-btn" type="submit">Wstecz</button>
                                    <button className="submit-btn submit-btn-sec" type="submit">Dalej</button>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>

        </section>
    )
}

export default SecondStepSection;