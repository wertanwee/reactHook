import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [personState, setPersonState] = useState({
    persons: [
      {name:"James", age:23},
      {name:"Jims", age:24},
      {name:"Kims", age:25}
    ]
  });

  const [otherState, setOtherState] = useState("some other value");
  console.log(personState);
  console.log(otherState);
  const switchNameHandler = () => {
    setPersonState({
      persons: [
      {name:"Teerawat", age:23},
      {name:"Jims", age:24},
      {name:"Kims", age:29}
      ]
    });
    console.log(otherState)
  };
    return (
      <div className="App">
        <h1>Hi!, I'm a React App</h1>
        <p>This is React Tutorial.</p>
        <button onClick={switchNameHandler}>Switched Person!</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>My Hobby: Reading</Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!, I\'m a React'));
  }

export default app;