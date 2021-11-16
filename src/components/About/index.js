import React from "react";
import Projects from '../Projects';
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
            <div style={{ borderTop: "2px solid #3b3355ff ", marginLeft: 20, marginRight: 20 }}></div>
            <div>
                <div>
                    <h1 class="look me">Take a look at some of my recent projects...</h1>
                </div>
                <div id="main">
                    <div>
                        <h3>Full Stack</h3>
                        <ul className="skill">
                            <li>
                                <div>
                                    <a href="https://lovely-librarian.herokuapp.com/" target="_blank">
                                        <img src={require(`../../assets/images/0.png`).default} 
                                            className="responsive-image"
                                            alt="skills"
                                        />
                                        <p>Lovely Librarian</p>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <a href='https://dry-wildwood-65158.herokuapp.com/' target='blank'>
                                    <img src={require(`../../assets/images/3.png`).default} 
                                        className="responsive-image"
                                        alt="skills"
                                    />
                                    <p>Book Tracker</p>
                                </a>
                            </li>
                            <li>
                            <Projects stack={'full'} />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>Front-End</h3>
                        <ul className="skill">
                            <li>
                                <a href='https://bcassellius.github.io/Utopia/' target='blank'>
                                    <img src={require(`../../assets/images/4.png`).default} 
                                        className="responsive-image"
                                        alt="skills"
                                    />
                                    <p>Utopia Travel</p>
                                </a>
                            </li>
                            <li>
                                <a href='https://bcassellius.github.io/weather-dashboard/' target='blank'>
                                    <img src={require(`../../assets/images/1.png`).default} 
                                        className="responsive-image"
                                        alt="skills"
                                    />
                                    <p>Weather Dashboard</p>
                                </a>
                            </li>
                            <li>
                            <Projects stack={'front'} />
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3>Back-End</h3>
                        <ul className="skill">
                            <li>
                                <a href='https://github.com/bcassellius/employee-tracker.git' target='blank'>
                                    <img src={require(`../../assets/images/2.png`).default} 
                                        className="responsive-image"
                                        alt="skills"
                                    />
                                    <p>Employee Tracker</p>
                                </a>
                            </li>
                            <li>
                                <a href='https://nameless-fortress-29034.herokuapp.com/' target='blank'>
                                    <img src={require(`../../assets/images/5.png`).default} 
                                        className="responsive-image"
                                        alt="skills"
                                    />
                                    <p>Budget Tracker</p>
                                </a>
                            </li>
                            <li>
                                <a href='https://secure-earth-84273.herokuapp.com/' target='blank'>
                                    <img src={require(`../../assets/images/6.png`).default} 
                                        className="responsive-image"
                                        alt="skills"
                                    />
                                    <p>Note Taker</p>
                                </a>
                            </li>
                            <li>
                            <Projects stack={'back'} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;