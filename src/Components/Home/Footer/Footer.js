import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light p-4 d-flex justify-content-between row">
            <div className="col-sm-12 col-md-6 text-center">
                <p>Copyright © 2021 || Owahed Hossain</p>
            </div>
            <div className="col-sm-12 col-md-6 text-center">
                <ul className="d-flex">
                    <li><a className="footer-a" href="#">FACEBOOK</a></li>
                    <li><a className="footer-a" href="#">TWITTER</a></li>
                    <li><a className="footer-a" href="#">LINKEDIN</a></li>
                    <li><a className="footer-a" href="#">EMAIL</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;