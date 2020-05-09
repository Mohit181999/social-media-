import React,{Fragment, useEffect} from 'react';
import Landing from "./components/layout/Landing";
import NavBar from './components/layout/navBar'; 
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
//redux
import {Provider} from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alerts";
import setAuthToken from './utils/setAuthToken';
import { loaduser } from './action/auth';
import Dashboard from "./components/Dashboard/Dashboard"
import Privateroute from "./components/routing/Privateroutiing";
 
const App = ()=> {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loaduser());
  }, []);
  return (
    <Provider store={store}>
    <Router>
    <Fragment>
       <NavBar/> 
      <Route exact path="/" component={Landing} /> 
      <section className="container">
        <Alert /> 
      <Switch >
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Privateroute exact path="/dashboard" component={Dashboard} />
      </Switch> 
      </section>         
    </Fragment>
    </Router>
    </Provider>
  )
};

export default App;
