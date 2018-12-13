import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUpForm from './Components/SignUpForm';
import SignInForm from './Components/SignInForm';


class App extends Component {

constructor() {
  super()
  this.state = {
    Username: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Password: ""
  }

}

onHandleSubmit = () => {

}

onChange = () => {

}

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/signup"
            render={(props) => 
              <SignUpForm />
            }
          />
          <Route
            exact
            path="/signin"
            render={(props) => 
              <SignInForm />
            }
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
