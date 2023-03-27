// HEADER INDEX
import React from "react";
import "./header.css"
import '../../../src/assets/css/fonts.css' // Google fonts imported from this page
import artichologo from '../../assets/images/other-images/articho-logo.png';
import '../../index.css';


function Header() {
return (
<div className='backdrop-saturate-100 bg-green-200 p-20' >
    <div className=''>
    <img  src={artichologo} className='p-6 max-w-sm mx-auto flex items-center ' alt="artichoke logo" />
        
    </div>


   
    <div className="heading" >

   

    </div>
</div>
)}

export default Header; 