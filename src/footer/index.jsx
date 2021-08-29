import React from 'react';
import AppStyle from '../App.module.css';
import styles from './Footer.module.css';
import Button from '../components/button/index';
import classnames from 'classnames';
import LOGO from '../assets/logo_footer.svg';
import ButtonSocial from '../components/socialMedia/index';
import FACEBOOK_LOGO from '../assets/facebook.svg';
import INSTAGRAM_LOGO from '../assets/instagram.svg';
import TWITTER_LOGO from '../assets/twitter.svg';


function Footer() {
    return (
        <footer className = {styles.footerContainer}>
            <h1 className = {classnames( styles.h1Style, AppStyle.titleStyle)}>Become a nanny share host</h1>
            <p className = {classnames(styles.pStyle , AppStyle.operationP)}>Takes less than 5 minutes to get started</p>
            <div>
                <Button/>
            </div>
            <span className = {classnames(styles.spanStyle , AppStyle.linkStyle)}>Or browse local nanny-shares</span>
            <div className = {styles.socialArea}>
                <img src={LOGO} alt="" />
                <div className = {styles.serviceArea}>
                    <p>Share Your Nanny</p>
                    <p>Our Story</p>
                    <p>Blog</p>
                    <p>Terms & Privacy</p>
                </div>
                <div className = {styles.midiaSocial}>
                    <ButtonSocial midiaLogo = {FACEBOOK_LOGO}/>
                    <ButtonSocial midiaLogo = {TWITTER_LOGO}/>
                    <ButtonSocial midiaLogo = {INSTAGRAM_LOGO} />
                </div>
            </div>
            <span className = {styles.copyRightStyle}>Copyright © 2017 Hapu PTY Limited All rights reserved</span>
        </footer>
    )
}

export default Footer;
