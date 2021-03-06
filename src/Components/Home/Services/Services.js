import React from 'react';
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faCrosshairs } from '@fortawesome/free-solid-svg-icons'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Services = () => {
    return (
        <div  className="bg-light text-center services-container py-5">
            <h2>MY SKILL</h2>
 
<div class="about">
   <a class="bg_links social portfolio" href="https://www.facebook.com/owahed.hossain.7" target="_blank">
   <span class="material-icons md-36">facebook</span>
   </a>
   <a class="bg_links social dribbble" href="https://www.linkedin.com/in/owahed-hossain-877777210/" target="_blank">
   <LinkedInIcon fontSize="large" />
   </a>
   <a class="bg_links social linkedin" href="https://github.com/Owahed" target="_blank">
   <GitHubIcon fontSize="large" />
   </a>
  <AddCircleIcon fontSize="large" />
</div>
{/* <!-- end about --> */}
   
   <div class="content">
      {/* <!-- card --> */}
      <div class="card">
         
            <div class="icon"><FontAwesomeIcon size="2x" icon={faCrosshairs} /></div>
            <p class="title">WEB DESIGN</p>
            <p class="text">Clear understanding of modern technologies and best design practices  </p>
         
      </div>
      {/* <!-- end card -->
      <!-- card --> */}
      <div class="card">
         
            <div class="icon"><FontAwesomeIcon size="2x" icon={faHeart} /></div>
            <p class="title">DEVELOPMENT</p>
            <p class="text">I am a MERN developer.</p>
         
      </div>
      {/* <!-- end card -->
      <!-- card --> */}
      <div class="card">
         
            <div class="icon"><span class="material-icons md-36">leaderboard</span></div>
            <p class="title">DATABASE</p>
            <p class="text">I can use mongoDB to handel Database</p>
         
      </div>
      {/* <!-- end card --> */}
   

   
   </div>
</div>
        // </div>
    );
};

export default Services;