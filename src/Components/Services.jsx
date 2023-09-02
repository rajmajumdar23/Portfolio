import React, { useState } from 'react';
import './Styling/Services.css';
import Project from "../Video/about.mp4";
import img from "../Images/mypic.png";
import './Styling/Services.css';

const Services = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    options: [],
  });

  const { name, email, message, phone, options } = data;

  const handleInputChange = (e) => {
    if (e.target.name === 'options') {
      const selectedOptions = data.options.includes(e.target.value)
        ? data.options.filter((option) => option !== e.target.value)
        : [...data.options, e.target.value];
      setData({ ...data, options: selectedOptions });
    } else if (e.target.name === 'student') {
      // Handle radio input for 'student' separately
      setData({ ...data, student: e.target.value });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const sheetData = [
        [name, email, message, phone, new Date().toLocaleString(), options.join(', ')],
      ];

      const sheetUrl =
        'https://v1.nocodeapi.com/rajmajumdar23/google_sheets/EQMtKjPTbpWpRXzP?tabId=Sheet1';

      const response = await fetch(sheetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetData),
      });

      if (response.ok) {
        setData({
          name: '',
          email: '',
          phone: '',
          message: '',
          options: [],
        });
        alert('Form submitted successfully! We will contact you soon');
      } else {
        console.error('Form submission failed.');
        alert('Form submission failed. Please try again later.');
      }
    } catch (err) {
      console.error('An error occurred:', err);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='services-container'>
        <div>
        <video autoPlay loop muted className="video-background">
          <source src={Project} type="video/mp4" />
        </video>
        <img className="start-img" src={img} alt="Your Image" />
        </div>
        <div>
          <label className='Heading'>Want to <br/>Learn coding like me?</label>
          <label className='Heading2'>Contact with me!</label>
          <form onSubmit={handleSubmit} className='services-form'>
            <label htmlFor='name' className='services-label'>Full Name:</label>
            <div>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                autoComplete='off'
                onChange={handleInputChange}
                required
                className='services-input'
              />
            </div>
            <label htmlFor='email' className='services-label'>Email:</label>
            <div>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                autoComplete='off'
                onChange={handleInputChange}
                required
                className='services-input'
              />
            </div>
            <label htmlFor='phone' className='services-label'>Phone:</label>
            <div>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={phone}
                autoComplete='off'
                onChange={handleInputChange}
                required
                className='services-input'
              />
            </div>
            <label htmlFor='message' className='services-label'>Message:</label>
            <div>
              <textarea
                id='message'
                name='message'
                value={message}
                autoComplete='off'
                onChange={handleInputChange}
                required
                className='services-textarea'
              />
            </div>
            <h2 className='services-label' id="course">Courses</h2><br />
            <div className='services-checkbox-container'>
            <div class="container text-center">
              <div className='row'id='row'>
                <div className="col" >
                  <div className='services-checkbox-item'>
                    <input
                      type='checkbox'
                      name='options'
                      value='C'
                      checked={options.includes('C')}
                      onChange={handleInputChange}
                      className='services-checkbox-input'
                    />
                    <label className='op-label' htmlFor='options'>C Programming</label>
                  </div>
                  <div className='services-checkbox-item'>
                    <input
                      type='checkbox'
                      name='options'
                      value='C++'
                      checked={options.includes('C++')}
                      onChange={handleInputChange}
                      className='services-checkbox-input'
                    />
                    <label className='op-label' htmlFor='options'>C++ Programming</label>
                  </div>
                  <div className='services-checkbox-item'>
                    <input
                      type='checkbox'
                      name='options'
                      value='Java'
                      checked={options.includes('Java')}
                      onChange={handleInputChange}
                      className='services-checkbox-input'
                    />
                    <label className='op-label' htmlFor='options'>Java </label>
                  </div>
                  <div className='services-checkbox-item'>
                    <input
                      type='checkbox'
                      name='options'
                      value='Python'
                      checked={options.includes('Python')}
                      onChange={handleInputChange}
                      className='services-checkbox-input'
                    />
                    <label className='op-label' htmlFor='options'>Python</label>
                  </div>
                  <div className='services-checkbox-item'>
                    <input
                      type='checkbox'
                      name='options'
                      value='Computer Network'
                      checked={options.includes('Computer Network')}
                      onChange={handleInputChange}
                      className='services-checkbox-input'
                    />
                    <label className='op-label' htmlFor='options'>Computer Networks</label>
                  </div>
                  <div className='services-checkbox-item'>
                    <input
                      type='checkbox'
                      name='options'
                      value='OS'
                      checked={options.includes('OS')}
                      onChange={handleInputChange}
                      className='services-checkbox-input'
                    />
                    <label className='op-label' htmlFor='options'>Operating System</label>
                  </div>
                  </div>
                <div className="col" id='col'>
                   <div className='services-checkbox-item'>
                    <input
                      type='checkbox'
                      name='options'
                      value='DBMS'
                      checked={options.includes('DBMS')}
                      onChange={handleInputChange}
                      className='services-checkbox-input'
                    />
                    <label className='op-label' htmlFor='options'>DBMS</label>
                  </div>
                  <div className='services-checkbox-item'>
                    <input
                      type='checkbox'
                      name='options'
                      value='HTML'
                      checked={options.includes('HTML')}
                      onChange={handleInputChange}
                      className='services-checkbox-input'
                    />
                    <label className='op-label' htmlFor='options'>HTML5</label>
                  </div>
                  <div className='services-checkbox-item'>
                    <input
                      type='checkbox'
                      name='options'
                      value='C#'
                      checked={options.includes('C#')}
                      onChange={handleInputChange}
                      className='services-checkbox-input'
                    />
                    <label className='op-label' htmlFor='options'>C# (C-Sharp)</label>
                  </div>
                  <div className='services-checkbox-item'>
                    <input
                      type='checkbox'
                      name='options'
                      value='CSS'
                      checked={options.includes('CSS')}
                      onChange={handleInputChange}
                      className='services-checkbox-input'
                    />
                    <label className='op-label' htmlFor='options'>CSS3</label>
                  </div>
                  <div className='services-checkbox-item'>
                    <input
                      type='checkbox'
                      name='options'
                      value='BOOTSTRAP'
                      checked={options.includes('BOOTSTRAP')}
                      onChange={handleInputChange}
                      className='services-checkbox-input'
                    />
                    <label className='op-label' htmlFor='options'>BOOTSTRAP 5</label>
                  </div>
                  <div className='services-checkbox-item'>
                    <input
                      type='checkbox'
                      name='options'
                      value='REACTJS'
                      checked={options.includes('REACTJS')}
                      onChange={handleInputChange}
                      className='services-checkbox-input'
                    />
                    <label className='op-label' htmlFor='options'>REACTJS</label>
                  </div>
                  </div>
                  </div>
                </div>
            </div>
            <button type='submit' id='services-button'>Contact me</button>
          </form>
        </div>
    </div>
  );
}

export default Services;
