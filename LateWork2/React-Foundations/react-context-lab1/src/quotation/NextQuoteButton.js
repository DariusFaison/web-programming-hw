import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

function NextQuoteButton({ nextQuote, theme }) {
    return (
        <span>
            <button
                className="refresh"
                style={theme.refresh}
                onClick={nextQuote}
            >
                <FontAwesomeIcon icon={faRedo} />
            </button>
        </span>
    )
}

export default NextQuoteButton
