import React from "react";
import avitar from "../../assets/images/avitar.png";
import Projects from '../Projects';

function About(props) {
    const { currentCategory } = props;
    return(
        <section>
            <h1 id="about">Bri Cassellius</h1>
            <img src={avitar}></img>
            <p class="me">
                Completing Coding Bootcamp through UW extension.
            </p>
            <p class="me">
                Excited to start on my coding journey.
            </p>
            <Projects category={currentCategory.name} />
        </section>
    );
}

export default About;