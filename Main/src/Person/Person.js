import React from 'react'
import './Person.css'

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