<<<<<<< HEAD
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

=======
import React, {PureComponent} from 'react';
import Person from '../Persons/Person';

class Persons extends PureComponent {

    constructor(props){
        super(props);
        console.log('[Persons.js] Inside constructor', props);  
    }
    
    componentWillMount(){
        console.log('[Persons.js] Inside componentWillMount');
    }

    componentDidMount(){
        console.log('[Persons.js] Inside componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }
      
    render(){
        console.log("[Persons.js] Inside render");
        return (this.props.persons.map((elem, idx) =>        
          <Person
                  name={elem.name} 
                  age={elem.age} 
                  click={() => this.props.clicked(idx)}
                  changed={(event) => this.props.changed(event, idx)}
          />         
      ))
    }

}; 

>>>>>>> 142a6386b4c0722abf99fdacc96c3d0b51200b6a
export default Persons;