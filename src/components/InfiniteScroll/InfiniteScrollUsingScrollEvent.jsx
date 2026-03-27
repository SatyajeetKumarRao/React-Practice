import React, { useEffect, useRef, useState } from "react";
import "./InfiniteScrollUsingScrollEvent.css";

const BASE_URL = "https://dummyjson.com/products";
const InfiniteScrollUsingScrollEvent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [hasMore, setHasMore] = useState(true);

    const InfiniteScrollContainerRef = useRef(null);
    const throttleRef = useRef(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            try {
                setError(null);
                setLoading(true);
                const response = await fetch(
                    `${BASE_URL}?limit=${limit}&skip=${(page - 1) * limit}`,
                    {
                        signal: controller.signal,
                    },
                );
                if (!response.ok) {
                    throw new Error("Something Went Wrong");
                }
                const responseData = await response.json();
                if (responseData.products < limit) {
                    setHasMore(false);
                }
                setData((prev) => [...prev, ...responseData.products]);
            } catch (error) {
                console.log(error);
                if (error.name == "AbortError") return;
                setError(error);
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        }

        fetchData();

        return () => {
            controller.abort();
        };
    }, [page, limit]);

    useEffect(() => {
        if (!InfiniteScrollContainerRef.current) return;
        const container = InfiniteScrollContainerRef.current;
        function handleScroll() {
            if (throttleRef.current || loading || !hasMore) return;

            if (
                container.scrollTop + container.clientHeight >=
                container.scrollHeight - 100
            ) {
                setPage((prev) => prev + 1);
                throttleRef.current = setTimeout(() => {
                    throttleRef.current = null;
                }, 300);
            }
        }
        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, [loading, hasMore]);

    return (
        <div className="infinite-scroll-event-container">
            <h3>Infinite Scroll Using ScrollEvent</h3>
            <select name="limit" id="limit" value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="50">50</option>
            </select>
            <div
                className="infinite-scroll-container"
                ref={InfiniteScrollContainerRef}
            >
                {data.map((item) => (
                    <div key={item.id} className="item-card">
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
    );
};

export default InfiniteScrollUsingScrollEvent;
