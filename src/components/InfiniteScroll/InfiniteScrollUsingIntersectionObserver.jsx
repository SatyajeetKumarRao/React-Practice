import React, { useEffect, useRef, useState } from 'react'
import "./InfiniteScrollUsingScrollEvent.css"
const BASE_URL = "https://dummyjson.com/products";
const InfiniteScrollUsingIntersectionObserver = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [hasMore, setHasMore] = useState(true);

    const lastElementRef = useRef(null);

    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            try {
                setError(false);
                setLoading(true)
                const response = await fetch(`${BASE_URL}?limit=${limit}&skip=${(page - 1) * limit}`, {
                    signal: controller.signal
                })
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                const responseData = await response.json();
                if (responseData.products.length < limit) {
                    setHasMore(false);
                } setData((prev) => [...prev, ...responseData.products])
            } catch (error) {
                console.log(error)
                if (error.name === "AbortError") return;
                setError(error);
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }

        fetchData();

        return () => {
            controller.abort();
        }
    }, [page, limit])

    useEffect(() => {

        function observerFunction(entries) {

            if (entries?.[0].isIntersecting && !loading && hasMore) {
                lastElementRef.current.ref = null
                setPage(((prev) => prev + 1));
            }
        };

        const observer = new IntersectionObserver(observerFunction, {
            threshold: 0.3
        })

        if (lastElementRef.current) observer.observe(lastElementRef.current)

        return () => {
            observer.disconnect();
        }
    }, [loading, hasMore])


    return (

        <div className="infinite-scroll-intersection-container">
            <h3>Infinite Scroll Using Intersection Observer</h3>
            <select name="limit" id="limit" value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="50">50</option>
            </select>
            <div
                className="infinite-scroll-container"
            >
                {data.map((item, index) => (
                    <div key={item.id} className="item-card" ref={index === data.length - 1 ? lastElementRef : null}>
                        <img src={item.thumbnail} alt={item.title} className="item-image" loading="lazy" />
                        <div>
                            <p className="card-title">{item.title}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
                {loading && <p className="status">Loading...</p>}
                {error && <p className="status">{error.message}</p>}
                {!hasMore && <p className="status">No More Item.</p>}
            </div>
        </div>
    )
}

export default InfiniteScrollUsingIntersectionObserver