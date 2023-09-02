import React from 'react';
import './Styling/about.css';
import { FaGraduationCap, FaTrophy, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaCertificate, FaPhone, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaGithub, FaCode } from 'react-icons/fa';
import aboutvideo from "../Video/about.mp4"
import img1 from "../Images/image1.jpeg"
import img2 from "../Images/image2.jpg"
import img3 from "../Images/image3.jpeg"
import img4 from "../Images/image4.jpeg"
import img5 from "../Images/image5.jpg"
import img6 from "../Images/image6.jpeg"



const About = () => {
  const skills = [
    { name: "C Programming", level: 80 },
    { name: "Java", level: 60 },
    { name: "Python", level: 70 },
    { name: "C#", level: 65 },
    { name: "HTML-5", level: 80 },
    { name: "CSS-3", level: 65 },
    { name: "BOOTSTRAP-5", level: 60 },
    { name: "REACTJS", level: 70 },
    { name: "JAVASCRIPT", level: 70 },

  ];
  return (
    <div className="about-container">
      <video className="background-video" autoPlay loop muted>
        <source src={aboutvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <div className="icon-container" style={{ marginTop: "5%" }}>
          <FaGraduationCap className="icon" />
          <p className="section-heading">Education</p>
          <ul className="list">
            <li>
              <label className='Strong'>Higher Secondary</label> -<br /><br />Completed Higher Secondary Examination (12th Grade) from Vidyasagar Bani Bhavan High School, Kolkata, West
              Bengal in 2017, achieving a commendable percentage of 75%.
            </li>
            <li>
              <label className='Strong'>Bachelors in English</label>-<br /><br />English literature enthusiast with a focus on British,
              American, Indian, and European literature, as well as poetry
              and literary theory.
              Proficient in analysing themes, characters, and historical
              contexts of literary works.
            </li>
            <li>
              <label className='Strong'>BCA (Bachelor of Computer Applications)</label> -<br /><br />A driven BCA student in the 5th semester with an
              exceptional academic record, showcasing a robust
              understanding of computer science and programming
              principles.
              Specializing in web development, the focus is on mastering
              ReactJS to craft dynamic and user-friendly interfaces for
              modern web applications.
            </li>
          </ul>
        </div>
        <div className="icon-container">
          <FaCode className="icon" />
          <p className="section-heading">Skills</p>
          <ul className="list">
            {skills.map((skill, index) => (
              <li key={index}>
                <label className='SkillBar'>{skill.name}</label >
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="icon-container">
          <FaTrophy className="icon" />
          <p className="section-heading">Achievements</p>
          <ul className="list">
            <li>
              <div className="achievement-item">
                <img src={img1} alt="Achievement 1" className="achievement-image" />
                <p className="achievement-description">As the Departmental Host at Brainware University, I orchestrated diverse events, workshops, and seminars, uniting students, faculty, and administration. My adept leadership and seamless coordination created an inclusive academic community, fostering open communication and personal growth. I'm proud to have contributed to a vibrant and impactful university experience.</p>
              </div>
            </li>
            <li>
              <div className="achievement-item">
                <p className="achievement-description" id='achivement'>Incorporated vibrant energy and mentorship as a lecturer during Brainware University's Freshers' Student Introduction Programme. Crafted engaging presentations, fostered student connections, and shared valuable insights, contributing to an inclusive atmosphere. Recognized for exemplary dedication and motivational role in enhancing student experience.</p>
                <img src={img2} alt="Achievement 2" className="achievement-image" />
              </div>
            </li>
            <li>
              <div className="achievement-item">
                <img src={img3} alt="Achievement 1" className="achievement-image" />
                <p className="achievement-description">At Brainware University, on the occasion of Computer Literacy Day, I orchestrated a transformative one-on-one session with Sir Chandrasekhar Kundu, visionary behind 'A MISSION TO FEED INDIA'. This event not only highlighted my proficiency in uniting academia with impactful social engagement but also aligned perfectly with the spirit of Computer Literacy Day. By leveraging technology and digital platforms, we were able to amplify the reach and impact of our institution's role in fostering meaningful conversations. This event went beyond the culture of societal betterment while also promoting the importance of computer literacy in today's interconnected world.</p>
              </div>
            </li>
            <li>
              <div className="achievement-item">
                <p className="achievement-description" id='achivement'>In the realm of coding excellence, I conquered React, fashioning a remarkable project that showcases my coding finesse. A distinguished SysAlgo graduate, I illuminate educational pathways through collaborative coding. Armed with limitless innovation and backed by SysAlgo's esteemed certification, my portfolio stands as a testament to my prowess. Notably, I spearheaded an extraordinary Educational Website initiative, a hub for transformative Computer Science courses. 🌟🎓🌐</p>
                <img src={img4} alt="Achievement 2" className="achievement-image" />
              </div>
            </li>
            <li>
              <div className="achievement-item">
                <img src={img5} alt="Achievement 1" className="achievement-image" />
                <p className="achievement-description"> Embarking on my college journey, I seized the opportunity to showcase my excellence as the chosen emissary of my batch on day one. With poised eloquence, I captivated the audience, setting a high standard for the academic odyssey to come. A stellar start, foreshadowing a tenure of growth, leadership, and achievement.</p>
              </div>
            </li>
            <li>
              <div className="achievement-item">
                <p className="achievement-description" id='achivement'>Elevated to the position of Anti-Ragging Active Member due to unwavering dedication and positive influence within the college community. Demonstrated a relentless commitment to eradicating ragging, fostering a safer campus environment. Successfully collaborated on multiple initiatives, contributing to a harmonious atmosphere and ensuring the well-being of fellow students.</p>
                <img src={img6} alt="Achievement 2" className="achievement-image" />
              </div>
            </li>
          </ul>
        </div>

        <div className="icon-container">
          <FaCertificate className="icon" />
          <p className="section-heading">Certifications</p>
          <ul className="list">
            <li>
              <label className='Strong-2'>Web Designing and Front-end Development from Brainware University</label> 
              <p className="certification-description">
              <br/>Within the realm of web craft, I, myself, stand adorned with the prestigious Mastery in Web Design and Front-End Development from Brainware University. A virtuoso blending creativity and technical finesse, I weave visually compelling stories using colors, typography, and layouts. Proficiency in HTML-5, CSS-3, and JavaScript enables me to craft seamless, responsive user experiences, leaving an indelible mark on the digital landscape.
              </p>
            </li>
            <li>
              <label className='Strong-2'>ReactJS Front-end Development from SysAlgo</label> 
              <p className="certification-description">
              <br/>Within the dynamic web realm, I shine adorned with SysAlgo's prestigious Front-End Development with ReactJS certification, crowned with excellence. My virtuosity harmonizes artistic finesse and technical prowess, weaving captivating digital narratives through colors, typography, and layouts. Mastering ReactJS, I engineer dynamic user interfaces, showcased brilliantly on a remarkable educational website.
              </p>
            </li>
          </ul>
        </div>

        <div className="icon-container">
          <FaMapMarkerAlt className="icon" />
          <p className="section-heading">Address</p>
          <p className="address">
            Ashoknagar Kalyangarh, West Bengal , India
            <br />
            Post: Ashoknagar
            <br />
            PIN: 743222
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p className="contact-text">6295754403</p>
            </div>
            <div className="contact-item">
              <FaWhatsapp className="contact-icon" />
              <p className="contact-text">6295754403</p>
            </div>
          </div>
        </div>
        <div className="icon-container">
          <p className="section-heading">Social Media</p>
          <div className="social-media-icons">
            <a href="https://www.facebook.com/raj.majumdar.7330/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com/RAJMAJUMDA31142" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://www.instagram.com/rajmajumdar49/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://github.com/rajmajumdar23" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/raj-majumdar-0919ba286/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="mailto:rajmajumdar1204@gmail.com">
              <FaEnvelope className="email-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
