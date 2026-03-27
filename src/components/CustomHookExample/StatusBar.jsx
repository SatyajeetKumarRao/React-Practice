import React, { Fragment } from 'react'
import useOnlineStatus from '../../hooks/useOnlineStatus'
import './style.css'

const StatusBar = () => {
    const { isOnline } = useOnlineStatus();
    return (

        <div className='status-bar'>
            <h2>Status</h2>
            <div>{isOnline ? "✅ Connected" : "❌ Disconnected"}</div>
        </div>
    )
}

export default StatusBar