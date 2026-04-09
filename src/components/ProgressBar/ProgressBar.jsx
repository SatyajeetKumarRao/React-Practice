import React, { useEffect, useState } from 'react'
import './ProgressBar.css'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("interval running")
            let currentValue = 0
            setProgress((prev) => {
                const value = prev + Math.floor(Math.random() * 10);
                currentValue = value;
                return value >= 100 ? 100 : value
            })
            if(currentValue>=100){
                clearInterval(intervalId)
            }
        }, 800)

        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return (
        <div className='progress-bar-container'>
            <h2>ProgressBar</h2>
            <div className="outer">
                <div className="inner" style={{
                    // width: `${progress}%`
                    transform: `translateX(${progress - 100}%)`
                }}></div>
            </div>
        </div>
    )
}

export default ProgressBar