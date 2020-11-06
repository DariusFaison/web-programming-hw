# useEffect Lab - Product Browser

## Goal

Get some practice with `useEffect` by refactoring a ProductBrowser application to use the `useEffect` hook.

## Instructions

1. To get started:

```bash
git clone https://github.homedepot.com/om-labs/React-Product-Browser
cd React-Product-Browser
yarn                         # install dependencies
yarn server                  # start the json-server for the RESTful API calls
yarn start                   # to run the client web server
yarn test                    # to run the integration tests
```

2. Refactor the code to use the `useState` and `useEffect` hooks instead of `setState` and `componentDidMount`.

*Hints:*

* You should only need to modify the `App` component.
* You will want to convert the `App` from a JavaScript class to a JavaScript function.
* You will want to remove all occurrences of `this` (as in `this.state.products` and `this.addProduct.bind(this)`).
* You will want to replace `componentDidMount` with a `useEffect` hook.
