import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faSyringe } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Animal.css'
import CatPic from "./cat1.png"

const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const Animal = (props) => (
    <div>
        <h1>{props.pet.name}</h1>
        <section className="animalConatiner">
            <div className="mainInformation">
                <img src={CatPic} className="animalPicture"/>
                <div className="animalDetails">
                    <div className="animalDetail">
                        <FontAwesomeIcon icon={faDog} className="animalIcon" />
                        {props.pet.breed}
                    </div>
                    <div className="animalDetail">
                        <FontAwesomeIcon icon={faSyringe} className="animalIcon" />
                        {props.pet.status}
                    </div>
                    <div className="animalDetail">
                        <FontAwesomeIcon icon={faInfoCircle} className="animalIcon" />
                        {props.pet.gender}, {props.pet.yearsOld} years old
                    </div>
                </div>
            </div>
        </section>
        {description}
    </div>
)

export default Animal