import React from 'react';
import styles from './style.module.css';
import classnames from 'classnames';
import CALENDAR_ICON from '../../assets/diary.svg'
const Button = ({isLoading, typeButton, onClick, label, subLabel, stylePosition}) => {    
    return (
        <>            
            {typeButton === 'PURPLE' && 
            <button type="button" className={classnames(stylePosition, styles.iconButton)}>
                <img src={CALENDAR_ICON} className={styles.buttonIcon}/>
                {label}
                <span className={styles.buttonSubLabel}>{subLabel}</span>
            </button>}

            {typeButton === 'GREEN' && <button type="button" className={classnames(stylePosition, styles.headerButton)}>{label}</button>}
            
            {typeButton === 'SEND' && 
                (isLoading ? <button type="button" className={classnames(stylePosition, styles.loadingButton)} disabled='false'>Loading...</button > : <button type="button" className={classnames(stylePosition, styles.sendButton)} onClick={onClick}>{label}</button>)}            
        </>
    )
}

export default Button

