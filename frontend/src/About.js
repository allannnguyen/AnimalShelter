import React from 'react';
import './App.css';
import header from './about-header.jpg';

const About = (props) => (
    <section>
        <div class="about-img">
            <img src={header}/>
        </div>
        <div class ="about">
            <h1>Our mission</h1>
            <p>Our mission is to advocate for animals by providing safety until home placement of those in our care.
                We promote spay and neuter programs as a mean to control pet overpopulation and
            </p>

            <h1>Wish list</h1>
            <p>We always have a long shopping list at the Shelter! Donated items can be dropped off at the
                shelter located at 56 Broad Street in Quincy during adoption hours and left with any of our Volunteers or shipped
                directly to us from Amazon. Check out our wish list!
            </p>
            <h1>Volunteer</h1>
            <p>Volunteers are the backbone of our efforts to improve the lives of the animals in our care. You can also become
                a guardian angel and sponsor a cage or kennel at the shelter. You can become a member of QAS or help out with one of our available
                positions at QAS.
            </p>
            <h1>Adoption hours</h1> 
            <p>Tuesday - 6-9 PM</p>
            <p>Thursday - 6-8 PM</p>
            <p>Saturday - 10 AM - 4PM</p>
        </div>
    </section>
)

export default About