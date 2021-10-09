import react from "react";
import avitar from "../../assets/small/avitar.png"

function About() {

    return(
        <div>
            <h1 id="about">Bri Cassellius</h1>
            <img src={avitar}></img>
            <p class="me">
                Bri Cassellius
            </p>
            <p class="me">
                Completing Coding Bootcamp through UW extension.
            </p>
            <p class="me">
                Excited to start on my coding journey.
            </p>
        </div>
    );
}

export default About;