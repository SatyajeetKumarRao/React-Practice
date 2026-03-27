import React, { useState } from 'react'
import './VirtualList.css'


const itemCount = 100000;
const itemList = Array.from({
    length: itemCount,
}).map((_, i) => ({
    label: "Item",
    value: i + 1,
}));
const windowHeight = 500;
const rowHeigh = 30;
const nodePadding = 2;

const VirtualList = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const totalContentHeight = itemCount * rowHeigh;

    let startIndex = Math.floor(scrollTop / rowHeigh) - nodePadding;
    startIndex = Math.max(startIndex, 0);

    let visibleNodeCount = Math.ceil(windowHeight / rowHeigh) + 2 * nodePadding;
    visibleNodeCount = Math.min(visibleNodeCount, itemCount - startIndex);

    const offsetY = startIndex * rowHeigh;

    const visibleChildren = Array.from({
        length: visibleNodeCount,
    }).map((_, i) => {
        const index = i + startIndex;
        const { label, value } = itemList[index];
        return (
            <div
                style={{
                    height: rowHeigh,
                }}
                key={index}
            >
                {label} : {value}
            </div>
        );
    });

    return (
        <div className='virtual-list'>
            <h2>Virtual List</h2>
            <div
                className='virtual-list-container '
                style={{
                    height: windowHeight,
                }}
                onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
            >
                <div
                    style={{
                        height: totalContentHeight,
                    }}
                >
                    <div
                        style={{
                            transform: `translateY(${offsetY}px)`,
                        }}
                    >
                        {visibleChildren}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VirtualList