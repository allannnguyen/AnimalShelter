import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faSyringe } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import "./Card.css"

const Card = (props) => (
    // <section class="card">
    //     <img src={props.pic} height='250' width='320'/>
    //     <div class="card-content">
    //         <h1>{props.name}</h1>
    //         <p>{props.breed}</p>
    //         <p>{props.status}</p>
    //         <p>{props.gender}, {props.yearsOld} years old</p>
    //         <a href={'/' + props.id}>View more details ↓ </a>
    //     </div>
    // </section>
        <div className="package">
        <div className="cardContainer">
            <img src={props.pic} className="animal-photo" height='250' width='250'></img>
            <div className="details">
                <h2>{props.name}</h2>
                <div className="detail">
                    <FontAwesomeIcon icon={faDog} className="icon" />
                    {props.breed}
                </div>
                <div className="detail">
                    <FontAwesomeIcon icon={faSyringe} className="icon" />
                    {props.status}
                </div>
                <div className="detail">
                    <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                    {props.gender}, {props.yearsOld} years old
                </div>
            </div>
            <a href={"/" + props.id} className="link">View more details   <FontAwesomeIcon icon={faArrowDown} /></a>
        </div>
    </div>
)

export default Card
