// src/Forms.js
import React from 'react';
import { Link } from 'react-router-dom'

const Forms = () => {
    return (
        <div>
        <center>
            <h1>Forms Page</h1>
            <Link to="/"><button>Go to Home Page</button></Link>
            <br/><br/>
            <form>
                <div>
                    <label>
                    First Name:
                    <input type="text" name="firstName" placeholder="Enter your first name" />
                    </label>
                </div>
                <div>
                    <label>
                    Last Name:
                    <input type="text" name="lastName" placeholder="Enter your last name" />
                    </label>
                </div>
                <br/><br/>
                    <label>
                    Address:
                    <input type="text" name="address" placeholder="Enter your address" />
                </label>
                <br/><br/>
                <label>
                    Email:
                    <input type="email" name="email" placeholder="Enter your email" />
                </label>
                <br/><br/>
                <label>
                    Password:
                    <input type="password" name="password" placeholder="Enter your password" />
                </label>
                <br/><br/>
                <label>
                    Phone Number:
                    <input type="tel" name="phone" placeholder="Enter your phone number" />
                </label>
                <br/><br/>
                <label>
                    Country:
                    <input type="text" name="country" placeholder="Enter your country" />
                </label>
                <br/><br/>
                <label>
                    City:
                    <input type="text" name="city" placeholder="Enter your city" />
                </label>
                <br/><br/>
                <input type="submit" value="Submit" />
            </form>
        </center>
    </div>
    );
  }

export default Forms;
