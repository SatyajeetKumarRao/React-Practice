import React, { Fragment } from 'react'

export const Child2 = React.memo(({ handleIncreaseCounter }) => {
    console.log("Child 2 Rendering")
    return (
        <Fragment>
            <h3>Child 2 Component</h3>
            <button onClick={handleIncreaseCounter}>Increase Count by 2</button>
        </Fragment>
    )
});