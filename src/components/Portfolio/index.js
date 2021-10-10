import React, { useState } from 'react';
import Modal from '../Modal';

const Portfolio = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photos] = useState([
        {
          name: 'weather',
          category: 'Portfolio',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'database',
          category: 'Portfolio',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'books',
          category: 'Portfolio',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'utopia',
          category: 'Portfolio',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'budget',
          category: 'Portfolio',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'notes',
          category: 'Portfolio',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        }
    ]);

    const [currentPhoto, setCurrentPhoto] =useState();
    const currentPhotos = photos.filter((photo) => photo.category === category);
    const toggleModal = (image, i) => {
      setCurrentPhoto({...image, index: i})
      setIsModalOpen(!isModalOpen);
    } 
    return (
      <div>
        {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal} />)}
          <div className="flex-row">
          {currentPhotos.map((image, i) => (
            <img
              src={require(`../../assets/images/${category}/${image.name}.png`).default} //.default was discussed in office hours
              alt={image.name}
              className="img-thumbnail mx-1"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default Portfolio;