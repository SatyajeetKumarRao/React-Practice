import React, { Fragment, useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext'
import ThemeExample from './ThemeExample';

const ContextExample = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    return (
        <div>
            <h2>ContextExample</h2 >

            <p>Logged in: {isLoggedIn.toString()}</p>

            <button onClick={() => setIsLoggedIn(prev => !prev)}>{isLoggedIn ? 'Logout' : 'Login'}</button>

            <ThemeExample />
        </div >
    )
}

export default ContextExample