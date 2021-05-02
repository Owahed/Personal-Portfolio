import React from 'react';


const ProjectDetails = ({project}) => {
    console.log(project)
    return (
        <div className='container mt-5 pt-5'>
            <div className="row">
                <div className="col-md-4 p-3">
                <h3 className="project-h3">{project.name}</h3>
                <p className="project-p">{project.detail}</p>
                </div>
                <div className="col-md-4 p-3">
                    <h3 className="project-h3">Technology :</h3>
                    <p className="project-p">{project.technology}</p>
                    <a href={project.liveSite}>Live Site</a>
                    <br/>
                    <a href={project.github}>Github link</a>
                </div>
                <div className="col-md-4">
                    <img height='300px' width='400px' src={project.img1} alt="" />
                </div>

                
                
               
            </div>
        </div>
    );
};

export default ProjectDetails;