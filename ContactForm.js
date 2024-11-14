import React, { useState } from 'react';
import './ContactForm.css'; // Make sure to add your CSS file

const ContactForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    exploringWSCFor: '',
    heardAboutUs: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    closeModal(); // Close the modal if needed
  };

  const exploringWSCOptions = ['Myself or spouse', 'For my parents or an elder'];
  const heardAboutUsOptions = [
    'Search Engine (Google, Bing, etc.)',
    'Social Media (FB, Insta, etc.)',
    'YouTube',
    'Friends or Family',
    'Others',
  ];

  return (
    <div className="contact-form">
      <span className="close-icon" onClick={closeModal}>×</span>
      <h2>2000+ Seniors' Sons & Daughters Have Chosen WSC. Join Us Today!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mobile Number
          <div className="phone-input">
            <span className="country-code">+91</span>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Phone Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Exploring WSC For
          <select
            name="exploringWSCFor"
            value={formData.exploringWSCFor}
            onChange={handleChange}
            required
          >
            <option value="">Exploring WSC for?</option>
            {exploringWSCOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          How Did You Hear About Us?
          <select
            name="heardAboutUs"
            value={formData.heardAboutUs}
            onChange={handleChange}
            required
          >
            <option value="">How did you hear about us?</option>
            {heardAboutUsOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
