import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'
import Nav from './Nav';
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
        },
        {
          name: 'Juju',
          breed: 'American staff cross',
          status: 'Vaccinated, not neutered',
          gender: 'Male',
          yearsOld: 7,
          adopted: true,
        },
        {
          name: 'Knuckles II',
          breed: 'Anatolian Sheperd',
          status: 'Neutered and vaccinated',
          gender: 'Male',
          yearsOld: 1,
          adopted: false,
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
        },
        {
          name: 'Chonker',
          breed: 'Main coone',
          status: 'Status unknown',
          gender: 'Female',
          yearsOld: 5,
          adopted: true,
        },
        {
          name: 'Kip',
          breed: 'Domestic shorthair',
          status: 'Neutered and vaccinated',
          gender: 'Female',
          yearsOld: 2,
          adopted: false,
        }
      ]
    }
  ]
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route exact path="/">
          <section class = "home">
            <h1>Dogs and puppies</h1>
            <div class="cardContainer">
              {animals[0].pets.map(petObject => (
                <Card name={petObject.name} breed={petObject.breed} status={petObject.status} gender={petObject.gender} yearsOld={petObject.yearsOld}/>
              ))}
            </div>
            <h1>Cats</h1>
            <div class="cardContainer">
            {animals[1].pets.map(petObject => (
              <Card name={petObject.name} breed={petObject.breed} status={petObject.status} gender={petObject.gender} yearsOld={petObject.yearsOld}/>
            ))}
            </div>
          </section>
        </Route>
        <Route path="/rocky">
          <Animal pet={animals[0].pets[0]}/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
