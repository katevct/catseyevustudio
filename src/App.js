import { Link as ScrollLink, Element } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Mooo from './Mooo';
import Yogi from './Yogi';
import Studio from './Studio';
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
  const randomPastelColorStudio = getRandomPastelColor();

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

  const colorBoxAnimation = {
  animation: 'fade-in 2s ease-out', // Customize the animation duration and timing function
  };
  
  const colorBlockStyleMooo = {
    ...colorBoxAnimation,
    display:
    activeComponent === 'Mooo' || activeComponent === null ? 'inline-block' : 'none',
    padding: '10px',
    background: `linear-gradient(to right, ${colorToggle ? getRandomPastelColor() : randomPastelColorMooo} 0%, ${colorToggle ? getRandomPastelColor() : randomPastelColorMooo} 51%, ${colorToggle ? getRandomPastelColor() : randomPastelColorMooo} 100%)`,
    textDecoration: 'none',
    height: '600px',
    width: '600px',
    transform: 'translateY(-80%)',
    marginLeft: '5%',
    marginTop: '5%',
  };
  
  const colorBlockStyleYogi = {
    ...colorBoxAnimation,
    display:
    activeComponent === 'Yogi' || activeComponent === null ? 'inline-block' : 'none',
    padding: '10px',
    background: `linear-gradient(to right, ${colorToggle ? getRandomPastelColor() : randomPastelColorYogi} 0%, ${colorToggle ? getRandomPastelColor() : randomPastelColorYogi} 51%, ${colorToggle ? getRandomPastelColor() : randomPastelColorYogi} 100%)`,
    textDecoration: 'none',
    height: '600px',
    width: '600px',
    transform: 'translateY(-80%)',
    marginLeft: '5%',
    marginTop: '5%',
  };

  const colorBlockStyleStudio = {
    ...colorBoxAnimation,
    display: activeComponent === 'Studio' || activeComponent === null ? 'inline-block' : 'none',
    padding: '10px',
    background: `linear-gradient(to right, ${colorToggle ? getRandomPastelColor() : randomPastelColorStudio} 0%, ${colorToggle ? getRandomPastelColor() : randomPastelColorStudio} 51%, ${colorToggle ? getRandomPastelColor() : randomPastelColorStudio} 100%)`,
    textDecoration: 'none',
    height: '600px',
    width: '600px',
    transform: 'translateY(-80%)',
    marginLeft: '5%',
    marginTop: '5%',
    };

    if (window.matchMedia('(min-width: 1920)').matches) {
      colorBlockStyleMooo.marginLeft = '50%';
      colorBlockStyleMooo.marginRight = 'auto';

      colorBlockStyleYogi.marginLeft = 'auto';
      colorBlockStyleYogi.marginRight = 'auto';

      colorBlockStyleStudio.marginLeft = 'auto';
      colorBlockStyleStudio.marginRight = 'auto';
    }

    const styles = `
  @keyframes fade-in {
    from {
      opacity: 20%;
    }
    to {
      opacity: 10;
    }
  }
`;

// Apply the styles to the document head
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(styles, styleSheet.cssRules.length);



  return (
    <body>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
        <header id = "app-header">
        <img id="logo" src={process.env.PUBLIC_URL + '/cateye.PNG'} alt="Cat's Eye Vu Studio Logo" />
          {/* <label id="dev">Cat's Eye Vu Studio</label> */}
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
    With my passion for UX/UI and front-end development, 
    I thrive on transforming ideas into engaging and impactful user experiences across web apps and mobile apps. 
    My approach to projects involves conducting studies and research, alongside coding. Additionally, 
    I am also an IT/Cybersecurity specialist at the San Francisco Housing Authority, where I 
    integrate my knowledge of user experience to tailor solutions while assisting individuals with computers. 
    My journey into the Tech and IT industry has equipped me with the keen eyes for detail, a love for problem-solving, 
    and a commitment to delivering high-quality results.
   </p>
        </Element>

<div>
      <div>
      <p id = "generator">"Hmmm...I am indecisive about the boxes' color.
      So, I made a little color generator for viewers to play with"</p>
      <button className="ToggleButton" onClick={toggleColor}>
          Generate Color
      </button>
      </div>

      <div className="ColorBlock" >
      <Router>
        <Link
            to="/Mooo"
            className="color-block"
            style={colorBlockStyleMooo}
            onClick={() => toggleComponent('Mooo')}
          >
          <img
            src={process.env.PUBLIC_URL + '/Mooo.png'} 
            alt="Go to Mooo"
            style={{ width: '100%', height: '100%', borderRadius: '5px' }} 
          />
          <p className="color-block-description">Mooo - Movie Theater Snack Ordering App - Webflow - User Interface</p>
        </Link>
       
        <Link
            to="/Yogi"
            className="color-block"
            style={colorBlockStyleYogi}
            onClick={() => toggleComponent('Yogi')}
          >
          <img
            src={process.env.PUBLIC_URL + '/Yogi.png'} 
            alt="Go to Yogi"
            style={{ width: '100%', height: '100%', borderRadius: '5px' }}
          />
          <p className="color-block-description">Yogi - User Interface - Branding - Frontend Development</p>
        </Link>

        <Link
            to="/Studio"
            className="color-block"
            style={colorBlockStyleStudio}
            onClick={() => toggleComponent('Studio')}
          >
          <img
            src={process.env.PUBLIC_URL + '/eye.PNG'} 
            alt="Go to Studio"
            style={{ width: '85%', height: '55%', borderRadius: '5px', paddingLeft: '40px', marginTop: '100px' }} 
          />
          <p className="color-block-description">Cat's Eye Vu Studio - Logo Design - Branding</p>
        </Link>

        <Routes>
          {activeComponent === 'Mooo' && (
              <Route path="/Mooo" element={<Mooo />} />
            )}
          {activeComponent === 'Yogi' && (
              <Route path="/Yogi" element={<Yogi />} />
            )}
          {activeComponent === 'Studio' && (
              <Route path="/Studio" element={<Studio />} />
            )}  
        </Routes>
      </Router>
      
    </div> 
  
      <Element name="contact" id="contact">
          <ContactFooter />
        </Element>
      </div>  
      </div>
    </body>
    
  );
}

export default App;