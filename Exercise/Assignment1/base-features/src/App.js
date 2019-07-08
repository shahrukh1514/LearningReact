import React, {Component} from 'react';
import './App.css';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends Component {
  state={
    name:"Mudassir Swati",
    age:27
  }

  changeName = (event) => {
    this.setState({
      name:event.target.value
    })
  }

  render(){
    return (
      <div>
        <UserInput changeName={this.changeName} name={this.state.name} />
        <UserOutput name={this.state.name} age={this.state.age} />
        <UserOutput name={"Sahir Khan"} age="26"/>
      </div>
    );
  }
}

export default App;
