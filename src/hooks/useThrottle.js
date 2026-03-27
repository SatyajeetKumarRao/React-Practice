import React, { useCallback, useEffect, useRef } from 'react'

const useThrottle = ({ callback, delay }) => {
    const throttleRef = useRef(null);

    useEffect(() => {
        return () => {
            if (throttleRef.current) {
                clearTimeout(throttleRef.current)
            }
        }
    }, [])

    const throttledFunction = useCallback((...args) => {
        if (throttleRef.current) return;
        callback(...args)
        throttleRef.current = setTimeout(() => {
            throttleRef.current = null
        }, delay);
    }, [callback, delay])

    return throttledFunction;
}

export default useThrottle