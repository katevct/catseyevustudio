import React from 'react';
import './ContactFooter.css'; // Import the CSS file for styling

const ContactFooter = () => {
  const email = 'kate.vct@outlook.com';
  const linkedinUrl = 'https://www.linkedin.com/in/catvu09/';

  return (
    <footer className="contact-footer">
      <div className="contact-item">
        <p>Email me:</p>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className="contact-item">
        <p>Connect on LinkedIn:</p>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default ContactFooter;


