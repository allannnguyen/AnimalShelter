import React from 'react';
import './App.css';

const Animal = (props) => (
    <section class="animal">
        <h1>{props.pet.name}</h1>
        <div class="pic-info-header">
            <img src={props.pet.pic} height='500' width='640'/>
            <div class="info-box">
                <p>Breed: {props.pet.breed}</p>
                <p>Status: {props.pet.status}</p>
                <p>Info: {props.pet.gender}, {props.pet.yearsOld} years old</p>
            </div>
        </div>
        {props.pet.adopted? (<button class="review">Awaiting review</button>) : (<button class="adopt">ADOPT ME!</button>)}
    </section>
)

export default Animal