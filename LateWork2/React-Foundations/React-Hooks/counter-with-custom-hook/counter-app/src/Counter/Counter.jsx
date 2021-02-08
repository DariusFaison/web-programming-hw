import React from 'react'
import './Counter.css'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.initialCount || 0
        }
    }
    componentDidMount() {
        const initialCount = Number(window.localStorage.getItem('count')) || 0
        this.setState({
            count: initialCount
        });
    }
    componentDidUpdate(prevProps, prevState) {
        // if the count has changed, persist the updated count to localStorage
        if (this.state.count !== prevState.count) {
            window.localStorage.setItem('count', this.state.count)
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count > 1 ? this.state.count - 1 : 0
        })
    }
    render() {
        return (
            <article>
                <h3>My Simple Little Counter with Local Storage</h3>
                <div className="counter">
                    <button
                        className="red"
                        onClick={this.decrement}
                    >
                        -
                    </button>
                    <button
                        className="green"
                        onClick={this.increment}
                    >
                        +
                    </button>
                    <p data-testid="counter-value">
                        The count is {this.state.count}
                    </p>
                </div>
            </article>
        )
    }
}

export default Counter
