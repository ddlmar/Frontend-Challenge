import React from 'react';
import styles from './style.module.css';
import classnames from 'classnames';
const Button = ({pStyle, spanStyle, icon, style, onClick, label, text}) => {
    return (
        <button className = {classnames(style, styles.headerButton)} type='button' onClick={onClick}>
            <img src={icon} alt="" />
            <p className={pStyle}>{label}<span className={spanStyle}>{text}</span></p>
            </button>
        
    )
}

export default Button

