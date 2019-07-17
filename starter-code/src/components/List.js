import React, { Component } from "react";
import Contact from "./Contact.js";
import contacts from "../contacts.json";

class List extends Component {
  render() {
    const elements = this.props.contacts.map((contact, index) => {
      return (
        <Contact
          deleteContact={this.deleteContact}
          key={index}
          data={contact}
          deleteContact={() => this.props.deleteHandler(index)}
        />
      );
    });

    return (
      <div>
        <button onClick={this.props.addContact}>Add Movie</button>
        <button onClick={this.props.sortByName}>Sort By Name</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {elements}
        </table>
      </div>
    );
  }
}

export default List;
