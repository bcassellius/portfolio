import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin, FaStackOverflow, FaRegEnvelope } from 'react-icons/fa';


function Footer () {

    return(
        <div className="footer flex-row">
            <button type="button" className="btn btn-link"><a href="https://stackoverflow.com/users/15891840/bri" target="_blank"><FaStackOverflow /></a></button>
            <button type="button" className="btn btn-link"><a href="https://www.linkedin.com/in/bri-cassellius-04286b211" target="_blank"><FaLinkedin /></a></button>
            <button type="button" className="btn btn-link"><a href="https://github.com/bcassellius" target="_blank"><FaGithub /></a></button>
            <button type="button" className="btn btn-link"><a class="mailto" href="mailto:bhilliker@gmail.com"target="_blank"><FaRegEnvelope /></a></button>
        </div> 
    );
}

export default Footer;