import React from 'react';
import SkillBar from 'react-skillbars';
import MyPDF from '../../../Resume/Owahed-Hossain-Resume (Full).pdf';

const AboutMe = () => {
    const skills = [
        {type: "DESIGN", level: 95},
        {type: "HTML&CSS", level: 100},
        {type: "JavaScript", level: 75},
        {type: "React", level: 85},
        {type: "Express.js", level: 90},
        {type: "MongoDB", level: 80},
        
      ];

     const colors = {
        bar: '#a1a1a1 ',
        title: {
          text: '#5e5e5e',
          background: ' #c8c8c8'
        }
      }
    return (
        <div style={{backgroundColor:"#fff"}}>
            <div className="container py-5 ">
                <div>
                    <h2 className='section-h2 text-center mb-5'>ABOUT ME</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3 className='slider-h3'>Howdy!</h3>
                        <p className='about-me-p '>Full Stack Developers often begin their career as either a front or backend developer, and I have mastered skills in both.</p>
                        
                        <a className='project-btn' href={MyPDF} download="MY_RESUME.pdf"> DOWNLOAD MY RESUME</a>
                    </div>
                    <div className="col-md-6 mt-3">
                    <SkillBar colors={colors} skills={skills}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;