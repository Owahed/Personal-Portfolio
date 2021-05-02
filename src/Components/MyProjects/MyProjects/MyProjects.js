import React from 'react';
import Project from '../Project/Project';
import clock1 from '../../../Image/c-1.png'
import clock2 from '../../../Image/c-2.png'
import clock3 from '../../../Image/c-3.png'
import rider1 from '../../../Image/React-rider1.png'
import rider2 from '../../../Image/React-rider2.png'
import rider3 from '../../../Image/React-rider3.png'
import ProjectDetails from '../ProjectDetails/ProjectDetails';


const projects=[
    {
        name:'Home Clock',
        id:'1',
        img1:clock1,
        img2:clock2,
        img3:clock3,
        detail:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by th charms of pleasure of the moment, so blinded by desire, tht they cannot foresee the pain and trouble that are',
        technology: 'HTML, CSS, Material-UI, Axios, React.js, Firebase, Node.js and express.js, MongoDB, Heroku.',
        liveSite:'https://clock-bdb9c.web.app/',
        github:'https://github.com/Owahed/Home-Clock'


    },
    {
        name:'Hello Rider',
        id:'2',
        img1:rider1,
        img2:rider2,
        img3:rider3,
        detail:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by th charms of pleasure of the moment, so blinded by desire, tht they cannot foresee the pain and trouble that are',
        technology: 'HTML, CSS, Bootstrap, React.js, Firebase, Node.js,express.js, MongoDB, Heroku.',
        liveSite:'https://hello-rider-bbd6b.web.app/',
        github:'https://github.com/Owahed/Hello-Rider'
    }
]

const MyProjects = () => {
    return (
       <div className="bg-light">
            <div className="pt-5 container">
             <div className=''>
                <h2 className='section-h2 text-center'>MY PORTFOLIO</h2>
            </div>
            <div className="row">
            {
                projects.map(project=><ProjectDetails  project={project}></ProjectDetails>)
            }
            </div>
            
           
        </div>
       </div>
    );
};

export default MyProjects;