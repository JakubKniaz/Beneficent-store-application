import React from 'react';
import logo from './logo.svg';
import {
    HashRouter,
    Switch, 
    Route, 
    Redirect
} from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import OrganizationsSection from './components/OrganizationsSection';
import FirstStepSection from './components/FirstStepSection';
import SecondStepSection from './components/SecondStepSection';
import SecondStepOpen from './components/SecondStepOpen';
import ThirdStepSection from './components/ThirdStepSection';
import ThirdStepOpen from './components/ThirdStepOpen'
import FourthStepSection from './components/FourthStepSection';
import Summary from './components/Summary';
import Thanks from './components/Thanks';
import LoggedIn from './components/LoggedIn';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/register" component={Register}/>
          <Route path="/" component={LoggedIn}/>
          <Route path="/" component={AboutUs}/>
          <Route path="/" component={OrganizationsSection}/>
          <Route path="/give-things" component={FirstStepSection}/>
          <Route path="/give-things" component={SecondStepSection}/>
          <Route path="/give-things" component={SecondStepOpen}/>
          <Route path="/give-things" component={ThirdStepSection}/>
          <Route path="/give-things" component={ThirdStepOpen}/>
          <Route path="/give-things" component={FourthStepSection}/>
          <Route path="/give-things" component={Summary}/>
          <Route path="/give-things" component={Thanks}/>
          <Redirect to="/"/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
