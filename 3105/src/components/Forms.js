// src/Forms.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/Forms.css';
import 'react-bootstrap';
import Navbar from './Nav';


const Forms = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000); //2 segundos nigrito
    }

    return (
        
        <div className="container-fluid p-0">
            <Navbar />
            <div className="text-center">
                <h1 className="pt-4">Forms Page</h1>

                
                
                <br/><br/>
                <form onSubmit={handleSubmit}>
                    {loading ? (
                        <div className="skeleton-loader">
                            {Array.from({length: 8}, (_, index) => <div key={index} className="skeleton-line"></div>)}
                        </div>
                    ) : (
                        <>
                        <div className="text-center mt-3">
                                <button type="submit" className="btn btn-success btn-lg" value="Submit">Submit</button>
                            </div>
                <div className="col-md-2 mb-2">
                    <label>
                    First Name:
                    <input type="text" className="form-control"name="firstName" placeholder="Enter your first name" style = {{textAlign: "center"}}/>
                    </label>
                </div>
                <div className="col-md-2 mb-3">
                    <label>
                    Last Name:
                    <input type="text" className="form-control" name="lastName" placeholder="Enter your last name" style = {{textAlign: "center"}}/>
                    </label>
                </div>
                
                <div className="col-md-2 mb-3">
                    <label>
                    Address:
                    <input type="text" className="form-control" name="address" placeholder="Enter your address" style = {{textAlign: "center"}}/>
                    </label>    
                </div>
                <div className="col-md-2 mb-3">
                    <label>
                    Email:
                    <input type="email" className="form-control" name="email" placeholder="Enter your email" style = {{textAlign: "center"}}/>
                    </label>
                </div>
                <div className="col-md-2 mb-3">
                    <label>
                    Password:
                    <input type="password" className="form-control" name="password" placeholder="Enter your password" style = {{textAlign: "center"}}/>
                    </label>
                </div>
                <div className="col-md-2 mb-3">
                    <label>
                    Phone Number:
                    <input type="tel" className="form-control" name="phone" placeholder="Enter your phone number" style = {{textAlign: "center"}}/>
                    </label>
                </div>
                <div className="col-md-2 mb-3">
                    <label>
                    Country:
                    <input type="text" className="form-control" name="country" placeholder="Enter your country" style = {{textAlign: "center"}}/>
                    </label>
                </div>
                <div className="col-md-2 mb-3">
                    <label>
                    City:
                    <input type="text" className="form-control" name="city" placeholder="Enter your city" style = {{textAlign: "center"}}/>
                    </label>
                    
                </div>
                
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Forms;
