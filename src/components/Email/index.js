import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin, FaStackOverflow, FaRegEnvelope } from 'react-icons/fa';


function Email() {
  return (
    <section>
        <div className="flex-row">
            <button type="button" className="btn btn-link"><a href="https://stackoverflow.com/users/15891840/bri" target="_blank"><FaStackOverflow /></a></button>
            <span className="detail">https://stackoverflow.com/users/15891840/bri</span>
        </div>
        <div className="flex-row">
            <button type="button" className="btn btn-link"><a href="https://www.linkedin.com/in/bri-cassellius-04286b211" target="_blank"><FaLinkedin /></a></button>
            <span className="detail">https://www.linkedin.com/in/bri-cassellius-04286b211</span>
        </div>
        <div className="flex-row">
            <button type="button" className="btn btn-link"><a href="https://github.com/bcassellius" target="_blank"><FaGithub /></a></button>
            <span className="detail">https://github.com/bcassellius</span>
        </div>
        <div className="flex-row">
            <button type="button" className="btn btn-link"><a class="mailto" href="mailto:bhilliker@gmail.com"target="_blank"><FaRegEnvelope /></a></button>
            <span className="detail">bhilliker@gmail.com</span>
        </div>
    </section>
  );
}
export default Email;