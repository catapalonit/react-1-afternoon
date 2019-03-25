import React, {Component} from 'react';

export default class FilterObject extends Component{
    constructor() {
        super()
        
        this.state = {
        bands: [
            {
                name: "The Chariot",
                members: 4,
                bestAlbum: "One Wing",
                bestSong: "The City",
                brokenUp: true
            }, 
            {
                name: "Blink 182",
                members: 3,
                bestSong: "Not Now",
                brokenUp: false
            },
            {
                name: "Mastodon",
                bestAlbum: "Crack the Skye",
                bestSong: "Oblivion"
            }
        ],
        
        userInput : "",
        filteredArray : []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val });
    }
    
    filterBands(prop) {
        var bands = this.state.bands;
        var filteredArray = [];
        
        for ( var i = 0; i < bands.length; i++ ) {
        if ( bands[i].hasOwnProperty(prop) ) {
            filteredArray.push(bands[i]);
        }
        }
    
        this.setState({ filteredArray: filteredArray });
    }





    render() {
        return (
            <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.bands, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterBands(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
        }
    }
    