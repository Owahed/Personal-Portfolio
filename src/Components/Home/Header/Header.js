import React from 'react';
import user from '../../../Image/User.png'

const Header = () => {
    return (
      <header className="bg-light">
            <div className="container ">
            <div className="row ">
                <div className="col-md-6 d-flex pt-3 align-items-center">
                    <div className='' >
                    <h5 className="slider-text ">HELLO, MY NAME IS</h5>
                    <h1 className="slider-h1 my-4">OWAHED HOSSAIN</h1>
                    <p>The primary responsibility of a Full Stack Developer includes designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms.</p>
                    
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img id='img'  src={user} alt=""/>
                </div>
            </div>
        </div>
      </header>
    );
};

export default Header;