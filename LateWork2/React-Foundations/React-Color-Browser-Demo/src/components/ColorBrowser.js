import React from 'react'
import ColorSlider from './ColorSlider'
import ColorOutput from './ColorOutput'
import styles from './ColorBrowser.module.css'
import React, {useState} from 'react'

function ColorBrowser(){
    const [red, setRed] = useState(Math.floor(Math.random() * 256));
    const [green, setGreen] = useState(Math.floor(Math.random() * 256));
    const [blue, setBlue] = useState(Math.floor(Math.random() * 256));

    function updateColor(e) {
        switch (e.target.name) {
            case "red":
                setRed(e.target.value);
                break;
            case "green":
                setBlue(e.target.value);
                break;
            case "blue":
                setGreen(e.target.value);
                break;
            default:
                break;
        }
    }

    function getRandomColor() {
        setRed(Math.floor(Math.random() * 256));
        setGreen(Math.floor(Math.random() * 256));
        setBlue(Math.floor(Math.random() * 256));
    }

        return (
            <section className={styles["color-browser"]}>
                <h1>Welcome to the Color Browser</h1>
                <div className={styles.sliders}>
                    <ColorSlider
                        name="red"
                        label="Red"
                        min={0}
                        max={255}
                        value={red}
                        onChange={updateColor}
                    />
                    <ColorSlider
                        name="green"
                        label="Green"
                        min={0}
                        max={255}
                        value={green}
                        onChange={updateColor}
                    />
                    <ColorSlider
                        name="blue"
                        label="Blue"
                        min={0}
                        max={255}
                        value={blue}
                        onChange={updateColor}
                    />
                </div>

                <ColorOutput
                    red={red}
                    green={green}
                    blue={blue}
                />
                <br/>
                <button onClick={getRandomColor}>Random Color</button>
            </section>
        )
    }

export default ColorBrowser
