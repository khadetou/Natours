import React from 'react';
import {useStyle} from '../css/style';
import logow from '../img/logo-white.png';

const Header = () => {
    const {header,logoBox, logo, primaryHeading, primaryMain, primarySub, textBox} = useStyle();
    return (
        <header className={header}>
            <div className={logoBox}>
                <img src={logow} alt="logo" className={logo} />
            </div>
            <div className={textBox}>
            <h1 className={primaryHeading}>
                <span className={primaryMain}>Outdoors</span>
                <span className={primarySub}>is where life happens</span>
            </h1>
            </div>
        </header>
    )
}

export default Header;
