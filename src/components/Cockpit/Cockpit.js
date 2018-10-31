import React from 'react'
<<<<<<< HEAD
import classes from '../Cockpit/cockpit.module.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }    
=======
import classes from './cockpit.module.css';
// import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    let btnClass = classes.Button;
    const assignedClasses = [];
    if (props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ');
    }
>>>>>>> 142a6386b4c0722abf99fdacc96c3d0b51200b6a
    if (props.persons.length <= 2){
      assignedClasses.push(classes.red) // classes = ['red']
    }
    if (props.persons.length <= 1){
      assignedClasses.push(classes.bold) // classes = ['red', 'bold']
    }
   

    return (
<<<<<<< HEAD
        <div>
=======
        <>
>>>>>>> 142a6386b4c0722abf99fdacc96c3d0b51200b6a
            <h1>{props.title}</h1> 
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} 
                    onClick={props.clicked}>Toggle Persons</button>
<<<<<<< HEAD
        </div>        
=======
        </>        
>>>>>>> 142a6386b4c0722abf99fdacc96c3d0b51200b6a
    )
};

export default cockpit;