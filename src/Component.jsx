import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "Oliver", contact: "555-222-1234" },
        { id: 2, name: "Charlotte", contact: "555-222-1235" },
        { id: 3, name: "Declan", contact: "555-222-1236" },
        { id: 4, name: "Violet", contact: "555-222-1237" },
        { id: 5, name: "Theodore", contact: "555-222-1238" },
        { id: 6, name: "Luna", contact: "555-222-1239" },
        { id: 7, name: "Silas", contact: "555-222-1240" },
        { id: 8, name: "Liam", contact: "555-222-1241" },
        { id: 9, name: "Finn", contact: "555-222-1242" },
        { id: 10, name: "Isla", contact: "555-222-1243" },
        { id: 11, name: "Ava", contact: "555-222-1244" },
        { id: 12, name: "River", contact: "555-222-1245" },
        { id: 13, name: "Kai", contact: "555-222-1246" },
        { id: 14, name: "Luca", contact: "555-222-1247" },
        { id: 15, name: "Avery", contact: "555-222-1248" },
        { id: 16, name: "Logan", contact: "555-222-1249" },
        { id: 17, name: "Amelia", contact: "555-222-1250" },
        { id: 18, name: "Aria", contact: "555-222-1251" },
        { id: 19, name: "Owen", contact: "555-222-1252" },
        { id: 20, name: "Ethan", contact: "555-222-1253" },
      ],
    };
  }

  render() {
    return (
      <table className="Table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MyComponent;
