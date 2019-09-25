import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from './components/Dashboard';
import MyProfile from './components/MyProfile';
import CreateNewLead from './components/CreateNewLead';
import Users from './components/Users';
import Reports from './components/Reports';
import Login from './components/Login';
import RequestLead from './components/RequestLead';
import ChangePhone from './components/ChangePhone';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/my/profile' component={MyProfile} />
        <Route exact path='/my/createnewlead' component={CreateNewLead} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/reports' component={Reports} />
        <Route exact path='/' component={Login} />
        <Route exact path='/requestlead' component={RequestLead} />
        <Route exact path='/my/changephone' component={ChangePhone} />
      </div>
    </Router>

  );
}

export default App;
