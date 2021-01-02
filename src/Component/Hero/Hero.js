import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import Background from '../../images/landing.jpg'
import './Hero.css'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import Projects from '../Project/Project'
import Chip  from '@material-ui/core/Chip'
import headshot from '../../images/headshot.jpg'

const Hero = () => {

    const scrollStyle = {
        transitionDelay: '80ms',
        boxShadow: '0 4px 12px 0 black',
        backgroundColor: '#000'
    }

    const transparent = {
        boxShadow: 'none'
    }

    const [vh, setVh] = useState(0);

    const verticalHeight = {
        minHeight: 100 * vh
    }

    const [scrolled, setScrolled] = useState(0);

    const [toggle, setToggle] = useState(false);

    const onMenuClick = () => {
        setToggle(!toggle);
    }

    let scrollListener = null;

    useEffect(() => {

        setVh(window.innerHeight * 0.01)
        scrollListener = document.addEventListener('scroll', e => {
            setScrolled(document.scrollingElement.scrollTop);
        } ) 

        return () => {
            document.removeEventListener('scroll', scrollListener);
        }
    }, [scrolled])

    return (
        <div id="Home" className="hero"  style={verticalHeight}>
            <div className="hero__nav">
                <ul style = { scrolled === 0 ?  transparent : scrollStyle  }>
                    <Link className="hero__navLink" activeClass="active" to="Home" smooth={true} duration={500} spy={true} exact="true" offset={-60} >Home</Link>
                    <Link className="hero__navLink" activeClass="active" to="Services" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Services</Link>
                    <Link className="hero__navLink" activeClass="active" to="Projects" smooth={true} duration={500} spy={true} exact="true" offset={-60}>Projects </Link>
                    <Link className="hero__navLink" activeClass="active" to="About" smooth={true} duration={500} spy={true} exact="true" offset={-60}>About</Link>
                </ul>
            </div>
            {/* <div className="hero__ham">
                <IconButton onClick = { onMenuClick }>
                    <MenuIcon/>
                </IconButton>
                { toggle ? <HamburgerMenu /> : <></>}
            </div> */}
            
            <div className="hero__body">
                <div className="hero__headshot">
                    <div className="hero__headshot-photo">
                        <img src={headshot} alt="headshot of developer" width="200px" height="200px"/>
                    </div>
                    <div className="hero__headshot-skills">
                        <Chip label="React" color="primary"/>
                        <Chip label="HTML5" color="primary"/>
                        <Chip label="CSS3" color="primary"/>
                        <Chip label="Material-UI" color="primary"/>
                        <Chip label="Node" color="primary"/>
                        <Chip label="C#" color="primary"/>
                        <Chip label=".Net" color="primary"/>
                    </div>
                </div>
                <div className="hero__intro">
                    <h1>Welcome to Developer Space!</h1>
                    <h3>Looking for web developer to convert your ideas into reality!</h3>
                    <h2>Checkout this awesome portfolio.</h2>
                </div>
            </div>
         
        </div>
    )
}

export default Hero
