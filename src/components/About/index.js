import React from "react";
import avitar from "../../assets/images/avitar.png";
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

            <div className="footer flex-row">
                <button type="button" className="btn btn-link"><a href="https://stackoverflow.com/users/15891840/bri" target="_blank">Stack Overflow</a></button>
                <button type="button" className="btn btn-link"><a href="https://www.linkedin.com/in/bri-cassellius-04286b211" target="_blank">LinkedIn</a></button>
                <button type="button" className="btn btn-link"><a href="https://github.com/bcassellius" target="_blank">Github</a></button>
                <button type="button" className="btn btn-link"><a class="mailto" href="mailto:bhilliker@gmail.com"target="_blank">Email Me</a></button>
            </div>        
        </section>
    );
}

export default About;