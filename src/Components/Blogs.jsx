import React from 'react';
import './Styling/Blogs.css';
import blogData from './blogdata';
import Blogvideo from "../Video/about.mp4"
import { useNavigate } from 'react-router-dom';
const Blogs = () => {
  
  return (
    <>
      <video autoPlay loop muted className="video-background">
        <source src={Blogvideo} type="video/mp4" />
      </video>
      <div className="blogs">
        <h1 > Blogs to Follow</h1>
        <p>
          This is why we have compiled a list of the best blogs and sites you should start following immediately when it comes to learning and getting up to date with React.js. Of course, this is not a complete list, but it comes really close to what thousands of developers are reading and recommending at the moment, and I have found personally lots of practical examples that can be applied in production sites.
        </p>
        <h2 id='h2'>Latest Posts</h2>
        {blogData.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            {post.sections ? (
              <div>
                {post.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h4 id='h4'>{section.heading}</h4>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>{post.content}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
