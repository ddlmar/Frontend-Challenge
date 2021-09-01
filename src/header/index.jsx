import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import LOGO from '../assets/logo.svg'
import headerStyle from './Header.module.css';
import Button from '../components/button';


const Header = () => {
    return ( 
        <header className = {headerStyle.header}>
            <BrowserRouter>
                <Link to = ''>
                    <img src={LOGO} alt="hapu's logo" />
                </Link>
            <nav>
                <ul className = {headerStyle.headerMenu}>
                    <Link className = {headerStyle.buttonStyle} to = ''>    
                        <li>Create Your Nanny Share</li>
                    </Link>
                    <Link className = {headerStyle.buttonStyle} to = ''>
                    <li>Browse Shares</li>
                    </Link>
                    <Link className = {headerStyle.buttonStyle} to = ''>
                    <li>Our Story</li>
                    </Link>
                </ul>                
            </nav>
            <div className = {headerStyle.headerLogin}> 
                    <Button typeButton="GREEN" label = 'Become a Nanny Share Host'/>
                    <Link className = {headerStyle.buttonStyle} to = ''>
                        <li>Sign In</li>
                    </Link>
                </div>
            </BrowserRouter>
        </header>
     );
}
 
export default Header;
