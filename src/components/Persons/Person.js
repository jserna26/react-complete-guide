import React, {Component} from 'react';
import classes from './Person.module.css';
import WithClass from '../../hoc/WithClass';


class Person extends Component {  
    constructor(props){
        super(props);
        console.log('[Person.j] Inside constructor', props);  
    }
    
    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount(){
        console.log('[Person.js] Inside componentDidMount');
    }

    render(){
        console.log('[Person.js] Inside render');
        return (        
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I'm a person, yeah. I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>  
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </WithClass>
        );
    }
}

export default Person;