import React from 'react';

class UserInput extends React.Component{
    render()
    {
        const myStyle={
            margin:'200px 825px 10px',
        }
        const myPara={
            width:'200px'
        }
        return (
            <div style={myStyle}>
                <p style={myPara}>Enter your name:</p> <input type="text" onChange={this.props.changeName} value={this.props.name} />
            </div>
         );
    }
}

export default UserInput;