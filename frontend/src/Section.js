import React, { Component } from "react";
import Card from "./Card"
import "./Section.css"

class Section extends Component {
    render() {
        return(
            <div className="sectionContainer">
                <h1>{this.props.title}</h1>
                <div className="pets">
                    {this.props.animals[this.props.id].pets.map(petObject => (
                        <Card pic={petObject.pic} name={petObject.name} breed={petObject.breed} status={petObject.status} gender={petObject.gender} yearsOld={petObject.yearsOld} id = {petObject.id}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Section