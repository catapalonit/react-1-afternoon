import React, {Component} from 'react';

export default class FilterString extends Component{
    constructor(){
        super()
        this.state= {
            bands : ["The Chariot", "Underoath", "Gojira", "Joyce Manor", "PMtoday", "Manchester Orchestra"],
            userInput : "",
            filteredBands : []
        };
    }
        handleChange(val) {
            this.setState({ userInput: val });
        }
        
        filterBands(userInput) {
            var bands = this.state.bands;
            var filteredBands = [];
        
            for ( var i = 0; i < bands.length; i++ ) {
            if ( bands[i].includes(userInput) ) {
                filteredBands.push(bands[i]);
            }
            }
        
            this.setState({ filteredBands: filteredBands });
        }
        
    render() {
        return (
            <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText"> Bands: { JSON.stringify(this.state.bands, null, 10) } </span>
            <input className = "inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterBands(this.state.userInput) }> Filter this string </button>
            <span className="resultsBox filterStringRB"> Filtered Bands: { JSON.stringify(this.state.filteredBands, null, 10) } </span>
            </div>
        )
    }
}
