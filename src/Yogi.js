import React from 'react';
import "./Yogi.css"
import "./App.css"; 

function Yogi() {
  return (
    <div>
       <div className="Yogi">
      <div id ="Yogi-overview">Project Overview</div>
      <p id = "yogi-overview-intro1">Throughout the designs, besides focusing on exploring wellness 
      and fostering connections, Yogi aims to serve as a healing sanctuary for users. The design of 
      the Yogi app is dedicated to enhancing individual wellness. Its primary use cases focus on allowing 
      users to document their yoga journey, share and connect with other yogi enthusiasts, and 
      customize their yoga playlists. The intention is for users' experiences with the app to be 
      meditative and peaceful.</p>
      <div id = "Yogi-contribution">My Contributions</div>
      <p id = "yogi-contribution-intro1">Conducting interviews and wireframes, designing low and high-fidelity prototypes,
       iterating on designs, as well as front-end development</p>
        </div>
        <div className='Yogi-process'>
         <div id='Yogi-intro1'>Wireframes</div>
        <img id="YogiWire" src={process.env.PUBLIC_URL + '/YogiWire.png'} alt="YogiWire" />
        <p id ="initial">The three main pages on Yogi are two different exploring feeds that 
        users can switch between. The "For You" feed allows users to see their Yogi friends' 
        posted activities and receive daily affirmations. Meanwhile, the "Trending" feed 
        enables users to explore popular posts within the app. Lastly, there's the user profile 
        page where individuals can customize their personal Yoga journey and diary, including 
        features like music playlists and posts.</p>
        <div className='cloud'>
          <div id = "attentive">Attentive to every Customer's Mindset. </div>
          <img id="ip13Yogi" src={process.env.PUBLIC_URL + '/ip13Yogi.png'} alt="ip13Yogi" />
        <p id = "cloud">The design features an 'affirmation cloud' that generates different affirmation quotes 
          daily. These quotes are displayed on the main page whenever users open the Yogi app. The intention 
          behind the cloud was to evoke a sense of airiness and lightness within the app, contributing to a positive 
          and uplifting user experience.</p>  
          </div>
        <div className="Yogi-layout">
        <div id='Yogi-intro2'>Color Choices and App Layouts</div>
        <img id="YogiHifi" src={process.env.PUBLIC_URL + '/YogiHifi.png'} alt="YogiHifi" />
        <img id="colors" src={process.env.PUBLIC_URL + '/colors.png'} alt="colors" />
         
        <p id = "hifi-details">Even though, the app was initially designed with landscape backgrounds. However, through further research, 
          it was discovered that landscape photos might be distorted on various screen sizes, and their 
          details could potentially distract users. Therefore, the final design of the app opted for a 
          color-only approach. These color choices were selected to enhance users' calmness and refresh 
          their minds. The four main colors for the overall theme of the app are now sage, white, light gray, and black.
          </p>
          </div>
          </div>
    </div>
  );
}

export default Yogi;
