import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginValidation from "../../utils/loginValidation.js";

const LoginPage = () => {

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(loginValidation(values));
    }

    return (
        <div>
            <div>
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" onChange={handleInput} name="email" />
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" onChange={handleInput}name="password" />
                        {errors.password && <span>{errors.password}</span>}

                    </div>
                    <button type="submit">Log In</button>
                    <br />
                    <Link to="/register">Create Account</Link>

                </form>
            </div>
        </div>
    )
};

export default LoginPage;