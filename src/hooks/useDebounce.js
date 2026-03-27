import React, { useCallback, useEffect, useRef } from "react";

const useDebounce = ({ callback, delay }) => {
    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const debouncedFunction = useCallback(
        (...args) => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
    return debouncedFunction;
};

export default useDebounce;
