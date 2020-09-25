import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import ThreeColumns from './ThreeColumns';
import FourColumns from './FourColumns';
import AboutUs from './AboutUs';
import OrganizationSection from './OrganizationsSection';
import FormSection from './FormSection';
import { withFirebase } from '../components/Firebase';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null
        };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                authUser
                ? this.setState({ authUser }) : this.setState({ authUser: null });
        });
    }

    componentWillUnmount() {
        this.listener();
    }
    render() {
        return (
        <>
            <NavigationBar authUser={this.state.authUser}/>
            <ThreeColumns/>
            <FourColumns/>
            <AboutUs/>
            <OrganizationSection/>
            <FormSection/>
        </>
        )
    }
}

export default withFirebase(Layout);