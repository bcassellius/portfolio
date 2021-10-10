import React from "react";

const Modal = ({onClose, currentPhoto}) => {
    console.log(currentPhoto);
    const {name, category, description } = currentPhoto;
    console.log(currentPhoto);
    
    console.log(category);
    console.log(description);
    return(
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/images/${category}/${name}.png`).default} alt="current category" />
                <p>{description}</p>
                <button onClick={onClose} type='button'>
                    Close this image {/* modal */}
                </button>
            </div>
        </div>
    );
}

export default Modal;