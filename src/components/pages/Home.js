import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function Home() {

    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user)
            history.push('/login');
    });

    return (
        <div>
            <h2>Home Page</h2>
        </div>
    )
}
