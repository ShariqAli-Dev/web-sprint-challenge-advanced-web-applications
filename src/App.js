import './styles.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import axiosWithAuth from './helpers/axiosWithAuth';
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import Login from './components/Login';

function App() {
  const logOut = () => {
    // console.log('I do be logging on tho');
    axiosWithAuth()
      .post('/logout')
      .then((res) => {
        localStorage.removeItem('token');
        window.location.href = '/';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Router>
      <div className='App'>
        <header>
          Color Picker Sprint Challenge
          <button onClick={logOut} data-testid='logoutButton'>
            Logout
          </button>
        </header>

        <Switch>
          <PrivateRoute path='/home' component={BubblePage} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
