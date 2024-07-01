import React from 'react';
//! import {Link} from "react-router-dom"
import './staybar.css'
import {FaInstagram,  FaLinkedinIn, FaTiktok, FaFacebookSquare} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
// import {FaInstagram, FaLinkedin, FaFacebookSquare, FaYoutube} from 'react-icons/fa';

function Staybar() {
    return (
        <nav className ='w-screen bg-green-900 p-7'>
                  <div className='flex flex-grow mx-auto text-3xl text-white justify-evenly '>
                      <a href="https://www.linkedin.com/in/jake-williams-cec-798ba231/" class="icon" target="_blank" 
                            rel='noopener noreferrer'><FaLinkedinIn /></a>
                      <a href="https://www.instagram.com/jakewillchef/" class="icon" target="_blank" 
                            rel='noopener noreferrer'><FaInstagram /></a>
                      <a href="https://www.facebook.com/profile.php?id=100063804920469" class="icon" target="_blank"
                            rel='noopener noreferrer'><FaFacebookSquare /></a>
                            {/* <a href="https://www.youtube.com/watch?v=L_4EPpqaSQk&t=68s" target="_blank" 
                            rel='noopener noreferrer'><FaYoutube /></a> */}
                      <a href="https://www.tiktok.com/@jakewillchef" class="icon" target="_blank" 
                            rel='noopener noreferrer'><FaTiktok /></a> 
                      <a href="https://twitter.com/JakeWillChef" class="icon" target="_blank" 
                            rel='noopener noreferrer'><FaXTwitter /></a>   
                </div>
          

          

        </nav>
    );
  }

export default Staybar;