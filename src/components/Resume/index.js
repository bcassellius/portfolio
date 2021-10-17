import React from "react";
import "./style.css";

function Resume() {

    return(
        <div>
            <h1 className="resume">Resume</h1>
            {/* <p>I'm new at this!</p> */}
            <img src={require(`../../assets/images/wordcloud.png`).default} 
            className="responsive-image"
            alt="skills"
            />
            <h3>Skills</h3>
            <ul className="skill">
                <li>html</li>
                <li>css</li>
                <li>github</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Object-Oriented Programming</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>Object Relational Mapping</li>
                <li>Model-View-Controller</li>
                <li>NoSQL</li>
                <li>Progressive Web Applications</li>
                <li>React</li>
                <li>MERN stack</li>
            </ul>
            <button type="button" className="btn download btn-link"><a href="../../assets/RESUME.pdf" download="bri" >Download Resume</a></button>
        </div>

    );
}

export default Resume;