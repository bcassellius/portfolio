import './App.css';
import react, { useState } from 'react';
import Header from './components/Header';
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
    { name: 'Portfolio', description: 'Samples of my Work' },
    { name: 'Contact', dexription: 'Contact me with any questions/comments.'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
      <main>
        {/* <Header></Header> */}
        <About></About>
        <Portfolio></Portfolio>
        {/* <Resume></Resume> */}
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
