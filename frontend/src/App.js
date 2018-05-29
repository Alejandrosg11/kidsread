import React, { Component } from 'react';
import './App.css';
import {Routes} from "./Routes";
import Register from './components/register/register';


class App extends Component {

  render() {
    
    let auth = () => {
      if(!localStorage.getItem('user')){
        return <Register/>
      } else {
        return <Routes/>
      }
    }
    auth();
    return (
      <div className="fondo">
      {auth()}

      </div>
    );
  }
}

export default App;

/*
class App extends Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }  

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div className="fondo">
      <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <div><NavBar/>
  <Carousel/>
  <BookList/></div>;
}

function GuestGreeting(props) {
  return <Register/>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default App;*/