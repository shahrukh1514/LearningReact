import React from 'react'
import './Person.css'
//Here we will discuss an alternate way of creating components known as functional components
//Note, you could always use 1. function keyword followed by name and 2. var name = function(){ } syntax
// const person = () => {
//     return <p>I am a person and i am {Math.floor(Math.random() * 30)} years old.</p>
// };

//component that does not have state are called stateless, dumb or presentation components
const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.Click} >My Name is {props.Name} and my Age is {props.Age} </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.Changed} value={props.Name} />
        </div>
    )
}

export default person;