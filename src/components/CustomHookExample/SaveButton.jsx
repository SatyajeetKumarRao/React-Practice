import React from 'react'
import useOnlineStatus from '../../hooks/useOnlineStatus'

const SaveButton = () => {
    const { isOnline } = useOnlineStatus();
    return (
        <button disabled={!isOnline}>{isOnline ? "Save" : "Reconnecting..."} </button>
    )
}

export default SaveButton