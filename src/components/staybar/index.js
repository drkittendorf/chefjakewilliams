import React from 'react';
//! import {Link} from "react-router-dom"
import './staybar.css'
import {FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaFacebookSquare} from 'react-icons/fa';
// import {FaInstagram, FaLinkedin, FaFacebookSquare} from 'react-icons/fa';

function Staybar() {
    return (
        <nav className ='w-screen bg-green-900 p-7'>
                  <div className='mx-auto text-3xl text-white flex flex-grow justify-evenly'>
                      <a href="https://www.linkedin.com/in/jake-williams-cec-798ba231/" target="_blank" 
                            rel='noopener noreferrer'><FaLinkedinIn /></a>
                      <a href="https://www.instagram.com/jakewillchef/" target="_blank" 
                            rel='noopener noreferrer'><FaInstagram /></a>
                      <a href="https://twitter.com/JakeWillChef" target="_blank" 
                            rel='noopener noreferrer'><FaTwitter/></a>
                      <a href="https://www.facebook.com/profile.php?id=100063804920469" target="_blank"
                            rel='noopener noreferrer'><FaFacebookSquare /></a>
                      <a href="https://www.youtube.com/watch?v=L_4EPpqaSQk&t=68s" target="_blank" 
                            rel='noopener noreferrer'><FaYoutube /></a>
                </div>
          

          

        </nav>
    );
  }

export default Staybar;