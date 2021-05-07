import React from 'react';
import user from '../../../Image/User.png'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import  { Component } from 'react'
import Typical from 'react-typical'


const Header = () => {
    return (
        <header className="bg-light">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-6 d-flex pt-3 align-items-center">
                        <div >
                            <h5 className="slider-text ">HELLO, MY NAME IS</h5>
                            <h1 className="slider-h1 my-4">OWAHED HOSSAIN</h1>
                            <Typical
                                 steps={["I'm a", 2000, 'Web Developer', 1000]}
                                loop={Infinity}
                                wrapper="h5"
                            />
                            <p>The primary responsibility of a Full Stack Developer includes designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms.</p>

                            <div >
                                <a className="m-1" href="https://www.facebook.com/owahed.hossain.7" target="_blank">
                                    <FacebookIcon color="action" fontSize="large" />
                                </a>
                                <a href="https://www.linkedin.com/in/owahed-hossain-877777210/" target="_blank">
                                    <LinkedInIcon color="action" fontSize="large" />
                                </a>
                                <a className="m-1" href="https://github.com/Owahed" target="_blank">
                                    <GitHubIcon color="action" style={{ fontSize: "30px" }} fontSize="" />
                                </a>

                            </div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img id='img' src={user} alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;