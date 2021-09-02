import React from 'react';
import styles from './style.module.css';
import classnames from 'classnames';
import CALENDAR_ICON from '../../assets/diary.svg'
const Button = ({ isLoading, typeButton, onClick, label, subLabel, stylePosition, alt }) => {
    return (
        <>
            {typeButton === 'PURPLE' &&
                <button alt={alt} type="button" className={classnames(stylePosition, styles.iconButton)}>
                    <img src={CALENDAR_ICON} className={styles.buttonIcon} />
                    {label}
                    <span className={styles.buttonSubLabel}>{subLabel}</span>
                </button>}

            {typeButton === 'GREEN' && <button alt={alt} type="button" className={classnames(stylePosition, styles.headerButton)}>{label}</button>}

            {typeButton === 'SEND' &&
                (isLoading ? <button alt={alt} type="button" className={classnames(stylePosition, styles.loadingButton)} disabled>Loading...</button > : <button type="button" className={classnames(stylePosition, styles.sendButton)} onClick={onClick}>{label}</button>)}
        </>
    )
}

export default Button;

