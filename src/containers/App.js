import React, { Component } from 'react';
import classes from './App.module.css';
// import Person from '../components/Persons/Person';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] Inside constructor', props);  
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount');  
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState){
      console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
      console.log('[UPDATE App.js] Inside componentDidUpdate');
  }
  
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
    console.log("[App.js] Inside render");
    let persons = null;
    
    
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
                   clicked={this.deletePersonHandler}
                   changed={this.nameChangedHandler}         
          />          
        </div>
      )      
    }   

    return (   
        <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>          
          <Cockpit title={this.props.title} 
                   showPersons={this.state.showPersons}
                   persons={this.state.persons}
                   clicked={this.togglePersonsHandler}/>
          {persons}                 
        </div>   
    );    
  }
}

export default App;
