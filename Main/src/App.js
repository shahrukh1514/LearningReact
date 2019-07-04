import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {

  //   this.setState({
  //     persons: [
  //       { name: newName, age: 31 },
  //       { name: 'Mudassir', age: 32 },
  //       { name: 'Furqaan', age: 27 }
  //     ]
  //   })
  // }

  //We wont be using this anymore
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Owes', age: 31 },
        { name: event.target.value, age: 32 },
        { name: 'Furqaan', age: 27 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show })
  }

  deletePersonHandler = (idx) => {
    //generally working on constant directly is not recommended as they can cause unpredictable results. Here constants 
    //are just pointers to the original person array in the state object.
    //const newPersonList = this.state.persons;
    //We need to copy the array reference to a new array using slice method on array or using spread operator
    //const newPersonList = this.state.persons.slice();
    const newPersonList = [...this.state.persons];
    newPersonList.splice(idx, 1);
    this.setState({ persons: newPersonList })
  }

  render() {
    //declaring inline styles
    const myStyle = {
      backgroundColor: 'white',
      boxShadow: '0 2px 3px 0 #aaa',
      border: '1px solid grey',
      padding: '10px',
      cursor: 'pointer'
    }

    let personList = null;

    if (this.state.showPersons) {
      /* Now instead of outputting 3 Person components, lets map this to an array so that depending on the number of 
      elements in the array, the Person component is rendered
      personList = (
        <div>
          <Person Name={this.state.persons[0].name} Age={this.state.persons[0].age} Click={this.switchNameHandler.bind(this, 'Rehaan')} />
          <Person Name={this.state.persons[1].name} Age={this.state.persons[1].age} Changed={this.nameChangedHandler}>I work in Dubai</Person>
          <Person Name={this.state.persons[2].name} Age={this.state.persons[2].age} />
        </div>
      );*/
      personList = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person Name={person.name} Age={person.age} Click={() => this.deletePersonHandler(index)} /*Changed={this.nameChangedHandler}*/ />
            })
          }
        </div>
      )
    }

    return (
      <div className='App'>
        <h1>I am a React Application!!!</h1>
        <p>React version 16 has major changes</p>
        {/* <button style={myStyle} onClick={() => this.switchNameHandler('Sahir')}>Switch Name</button> */}
        <button style={myStyle} onClick={() => this.togglePersonsHandler()}>Switch Name</button>
        {/*writing conditional statements method 1
        {
          this.state.showPersons ?
            <div>
              <Person Name={this.state.persons[0].name} Age={this.state.persons[0].age} Click={this.switchNameHandler.bind(this, 'Rehaan')} />
              <Person Name={this.state.persons[1].name} Age={this.state.persons[1].age} Changed={this.nameChangedHandler}>I work in Dubai</Person>
              <Person Name={this.state.persons[2].name} Age={this.state.persons[2].age} />
            </div> : null
        }*/}
        {/*conditional statement method 2 */}
        {personList}
      </div>
    );
  }
}

export default App;
