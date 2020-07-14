import React from 'react'
import { errorMsg } from '../../css/auth.module.css'

export default function ErrorNotice({ message, clearError }) {
    return (
        <div className={errorMsg}>
            <span>{message}</span>
            <button onClick={clearError}>X</button>
        </div>
    )
}
