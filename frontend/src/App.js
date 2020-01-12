import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'
import Animal from './Animal';
import About from './About';
import Navbar from './Navbar';
import Section from './Section';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import API from "./utils/API";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: 
      [
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
              pic: "https://picsum.photos/320/250"
            },
            {
              name: 'Juju',
              breed: 'American staff cross',
              status: 'Vaccinated, not neutered',
              gender: 'Male',
              yearsOld: 7,
              adopted: true,
              id: 2,
              pic: "https://picsum.photos/320/250"
            },
            {
              name: 'Knuckles II',
              breed: 'Anatolian Sheperd',
              status: 'Neutered and vaccinated',
              gender: 'Male',
              yearsOld: 1,
              adopted: false,
              id: 3,
              pic: "https://picsum.photos/320/250"
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
              pic: "https://picsum.photos/320/250"
            },
            {
              name: 'Chonker',
              breed: 'Main coone',
              status: 'Status unknown',
              gender: 'Female',
              yearsOld: 5,
              adopted: true,
              id: 5,
              pic: "https://picsum.photos/320/250"
            },
            {
              name: 'Kip',
              breed: 'Domestic shorthair',
              status: 'Neutered and vaccinated',
              gender: 'Female',
              yearsOld: 2,
              adopted: false,
              id: 6,
              pic: "https://picsum.photos/320/250"
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    API.get('/').then((res) => {
      console.log(res.data.stuff)
      this.setState({animals: res.data.stuff})
    })
  }
  
  render() {
      return (
        <BrowserRouter>
        <Navbar/>

      <Switch>
        <Route exact path="/">
          {/* <section class = "home">
            <h1>Dogs and puppies</h1>
            <div class="cardContainer">
              {this.state.animals[0].pets.map(petObject => (
                <Card name={petObject.name} breed={petObject.breed} status={petObject.status} gender={petObject.gender} yearsOld={petObject.yearsOld} id = {petObject.id} pic = {petObject.pic}/>
              ))}
            </div>
            <h1>Cats</h1>
            <div class="cardContainer">
            {this.state.animals[1].pets.map(petObject => (
              <Card name={petObject.name} breed={petObject.breed} status={petObject.status} gender={petObject.gender} yearsOld={petObject.yearsOld} id = {petObject.id} pic = {petObject.pic}/>
            ))}
            </div>
          </section> */}
          <div class="home"></div>
          <Section title="Dogs and puppies" id="0" animals={this.state.animals}/>
          <Section title="Cats" id="1" animals={this.state.animals}/>
        </Route>
        <Route path="/1">
          <Animal pet={this.state.animals[0].pets[0]}/>
        </Route>
        <Route path="/2">
          <Animal pet={this.state.animals[0].pets[1]}/>
        </Route>
        <Route path="/3">
          <Animal pet={this.state.animals[0].pets[2]}/>
        </Route>
        <Route path="/4">
          <Animal pet={this.state.animals[1].pets[0]}/>
        </Route>
        <Route path="/5">
          <Animal pet={this.state.animals[1].pets[1]}/>
        </Route>
        <Route path="/6">
          <Animal pet={this.state.animals[1].pets[2]}/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
    </BrowserRouter>
      );
  }
}

export default App
