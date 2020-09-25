import React from 'react';
import {withFirebase} from '../components/Firebase';
import { NavLink } from 'react-router-dom';

const SignOutButton = ({firebase}) => {

    return <NavLink to="/logout"><button className="signOut-btn" type="button" onClick={firebase.doSignOut}>Wyloguj</button></NavLink>

};

export default withFirebase(SignOutButton);