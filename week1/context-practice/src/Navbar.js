import React from "react";
import {ThemeContextConsumer} from "./themeContext";

function Navbar(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}Theme`}>
                    <ul id="navbar">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Navbar;