import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withFirebase } from '../components/Firebase';


const initialState = {
    email: '',
    password: '',
    error: null
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...initialState};
    };

    onSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...initialState});
                // this.props.history.push("/")
            })
            .catch(error => {
                this.setState({error});
            })
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const {email, password, error} = this.state;

        const isInvalid = password === '' || email === '';
    

    return (
        <section className="login-section container">
            <div className="login-section-content">
                <div className="main-title">Zaloguj się</div>
                <div className="sixth-pattern-div">
                <div className="sixth-pattern"></div>
                </div>
                <div className="form-content">
                    <form onSubmit={this.onSubmit}>         
                        <label id="email">Email
                            <input type="text" name="email" className="email-input" value={email} onChange={this.onChange}/>
                        </label>
                        <label id="password">Hasło
                            <input type="password" name="password" className="password-input" value={password} onChange={this.onChange}/>
                        </label>
                        <div className="buttons-content">
                            <NavLink to="/register"><button className="log-btn">Załóż konto</button></NavLink>
                            <button disabled={isInvalid} type="submit" className="log-btn">Zaloguj się</button>     
                        </div>
                    </form>
                </div>
                <div className="page-btn-content">
                    <NavLink to="/"><button className="page-btn">Strona główna</button></NavLink>
                </div>
                
                {error && <p>{error.message}</p>}
            </div>
        </section>
        )
    }
};

export default withFirebase(SignInFormBase);
