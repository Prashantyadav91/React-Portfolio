import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_image from '../../assets/prashant1.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-tittle">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_image} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>A dedicated full stack developer eager to start a career in web development. Recently graduated with a degree in Computer Applicatio,proficient in JavaScript, React, and Node.js. </p>
                    <p>Passionate about building scalable web applications and enhancing user experience through innovative solutions and robust code.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:'60%'}} /></div>
                    <div className="about-skill"><p>Express</p><hr style={{width:'50%'}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:'70%'}} /></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:'40%'}} /></div>
                    <div className="about-skill"><p>Cloud</p><hr style={{width:'60%'}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>50+</h1>
                <p>GOOD FEEDBACK</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>TECH SKILLS</p>
            </div>
        </div>
    </div>
  )
}

export default About
