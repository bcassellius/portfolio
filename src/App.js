import React, { useState } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: 'About Me', description: 'Info about Bri Cassellius' },
    { name: 'Resume', description: 'My qualifications' },
    { name: 'Portfolio', description: 'Here are some samples of my work.' },
    { name: 'Contact', desription: 'Contact me with any questions/comments.'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Navigation>
      <main>
        {currentCategory.name === "Portfolio" && <Portfolio currentCategory={currentCategory}></Portfolio>}
        {currentCategory.name === "About Me" &&  <About currentCategory={currentCategory}></About> }
        {currentCategory.name === "Resume" &&  <Resume currentCategory={currentCategory}></Resume>}
        {currentCategory.name === "Contact" &&  <ContactForm currentCategory={currentCategory}></ContactForm>}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
