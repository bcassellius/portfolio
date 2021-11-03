import React, { useState } from 'react';
import Modal from '../Modal';
import "./style.css";

const Projects = ({category}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [photos] = useState([
    {
      name: 'librarian',
      category: 'Portfolio',
      url: `https://lovely-librarian.herokuapp.com/`,
      github: `https://github.com/bcassellius/lovely-librarian.git`,
      description: `This is a group project responsive PWA that is used by librarians for internal library tasks. It is a MERN SPA that follows mobile-first practices and was created with React and styled using React Bootstrap and CSS. It is deployed using heroku. This app allows the user to search for books using the google books api as well as see the staff directory and events calendar.`,
    },
    {
      name: 'weather',
      category: 'Portfolio',
      url: `https://bcassellius.github.io/weather-dashboard/`,
      github: `https://github.com/bcassellius/weather-dashboard.git`,
      description: `This is a weather app that was created with JavaScript and JQuery and styled using Bootstrap. It is deployed using github. This live app allows the user to search for destination weather. Once a city is entered and the search button is clicked, the current weather details and 5-day forcast details for that city will be displayed. Below the search box is a history of places you have searched.`,
    },
    {
      name: 'database',
      category: 'Portfolio',
      github: `https://github.com/bcassellius/employee-tracker.git`,
      description: 'This is a CLI app created with inquirer and MySQL2. It allows the user to keep track of employees and their details. ',
    },
    {
      name: 'books',
      category: 'Portfolio',
      url: 'https://dry-wildwood-65158.herokuapp.com/',
      github: `https://github.com/bcassellius/book-tracker.git`,
      description: `This is a group project that was created with Express, handlebars, and MySQL. It is deployed using heroku. This is a live app that allows a user to login and keep track of books they've read and would like to read. From the login page, a user can sign up and then later can login and the app will save the user's book data. A user's dashboard has a book form that can be filled out. Once the book is entered, it is added to the full list of books and is also sorted by user specification.`,
    },
    {
      name: 'utopia',
      category: 'Portfolio',
      url: `https://bcassellius.github.io/Utopia/`,
      github: `https://github.com/bcassellius/Utopia.git`,
      description: `This is a group project that was created with JavaScript, JQuery, Open APIs, and styled with Materialize. It is deployed using github. This is a live app that has many features including a currency converter, weather search, and city search that displays restaurants, hotels, and weather.`,
    },
    {
      name: 'budget',
      category: 'Portfolio',
      url: `https://nameless-fortress-29034.herokuapp.com/`,
      github: `https://github.com/bcassellius/budget-tracker.git`,
      description: 'This Progressive Web App was created with node.js, mongoose, compression, and morgan. It is deployed using heroku. It tracks the budget by adding or subtracting funds. It can be used with or without internet access and will update the data when connected.',
    },
    {
      name: 'notes',
      category: 'Portfolio',
      url: `https://secure-earth-84273.herokuapp.com/`,
      github: `https://github.com/bcassellius/note-taker.git`,
      description: 'This app was created with node.js and express. It is deployed using heroku. The app allows the user to write and access notes they created. ',
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
            className="responsive"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;