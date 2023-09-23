    // src/Home.js
    import React from 'react';
    import '../css/Home.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';
    import 'react-bootstrap';
    import Navbar from './Nav';
    import logotitle from '../image/logotitle.png';


    const Home = () => {
    

        return (    
            <div className="background-image">
        <div className="container-fluid p-0">
            
            
            <Navbar />
            {/*<div className="text-center">
                <img src={top} alt="" className="w-100 h-100"/>
        </div>*/}

            
            
                <center>
                <img src={logotitle} alt="" class="flex pt-4 items-center"/></center>
             
                </div>
                


                </div>
           



        );
    }

    export default Home;
