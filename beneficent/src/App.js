import React from 'react';
import logo from './logo.svg';
import {
    BrowserRouter,
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
import OrganizationSection from './components/OrganizationsSection';
import FourStepSection from './components/FourStepSection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/register" component={Register}/>
          <Route path="/pierwszy-krok" component={FirstStepSection}/>
          <Route path="/drugi-krok" component={SecondStepSection}/>
          <Route path="/trzeci-krok" component={ThirdStepSection}/>
          <Route path="/oddaj" component={FourthStepSection}/>
          <Route path="/czwarty-krok" component={FourStepSection}/>
          <Route path="/summary" component={Summary}/>
          <Route path="/thanks" component={Thanks}/>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
