import React from 'react'
import { themes, findThemeByName } from './ThemeService'

const themeOptions = themes.map(themeOption =>
    <option key={themeOption.name} value={themeOption.name}>
        {themeOption.name}
    </option>
)

function ThemeSwitcher({ theme, changeTheme }) {
    return (
        <span>
            Select theme:
            <select value={theme.name} onChange={e => changeTheme(findThemeByName(e.target.value))}>
                {themeOptions}
            </select>
        </span>
    )
}

export default ThemeSwitcher
