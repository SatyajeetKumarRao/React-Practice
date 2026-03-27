import React, { useEffect, useRef, useState } from "react";
import useThrottle from "../../hooks/useThrottle";

const ThrottleExample = () => {
    const [count, setCount] = useState(1);
    const throttleRef = useRef(null);
    function handleClick() {
        if (throttleRef.current) return;
        setCount((prev) => prev + 1);
        throttleRef.current = setTimeout(() => {
            throttleRef.current = null
        }, 1000);
    }

    useEffect(() => {
        return () => {
            if (throttleRef.current) {
                clearTimeout(throttleRef.current)
            }
        }
    }, [])

    const handleClick2 = useThrottle({
        callback: () => {
            setCount((prev) => prev + 2);
        }, delay: 2000
    })

    return (
        <div>
            <h2>ThrottleExample</h2>
            <p>Count: {count}</p>
            <button type="button" onClick={handleClick}>
                Click Me
            </button>
            <button type="button" onClick={handleClick2}>Click Me 2</button>
        </div >
    );
};

export default ThrottleExample;
