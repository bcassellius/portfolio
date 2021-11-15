import React from "react";
import "./style.css";


function Footer () {

    return(
       <div className="footer flex-row">
            {/* <i class="fab fa-stack-overflow"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-linkedin"></i> */}

            <button type="button" className="btn btn-link"><a href="https://stackoverflow.com/users/15891840/bri" target="_blank">Stack Overflow</a></button>
            <button type="button" className="btn btn-link"><a href="https://www.linkedin.com/in/bri-cassellius-04286b211" target="_blank">LinkedIn</a></button>
            <button type="button" className="btn btn-link"><a href="https://github.com/bcassellius" target="_blank">Github</a></button>
            <button type="button" className="btn btn-link"><a class="mailto" href="mailto:bhilliker@gmail.com"target="_blank">Email Me</a></button>
       </div>
    );
}

export default Footer;