import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faSyringe } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Animal.css'

const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const Animal = (props) => (
    // <section class="animal">
    //     <h1>{props.pet.name}</h1>
    //     <div class="pic-info-header">
    //         <img src={props.pet.pic} height='500' width='640'/>
    //         <div class="info-box">
    //             <p>Breed: {props.pet.breed}</p>
    //             <p>Status: {props.pet.status}</p>
    //             <p>Info: {props.pet.gender}, {props.pet.yearsOld} years old</p>
    //         </div>
    //     </div>
    //     {props.pet.adopted? (<button class="review">Awaiting review</button>) : (<button class="adopt">ADOPT ME!</button>)}
    // </section>
    <div>
    <section className="animalContainer">
        <h1>{props.pet.name}</h1>
        <div className="mainInformation">
            <img src={props.pet.pic} className="animalPicture"/>
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
        <div class="desc">
            {description}
        </div>
        {props.pet.adopted? (<button class="review">Awaiting review</button>) : (<button class="adopt">ADOPT ME!</button>)}
    </section>
</div>
)

export default Animal