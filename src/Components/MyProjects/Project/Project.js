import React from 'react';
import { Link } from 'react-router-dom';
import clock1 from '../../../Image/c-1.png'
import rider1 from '../../../Image/React-rider1.png'
import book from '../../../Image/Book.png'
import cook from '../../../Image/COOKING-MASTER.png'
import football from '../../../Image/Football.png'
import imageSearch from '../../../Image/Image-search.png'
import eCommerce from '../../../Image/E-commerce.png'
import fashion from '../../../Image/Penguin-Fashion.png'

const Project = () => {

    return (
        <div className='bg-light'>
            <div className="container text-center  py-5">
                <div className="my-3 pb-5">
                    <h3 className='text-center'>MY PORTFOLIO</h3>
                </div>
                <div className="row">

                    <div className="col-md-4  p-3 ">
                        <img height="350px" width="350px" src={clock1} alt="" />
                    </div>
                    <div className="col-md-4  p-3">
                        <img height="350px" width="350px" src={rider1} alt="" />
                    </div>
                    <div className="col-md-4  p-3">
                        <img height="350px" width="350px" src={book} alt="" />
                    </div>
                    <div className="col-md-4  p-3">
                        <img height="350px" width="350px" src={cook} alt="" />
                    </div>
                    <div className="col-md-4  p-3">
                        <img height="350px" width="350px" src={football} alt="" />
                    </div>
                    <div className="col-md-4  p-3">
                        <img height="350px" width="350px" src={imageSearch} alt="" />
                    </div>
                    <div className="col-md-4  p-3">
                        <img height="350px" width="350px" src={eCommerce} alt="" />
                    </div>
                    
                    <div className="col-md-4  p-3">
                        <img height="350px" width="350px" src={fashion} alt="" />
                    </div>
                </div>
                <Link to="/myProjects"> <button className="btn project-btn mt-5">View All</button></Link>

            </div>
        </div>
    );
};

export default Project;