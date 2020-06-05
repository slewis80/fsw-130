import React from "react";
import {ThemeContextConsumer} from "./themeContext";

function Main(props) {

    return (
            <ThemeContextConsumer>
                {context => (
                    <div className={`${context.theme}ThemeMain`} id="main">
                    <select className={`${context.theme}Theme`} id="themeSelector">
                        <option>Select Theme...</option>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="girly">Girly</option>
                        <option value="woodsy">Woodsy</option>
                    </select>
                    <br />
                    <button onClick={context.toggleTheme} className={`${context.theme}Theme`}>Change Theme</button>
                    </div>
                )}
            </ThemeContextConsumer>
    )
}

export default Main;