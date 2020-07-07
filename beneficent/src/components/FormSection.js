import React, {useState} from 'react';

const FormSection = () => {
    return (
        <section id="contact" className="sixth-section container">
            <div className="sixth-section-content">
                <div className="left-form-content"></div>
                <div className="right-form-content">
                    <div className="main-title">Skontaktuj się z nami</div>
                    <div className="fifth-pattern-div">
                        <div className="fifth-pattern"></div>
                    </div>
                        <div className="form-div">
                            <form onSubmit="">
                                <div className="first-form">
                                    <label id="name">Wpisz swoje imię
                                        <input type="text" name="name" className="name-input" value="" onChange=""/>
                                    </label>
                                    <label id="email">Wpisz swój e-mail
                                        <input type="email" name="email" className="email-input" value="" onChange=""/>
                                    </label>
                                </div>
                                <div className="second-form">
                                    <label id="message">Wpisz swoją wiadomość
                                        <textarea className="message-area" value="" onChange="" />
                                    </label>
                                </div>
                                <div className="submit-div">
                                    <button type="submit" className="submit-btn">Wyślij</button>
                                </div>
                            </form>
                            <div className="errors-info"></div>
                            <div className="success-info"></div>
                        </div>
                </div>
            </div>
            <footer className="footer">
                <div className="copyright">Copyright by Coders Lab</div>
                <div className="social-icons">
                    <div className="facebook-icon"></div>
                    <div className="instagram-icon"></div>
                </div>
            </footer>
        </section>
    )
}

export default FormSection;