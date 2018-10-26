import React, { Component } from 'react';
import classes from './App.module.css';
// import Person from '../components/Persons/Person';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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
    let persons = null;    
    
    if (this.state.showPersons) {
      persons = (       
          <Persons persons={this.state.persons}
                   clicked={this.deletePersonHandler}
                   changed={this.nameChangedHandler}         
          />           
      )      
    }   

    return (   
        <div className={classes.App}>         
          <Cockpit 
            title={this.props.title}
            clicked={this.togglePersonsHandler}
            showPersons={this.state.showPersons}
            persons={this.state.persons} />
          {persons}       
        </div>   
    );    
  }
}

export default App;
