import React from 'react';
import MyProjects from '../../MyProjects/MyProjects/MyProjects';
import Project from '../../MyProjects/Project/Project';
import AboutMe from '../AboutMe/AboutMe';
import Blogs from '../Blogs/Blogs';
import ContactMe from '../ContactMe/ContactMe';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div style={{backgroundColor:"#FFF"}}>
            <NavBar></NavBar>
            <Header></Header>
            <AboutMe></AboutMe>
            <Project></Project>
            <Blogs></Blogs>
            <Services></Services>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;