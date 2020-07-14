import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { mainContent } from '../../css/home.module.css';



export default function Home() {

    const { userData, setUserData } = useContext(UserContext);



    const history = useHistory();

    let name = '';
    let display;
    useEffect(() => {
        if (!userData.user) {
            history.push('/login');
            return;
        }


    });

    if (userData.user)
        name = userData.user.display;


    return (
        <main className={mainContent}>
            <h2>Home Page</h2>
            <h4> Welcome, {name}</h4>
        </main>
    )
}
