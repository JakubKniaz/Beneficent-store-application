import React from 'react';

const FirstStepSection = () => {
    return (
        <section className="step-section container">
            <div className="attention-div">
                <div className="attention-content content"><div className="important-text">Ważne!</div><div className="attention-text">Uzupełnij szczegóły 
                dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</div>
                </div>
            </div>
            <div className="step-content">
                    <div className="step-number content">Krok 1/4</div>
                    <div className="checkbox-one content"><div className="step-info">Zaznacz co chcesz oddać:</div>
                        <form className="checkbox-one">
                            <label className="checkbox-description">ubrania, które nadają się ponownego użycia
                                <input type="checkbox" id="step-one" name="step-one"  value="good clothes" checked="" onChange=""></input>
                            </label>
                            <label className="checkbox-description">ubrania do wyrzucenia
                                <input type="checkbox" id="step-one" name="step-one"  value="bad clothes" checked="" onChange=""></input>
                            </label>
                            <label className="checkbox-description">zabawki
                                <input type="checkbox" id="step-one" name="step-one"  value="toys" checked="" onChange=""></input>
                            </label>
                            <label className="checkbox-description">książki
                                <input type="checkbox" id="step-one" name="step-one"  value="books" checked="" onChange=""></input>
                            </label>
                            <label className="checkbox-description">inne
                                <input type="checkbox" id="step-one" name="step-one"  value="other" checked="" onChange=""></input>
                            </label>
                            <button className="submit-btn" type="submit">Dalej</button>
                        </form>
                    </div>
            </div>

        </section>
    )
}

export default FirstStepSection;