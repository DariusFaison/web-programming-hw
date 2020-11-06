# Custom Hooks Lab - Counter with Local Storage

## Goal

Refactor the counter application to use hooks. Then create a custom hook called `useCounter` that resides in a file called `useCounter.jsx` import it into the `Counter.jsx` file.

## Instructions

1. You may use code that you have already written or you may use the code provided in the `counter-app` folder.
2. Refactor the code to use the `useState` and `useEffect` hooks instead of `setState`, `componentDidMount`, and `componentDidUpdate`.

*Hints:*

* You should only need to modify the `Counter.jsx` file and add a new file called `useCounter.jsx`.
* You will want to convert the `Counter` component from a JavaScript class to a JavaScript function.
* You will want to remove all occurrences of `this` (as in `this.state.count` and `this.increment` and `this.decrement`) as all variables and functions will be local and/or imported.
* You will want to replace `componentDidMount` and `componentDidUpdate` with a single `useEffect` hook.
* Your custom hook should return a data stucture (you can use either an array or an object) that contains the `count` value and the `increment` and `decrement` functions to update the `count`.
* There is a test provided for you. Simply run `yarn test` or `npm run test` to run the test code and verify that your refactored code is working.
