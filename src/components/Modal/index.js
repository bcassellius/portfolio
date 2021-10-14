import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
    const { name, description, index, url, github  } = currentPhoto;
    
    return (
        <div className="modalBackdrop">
          <div className="modalContainer">
            <h3 className="modalTitle">{name} </h3>
                <img src={require(`../../assets/images/${index}.png`).default} height="500" alt="current category" /> 
                <button className="btn modalButton" type="button" onClick={() => window.open(`${url}`, `_blank`)}>Visit this App</button>
                <button className="btn modalButton" type="button" onClick={() => window.open(`${github}`, `_blank`)}>Check Out the Github Repository</button>
                <p className="modalDescription">{description}</p>
                <button className="btn modalButton" type="button" onClick={onClose}>
                    Back to Portfolio
                </button>
            </div>
        </div>
    );
}

export default Modal;