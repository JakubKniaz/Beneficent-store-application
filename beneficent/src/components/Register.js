import React, { useState, Component } from 'react';
import { NavLink } from 'react-router-dom';
import {FirebaseContext} from '../components/Firebase';
import {withFirebase} from '../components/Firebase';

const initialState = {
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null
}


class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...initialState}
    }



    onSubmit = e => {
        e.preventDefault()
        const {email, passwordOne} = this.state;

        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            this.setState({...initialState});
            console.log(authUser)
        })
        .catch(error => {
            this.setState({error});
            
        });


    }

    onChange = event => {
       this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        const {
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '';

        return (
            <section className="login-section container">
                <div className="login-section-content">
                    <div className="main-title">Załóż konto</div>
                    <div className="sixth-pattern-div">
                    <div className="sixth-pattern"></div>
                    </div>
                    <div className="form-content">
                        <form onSubmit={this.onSubmit}>         
                            <label id="email">Email
                                <input type="text" name="email" className="email-input" value={email} onChange={this.onChange}/>
                            </label>
                            <label id="password">Hasło
                                <input type="password" name="passwordOne" className="password-input" value={passwordOne} onChange={this.onChange}/>
                            </label>
                            <label id="password">Powtórz hasło
                                <input type="password" name="passwordTwo" className="password-input" value={passwordTwo} onChange={this.onChange}/>
                            </label>
                            <div className="buttons-content">
                        <NavLink to="/login"><button className="log-btn">Zaloguj się</button></NavLink>
                        <button disabled={isInvalid} type="submit" className="log-btn">Załóż konto</button>    
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
}

export default withFirebase(SignUpFormBase);
