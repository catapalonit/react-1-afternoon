import React, {Component} from 'react';

export default class Palindrome extends Component{
    constructor(){
        super()

        this.state = {
            userInput: "",
            palindrome: ""
        }
    }
    handleChange(val) {
        this.setState({ userInput: val });
    }

    palindromeFinder(userInput){
        var len = Math.floor(userInput.length/2);
        for (let i = 0; i <len; i++)
            if (userInput[i] !== userInput[userInput.length - i -1]){
                this.setState({ palindrome: "false"});
            } else {
                this.setState({ palindrome: "true"})
            }
    }

    render() {
        return (
            <div className="puzzleBox palindromePB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.palindromeFinder(this.state.userInput) }> Filter </button>
            <span className="resultsBox"> Palindrome: { this.state.palindrome} </span>
            </div>
        )
    }
} 
