import React from 'react'
import ColorSlider from './ColorSlider'
import ColorOutput from './ColorOutput'
import styles from './ColorBrowser.module.css'

class ColorBrowser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            red: Math.floor(Math.random() * 256),
            green: Math.floor(Math.random() * 256),
            blue: Math.floor(Math.random() * 256)
        }
    }
    updateColor(e) {
        this.setState({
           [e.target.name]: Number(e.target.value)
        })
    }
    getRandomColor() {
        this.setState({
            red: Math.floor(Math.random() * 256),
            green: Math.floor(Math.random() * 256),
            blue: Math.floor(Math.random() * 256)
        })
    }
    render() {
        return (
            <section className={styles["color-browser"]}>
                <h1>Welcome to the Color Browser</h1>
                <div className={styles.sliders}>
                    <ColorSlider
                        name="red"
                        label="Red"
                        min={0}
                        max={255}
                        value={this.state.red}
                        onChange={this.updateColor.bind(this)}
                    />
                    <ColorSlider
                        name="green"
                        label="Green"
                        min={0}
                        max={255}
                        value={this.state.green}
                        onChange={this.updateColor.bind(this)}
                    />
                    <ColorSlider
                        name="blue"
                        label="Blue"
                        min={0}
                        max={255}
                        value={this.state.blue}
                        onChange={this.updateColor.bind(this)}
                    />
                </div>

                <ColorOutput
                    red={this.state.red}
                    green={this.state.green}
                    blue={this.state.blue}
                />
                <br/>
                <button onClick={this.getRandomColor.bind(this)}>Random Color</button>
            </section>
        )
    }
}

export default ColorBrowser
