import React from 'react';
import Styles from './Home.module.scss';

function SocialIcon(props) {
    const {link, icon, label} = props;
    return (
        <a className={Styles.icon} target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
            <i className={icon} aria-hidden="true"/>
        </a>
    );
}

export default SocialIcon;