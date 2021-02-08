import React from 'react';
import ThemeSwitcher from './ThemeSwitcher'
import NextQuoteButton from './NextQuoteButton'

function Nav({ nextQuote, theme, setTheme }) {
    return (
        <nav>
            <ThemeSwitcher theme={theme} changeTheme={setTheme} />
            <NextQuoteButton theme={theme} nextQuote={nextQuote} />
        </nav>
    )
}

export default Nav
