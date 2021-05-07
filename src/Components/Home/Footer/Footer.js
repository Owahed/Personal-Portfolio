import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light ">
            <div className='p-4 d-flex justify-content-between row'>
            <div className="col-sm-12 col-md-6 text-center">
                <p>Copyright © 2021 || Owahed Hossain</p>
            </div>
            <div className="col-sm-12 col-md-6 text-center">
                <ul className="d-flex text-center">
                    <li><a className="footer-a" target="_blank" href="https://www.facebook.com/owahed.hossain.7">FACEBOOK</a></li>
                    <li><a className="footer-a" target="_blank" href="https://www.linkedin.com/in/owahed-hossain-877777210/">LINKEDIN</a></li>
                    <li><a className="footer-a" target="_blank" href="https://github.com/Owahed">GITHUB</a></li>
                    
                </ul>
            </div>
            </div>
        </footer>
    );
};

export default Footer;