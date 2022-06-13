import React from 'react';
import classes from './PricePredictor.css';
import Breadcrumps from '../../components/UI/Breadcrumps/Breadcrumps';
import { Fade } from 'react-reveal';
import { NavLink } from 'react-router-dom'
import { Papa } from 'papaparse';


class PricePredictor extends React.Component {

    state = {
        // area_type: '',
        bhk: '',
        bath: '',
        sqft: '',
        location: '',
        output: '',
        display: false,
        country: false,
        placesData: []
    }



    // handleChange1 = event => {
    //     this.setState({ area_type: event.target.value });
    // }
    handleChange2 = event => {
        this.setState({ bhk: event.target.value });
    }
    handleChange3 = event => {
        this.setState({ bath: event.target.value });
    }
    handleChange4 = event => {
        this.setState({ sqft: event.target.value });
    }
    handleChange5 = event => {
        this.setState({ location: event.target.value })
    }

    handleSubmit = (event, uservalue) => {

        let route = '/predict/' + uservalue;
        console.log(route);
        // const user = {
        //     area_type: this.state.area_type,
        //     bhk: this.state.bhk,
        //     bath: this.state.bath,
        //     sqft: this.state.sqft
        // };

        const user = {
            // area_type: this.state.area_type,
            bhk: this.state.bhk,
            bath: this.state.bath,
            sqft: this.state.sqft,
            location: this.state.location
        };

        fetch(route, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                // "area": user.area_type,
                "bhk": user.bhk,
                "bath": user.bath,
                "sqft": user.sqft,
                "location": user.location
            })
        }).then(r => r.json()).then(result => {
            if (result) {
                console.log(result + "Lakhs");
                this.setState({ output: result });

            }
            else {
                console.log("not added");
            }
        })
        this.setState({ display: true })
    }

    checkCountryMethod = (event) => {
        event.preventDefault();
        let uservalue = document.getElementById('list').value;
        uservalue.toString();
        console.log(uservalue);
        this.cityData(uservalue, event);
        return this.handleSubmit(event, uservalue);
    }

    cityData = (city, event) => {
        event.preventDefault();
        let data = [];

        if (city === 'Bengalore') {
            data = require('./Cities/Bengalore_Obj.json');
        }
        else if (city === 'Chennai') {
            data = require('./Cities/Chennai_Obj.json');
        }
        else if (city === 'Kolkata') {
            data = require('./Cities/Kolkata_Obj.json');
        }
        else if (city === 'Mumbai') {
            data = require('./Cities/Mumbai_Obj.json');
        }
        else if (city === 'Hyderabad') {
            data = require('./Cities/Hyderabad_Obj.json');
        }
        else if (city === 'Delhi') {
            data = require('./Cities/Delhi_Obj.json');
        }

        let places = [];

        for (let i = 0; i < data.length; i++) {
            places.push(data[i].location);
        }

        let newPlaces = [...new Set(places)];
        this.setState({ placesData: newPlaces })

    }

    render() {
        const { placesData } = this.state;

        for (let i = 0; i < placesData.length; i++) {
            let select = document.getElementById("cityOptions");
            let option = document.createElement("option");
            option.appendChild(document.createTextNode(placesData[i]));
            select.append(option);
        }
        return (
            <section id="price" className={classes.Price}>
                <Breadcrumps title="Price Predictor" ptop="4.3rem" toLink="/price_predictor" />
                <div className="container">
                    <div className={classes.PRow}>
                        <Fade bottom>
                            <div className="col-md-8 pt-1" style={{ textAlign: 'center', backgroundColor: '#000000bf' }}>
                                <div className={classes.Form}>
                                    <form onSubmit={this.checkCountryMethod}>

                                        <div className="form-group">
                                            <label >Enter BHK</label>
                                            <input type="text" name="bhk" className="form-control" placeholder="Enter BHK" onChange={this.handleChange2} />
                                        </div>

                                        <div className="form-group">
                                            <label >Enter Bathrooms</label>
                                            <input type="text" name="bath" className="form-control" placeholder="Enter Bathrooms" onChange={this.handleChange3} />
                                        </div>

                                        <div className="form-group">
                                            <label >Enter Square Feet Area</label>
                                            <input type="text" name="sqft" className="form-control" placeholder="Enter Square.feet" onChange={this.handleChange4} />
                                        </div>

                                        <div className="form-group">
                                            <label >Select Country</label>
                                            <select name="country" className="form-control">
                                                <option default>Choose Country</option>
                                                <option onClick={this.handleCountry}>India</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label >Select City</label>
                                            <select id="list" name="cities" className="form-control">
                                                <option default>Choose City</option>
                                                <option id='Bengalore' >Bengalore</option>
                                                <option id='Mumbai' >Mumbai</option>
                                                <option id='Kolkata' >Kolkata</option>
                                                <option id='Hyderabad' >Hyderabad</option>
                                                <option id='Chennai' >Chennai</option>
                                                <option id='Delhi' >Delhi</option>
                                            </select>
                                        </div>

                                        {/* <div className="form-group">
                                            <label >Select Location</label>
                                            <select name="location" className="form-control" onChange={this.handleChange5}>
                                                <option default>Choose location</option>
                                                                                            
                                                <option>5th Phase</option>
                                                <option>Chandapura</option>

                                            </select>
                                        </div> */}
                                        <div className="form-group">
                                            <label >Select Location</label>
                                            <select name="location" id="cityOptions" className="form-control" onChange={this.handleChange5} >

                                            </select>
                                        </div>

                                        <div className={classes.Button}>
                                            <button type="submit">Predict Price</button>
                                            {this.state.display ?
                                                <span>
                                                    <h3>Rs. {this.state.output} Lakhs</h3>
                                                </span> : null
                                            }
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </Fade>
                    </div>

                </div>
            </section>
        )
    }
}

export default PricePredictor
