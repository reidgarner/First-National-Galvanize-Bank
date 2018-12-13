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

onHandleSubmit = async (event, Username, FirstName, LastName, Email, Password) => {
  event.preventDefault();
  const newBody = {
    username: Username,
    first_name: FirstName,
    last_name: LastName,
    email: Email,
    password: Password
  }
  await fetch('https://bank-backend.herokuapp.com/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(newBody)
  })
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    this.setState({
      Username: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Password: ""
    })
  })
}

onChangeInput = (event) => {
  event.preventDefault();
  const { value, name} = event.target;
  console.log(this.state.Username, this.state.Password)
  this.setState({
    [name]: value
  })
  
}

  render() {
    return (
      <BrowserRouter>
        <div>
          <img src="https://cdna.artstation.com/p/assets/images/images/004/133/650/large/lincoln-renall-iron-bank-10.jpg?1480643272" alt="bank" />
          <Route
            exact
            path="/signup"
            render={(props) => 
              <SignUpForm {...this.state}
              onChangeInput= {this.onChangeInput}
              onHandleSubmit= {this.onHandleSubmit} />
            }
          />
          <Route
            exact
            path="/signin"
            render={(props) => 
              <SignInForm {...this.state} 
              onChangeInput= {this.onChangeInput}
              onHandleSubmit= {this.onHandleSubmit}
              />
            }
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
