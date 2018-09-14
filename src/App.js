import React, { Component } from 'react';
import  Sidebar  from "./containers/Sidebar"
import  MessageList  from "./containers/MessagesList"
import  AddMessage  from "./containers/AddMessage"
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
      <Sidebar />
      <section id="main">
      <MessageList />
      <AddMessage />
      </section>
      </div>
    );
  }
}

export default App;
