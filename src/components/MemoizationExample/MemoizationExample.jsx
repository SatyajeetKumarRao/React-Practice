import React, { useMemo, useState } from 'react'
import Parent from './Parent';

const MemoizationExample = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const heavyCal = useMemo(() => {
        console.log("heavyCal running")
        for (let i = 0; i < 100000; i++) {
            // do nothing
        }
        console.log("heavyCal completed")
        return `Calculation completed for count ${count1}`
    }, [count1]);

    return (
        <div>
            <h2>UseMemo Example</h2>
            <p>{heavyCal}</p>
            <p>count 1: {count1}</p>
            <button type="button" onClick={() => setCount1(prev => prev + 1)}>Increase Count 1</button>

            <p>count2: {count2}</p>
            <button type="button" onClick={() => setCount2(prev => prev + 1)}>Increase Count 2</button>

            <Parent />
        </div>
    )
}

export default MemoizationExample