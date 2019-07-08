import React from 'react'
import './UserOutput.css'

class UserOutput extends React.Component{
    render(){
        return (
            <div className="output">
                <p>My name is {this.props.name}</p>
                <p>My age is {this.props.age}</p>
            </div>
        );
    }
}
export default UserOutput