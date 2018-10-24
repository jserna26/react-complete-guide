import React from 'react';
import Person from '../Persons/Person';

const persons = (props) => (
    props.persons.map((elem, idx) =>        
          <Person
                  name={elem.name} 
                  age={elem.age} 
                  click={() => props.clicked(idx)}
                  changed={(event) => props.changed(event, idx)}
          />         
      )

); 

export default persons;