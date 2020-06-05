import React from "react";

const {Provider, Consumer} = React.createContext();

class ThemeContextProvider extends React.Component {
    state = {
        theme: "light"
    }

    toggleTheme = () => {
        let themeValue = document.getElementById("themeSelector").value;

        this.setState(prevState => {
            return {
                theme: themeValue
            }
        })
    }

    render() {
        return (
            <Provider  value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer};