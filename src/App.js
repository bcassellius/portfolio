import './App.css';
import react, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Portfolio';
import ContactForm from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        {/* <Header></Header> */}
        <About></About>
        {/* <Portfolio></Portfolio> */}
        {/* <Resume></Resume> */}
        <ContactForm></ContactForm>
        {/* <Footer></Footer> */}
      </main>
    </div>
  );
}

export default App;
