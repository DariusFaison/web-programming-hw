import React from 'react'
import './quotation.css'
import Nav from './Nav'
import Quotation from './Quotation'
import { themes } from './ThemeService'
import QuoteService from './QuoteService'

class QuotationApp extends React.Component {
    state = {
        theme: themes[0],
        quote: QuoteService.getRandomQuote()
    }

    nextQuote = () => {
        this.setState({
            quote: QuoteService.getRandomQuote()
        })
    }

    setTheme = theme => {
        this.setState({
            theme
        })
    }

    render() {
        return (
            <main style={this.state.theme}>
                <Nav nextQuote={this.nextQuote} theme={this.state.theme} setTheme={this.setTheme} />
                <Quotation theme={this.state.theme} quote={this.state.quote} />
            </main>
        )
    }
}

export default QuotationApp
