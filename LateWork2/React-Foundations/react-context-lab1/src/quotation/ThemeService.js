export const themes = [
    {
        name: 'light',
        backgroundColor: 'rgb(244, 244, 244)',
        color: 'black',
        quotation: { fontFamily: 'Pattaya' },
        refresh: { color: 'black' }
    },
    {
        name: 'dark',
        backgroundColor: 'black',
        color: 'white',
        quotation: { fontFamily: 'Times' },
        refresh: { color: 'lightgreen' }
    },
    {
        name: 'orange',
        backgroundColor: 'rgb(249, 99, 2, 0.75)',
        color: 'black',
        quotation: { fontFamily: 'Roboto' },
        refresh: { color: 'black' }
    }
]

export function findThemeByName(name) {
    return themes.find(t => t.name === name)
}
