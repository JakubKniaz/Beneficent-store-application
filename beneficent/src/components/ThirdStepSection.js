import React from 'react';

const ThirdStepSection = () => {
    return (
        <section className="first-step-section container">
            <div className="attention-div">
                <div className="attention-content content"><div className="important-text">Ważne!</div><div className="attention-text">Jeśli wiesz komu chcesz pomóc,
                    możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</div>
                </div>
            </div>
            <div className="step-content">
                <div className="step-number content">Krok 3/4</div>
                    <div className="checkbox-one content"><div className="step-info">Lokalizacja:</div>
                    <form className="bag-form content">
                        <select name="" id="location-form" onChange="" value="">
                            <option selected value="wybierz"> -- wybierz -- </option>
                            <option value="Poznań">Poznań</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Kraków">Kraków</option>
                            <option value="Wrocław">Wrocław</option>
                            <option value="Rzeszów">Rzeszów</option>
                        </select>
                        <div className="help-title">Komu chcesz pomóc?</div>
                        <div className="buttons-div">
                            <button className="choose-btn">dzieciom</button>
                            <button className="choose-btn">samotnym matkom</button>
                            <button className="choose-btn">bezdomnym</button>
                            <button className="choose-btn">niepełnosprawnym</button>
                            <button className="choose-btn">osobom starszym</button>
                        </div>
                        <div className="textarea-div">
                            <label className="textarea-info">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                            <textarea className="textarea-form"/>
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

export default ThirdStepSection;