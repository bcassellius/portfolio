import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin, FaStackOverflow, FaRegEnvelope } from 'react-icons/fa';


function Email() {
  return (
    <section>
        <div className="flex-row">
            <button type="button" className="btn btn-link"><a href="https://stackoverflow.com/users/15891840/bri" target="_blank"><FaStackOverflow /></a></button>
            <button disabled className="detail">https://stackoverflow.com/users/15891840/bri</button>
        </div>
        <div className="flex-row">
            <button type="button" className="btn btn-link"><a href="https://www.linkedin.com/in/bri-cassellius-04286b211" target="_blank"><FaLinkedin /></a></button>
            <button disabled className="detail">https://www.linkedin.com/in/bri-cassellius-04286b211</button>
        </div>
        <div className="flex-row">
            <button type="button" className="btn btn-link"><a href="https://github.com/bcassellius" target="_blank"><FaGithub /></a></button>
            <button disabled className="detail">https://github.com/bcassellius</button>
        </div>
        <div className="flex-row">
            <button type="button" className="btn btn-link"><a class="mailto" href="mailto:bhilliker@gmail.com"target="_blank"><FaRegEnvelope /></a></button>
            <button disabled className="detail">bhilliker@gmail.com</button>
        </div>
    </section>
  );
}
export default Email;