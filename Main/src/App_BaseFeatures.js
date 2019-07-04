import React, { Component } from 'react';
//The below code is for React hooks in functional components for managing state
//import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

//one method of rendering react component is called class based components, if it uses state then they can also
// be called stateful, smart or container components

//In order to use react hooks (alternate way of managing state of a component), we need to convert class based 
//components to functional components
class App extends Component {

  state = {
    persons: [
      { name: 'Owes', age: 30 },
      { name: 'Mudassir', age: 31 },
      { name: 'Idrees', age: 25 },
    ],
    shoppingCart: [
      { productName: "Keyboard", price: 3575 },
      { productName: "Mouse", price: 2495 }
    ]
  }

  //setting our person object to new value, this will merge the new object with existing object.
  switchNameHandler = (newName) => {
    //Dont Do This, as state should only be set using setState function. 
    //this.state.persons[0].name='Mohammed'
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: 'Mudassir', age: 32 },
        { name: 'Furqaan', age: 27 }
        // { name: 'Owes', age: 30 },
        // { name: 'Mudassir', age: 31 },
        // { name: 'Idrees', age: 25 },
      ]
    })
  }

  //outputting dynamic content using control's (textbox) value
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Owes', age: 31 },
        { name: event.target.value, age: 32 },
        { name: 'Furqaan', age: 27 }
      ]
    })
  }

  render() {
    const myStyle = {
      backgroundColor: 'white',
      boxShadow: '0 2px 3px 0 #aaa',
      border: '1px solid grey',
      padding: '10px',
      cursor: 'pointer'
    }
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React in detail
      //     </a>
      //   </header>
      // </div>

      //The below code is about passing props to components
      // <div className='App'>
      //   <h1>I am a React Application!!!</h1>
      //   <p>React version 16 has major changes</p>
      //   <Person Name='Owes' Age='30' />
      //   <Person Name='Idrees' Age='25'>I work in Dubai</Person>
      //   <Person Name='Mudassir' Age='31' />
      // </div>

      //Below code is about using state to pass props to child component
      <div className='App'>
        <h1>I am a React Application!!!</h1>
        <p>React version 16 has major changes</p>
        <button style={myStyle} onClick={this.switchNameHandler.bind(this, 'Sahir')}>Switch Name</button>
        <Person Name={this.state.persons[0].name} Age={this.state.persons[0].age} Click={() => this.switchNameHandler('Rehaan')} />
        <Person Name={this.state.persons[1].name} Age={this.state.persons[1].age} Changed={this.nameChangedHandler}>I work in Dubai</Person>
        <Person Name={this.state.persons[2].name} Age={this.state.persons[2].age} />
      </div>

      //another method of rendering react component instead of JSX
      //React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I am a React Application !!!'))
    );
  }
}


//Important point in using React Hooks rather than state is that in React Hooks if we update the state then hooks will 
//replace old state with new state and the 2nd property shoppingCart is lost after update but in class based component 
//it will not replace but rather merge old state with new state

// const app = props => {

//   //Using Array destructuring syntax to extract 2 return values from useState function. 1st value is the original state 
//   //and 2nd value is the method that will change the state
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: 'Owes', age: 30 },
//       { name: 'Mudassir', age: 31 },
//       { name: 'Idrees', age: 25 },
//     ],
//     shoppingCart: [
//       { productName: "Keyboard", price: 3575 },
//       { productName: "Mouse", price: 2495 }
//     ]
//   });

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: 'Owes', age: 31 },
//         { name: 'Mudassir', age: 32 },
//         { name: 'Furqaan', age: 27 },
//         // { name: 'Owes', age: 30 },
//         // { name: 'Mudassir', age: 31 },
//         // { name: 'Idrees', age: 25 },
//       ],//we need to use other properties of this object or else it will be lost after updation
//       shoppingCart: personState.shoppingCart
//     })
//   }

//   console.log(personState);

//   return (
//     < div className='App' >
//       <h1>I am a React Application!!!</h1>
//       <p>React version 16 has major changes</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person Name={personState.persons[0].name} Age={personState.persons[0].age} />
//       <Person Name={personState.persons[1].name} Age={personState.persons[1].age}>I work in Dubai</Person>
//       <Person Name={personState.persons[2].name} Age={personState.persons[2].age} />
//     </div >

//   );
// }

export default App;
//export default app;
