import React, { useEffect, useState } from 'react'

import { decrementCounter, increaseCounter } from '../../coreRedux/action/counterActionCR'
import { store } from '../../store/store';

const CoreReduxExample = () => {

    const [, forceRender] = useState(0);

    const counter = store.getState().CounterReducerCoreRedux
    function handleIncreaseCounter() {
        store.dispatch(increaseCounter());
    }
    function handleDecreaseCounter() {
        store.dispatch(decrementCounter());
    }

    useEffect(() => {
        const unsubscribe = store.subscribe(() => forceRender(prev => prev + 1));

        return unsubscribe;
    }, [])

    return (
        <div>
            <h2>Core Redux Example</h2>
            <p>Current Count: {counter.count}</p>
            <button type="button" onClick={handleIncreaseCounter}>Increase Count</button>
            <button type="button" onClick={handleDecreaseCounter}>Decrease Count</button>
        </div>
    )
}

export default CoreReduxExample