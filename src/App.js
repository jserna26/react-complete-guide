import React, { Component } from 'react';
import './App.css';
import './components/Person.css';
import Person from './components/Person';

class App extends Component {
  
  state = {
    persons: [
      {name: "Jonathan", age: 29},
      {name: "Danielle", age: 27},
      {name: "Tweener", age: 27}
    ]
  }

  deletePersonHandler = (personIndex) => {
    //Update in an immutable fashion
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons: persons
    })
  }

  switchNameHandler = (newName) => {
    // console.log("Was clicked");
    this.setState({
      persons: [
        {name: newName, age: 29},
        {name: newName, age: 27},
        {name: newName, age: 27}
      ],
      showPersons: false
    })
  }

  nameChangedHandler = (event, idx) => {    
    const person = {
      ...this.state.persons[idx]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[idx] = person;

    this.setState({
     persons: persons
    })

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;    
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue', 
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((elem, idx) => 
            <Person key={idx}
                    name={elem.name} 
                    age={elem.age} 
                    click={() => this.deletePersonHandler(idx)}
                    changed={(event) => this.nameChangedHandler(event, idx)}
            /> 
          )}   
        </div>
      )
    }

    return (
      <div className="App">
        <h1>React App: 1</h1> 
        <button style={style} 
                onClick={() => this.togglePersonsHandler("TOBIAS")}>Toggle Persons</button>
        {persons}       
      </div>
    );    
  }
}

export default App;
