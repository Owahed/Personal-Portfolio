import React from 'react';
import { Link } from 'react-router-dom';
import clock1 from '../../../Image/c-1.png'
import rider1 from '../../../Image/React-rider1.png'

const Project = () => {
    
    return (
       <div className='bg-light'>
            <div className="container text-center  py-5">
            <div>
                <h3 className='text-center'>MY PORTFOLIO</h3>
            </div>
            <div className="row">
            
            <div className="col-md-4">
                <img height="350px" width="350px" src={clock1} alt=""/>
            </div>
            <div className="col-md-4">
                <img height="350px" width="350px" src={rider1} alt=""/>
            </div>
            <div className="col-md-4"></div>
        </div>
        <Link to="/myProjects"> <button className="btn btn-danger mt-5">View All</button></Link>
        
        </div>
       </div>
    );
};

export default Project;