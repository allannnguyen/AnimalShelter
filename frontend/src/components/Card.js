import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faSyringe } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import "./Card.css"

class Card extends Component {
    render() {
        return (
            <div className="package">
                <div className="cardContainer">
                    <img src={this.props.image} className="animal-photo"></img>
                    <div className="details">
                        <h2>{this.props.name}</h2>
                        <div className="detail">
                            <FontAwesomeIcon icon={faDog} className="icon" />
                            {this.props.breed}
                        </div>
                        <div className="detail">
                            <FontAwesomeIcon icon={faSyringe} className="icon" />
                            {this.props.status}
                        </div>
                        <div className="detail">
                            <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                            {this.props.gender}, {this.props.yearsOld} years old
                        </div>
                    </div>
                    <a href={"/" + this.props.id} className="link">View more details   <FontAwesomeIcon icon={faArrowDown} /></a>
                </div>
            </div>
        )
    }
}

export default Card;