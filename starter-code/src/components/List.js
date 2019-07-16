import React, { Component } from "react";
import Contact from "./Contact.js";
import contacts from "../contacts.json";

class List extends Component {
  render() {
    const elements = this.props.contactsList.map(contact => {
      return <Contact data={contact} />;
    });

    console.log(elements);
    return (
      <div>
        <button onClick={this.props.addMovie}>Add Movie</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          {elements}
        </table>
      </div>
    );
  }
}

export default List;
