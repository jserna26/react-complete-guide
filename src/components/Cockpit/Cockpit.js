import React from 'react'
import classes from '../Cockpit/cockpit.css';

const cockpit = () => {

    const assignedClasses = [];
    if (props.persons.length <= 2){
      assignedClasses.push(classes.red) // classes = ['red']
    }
    if (props.persons.length <= 1){
      assignedClasses.push(classes.bold) // classes = ['red', 'bold']
    }

    return (
        <div>
            <h1>React App: 1</h1> 
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} 
                    onClick={() => this.togglePersonsHandler("TOBIAS")}>Toggle Persons</button>
        </div>        
    )
};