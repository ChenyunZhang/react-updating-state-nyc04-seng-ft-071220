// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component{
    state={
        hasBeenClicked: false
    }

    handleClick =() =>{
        this.setState((pre)=>{
            return{
                hasBeenClicked: !pre.hasBeenClicked
            }
        },() => console.log(this.state.hasBeenClicked))
    }

    render(){
        return(
            <div>
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick={this.handleClick}>Click me!</button>
          </div>
        )
    }
}

export default ClickityClick