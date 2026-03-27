import React, { useEffect, useMemo, useState } from "react";
import './Pagination.css'

const Pagination = () => {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const totalPagCount = useMemo(
        () => Math.ceil(data.length / limit),
        [data.length, limit],
    );

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://dummyjson.com/products?limit=500",
                );
                const responseData = await response.json();
                setData(responseData.products);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const handlePageChange = (pageNo) => {
        if (pageNo === page) return;
        setPage(pageNo)
    }

    const handleLimitChange = (e) => {
        setLimit(e.target.value)
        setPage(1)
    }

    return (
        <div className="pagination">
            <h2>Pagination Example</h2>
            {data.length > 0 && (<>
                <div className="pagination-button-container">{
                    [...Array(totalPagCount).keys()].map((_, idx) => (
                        <button key={idx} className={`pagination-button ${idx + 1 === page ? 'active' : ''}`} onClick={() => handlePageChange(idx + 1)}>{idx + 1}</button>
                    ))}</div>
                <div>
                    <span>Limit </span>
                    <select name="limit" id="limit" value={limit} onChange={handleLimitChange}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </>)}
            <div className="pagination-container">
                {data.length ? (
                    data.slice((page - 1) * limit, ((page - 1) * limit) + +limit).map((item) => (
                        <div key={item.id} className="card">
                            <img src={item.thumbnail} alt={item.title} loading='lazy' className="card-image" />
                            <div className="card-details">
                                <p className="card-title">{item.title}</p>
                                <p className="card-description">{item.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <span>No Data</span>
                )}
            </div>
        </div>
    );
};

export default Pagination;
