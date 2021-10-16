import React from "react";
import "./style.css";


function Footer () {

    return(
       <div className="footer flex-row">
            <button type="button" className="btn btn-link"><a href="https://stackoverflow.com/users/15891840/bri" target="_blank">Stack Overflow</a></button>
            <button type="button" className="btn btn-link"><a href="https://www.linkedin.com/in/bri-cassellius-04286b211" target="_blank">LinkedIn</a></button>
            <button type="button" className="btn btn-link"><a href="https://github.com/bcassellius" target="_blank">Github</a></button>
       </div>
    );
}

export default Footer;