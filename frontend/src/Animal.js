import React from 'react'

const Animal = (props) => (
    <section>
        <h1>{props.pet.name}</h1>
        <img src="https://picsum.photos/350/250"/>
        <p>Breed: {props.pet.breed}</p>
        <p>Status: {props.pet.status}</p>
        <p>Info: {props.pet.gender}, {props.pet.yearsOld} years old</p>
        {props.pet.adopted? (<button>Awaiting review</button>) : (<button>Adopt me!</button>)}
    </section>
)

export default Animal