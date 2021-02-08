import quotes from './quotes.json'

function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length)
    return quotes[index]
}

const QuoteService = {
    getRandomQuote
}

export default QuoteService
