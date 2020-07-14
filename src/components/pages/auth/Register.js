import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import userContext from '../../../context/UserContext';
import { page, Form, inputField, contentName, labelName, btn, pageTitle } from '../../../css/auth.module.css'
import ErrorNotice from '../../misc/ErrorNotice';

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(userContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        const newUser = { email, password, passwordCheck, displayName };
        try {
            await axios.post("https://mern-backend-node.herokuapp.com/users/register", newUser);

            const loginRes = await axios.post("https://mern-backend-node.herokuapp.com/users/login", { email, password });
            const { token, user } = loginRes.data;

            setUserData({
                token: token,
                user: user
            });
            localStorage.setItem('auth-token', token);
            history.push('/');
        } catch (err) {

            err.response.data.msg && setError(err.response.data.msg);

        }
    }

    return (
        <main className={page}>
            <h2 className={pageTitle}>Register</h2>
            <form onSubmit={submit} className={Form}>
                <div className={inputField}>
                    <input type="email" id="register-email" maxLength='32' onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="Email" className={labelName}><span className={contentName}>Email</span></label>
                </div>
                <div className={inputField}>
                    <input type="password" id="register-password" maxLength='16' onChange={(e) => setPassword(e.target.value)} required />
                    <label htmlFor="password" className={labelName}><span className={contentName}>Password</span></label>
                </div>
                <div className={inputField}>
                    <input type="password" id="register-password-check" maxLength='16' onChange={(e) => setPasswordCheck(e.target.value)} required />
                    <label htmlFor="password" className={labelName}><span className={contentName}>Verify Password</span></label>
                </div>
                <div className={inputField}>
                    <input type="text" id="register-display-name" maxLength='16' onChange={(e) => setDisplayName(e.target.value)} required />
                    <label htmlFor="displayName" className={labelName}><span className={contentName}>Display Name</span></label>
                </div>
                <div>
                    <input className={btn} type="submit" value="Register" />
                </div>
            </form>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
        </main>
    )
}
