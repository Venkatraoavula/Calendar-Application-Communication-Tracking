import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminModule from './components/AdminModule';
import UserModule from './components/UserModule';
import ReportingModule from './components/ReportingModule';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/admin" component={AdminModule} />
          <Route path="/user" component={UserModule} />
          <Route path="/reporting" component={ReportingModule} />
          <Route path="/" exact>
            <h1>Welcome to the Calendar Communication App</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;