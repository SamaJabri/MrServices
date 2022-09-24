import React, { useState} from 'react';
import FormInput from '../Components/FormInput';
import Axios from 'axios';
import logo from "../data/MrServiceLogo.svg"
import {useNavigate} from 'react-router-dom';

const Login = () =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const verifyLogin = () => {

        Axios.post('http://localhost:3001/get-user', {
            email: email,
            password: password,
        }).then((response) => {
            if(response.data.message) {
                localStorage.setItem("authenticated", false);
            }
            else {
                 localStorage.setItem("authenticated", true);
                 navigate("/home");
            }
        })
    }

    return (
        <div className="flex justify-center items-center login-div">
            <div className="flex-col justify-center items-center r-02">
                <img src={logo} alt="Mr Service" />
                <h2>Mr Service Admin Panel</h2>
                <form onSubmit={(e) => e.preventDefault()} className="flex-col justify-center login-form">
                    <FormInput label="Email" type="email" id="email" required={true}
                               onchange={(e) => setEmail(e.target.value)} />

                    <FormInput label="Password" type="password" id="password" required={true}
                               onchange={(e) => setPassword(e.target.value)} />

                    <button type="submit" onClick={verifyLogin} className="r-02 form-submit" >Log in</button>
                </form>
            </div>

        </div>
    );
};

export default Login;