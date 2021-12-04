import React from "react";
import Projects from '../Projects';
import avitar from "../../assets/images/avitar.png";
import "./style.css";
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails, AccordionActions, Button } from '@material-ui/core';
// accordion tutorial --> https://www.freakyjolly.com/react-material-ui-accordion-tabs-tutorial-with-example/


function About() {
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
            <div className='line'>
                <div>
                    <h1 class="look me">Take a look at some of my recent projects...</h1>
                </div>
                <div id="main">
                    <div>
                        <h3>Full Stack</h3>
                        <ul className="skill">
                            <li>
                                <div >
                                    <img src={require(`../../assets/images/0.png`).default} 
                                        className="responsive-image"
                                        alt="project example"
                                    />
                                    <Accordion style={{background:`var(--background)`}}>
                                        <AccordionSummary expandIcon={<ExpandMore />}>
                                            Lovely Librarian
                                        </AccordionSummary>
                                        <AccordionDetails className='accord' >
                                            This is a group project responsive PWA that is used by librarians for internal library tasks. It is a MERN SPA that follows mobile-first practices and was created with React and styled using React Bootstrap and CSS. It is deployed using heroku. This app allows the user to search for books using the google books api as well as see the staff directory and events calendar.
                                        </AccordionDetails>
                                        <AccordionActions>
                                            <Button 
                                                style={{ border: `2px solid #3b3355ff`}} 
                                                size="small" 
                                                onClick={() => 
                                                    window.open('https://github.com/bcassellius/lovely-librarian.git', '_blank')}>
                                                        Github Repo
                                            </Button>
                                            <Button 
                                                style={{ border: `2px solid #3b3355ff`}} 
                                                size="small" 
                                                onClick={() => 
                                                    window.open('https://lovely-librarian.herokuapp.com/', '_blank')}>
                                                        Deployed App
                                            </Button>
                                        </AccordionActions>
                                    </Accordion>
                                </div>                               
                            </li>
                            <li className='line'>
                                <img src={require(`../../assets/images/3.png`).default} 
                                    className="responsive-image"
                                    alt="project example"
                                />
                                <Accordion style={{background:`var(--background)`}}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        Book Tracker
                                    </AccordionSummary>
                                    <AccordionDetails className='accord' >
                                        This is a group project that was created with Express, handlebars, and MySQL. It is deployed using heroku. This is a live app that allows a user to login and keep track of books they've read and would like to read. From the login page, a user can sign up and then later can login and the app will save the user's book data. A user's dashboard has a book form that can be filled out. Once the book is entered, it is added to the full list of books and is also sorted by user specification.                                    </AccordionDetails>
                                    <AccordionActions>
                                        <Button 
                                            style={{ border: `2px solid #3b3355ff`}} 
                                            size="small" 
                                            onClick={() => 
                                                window.open('https://github.com/bcassellius/book-tracker.git', '_blank')}>
                                                    Github Repo
                                        </Button>
                                        <Button 
                                            style={{ border: `2px solid #3b3355ff`}} 
                                            size="small" 
                                            onClick={() => 
                                                window.open('https://dry-wildwood-65158.herokuapp.com/', '_blank')}>
                                                    Deployed App
                                        </Button>
                                    </AccordionActions>
                                </Accordion>
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
                                <img src={require(`../../assets/images/4.png`).default} 
                                    className="responsive-image"
                                    alt='project example'
                                />
                                <Accordion style={{background:`var(--background)`}}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        Utopia Travel
                                    </AccordionSummary>
                                    <AccordionDetails className='accord' >
                                        This is a group project that was created with JavaScript, JQuery, Open APIs, and styled with Materialize. It is deployed using github. This is a live app that has many features including a currency converter, weather search, and city search that displays restaurants, hotels, and weather.
                                    </AccordionDetails>
                                    <AccordionActions>
                                        <Button 
                                            style={{ border: `2px solid #3b3355ff`}} 
                                            size="small" 
                                            onClick={() => 
                                                window.open('https://github.com/bcassellius/Utopia.git', '_blank')}>
                                                    Github Repo
                                        </Button>
                                        <Button 
                                            style={{ border: `2px solid #3b3355ff`}} 
                                            size="small" 
                                            onClick={() => 
                                                window.open('https://bcassellius.github.io/Utopia/', '_blank')}>
                                                    Deployed App
                                        </Button>
                                    </AccordionActions>
                                </Accordion>
                            </li>
                            <li className='line'>
                                <img src={require(`../../assets/images/1.png`).default} 
                                    className="responsive-image"
                                    alt='project example'
                                />
                                <Accordion style={{background:`var(--background)`}}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        Weather Dashboard
                                    </AccordionSummary>
                                    <AccordionDetails className='accord' >
                                        This is a weather app that was created with JavaScript and JQuery and styled using Bootstrap. It is deployed using github. This live app allows the user to search for destination weather. Once a city is entered and the search button is clicked, the current weather details and 5-day forcast details for that city will be displayed. Below the search box is a history of places you have searched.
                                    </AccordionDetails>
                                    <AccordionActions>
                                        <Button 
                                            style={{ border: `2px solid #3b3355ff`}} 
                                            size="small" 
                                            onClick={() => 
                                                window.open('https://github.com/bcassellius/weather-dashboard.git', '_blank')}>
                                                    Github Repo
                                        </Button>
                                        <Button 
                                            style={{ border: `2px solid #3b3355ff`}} 
                                            size="small" 
                                            onClick={() => 
                                                window.open('https://bcassellius.github.io/weather-dashboard/', '_blank')}>
                                                    Deployed App
                                        </Button>
                                    </AccordionActions>
                                </Accordion>
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
                                <img src={require(`../../assets/images/2.png`).default} 
                                    className="responsive-image"
                                    alt='project example'
                                />
                                <Accordion style={{background:`var(--background)`}}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        Employee Tracker
                                    </AccordionSummary>
                                    <AccordionDetails className='accord' >
                                        This is a group project responsive PWA that is used by librarians for internal library tasks. It is a MERN SPA that follows mobile-first practices and was created with React and styled using React Bootstrap and CSS. It is deployed using heroku. This app allows the user to search for books using the google books api as well as see the staff directory and events calendar.
                                    </AccordionDetails>
                                    <AccordionActions>
                                        <Button 
                                            style={{ border: `2px solid #3b3355ff`}} 
                                            size="small" 
                                            onClick={() => 
                                                window.open('https://github.com/bcassellius/employee-tracker.git', '_blank')}>
                                                    Github Repo
                                        </Button>
                                    </AccordionActions>
                                </Accordion>
                            </li>
                            <li className='line'>
                                <img src={require(`../../assets/images/5.png`).default} 
                                    className="responsive-image"
                                    alt='project example'
                                />
                                <Accordion style={{background:`var(--background)`}}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        Budget Tracker
                                    </AccordionSummary>
                                    <AccordionDetails className='accord' >
                                        This Progressive Web App was created with node.js, mongoose, compression, and morgan. It is deployed using heroku. It tracks the budget by adding or subtracting funds. It can be used with or without internet access and will update the data when connected.                                    </AccordionDetails>
                                    <AccordionActions>
                                        <Button 
                                            style={{ border: `2px solid #3b3355ff`}} 
                                            size="small" 
                                            onClick={() => 
                                                window.open('https://github.com/bcassellius/budget-tracker.git', '_blank')}>
                                                    Github Repo
                                        </Button>
                                        <Button 
                                            style={{ border: `2px solid #3b3355ff`}} 
                                            size="small" 
                                            onClick={() => 
                                                window.open('https://nameless-fortress-29034.herokuapp.com/', '_blank')}>
                                                    Deployed App
                                        </Button>
                                    </AccordionActions>
                                </Accordion>
                            </li>
                            <li className='line'>
                                <img src={require(`../../assets/images/6.png`).default} 
                                    className="responsive-image"
                                    alt='project example'
                                />
                                <Accordion style={{background:`var(--background)`}}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        Note Taker
                                    </AccordionSummary>
                                    <AccordionDetails className='accord' >
                                        This app was created with node.js and express. It is deployed using heroku. The app allows the user to write and access notes they created.                                    </AccordionDetails>
                                    <AccordionActions>
                                        <Button 
                                            style={{ border: `2px solid #3b3355ff`}} 
                                            size="small" 
                                            onClick={() => 
                                                window.open('https://github.com/bcassellius/note-taker.git', '_blank')}>
                                                    Github Repo
                                        </Button>
                                        <Button 
                                            style={{ border: `2px solid #3b3355ff`}} 
                                            size="small" 
                                            onClick={() => 
                                                window.open('https://secure-earth-84273.herokuapp.com/', '_blank')}>
                                                    Deployed App
                                        </Button>
                                    </AccordionActions>
                                </Accordion>
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