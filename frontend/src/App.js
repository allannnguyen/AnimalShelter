import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'
import Nav from './Nav';

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
        }
      ]
    }
  ]
  const firstAnimal = animals[0].pets[0]
  return (
    <section>
      <Nav />
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
  );
}

export default App;
