import React from 'react';
import style from './style.module.css';


function SocialMedia({midiaLogo}) {
    return (
        <button className = {style.buttonArea}> 
            <img src={midiaLogo} alt="" />
        </button>
    )
}

export default SocialMedia;
