import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
    super()


this.state = {
    evenArray : [],
    oddArray: [],
    userInput: ''
}
}
handleChange(val) {
    this.setState({userInput: val});
}

assignEvenAndOdds(userInput) {
    let evens = [];
    let odds = [];
    let arr = userInput.split(',');

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evens.push(parseInt(arr[i], 10))
        }
        else if (arr[i] % 2 === 1){
            odds.push(parseInt(arr[i], 10)) //without parse int you could add in dog and it would say dog was odd, also it returns your number as a string
        }
    }

    this.setState({ evenArray: evens, oddArray: odds})

}

render() {
    return (
        <div className = "puzzleBox evenAndOddPB"> 
        <h4> Evens and Odds </h4>
        <input className = "inputLine" onChange = {(e)=> this.handleChange(e.target.value) }></input>
        <button className= "confirmationButton" onClick = {() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
        <span className = "resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className = "resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
        </div>
    )
}
}