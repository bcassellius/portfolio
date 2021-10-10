import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Portfolio from "../Portfolio";

function Projects(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{currentCategory.name}</h1>
      <p>{currentCategory.description}</p>
      <Portfolio category={currentCategory.name} />
    </section>
  );
}
export default Projects;