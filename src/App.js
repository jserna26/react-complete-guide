import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  
  state = {
    persons: [
      {name: "Jonathan", age: 29},
      {name: "Danielle", age: 27},
      {name: "Tweener", age: 27}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("Was clicked");
    this.setState({
      persons: [
        {name: "Jonathan", age: 29},
        {name: "Danielle", age: 27},
        {name: newName, age: 27}
      ]
    })
  }



  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1> 
        <button onClick={() => this.switchNameHandler("TOBIAS")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work Now?'));
  }
}

export default App;
