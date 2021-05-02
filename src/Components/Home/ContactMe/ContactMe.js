import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt ,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

const ContactMe = () => {
    return (
        <div className='bg-white'>
        <div className="container py-5 ">
            <div className="row py-5">
                <div className="col-md-4">
                    <h2 className="section-h2">GET IN TOUCH</h2>
                    <hr />
                    <p>There are many variations of pssges of Lorem Ipsum available, bu in some form, by</p>
                    <div className="d-flex">
                        <div className='d-flex align-items-center'>
                        <FontAwesomeIcon className="contact-icon " size="2x" icon={faPhoneAlt} />
                        </div>
                        <div>
                            <h4 className="contact-h4">Phone</h4>
                            <span><a className="contact-a" href="tel:+88 669 658 6586">01706031682</a></span>
                        </div>

                    </div>
                    <div className="d-flex">
                        <div className='d-flex align-items-center'>
                        <FontAwesomeIcon className="contact-icon " size="2x" icon={faEnvelope} />
                        </div>
                        <div>
                            <h4 className="contact-h4">Email</h4>
                            <span><a className="contact-a" href="mailto:owahedhossain@gmail.com">owahedhossain@gmail.com</a></span>
                        </div>

                    </div>
                    <div className="d-flex">
                        <div className='d-flex align-items-center'>
                        <FontAwesomeIcon className="contact-icon " size="2x" icon={faMapMarkerAlt} />
                        </div>
                        <div>
                            <h4 className="contact-h4">Location</h4>
                            <span><a className="contact-a" href="tel:+88 669 658 6586">Dhaka,Bangladesh</a></span>
                        </div>

                    </div>
                </div>
                <div className="col-md-8"></div>
            </div>
        </div>
        </div>
    );
};

export default ContactMe;