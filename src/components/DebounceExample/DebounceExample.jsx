import React, { useEffect, useState } from "react";
import "./DebounceExample.css";
import useDebounce from "../../hooks/useDebounce";

const DebounceExample = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const [searchValue, setSearchValue] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData(URL) {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(
                    `${URL}?q=${searchValue}&limit=10&skip=${(page - 1) * 10}`,
                );
                if (!response.ok) {
                    throw new Error(`Something went wrong`);
                }
                const responseData = await response.json();
                setData(responseData.products);
                console.log(responseData);
            } catch (error) {
                console.log("Saty", error);
                setError({
                    message: error.message,
                });
            } finally {
                setLoading(false);
            }
        }

        const timeoutRef = setTimeout(() => {
            fetchData("https://dummyjson.com/products/search");
        }, 300);

        return () => clearTimeout(timeoutRef);
    }, [searchValue, page]);

    // using custom hook
    const handelChange = useDebounce({
        callback: (value) => {
            console.log("delayed print", value);
        },
        delay: 300,
    });

    return (
        <div className="debounce-container">
            <h2 className="title">Debounce Example</h2>
            <input
                type="text"
                name="search"
                id="search"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.currentTarget.value);
                    handelChange(e.currentTarget.value);
                }}
                className="search-input"
            />
            {loading && <div>loading...</div>}
            {error && <div>{error.message}</div>}
            {!loading && !error && data.length === 0 ? (
                <div>No Data</div>
            ) : (
                <div>
                    {data.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DebounceExample;
