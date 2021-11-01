import React from "react";
import "./style.css";

function Resume() {

    return(
        <div>
            <div>
                <button type="button" className="btn download btn-link"><a href="https://github.com/bcassellius/portfolio/raw/main/public/resume2021.pdf" download="bri" >Download Resume</a></button>
            </div>
            <img src={require(`../../assets/images/wordcloud.png`).default} 
                className="responsive-image"
                alt="skills"
            />

            <div id="main">
                <div>
                    <h3>Programming Languages</h3>
                    <ul className="skill">
                        <li>HTML5  |  CSS</li>
                        <li>JavaScript</li>
                        <li>SQL  |  NoSQL</li>
                        <li>GraphQL</li>
                    </ul>
                </div>

                <div>
                    <h3>Applications</h3>
                    <ul className="skill">
                        <li>Node.js | MongoDB</li>
                        <li>Apollo | Insomnia  </li>
                        <li>MySQL | NoSQL  </li>
                        <li>GitHub | Heroku</li>
                        <li>Lighthouse</li>
                        
                    </ul>
                </div>
                
                <div>
                    <h3>Frameworks and Libraries</h3>
                    <ul className="skill">
                        <li>Express.js | React</li>
                        <li>jQuery | Mongoose</li>
                        <li>MySQL2 | Sequelize</li>
                        <li>Webpack | jest</li>
                        <li>Bootstrap | Materialize</li>
                        <li>Inquirer</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Resume;