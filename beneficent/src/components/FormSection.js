import React, {useState} from 'react';

const FormSection = () => {
    const initialState = {
        name: "",
        email: "",
        message: ""
    };
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState([]);

    const changeData = (e) => {
        e.persist();
        setData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    };

    const validate = () => {
        const errors = [];
        let isValidate = true;
        const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if (!data.name || !data.email || !data.message) {
            isValidate = false;
            errors.push(" Wszystkie pola powinny być wypełnione!");
        }
        if (data.name.length < 3) {
            isValidate = false;
            errors.push(" Podane imię jest nieprawidłowe!");
        }
        if (data.email !== reg) {
            isValidate = false;
            errors.push( "Podany e-mail jest nieprawidłowy!");
        }
        if (data.message.length < 120) {
            isValidate = false;
            errors.push (" Wiadomość musi zawierać co najmniej 120 znaków!");
        }
        setErrors(errors);
        return isValidate
    }

    const postUser = () => {
        const url = 'https://fer-api.coderslab.pl/v1/portfolio/contact'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.status === 200) {
                    setData(initialState);
                    success.push("Wiadomość została wysłana! Wkrótce się skontaktujemy");
                } 
                if (response.status === 400) {
                    setErrors(errors);
                }
                setSuccess(success);
            })
            
    };

    const save = e => {
        e.preventDefault();
        if (validate ()) {
            postUser()
        }
    }


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
                            <form onSubmit={save}>
                                <div className="first-form">
                                    <label id="name">Wpisz swoje imię
                                        <input type="text" name="name" className="name-input" value={data.name} onChange={changeData}/>
                                    </label>
                                    <label id="email">Wpisz swój e-mail
                                        <input type="email" name="email" className="email-input" value={data.email} onChange={changeData}/>
                                    </label>
                                </div>
                                <div className="second-form">
                                    <label id="message">Wpisz swoją wiadomość
                                        <textarea className="message-area" value={data.message} onChange={changeData} />
                                    </label>
                                </div>
                                <div className="submit-div">
                                    <button type="submit" className="submit-btn">Wyślij</button>
                                </div>
                            </form>
                            <div className="errors-info">{errors}</div>
                            <div className="success-info">{success}</div>
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