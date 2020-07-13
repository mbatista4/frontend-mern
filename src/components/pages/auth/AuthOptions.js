import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { Header_buttons } from '../../layout/Header.module.css';
import UserContext from '../../../context/UserContext';


export default function AuthOptions() {

    const { userData, setUserData } = useContext(UserContext);

    const history = useHistory();

    const reg = () => history.push("/register");
    const login = () => history.push("/login");

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem('auth-token', "");
    }

    return (
        <div className={Header_buttons} >
            {
                userData.user ? (
                    <button onClick={logout}>Logout</button>
                ) :
                    (
                        <>
                            <button onClick={login}>Login</button>
                            <button onClick={reg}>Register</button>
                        </>
                    )
            }
        </div>
    )
}
