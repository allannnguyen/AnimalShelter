import React, { Component } from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Section from './Section'
import Animal from './Animal'
import"./Content.css"

const animals = [
    {
      _id: 'dog',
      pets: [
        {
          name: 'Rocky',
          breed: 'American pit bull cross',
          status: 'Neutered and vaccinated',
          gender: 'Female',
          yearsOld: 7,
          adopted: false,
          id: 1,
        },
        {
          name: 'Juju',
          breed: 'American staff cross',
          status: 'Vaccinated, not neutered',
          gender: 'Male',
          yearsOld: 7,
          adopted: true,
          id: 2,
        },
        {
          name: 'Knuckles II',
          breed: 'Anatolian Sheperd',
          status: 'Neutered and vaccinated',
          gender: 'Male',
          yearsOld: 1,
          adopted: false,
          id: 3,
        }
      ]
    },
    {
      _id: 'cat',
      pets: [
        {
          name: 'Terry',
          breed: 'Domestic medium hair cross',
          status: 'Neutered, not vaccinated',
          gender: 'Male',
          yearsOld: 2,
          adopted: false,
          id: 4,
        },
        {
          name: 'Chonker',
          breed: 'Main coone',
          status: 'Status unknown',
          gender: 'Female',
          yearsOld: 5,
          adopted: true,
          id: 5,
        },
        {
          name: 'Kip',
          breed: 'Domestic shorthair',
          status: 'Neutered and vaccinated',
          gender: 'Female',
          yearsOld: 2,
          adopted: false,
          id: 6,
        }
      ]
    }
]

class Content extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                     <Route exact path="/">
                        <Section title="Dogs and puppies" id="0" animals={animals}/>
                        <Section title="Cats" id="1" animals={animals}/>
                    </Route>
                </Switch>
                <Route path="/1">
                    <Animal pet={animals[0].pets[0]} />
                </Route>
                <Route path="/2">
                    <Animal pet={animals[0].pets[1]}/>
                </Route>
                <Route path="/3">
                    <Animal pet={animals[0].pets[2]}/>
                </Route>
                <Route path="/4">
                    <Animal pet={animals[1].pets[0]}/>
                </Route>
                <Route path="/5">
                    <Animal pet={animals[1].pets[1]}/>
                </Route>
                <Route path="/6">
                    <Animal pet={animals[1].pets[2]}/>
                </Route>
                {/* <Route path="/about">
                    <About/>
                </Route> */}
          </BrowserRouter>
        )
    }
}

export default Content