import React from 'react';
import './Studio.css';

function Studio() {
  return (
    <div className = "studio-content">
      <p id = "p1">
      During a conversation with my coworker, Ed, about my personal webpage, 
      I mentioned that the initial name for my site would be "The Vu Studio." 
    My concept revolves around having a name that is specific enough to reflect 
    my personality, so it should have my last name - Vu. Additionally, a name that 
    is broad enough to encompass both my design and development works. We then engaged 
    in a bit of wordplay with my Viet name, Cat Tuong Vu. Given that "Vu" sounds similar 
    to "view" and considering that my friends often associate me with cats, known as my 
    spirited animal, we drew inspiration from the English term "Bird’s eye view." 
    As a result, Cat’s Eye Vu Studio.
      </p>
      <div className='logo-details'>
      <img id="ed" src={process.env.PUBLIC_URL + '/Ed.jpg'} alt="Ed idea" />
      <p id = "p2">
      Ed went above and beyond, providing me with some design ideas for my logo, 
      which later inspired my own creation.
      </p>
    
      <img id="eyesketch" src={process.env.PUBLIC_URL + '/eyesketch.jpg'} alt="eye sketch" />
      <p id = "p3">
      Looking at the hand sketch that Ed gave me, I really loved how the eyes in the “studio” looked, so I decided to 
      simplify my logo. I threw in my initials, CV, inside the eye, giving 
      it that cool cat's pupil vibe. Ed was like, “Wow, that's pretty impressive, 
      especially since you whipped it up in just half an hour.” As a person 
      who doesn't have any background in logo design, Ed's kind words really 
      fueled my passion to keep doing my thing.
      </p>
      <img id="letters" src={process.env.PUBLIC_URL + '/letters.jpg'} alt="letters sketch" />
      <img id="eye" src={process.env.PUBLIC_URL + '/eye.PNG'} alt="eye logo" />  
      <p id = "p5">
      The font I selected for my logo was Palatino-Italic, chosen for its 'o' 
      resembling a cat's eye. I slightly rotated the 'o' and incorporated my initials. 
      I drew a small loop for the 'V' and colored the upper part of the pupil to give 
      the cat's eye a starry appearance. Initially, I considered leaving the eye's 
      ending open, but I believed closing it with black color would enhance the 
      highlights of my logo
      </p>
      </div>
    </div>
  );
}

export default Studio;