import React from 'react'
import './Service.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BusinessIcon from '@material-ui/icons/Business';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Asp from '../../icons/asp.png'
import Csharp from '../../icons/csharp.svg'
import Css from '../../icons/css3.svg'
import Docker from '../../icons/docker.svg'
import Git from '../../icons/git.svg'
import Html from '../../icons/html5.svg'
import Javascript from '../../icons/javascript.svg'
import MaterialUI from '../../icons/materialui.png'
import Nodejs from '../../icons/nodejs.svg'
import Reactjs from '../../icons/react.svg'

let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 768,
            settings: 'unslick'
        },
      {
        breakpoint: 600,
        settings: 'unslick'
      }]
}

const Service = () => {
    return (
        <div id="Services" className="service">
            <div className="service__header">
                <h2>Web Development Services</h2>
                <p>We assist our customers for highly functional, SEO friendly, mobile responsive websites precisely tailored with your requirement. You can select the technologies as per your requirement and we will deliver the web application in affordable rates best in the market.</p>
            </div>

            <div className="service__category">
                <div className="service__eCommerce">
                    <span>
                        <AddShoppingCartIcon />
                        <h3>eCommerce Website Design</h3>
                    </span>
                    <p>We can build you an optimised eCommerce application that will convert your potential buyers to loyal customers. We will be building the services using popular platforms and frameworks.</p>
                </div>
                <div className="service__webApp">
                    <span>
                        <TrendingUpIcon />
                        <h3>Web Application Development</h3>
                    </span>
                    <p>Our other area of expertise is building web application for specific use case. Management Systems and Admin Portal are the most demanding apps which we provide as a part of our services. With feature rich UI/UX and high functionality your productivity will be much more higher in managing your work.</p>
                </div>
                <div className="service__smallWebsite">
                    <span>
                        <BusinessIcon />
                        <h3>Small Business Website</h3>
                    </span>
                    <p>Are you looking for website for a Local business or Startup, we provide the best design for your needs. Our designed website will help you to get established and gain customers quickly.</p>
                </div>
            </div>
        
            <div>
            <Slider {...settings} className="service__slider">
                <div>
                    <img src={Reactjs} alt=""/>
                </div>
                <div>
                    <img src={Html} alt=""/>
                </div>
                <div>
                    <img src={Css} alt=""/>
                </div>
                <div>
                    <img src={Javascript} alt=""/>
                </div>
                <div>
                    <img src={Nodejs} alt=""/>
                </div>
                <div>
                    <img src={MaterialUI} alt=""/>
                </div>
                <div>
                    <img src={Git} alt=""/>
                </div>
                <div>
                    <img src={Docker} alt=""/>
                </div>
                <div>
                    <img src={Asp} alt="" style={{height: '144px'}}/>
                </div>
                <div>
                    <img src={Csharp} alt=""/>
                </div>
            </Slider>
            </div>
        </div>
    )
}

export default Service
