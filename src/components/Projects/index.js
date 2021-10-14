import React, { useState } from 'react';
import Modal from '../Modal';

const Projects = ({category}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [photos] = useState([
    {
      name: 'weather',
      category: 'Portfolio',
      url: `https://bcassellius.github.io/weather-dashboard/`,
      github: `https://github.com/bcassellius/weather-dashboard.git`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'database',
      category: 'Portfolio',
      github: `https://github.com/bcassellius/employee-tracker.git`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'books',
      category: 'Portfolio',
      url: 'https://dry-wildwood-65158.herokuapp.com/',
      github: `https://github.com/bcassellius/book-tracker.git`,
      description: `This is a group project that was created with Express, handlebars, and MySQL. 
      
      This is a live app that allows a user to login and keep track of books they've read and would like to read.

      From the login page, a user can sign up and then later can login and the app will save the user's book data.
      
      A user's dashboard has a book form that can be filled out. Once the book is entered, it is added to the full list of books and is also sorted by user specification.`,
    },
    {
      name: 'utopia',
      category: 'Portfolio',
      url: `https://bcassellius.github.io/Utopia/`,
      github: `https://github.com/bcassellius/Utopia.git`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'budget',
      category: 'Portfolio',
      url: `https://nameless-fortress-29034.herokuapp.com/`,
      github: `https://github.com/bcassellius/budget-tracker.git`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'notes',
      category: 'Portfolio',
      url: `https://secure-earth-84273.herokuapp.com/`,
      github: `https://github.com/bcassellius/note-taker.git`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
  ]);

  const [currentPhoto, setCurrentPhoto] = useState();
  const currentPhotos = photos.filter((photo) => photo.category === category);
  
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  return(
    <div>
      {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal}/>)}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/${i}.png`).default}
            alt={image.name}
            height="200"
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;