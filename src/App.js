import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { name: 'Lorem', age: 28},
      { name: 'Ipsum', age: 23},
      { name: 'Dolor', age: 25}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    console.log('clicked');
    this.setState({})
  }

  render() {
    return (
      <div className="App">
        <h1> Lorem Ipsum App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Lorem </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].name}/>
      </div>
    );
  }
}

export default App;
