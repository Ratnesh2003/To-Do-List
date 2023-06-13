import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerValidation from "../../utils/registerValidation";
import axios from 'axios';

const RegisterPage = () => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(registerValidation(values));
        if (errors.firstName === "" && errors.email === "" && errors.password === "") {
            
            axios.post('http://localhost:3001/auth/register', values)
                .then(res => {
                    console.log(res);
                    navigate('/login');
                })
                .catch(err => console.log(err.response.data));
        }
    }

    return (
        <div>
            <div>
                <h2>Register</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" placeholder="Enter First Name" onChange={handleInput} name="firstName" />
                        {errors.firstName && <span>{errors.firstName}</span>}
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder="Enter Last Name" onChange={handleInput} name="lastName" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" onChange={handleInput} name="email" />
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" onChange={handleInput} name="password" />
                        {errors.password && <span>{errors.password}</span>}
                    </div>
                    <button type="submit">Regiser</button>
                    <br />
                    <Link to="/login">Login</Link>

                </form>
            </div>
        </div>
    )
};

export default RegisterPage;