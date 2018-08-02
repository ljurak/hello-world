import React, { Component } from 'react';
import './App.css';

const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

class App extends Component {

  constructor() {
    super();
    this.state = {
      filteredUsers : allUsers
    }
    this.filterUsers = this.filterUsers.bind(this);
  }

  render() {
    return (
      <div>
        <input type="search" onInput={this.filterUsers} />
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }

  filterUsers(e) {
    const text = e.target.value
    const filteredUsers = this.getFilteredUsersForText(text);
    this.setState({ 
      filteredUsers
    });
  }
    
  getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
  }
  /*
  getFilteredUsersForText(text) {
    return new Promise(resolve => {
      const time = (Math.random() + 1) * 250;
      setTimeout(() => {
        const filteredUsers = allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
        resolve(filteredUsers);
      }, time) ;
    });
  }
  */
}

const UsersList = ({ users }) => {
  if (users.length > 0) {
    return (
      <ul>
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
    );
  }

  return (
    <p>No results!</p>
  );
}

export default App;
