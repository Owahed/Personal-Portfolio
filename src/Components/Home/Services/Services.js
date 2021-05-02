import React from 'react';
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faCrosshairs } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className="bg-light text-center py-5">
            <h2>MY SERVICES</h2>
 
<div class="about">
   <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links logo"></a>
</div>
{/* <!-- end about --> */}
   
   <div class="content">
      {/* <!-- card --> */}
      <div class="card">
         
            <div class="icon"><FontAwesomeIcon size="2x" icon={faCrosshairs} /></div>
            <p class="title">WEB DESIGN</p>
            <p class="text">Click to see or edit your profile page.</p>
         
      </div>
      {/* <!-- end card -->
      <!-- card --> */}
      <div class="card">
         
            <div class="icon"><FontAwesomeIcon size="2x" icon={faHeart} /></div>
            <p class="title">DEVELOPMENT</p>
            <p class="text">Check all your favourites in one place.</p>
         
      </div>
      {/* <!-- end card -->
      <!-- card --> */}
      <div class="card">
         
            <div class="icon"><span class="material-icons md-36">leaderboard</span></div>
            <p class="title">DATABASE</p>
            <p class="text">Add or change your contacts and links.</p>
         
      </div>
      {/* <!-- end card --> */}
   

   
   </div>
</div>
        // </div>
    );
};

export default Services;