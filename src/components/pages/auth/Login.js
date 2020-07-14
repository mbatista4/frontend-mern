import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import userContext from '../../../context/UserContext';
import { page, Form, inputField, contentName, labelName, btn, pageTitle } from '../../../css/auth.module.css'


export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const { setUserData } = useContext(userContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        const loginUser = { email, password };
        try {
            const loginRes = await axios.post("https://mern-backend-node.herokuapp.com/users/login", loginUser);
            const { token, user } = loginRes.data;

            setUserData({
                token: token,
                user: user
            });
            localStorage.setItem('auth-token', token);
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main className={page}>
            <h2 className={pageTitle}>Login</h2>
            <form onSubmit={submit} className={Form}>
                <div className={inputField}>
                    <input type="email" id="login-email" onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="Email" className={labelName}><span className={contentName}>Email</span></label>
                </div>
                <div className={inputField}>
                    <input type="password" id="login-password" onChange={(e) => setPassword(e.target.value)} required />
                    <label htmlFor="password" className={labelName}><span className={contentName}>Password</span></label>
                </div>
                <input className={btn} type="submit" value="Login" />
            </form>
        </main>
    )
}
