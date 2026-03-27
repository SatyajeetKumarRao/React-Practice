import React, { Fragment, useCallback, useState } from 'react'
import Child1 from './Child1';
import { Child2 } from './Child2';

const Parent = () => {
    const [conut, setCount] = useState(0);
    console.log("Parent Rendering")


    const handleIncreaseCount = useCallback(() => {
        setCount(prev => prev + 2);
    }, []);

    const handleIncreaseCountBy5 = () => {
        setCount(prev => prev + 5);
    }

    return (
        <Fragment>
            <h2>Parent Component</h2>
            <p>Current Count: {conut}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increase Counter by 1</button>
            <Child1 handleIncreaseCounterBy5={handleIncreaseCountBy5} />
            {/* Child 1 will re-render on every parent render because the handleIncreaseCountBy5 function is not memoized. On each render of the parent component, a new instance of the handleIncreaseCountBy5 function is created, resulting in a new function reference being passed to Child 1.
            Since the function reference changes every time, React treats it as a new prop. That’s why Child 1 re-renders even if it is wrapped with React.memo.*/}
            <Child2 handleIncreaseCounter={handleIncreaseCount} />
        </Fragment>

    )
}

export default React.memo(Parent)