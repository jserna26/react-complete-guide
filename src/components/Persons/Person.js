import React, {Component} from 'react';
<<<<<<< HEAD
import classes from './Person.module.css'

class Person extends Component {
    render(){
        return (        
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm a person, yeah. I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>  
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
=======
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
>>>>>>> 142a6386b4c0722abf99fdacc96c3d0b51200b6a
    }
}

export default Person;