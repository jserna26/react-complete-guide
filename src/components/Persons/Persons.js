import React, {Component} from 'react';
import Person from '../Persons/Person';

class Persons extends Component {
    render(){
        return (this.props.persons.map((elem, idx) =>        
            <Person
                    name={elem.name} 
                    age={elem.age} 
                    click={() => this.props.clicked(idx)}
                    changed={(event) => this.props.changed(event, idx)}
            />         
        )
    )}
} 

export default Persons;