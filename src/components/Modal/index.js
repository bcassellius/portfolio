import React from "react";
import "./style.css";

const Modal = ({ onClose, currentPhoto }) => {
    const { name, description, index, url, github  } = currentPhoto;
    
    return (
        <div className="modalBackdrop">
          <div className="modalContainer">
            <button className="btn modalButton close" type="button" onClick={onClose}>X</button>
            <h3 className="modalTitle">{name} </h3>
            <img src={require(`../../assets/images/${index}.png`).default} class="modalPic center" height="500" alt="current category" /> 
                <p className="modalDescription">{description}</p>
                <button className="btn modalButton center" type="button" onClick={() => window.open(`${url}`, `_blank`)}>Visit this App</button>
                <button className="btn modalButton center" type="button" onClick={() => window.open(`${github}`, `_blank`)}>Check Out the Github Repository</button>
            </div>
        </div>
    );
}

export default Modal;