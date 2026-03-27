import React from 'react'
import useTheme from '../../context/theme/ThemeContext'
import './ThemeExample.css'

const ThemeExample = () => {
    const { themeMode, setDarkThemeMode, setLightThemeMode } = useTheme();

    function changeTheme() {
        if (themeMode === 'light') setDarkThemeMode();
        else setLightThemeMode();
    }
    return (
        <div>
            <div className={themeMode}>
                <h1>ThemeExample</h1>
            </div>
            <button type="button" onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

export default ThemeExample