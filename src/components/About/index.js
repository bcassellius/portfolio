import React from "react";
import avitar from "../../assets/images/avitar.png";
import Projects from '../Projects';
import "./style.css";

function About(props) {
    const { currentCategory } = props;
    return(
        <section>
            <h1 id="about">Bri Cassellius</h1>
            <img src={avitar} className="avitar"></img>
            <p class="me">
            MERN stack developer 
            </p>
            <p class="me">
            Building Applications * Having Fun * Developing New Skills
            </p>
            <p class="me">
                Excited to start on my next coding journey with you!
            </p>
            <Projects category={currentCategory.name} />
        </section>
    );
}

export default About;