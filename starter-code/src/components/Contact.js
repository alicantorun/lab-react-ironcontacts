import React, { Component } from "react";
import "../App.css";

class Contact extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.data.pictureUrl} alt="" />
        </td>
        <td>
          {this.props.data.name}
          {this.props.index}
        </td>
        <td>{this.props.data.popularity}</td>
        <td>
          <button onClick={this.props.deleteContact}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Contact;
