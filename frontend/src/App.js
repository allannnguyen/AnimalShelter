import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'
import Animal from './Animal';
import About from './About';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

function App() {
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
  return (
    <BrowserRouter>
      <div class="nav">
            <div class = "name"><h1>Benji's Animal Shelter</h1></div>
            <div class = "links">
              <Link to="/about">About</Link>
              <Link to="/">Adopt a pet</Link>
            </div>
      </div>

      <Switch>
        <Route exact path="/">
          <section class = "home">
            <h1>Dogs and puppies</h1>
            <div class="cardContainer">
              {animals[0].pets.map(petObject => (
                <Card name={petObject.name} breed={petObject.breed} status={petObject.status} gender={petObject.gender} yearsOld={petObject.yearsOld} id = {petObject.id}/>
              ))}
            </div>
            <h1>Cats</h1>
            <div class="cardContainer">
            {animals[1].pets.map(petObject => (
              <Card name={petObject.name} breed={petObject.breed} status={petObject.status} gender={petObject.gender} yearsOld={petObject.yearsOld} id = {petObject.id}/>
            ))}
            </div>
          </section>
        </Route>
        <Route path="/1">
          <Animal pet={animals[0].pets[0]}/>
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
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
