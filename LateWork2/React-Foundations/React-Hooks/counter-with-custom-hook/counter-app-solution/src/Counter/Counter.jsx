import React from 'react'
import useCounter from './useCounter'
import './Counter.css'

const Counter = () => {
    const { count, increment, decrement } = useCounter()
    return (
        <article>
            <h3>My Simple Little Counter with Local Storage</h3>
            <div className="counter">
                <button
                    className="red"
                    onClick={decrement}
                >
                    -
                </button>
                <button
                    className="green"
                    onClick={increment}
                >
                    +
                </button>
                <p data-testid="counter-value">
                    The count is {count}
                </p>
            </div>
        </article>
    )
}

export default Counter
