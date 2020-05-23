import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Countries from './components/Counties/Countries';
import States from './components/States/States';
import Districts from './components/Districts/Districts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

ReactDOM.render(
  <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path = '/' component={Home} />
            <Route path = '/world' component= {Countries} />
            <Route path = '/states' component={States} />
            <Route path = '/district/:_state' component={Districts} />
          </Switch>
        <Footer />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
