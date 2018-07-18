import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Register from './Register/Register';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </main>
    );
  }
}

export default App;
