import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import AuthOptions from '../pages/auth/AuthOptions';

export default function Header() {
    return (
        <header className={styles.Header}>
            <Link to='/' className={styles.title_container}>
                <h1 className={styles.title}>Try</h1>
            </Link>
            <AuthOptions />
        </header>
    )
}
