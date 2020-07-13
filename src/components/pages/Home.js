import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function Home() {

    const { userData } = useContext(UserContext);

    const history = useHistory();

    return (
        <div>
            {
                userData.user ? (<h2>Home Page</h2>) :
                    history.push('/login')
            }
        </div>
    )
}
