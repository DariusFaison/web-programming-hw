# React Context API Lab - Replace Prop Drilling with Context API

## Introduction

This repo contains the starter code for a React Context API lab. The starter code contains a complete working app that shows some random quotes from Software Engineering books. The code works fine but it suffers from the "prop drilling" problem. Your task is to replace the props with the use of the Context API so that only the components that need the data will be involved in getting the data from the Context API.

## Demo

You can view a live demo of this application [here](https://om-morehouse.github.io/web-programming-labs/demos/react-context-lab1/).

## Instructions

1. Clone this repository
2. Create a branch called `context-api`
3. refactor the code to use the React Context API and eliminate the need for passing the `theme` and `setTheme` props

NOTE: The `ThemeContext` has been provided for you in the file `src/quotation/ThemeContext.js`.

### Hooks Option

If you have learned about React **hooks**, then you can use the `React.useContext` hook instead of `<Context.Consumer>` to get the values out of the context.

## Bonus

As a bonus try creating a `QuoteContext` and remove the `quote` and `nextQuote` props.

## Visualization

To help you visualize what is going on, you will start with this structure:

![Prop Drilling](prop-drilling.png)

and refactor it to this structure:

![Solution](solution.png)

**NOTE: the `red` props have been removed because the child components can now get them from the `ThemeContext`.**

And for the **bonus** you should end up with this structure:

![Bonus](bonus.png)
