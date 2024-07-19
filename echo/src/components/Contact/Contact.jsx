import React, { useState } from 'react';
import './contact.css'; 

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to an API or handle it as needed
    console.log('Form submitted:', formData);
  };

  return (
  <>
  <div className='bg-white'>
    <p className='text-3xl text-center font-bold pt-7'>Contact Us</p>
    <form onSubmit={handleSubmit} className="contact-form">
    
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button className='border-gray-950 border-2 rounded-lg bg-green-600 p-3 w-[100px] text-white' type="submit">Submit</button>
    </form>
    </div>
    </>
  );
};

export default Contact;
