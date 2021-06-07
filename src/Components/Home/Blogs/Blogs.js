import React from 'react';

const Blogs = () => {
    return (
        <div  style={{ height: "auto",width:'100%', backgroundColor: "#fff",paddingBottom:'50px' }}>
            <div className='container'>
            <h1 className="text-center my-5">Blogs</h1>
            <div className=" blogs">
                <div class="card" style={{height:'350px'}}>
                    <a target="_blank" href="https://owahedhossain.medium.com/javascript-for-beginners-d37adb36a16">
                    <img height="170px" src="https://miro.medium.com/max/2732/1*LyZcwuLWv2FArOumCxobpA.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 style={{color:'#000'}} class="card-title"> JavaScript for Beginners </h5>
                        <p style={{color:'#000'}} class="card-text">JavaScript is a programming language.Java and JavaScript, ...</p>
                        <a target="_blank" href="https://owahedhossain.medium.com/javascript-for-beginners-d37adb36a16" class="btn btn-success">Read Now</a>
                        
                    </div>
                    </a>
                </div>
                <div class="card" style={{height:'350px'}}>
                    <a target="_blank" href="https://owahedhossain.medium.com/7-javascript-concepts-you-have-to-know-4106277fe1b1">
                    <img height="170px" src="https://miro.medium.com/max/2000/1*lexherbHOejpd_VRTLuzUg.jpeg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 style={{color:'#000'}} class="card-title"> JavaScript </h5>
                        <p style={{color:'#000'}} class="card-text">5 JavaScript Concepts You Have to Know.</p>
                        <a target="_blank" href="https://owahedhossain.medium.com/7-javascript-concepts-you-have-to-know-4106277fe1b1" class="btn btn-success">Read Now</a>
                        
                    </div>
                    </a>
                </div>

                <div class="card" style={{height:'350px'}}>
                    <a target="_blank" href="https://owahedhossain.medium.com/react-js-dd4c9be46b3e">
                    <img height="170px" src="https://miro.medium.com/max/1024/1*zRJjAN-REufPq8D8ZpQDeg.jpeg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 style={{color:'#000'}} class="card-title"> React Js. </h5>
                        <p style={{color:'#000'}} class="card-text">We will talk about React which is a popular JavaScript library.</p>
                        <a target="_blank" href="https://owahedhossain.medium.com/react-js-dd4c9be46b3e" class="btn btn-success">Read Now</a>
                        
                    </div>
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blogs;