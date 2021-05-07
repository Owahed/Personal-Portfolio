import React from 'react';
import Project from '../Project/Project';
import clock1 from '../../../Image/c-1.png'
import rider1 from '../../../Image/React-rider1.png'
import book from '../../../Image/Book.png'
import cook from '../../../Image/COOKING-MASTER.png'
import EmaJohn from '../../../Image/Ema-jone (1).png'
import ProjectDetails from '../ProjectDetails/ProjectDetails';


const projects=[
    {
        name:'Home Clock',
        id:'1',
        img1:clock1,
        
        detail:'Admin goes to Admin panel There are 4 services available. Admin Can Add service Dynamically show on the website in the Services Section, Also Delete any Service any time, See All Order List and Make Anyone Admin Dynamically.Users can Order Services and Go to Admin Section, See the Order and Review of the Service that Dynamically show on the website in the Review Section.Admin and User must be login with Google Authentication.',
        technology: 'Axios, Rest API, React.js, Node.js, Express.js, MongoDB, Firebase, Heroku, Material-UI.',
        liveSite:'https://clock-bdb9c.web.app/',
        github:'https://github.com/Owahed/Home-Clock'


    },
    {
        name:'Ema John',
        id:'5',
        img1:EmaJohn,
        
        detail:'This is the little brother of amazon.',
        technology: 'Axios, Rest API, React.js, Node.js, Express.js, MongoDB, Firebase, Heroku, Material-UI, Bootstrap.',
        liveSite:'https://roky-owahed.web.app/',
        github:'https://github.com/Owahed/ema-john-client'


    },
    {
        name:'Hello Rider',
        id:'2',
        img1:rider1,
        
        detail:'Users can take a ride service. There are 4 services available.Implemented google authentication. The user must be logged in to email or google service.',
        technology: 'React-Bootstrap, React.js, Firebase.',
        liveSite:'https://hello-rider-bbd6b.web.app/',
        github:'https://github.com/Owahed/Hello-Rider'
    },
    {
        name:'The Book Village',
        id:'3',
        img1:book,
        
        detail:' Go to Admin panel There are 2 services available. Admin Can Add service Dynamically show on the website, Also Delete any Service any time.Users can Order Book and Go to Order Section, See the Order list with Private Route.Implemented google authentication. Admin and User must be login.',
        technology: 'Axios, Rest API, React.js,  Node.js, Express.js, MongoDB, Firebase, Heroku, Material-UI.',
        liveSite:'https://book-store-3f8aa.web.app/',
        github:'https://github.com/Owahed/The-Book-Village'
    },
    {
        name:'CookingMaster',
        id:'4',
        img1:cook,
        
        detail:'User can search for any food when they need. ',
        technology: 'HTML, CSS, Bootstrap, JavaScript',
        liveSite:'https://owahed.github.io/Cooking-Master/',
        github:'https://github.com/Owahed/Cooking-Master'
    },
]

const MyProjects = () => {
    return (
       <div className="bg-light">
            <div className="pt-5 container">
             <div className=''>
                <h2 className='section-h2 text-center'>MY PROJECTS</h2>
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