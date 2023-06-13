import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const [error, setError] = useState("");

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/auth/login', values)
        .then(res => {
            console.log(res);
            navigate('/tasks');
        })
        .catch(err => {
            if (err.response.status === 404 || err.response.status === 401)
                console.log("Invalid credentials");
                setError("Invalid credentials");
        });
    }

    return (
        <div>
            <div>
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" onChange={handleInput} name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" onChange={handleInput}name="password" />
                    </div>
                    {error && <span>{error}</span>}
                    <br />
                    <button type="submit">Log In</button>
                    <br />
                    <Link to="/register">Create Account</Link>

                </form>
            </div>
        </div>
    )
};

export default LoginPage;