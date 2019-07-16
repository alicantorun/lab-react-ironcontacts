import React, { Component } from "react";
import List from "./components/List.js";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contactsList: contacts.slice(0, 5)
  };

  addMovie = () => {
    const copyContacts = [...contacts];
  };

  render() {
    return (
      <div>
        <div>IronContact</div>
        <List contactsList={this.state.contactsList} />
      </div>
    );
  }
}

export default App;
