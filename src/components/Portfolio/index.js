import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/images/portfolio/books.png";
import Projects from '../Projects'

function Portfolio({currentCategory}) {
  const { name, description } =  currentCategory;

  return (
    <section>
      <h1>{name}</h1>
      <p>{description}</p>
      <Projects category={currentCategory.name} />
    </section>
  );
}
export default Portfolio;