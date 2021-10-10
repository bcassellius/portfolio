import React, { useState } from 'react';
import Modal from '../Modal';


const Projects = ({category}) => {
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

  const currentPhotos = photos.filter((photo) => photo.category === category);
  const toggleModal = (image, name) => {
    setCurrentPhoto({...image, index: name});
    setIsModalOpen(!isModalOpen);
  }
  const [currentPhoto, setCurrentPhoto] = useState();


  return(
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {photos.map((image, name) => (
          <img
            src={require(`../../assets/images/portfolio/${image.name}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, name)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects