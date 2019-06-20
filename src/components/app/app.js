import React, { Component } from 'react'

import Header from '../header'
// import ItemList from '../item-list'
// import PersonDetails from '../person-details'
// import PlanetDetails from '../planet-details'
import RandomPlanet from '../random-planet'
// import StarshipDetails from '../starship-details'

import './app.css'


const App = () => {
    return (
        <div className="star-db-app">
            <Header />
            <RandomPlanet />
            <div className="row">
                <div className="col-md-6">
                    {/* <ItemList /> */}
                </div>
                <div className="col-md-6">
                    {/* <PersonDetails /> */}
                </div>
            </div>
        </div>
    )
}

export default App