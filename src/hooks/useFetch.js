import React, { useCallback, useEffect, useRef, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const controllerRef = useRef(null);

    const fetchData = useCallback(async () => {
        if (controllerRef.current) {
            controllerRef.current.abort();
        }

        const controller = new AbortController();
        controllerRef.current = controller;
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(url, { signal: controller.signal });
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const responseData = await response.json();
            if (!controller.signal.aborted) {
                setData(responseData);
            }
        } catch (error) {
            console.error(error);
            if (error.name !== "AbortError") setError(error);
        } finally {
            if (!controller.signal.aborted)
                setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();

        return () => {
            if (controllerRef.current) {
                controllerRef.current.abort();
            }
        };
    }, [fetchData]);

    const refetch = useCallback(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch };
};

export default useFetch;
