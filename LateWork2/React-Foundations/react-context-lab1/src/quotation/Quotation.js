import React from 'react'

function Quotation({ quote, theme }) {
    return (
        <blockquote style={theme.quotation}>
            <p className="quotation">{quote.text}</p>
            <footer>— {quote.author}, {quote.source}</footer>
        </blockquote>
    )
}

export default Quotation
