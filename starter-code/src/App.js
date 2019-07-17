import React, { Component } from "react";
import List from "./components/List.js";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  addContact = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    const contactsCopy = [...this.state.contacts];
    contactsCopy.unshift(newContact);
    this.setState({ contacts: contactsCopy });
  };

  sortByName = () => {
    const contactsCopy = [...this.state.contacts];
    const sortedContacts = contactsCopy.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({ contacts: sortedContacts });
  };

  deleteHandler = contactIndex => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      contacts: contactsCopy
    });
  };

  render() {
    return (
      <div>
        <div>IronContact</div>
        <List
          deleteHandler={this.deleteHandler}
          addContact={this.addContact}
          sortByName={this.sortByName}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
