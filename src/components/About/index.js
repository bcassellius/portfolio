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
            
            <div>
                <div id="main">
                    <div>
                        <h3>Full Stack</h3>
                        <ul className="skill">
                            <li>
                                <img src={require(`../../assets/images/0.png`).default} 
                                    className="responsive-image"
                                    alt="skills"
                                />
                            </li>
                            <li>
                                <img src={require(`../../assets/images/3.png`).default} 
                                    className="responsive-image"
                                    alt="skills"
                                />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>Front-End</h3>
                        <ul className="skill">
                            <li>
                                <img src={require(`../../assets/images/4.png`).default} 
                                    className="responsive-image"
                                    alt="skills"
                                />
                            </li>
                            <li>
                                <img src={require(`../../assets/images/1.png`).default} 
                                    className="responsive-image"
                                    alt="skills"
                                />
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3>Back-End</h3>
                        <ul className="skill">
                            <li>
                                <img src={require(`../../assets/images/2.png`).default} 
                                    className="responsive-image"
                                    alt="skills"
                                />
                            </li>
                            <li>
                                <img src={require(`../../assets/images/5.png`).default} 
                                    className="responsive-image"
                                    alt="skills"
                                />
                            </li>
                            <li>
                                <img src={require(`../../assets/images/6.png`).default} 
                                    className="responsive-image"
                                    alt="skills"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;