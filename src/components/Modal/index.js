import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
    const { name, description, index, url, github  } = currentPhoto;
    
    return (
        <div className="modalBackdrop">
          <div className="modalContainer">
            <h3 className="modalTitle">{name} </h3>
                <img src={require(`../../assets/images/${index}.png`).default} height="500" alt="current category" /> 
                <button onClick={event => window.location.href=`${url}`}>Visit this App</button>
                <button onClick={() => window.open(`${github}`, `_blank`)}>Check Out the Github Repository</button>
                {/* <button onClick={event => window.location.href=`${github}`}>Check Out the Github Repository</button> */}
                {/* <Link to=" https://dry-wildwood-65158.herokuapp.com/">Deployed App</Link> */}
                <p>{description}</p>
                <button type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;