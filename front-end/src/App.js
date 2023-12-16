import { Link as ScrollLink, Element } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Mooo from './Mooo';
import Yogi from './Yogi';
import './App.css';
import ContactFooter from './ContactFooter';

function getRandomPastelColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

  

function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [colorToggle, setColorToggle] = useState(false);
  
  const randomPastelColorMooo = getRandomPastelColor();
  const randomPastelColorYogi = getRandomPastelColor();
  const randomPastelColorFlower = getRandomPastelColor();

  //test
  useEffect(() => {
    const handleScroll = () => {
      // Get the header element
      const header = document.getElementById('app-header');

      // Add or remove the 'fixed-header' class based on the scroll position
      if (window.pageYOffset > 80) {
        header.classList.add('fixed-header');
      } else {
        header.classList.remove('fixed-header');
      }
    };

     // Attach the scroll event listener
     window.addEventListener('scroll', handleScroll);

     // Clean up the event listener on component unmount
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);

   const toggleComponent = (component) => {
    setActiveComponent(component);
  };

  const toggleColor = () => {
    setColorToggle(!colorToggle);
  };
  
  const colorBlockStyleMooo = {
    display: activeComponent === 'Yogi' ? 'none' : 'inline-block',
    padding: '10px',
    background: `linear-gradient(to right, ${colorToggle ? getRandomPastelColor() : randomPastelColorMooo} 0%, ${colorToggle ? getRandomPastelColor() : randomPastelColorMooo} 51%, ${colorToggle ? getRandomPastelColor() : randomPastelColorMooo} 100%)`,
    textDecoration: 'none',
    height: '600px',
    width: '600px',
    transform: 'translateY(-80%)',
    marginLeft: '70px',
    marginTop: '30px',
  };
  
  const colorBlockStyleYogi = {
    display: activeComponent === 'Mooo' ? 'none' : 'inline-block',
    padding: '10px',
    background: `linear-gradient(to right, ${colorToggle ? getRandomPastelColor() : randomPastelColorYogi} 0%, ${colorToggle ? getRandomPastelColor() : randomPastelColorYogi} 51%, ${colorToggle ? getRandomPastelColor() : randomPastelColorYogi} 100%)`,
    textDecoration: 'none',
    height: '600px',
    width: '600px',
    transform: 'translateY(-80%)',
    marginLeft: '70px',
    marginTop: '30px',
  };
  
  const colorBlockStyleFlower = {
    display: activeComponent === 'Yogi' ? 'none' : 'inline-block',
    display: activeComponent === 'Mooo' ? 'none' : 'inline-block',
    padding: '40px',
    background: `linear-gradient(to right, ${colorToggle ? getRandomPastelColor() : randomPastelColorFlower} 0%, ${colorToggle ? getRandomPastelColor() : randomPastelColorFlower} 51%, ${colorToggle ? getRandomPastelColor() : randomPastelColorFlower} 100%)`,
    textDecoration: 'none',
    height: '500px',
    width: '900px',
    transform: 'translateY(-80%)',
    marginLeft: '70px',
    marginTop: '30px',
  };

  return (
    <div>
        <header id = "app-header">
          {/* <label id="dev">Cat's Eye Vu Studio</label> */}
          <label id="dev">Cat's Eye Vu Studio</label>
          <div className="header-content">
          <Router>
           <Link to="/Login" className='home-link'>
            <div className="home-button" onClick={() => toggleComponent(null)}>
              Home
            </div> </Link>
            <ScrollLink to="about"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset based on your fixed header's height
            duration={500}
            className='about'
          >
  <div className="home-button" onClick={() => toggleComponent(null)}>
    About
  </div>
</ScrollLink>

<ScrollLink
          to="contact-footer"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset based on your fixed header's height
          duration={500}
          className='contact'
        >
          <div className="home-button" onClick={() => toggleComponent(null)}>
            Contact
          </div>
        </ScrollLink>

           </Router>
            {/* <div>Contact</div> */}
          </div>
        </header>

      <div className = "content">
        <div className="intro">
          <div>
            <h1 id="portfolio">
              Greetings, I am Cat Tuong Vu, and you can call me Kate. 
              I'm delighted to have you on my page!
            </h1>
          </div>
          <img
            id="kate"
            src={process.env.PUBLIC_URL + '/kate.png'}
            alt="Kate's portrait"
          />
        </div>

        <Element name="about" className="section-container about" id="about">
  <h2 className="section-heading">About Me</h2>
  <p className="section-content">
    In my creative endeavors, my primary goal is to craft designs that
    exude tranquility with a touch of whimsy. I place a high value on
    the well-being of users, aspiring to evoke a sense of calm,
    meditation, and satisfaction throughout their interaction with my
    designs.
  </p>
</Element>

      <h2 id = "ux">My UX/UI Designs</h2>
      <div>
      <p id = "generator">"Hmmm...I am indecisive about the boxes' color.
      So, I made a little color generator for viewers to play with"</p>
      <button className="ToggleButton" onClick={toggleColor}>
          Generate Color
      </button>
      </div>

      <div class = "ColorBlock">  
      <Router>
        <Link to="/Mooo" className = "color-block"
        style={colorBlockStyleMooo} 
      
        onClick={() => toggleComponent('Mooo')}>
          <img
            src={process.env.PUBLIC_URL + '/Mooo.png'} 
            alt="Go to Mooo"
            style={{ width: '100%', height: '100%', borderRadius: '5px' }} // Adjust styles as needed
          />
        </Link>

        <Link to="/Yogi" className = "color-block"
        style={colorBlockStyleYogi} 
      
        onClick={() => toggleComponent('Yogi')}>
          <img
            src={process.env.PUBLIC_URL + '/Yogi.png'} 
            alt="Go to Yogi"
            style={{ width: '100%', height: '100%', borderRadius: '5px' }} // Adjust styles as needed
          />
        </Link>

        <div className='Flower' style={colorBlockStyleFlower} >

        </div>

        <Routes>
          {activeComponent === 'Mooo' && (
              <Route path="/Mooo" element={<Mooo />} />
            )}
            {activeComponent === 'Yogi' && (
              <Route path="/Yogi" element={<Yogi />} />
            )}
        </Routes>
      </Router>
      
      <Element name="contact" id="contact">
          <ContactFooter />
        </Element>
      </div>  
      </div>
     

    </div>
    
  );
}

export default App;
