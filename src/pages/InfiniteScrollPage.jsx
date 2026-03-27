import React from 'react'
import InfiniteScrollWithScrollEvent from '../components/InfiniteScroll/InfiniteScrollUsingScrollEvent'
import InfiniteScrollUsingIntersectionObserver from '../components/InfiniteScroll/InfiniteScrollUsingIntersectionObserver'

const InfiniteScrollPage = () => {
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Infinite Scroll</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <InfiniteScrollWithScrollEvent />
                <InfiniteScrollUsingIntersectionObserver />
            </div>
        </>
    )
}

export default InfiniteScrollPage