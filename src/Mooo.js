import React from 'react';
import "./App.css"; 
import "./Mooo.css"; 

function Mooo() {
  const Mooo = 'https://www.figma.com/proto/V5CqnOsJG2UPIdzOf7S00s/Mofoo---Movie-Theater-Snack-Ordering-App?node-id=159-5&scaling=scale-down&page-id=159%3A4&starting-point-node-id=159%3A5.com';
  return (
    <div className='Mooo-details'>
      <div className="Mooo">
      <div id ="overview">Project Overview</div>
      <p>Mooo stands as the ultimate snack companion for movie enthusiasts. 
        Our main goal is to allow customers to order movie snacks from anywhere 
        and be active in choosing pickup time. We believe this will enhance customers’ 
        movie experiences and grow overall sales. Mooo’s target customers are professionals 
        and college students who spend time frequently in movie theaters. Since we understand 
        the importance of convenience and choice, we're dedicated to providing a service that 
        aligns with the dynamic lifestyle of our customers.With Mooo, snack time at the movies 
        is not just a routine; it's a personalized and effortless experience tailored to your schedule. </p>
      <div id = "contribution">My Contributions</div>
      <p>Conducting interviews, paper and digital wireframing, designing low and high-fidelity prototypes, 
        conducting usability studies, accounting for accessibility, and iterating on designs.</p>
        </div>
        <div>
        <div className='persona'>  
        <img id="Mary" src={process.env.PUBLIC_URL + '/Mary.png'} alt="Mary" />
        <div>
          <div id ="wire-intro">Wireframe Sketches</div> 
       <p id = "wire-intro1"> In the initial wireframe, the app was designed to start with a map that 
        helps users locate the exact movie theater they are heading to. This way, 
        Mooo can navigate to the specific menu for the selected movie theater location.
        </p>
        </div>
        <img id="MoooWireFrame" src={process.env.PUBLIC_URL + '/MoooWireFrame.png'} alt="wireframe" />
        
        <p id = "digi-lofi">Digital Wireframes</p>
        <div className='digi'>
        <img id="Digi1" src={process.env.PUBLIC_URL + '/Digi1.png'} alt="Digi1" />
        <img id="Digi2" src={process.env.PUBLIC_URL + '/Digi2.png'} alt="Digi2" />
        </div>
        <img id="LofiMooo" src={process.env.PUBLIC_URL + '/LofiMooo.png'} alt="Lofi" />
        <img id="usability" src={process.env.PUBLIC_URL + '/usability.png'} alt="usability" />
        <p id ="hifiIntro">Final UI</p>
        <img id="HifiMooo" src={process.env.PUBLIC_URL + '/HifiMooo.png'} alt="Hifi" />
        <div className="Mooo-figma">
        <p id ="final">
          After the careful studies and researches, taking the usability study into account, 
          here are the final UI designs for Mooo App.</p>  
        <p id = "MFigma">
        <p>Link to Figma</p>
        <a href={Mooo} target="_blank" rel="noopener noreferrer">
            Figma - Mooo's High-fidelity
        </a>
        </p>
      </div>
        </div>
       
        </div>
    </div>
    
  );
}

export default Mooo;
