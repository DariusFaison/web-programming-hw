import { useEffect, useState } from 'react'

const useCounter = () => {
    // we make initialCount a function so that it only gets called on the first render
    const initialCount = () => Number(window.localStorage.getItem('count')) || 0
    const [count, setCount] = useState(initialCount)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count > 1 ? count - 1 : 0)
    // useEffect helps us manage side effects
    useEffect(
        () => {
            window.localStorage.setItem('count', count)
        },
        [count]       // we only run the effect when the count changes (cDM, cDU)
        /* The 2nd arg above is a watch list of variables that trigger the effect.
         * If the list is empty, the effect only executes once (cDM).
         * If the list is not provided, the effect executes with every change
         * to props or state (cDM + cDU).
         * If the list contains some variables, the effect executes whenever any of
         * those variables are reassigned (cDM, cDU with checks).
         */
    )
    return { count, increment, decrement }  // we can return an array or an object here.
}

export default useCounter
