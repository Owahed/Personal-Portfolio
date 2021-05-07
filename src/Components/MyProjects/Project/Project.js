import React from 'react';
import { Link } from 'react-router-dom';
import clock1 from '../../../Image/c-1.png'
import rider1 from '../../../Image/React-rider1.png'
import book from '../../../Image/Book.png'
import cook from '../../../Image/COOKING-MASTER.png'
import football from '../../../Image/Football.png'
import EmaJone from '../../../Image/Ema-jone (1).png'
import eCommerce from '../../../Image/E-commerce.png'

import './Projects.css'



const Project = () => {

    return (
        <div className='bg-light'>
            <div className="container text-center  py-5">
                <div className="my-3 pb-5">
                    <h3 className='text-center'>MY PROJECTS</h3>
                </div>
                <div className="row">

                    <div className="col-md-4  p-3 text-center">
                            <div class="hovereffect">
                                <img height="350px" width="350px" src={clock1} alt="" />
                                <div class="overlay">
                                    <h2>Home Clock</h2>
                                    <a class="info text-center" target="_blank"  href="https://clock-bdb9c.web.app/">Live link</a>
                                </div>
                            </div>
                        
                    </div>
                    <div className="col-md-4  p-3 text-center">
                            <div class="hovereffect">
                                <img height="350px" width="350px" src={EmaJone} alt="" />
                                <div class="overlay">
                                    <h2>Ema John</h2>
                                    <a class="info text-center" target="_blank"  href=" https://roky-owahed.web.app/">Live link</a>
                                </div>
                            </div>
                        
                    </div>
                    <div className="col-md-4  p-3">
                        <div >
                            <div class="hovereffect">
                                <img height="350px" width="350px" src={rider1} alt="" />
                                <div class="overlay">
                                    <h2>Hello Rider</h2>

                                    <a class="info" target="_blank" href="https://hello-rider-bbd6b.web.app/">Live link</a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4  p-3">
                        <div >
                            <div class="hovereffect">
                                <img height="350px" width="350px" src={book} alt="" />
                                <div class="overlay">
                                    <h2>The Book Village</h2>

                                    <a class="info" target="_blank" href="https://book-store-3f8aa.web.app/">Live link</a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4  p-3">
                        <div class="hovereffect">
                            <img height="350px" width="350px" src={cook} alt="" />
                            <div class="overlay">
                                <h2>Cooking-Master</h2>

                                <a class="info" target="_blank" href="https://owahed.github.io/Cooking-Master/">Live link</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4  p-3">
                        <div class="hovereffect">
                            <img height="350px" width="350px" src={football} alt="" />
                            <div class="overlay">
                                <h2>Next Brawlers</h2>

                                <a class="info" target="_blank" href="https://elegant-mayer-437b43.netlify.app">Live link</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4  p-3">
                        <div class="hovereffect">
                            <img height="350px" width="350px" src={eCommerce} alt="" />
                            <div class="overlay">
                                <h2>Shopping cart</h2>

                                <a class="info" target="_blank" href="https://owahed.github.io/card/">Live link</a>

                            </div>
                        </div>
                    </div>
                    
                </div>
                <Link to="/myProjects"> <button className="btn project-btn mt-5">View All Projects</button></Link>




            </div>
        </div>
    );
};

export default Project;