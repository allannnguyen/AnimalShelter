import React from 'react'

const Card = (props) => (
    <section class="card">
        <img src="https://picsum.photos/350/250"/>
        <div class="card-content">
            <h1>{props.name}</h1>
            <p>{props.breed}</p>
            <p>{props.status}</p>
            <p>{props.gender}, {props.yearsOld} years old</p>
            <button>View more details</button>
        </div>
    </section>
)

export default Card
