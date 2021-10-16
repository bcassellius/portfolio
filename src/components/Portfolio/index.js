import React from "react";
import Projects from '../Projects';
import "./style.css";

function Portfolio(props) {
  const { currentCategory } = props;
  console.log(currentCategory);
  return (
    <section>
      <h1 data-testid="h1tag">{currentCategory.name}</h1>
      <p>{currentCategory.description}</p>
      <Projects category={currentCategory.name} />
    </section>
  );
}
export default Portfolio;