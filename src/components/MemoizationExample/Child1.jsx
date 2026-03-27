import React, { Fragment } from 'react'

const Child1 = ({ handleIncreaseCounterBy5 }) => {
    console.log("Child 1 Rendering")
    return (
        <Fragment>
            <h3>Child 1 Component</h3>
            <button onClick={handleIncreaseCounterBy5}>Increase Counter By 5</button>
        </Fragment>
    )
}

export default React.memo(Child1)