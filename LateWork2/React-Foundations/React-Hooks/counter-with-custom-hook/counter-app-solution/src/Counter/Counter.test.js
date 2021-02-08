import React from 'react'
import { cleanup, render, fireEvent } from 'react-testing-library'
import Counter from './Counter'

let savedCount = null

beforeAll(() => {
    savedCount = window.localStorage.getItem('count')
    window.localStorage.removeItem('count')
})

afterAll(() => {
    if (savedCount === 0 || savedCount) {
        window.localStorage.setItem('count', savedCount)
      }
})

describe('Counter with local storage', () => {
    beforeEach(() => {
        cleanup()
    })

    test('counter increments the count', () => {
        window.localStorage.setItem('count', 23)
        const { getByText, getByTestId } = render(<Counter />)
        const button = getByText('+')
        const counterValue = getByTestId('counter-value')
        expect(counterValue.textContent).toBe('The count is 23')
        fireEvent.click(button)
        expect(counterValue.textContent).toBe('The count is 24')
        expect(window.localStorage.getItem('count')).toBe('24')
    })

    test('counter decrements the count', () => {
        window.localStorage.setItem('count', 5)
        const { getByText, getByTestId } = render(<Counter />)
        const button = getByText('-')
        const counterValue = getByTestId('counter-value')
        expect(counterValue.textContent).toBe('The count is 5')
        fireEvent.click(button)
        expect(counterValue.textContent).toBe('The count is 4')
        expect(window.localStorage.getItem('count')).toBe('4')
    })
})