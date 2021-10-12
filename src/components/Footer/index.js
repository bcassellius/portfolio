import React from "react";


function Footer () {

    return(
       <div className="flex-row">
            <button type="button" class="btn btn-link"><a href="https://stackoverflow.com/users/15891840/bri" target="_blank">Stack Overflow</a></button>
            <button type="button" class="btn btn-link"><a href="https://www.linkedin.com/in/bri-cassellius-04286b211" target="_blank">LinkedIn</a></button>
            <button type="button" class="btn btn-link"><a href="https://github.com/bcassellius" target="_blank">Github</a></button>
       </div>
    );
}

export default Footer;