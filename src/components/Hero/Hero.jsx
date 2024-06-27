import React from 'react'
import './Hero.css';
import profile_img from '../../assets/prashant2.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I 'm Prashant Yadav</span>,MERN Stack developer based in India.</h1>
        <p>I am a MERN stack developer as Fresher from Kanpur, Uttar Pradesh</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
