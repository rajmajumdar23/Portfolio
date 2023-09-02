import React, { useEffect, useState } from 'react';
import './Styling/home.css';
import Mypic from "../Images/home.png";
import VideoBackground from "../Video/Website.mkv";
const Home = () => {
  const fullIntro = "Hi, I'm Raj Majumdar, a web Developer .";
  const typingInterval = 100;
  const pauseDuration = 4000;
  const [introText, setIntroText] = useState("");
  const [currentChar, setCurrentChar] = useState(0);


  useEffect(() => {
    const typingIntervalId = setInterval(() => {
      if (currentChar < fullIntro.length) {
        setIntroText(prevText => prevText + fullIntro[currentChar]);
        setCurrentChar(prevChar => prevChar + 1);
      } else {
        clearInterval(typingIntervalId); // Clear the typing interval
        setTimeout(() => {
          setIntroText(""); // Reset the text
          setCurrentChar(0); // Reset the counter
        }, pauseDuration);
      }
    }, typingInterval);

    return () => clearInterval(typingIntervalId);
  }, [currentChar]);

  return (
    <div className="homepage-container">
    <video className="video-background" autoPlay loop muted>
      <source src={VideoBackground} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <label className='Headingh'>Welcome<br/> to My Portfolio</label>
    <div className="intro2">
      <label className='introtext'>{introText}</label>
    </div>
    <div className="profile-picture">
      <img src={Mypic} alt="Your Name" />
    </div>
  </div>
);
};

export default Home;