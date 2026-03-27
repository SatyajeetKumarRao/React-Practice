import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterAction } from '../../reactRedux/action/counterActionRR';
import Child from './child';

const ReactReduxExample = () => {
    const { count } = useSelector(state => state.CounterReducerReactRedux)
    const { loading: getRecipesLoading, error: getRecipesError, data: getRecipesData } = useSelector(state => state.RecipesReducer)

    const dispatch = useDispatch();
    const incrementCounter = useCallback((value) => dispatch(counterAction.increseCounter({ value })), [dispatch]);
    const decrementCounter = useCallback((value) => dispatch(counterAction.decreseCounter({ value })), [dispatch]);

    return (
        <div>
            <h2>React Redux Example</h2>
            <p>Current Count: {count}</p>
            <button type="button" onClick={() => incrementCounter()}>Increase Counter</button>
            <button type="button" onClick={() => decrementCounter()}>Decrease Counter</button>
            <br />
            <button type="button" onClick={() => incrementCounter(2)}>Increase Counter by 2</button>
            <button type="button" onClick={() => decrementCounter(4)}>Decrease Counter by 4</button>
            <Child />
            {getRecipesError ? <p>{getRecipesError}</p> : null}
            {getRecipesLoading ? <p>Loading...</p> : getRecipesData?.recipes?.length > 0 && getRecipesData?.recipes?.map((recipe) => <p key={recipe.id}>{recipe.name}</p>)}
        </div>
    )
}

export default ReactReduxExample