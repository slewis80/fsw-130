import React from "react";
import { UglyThingsContextConsumer } from "./uglyThingsContext";

class Header extends React.Component {
    state = {
        title: "",
        description: "",
        imgUrl: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value}, () => (
            console.log(this.state)
        ))
    }

    render() {
        return(
            <div id="header">
            <UglyThingsContextConsumer>
                {context => (
                    <form id="inputForm" autoComplete="off">

                        <input className="inputItem" 
                            type="text" 
                            onChange={(e) => this.handleChange(e)} 
                            name="title"
                            placeholder="Title"
                            // value={context.title} 
                            >
                        </input>

                        <input className="inputItem" 
                            type="text" 
                            onChange={(e) => this.handleChange(e)} 
                            name="description"
                            placeholder="Description"
                            // value={context.description} 
                            >
                        </input>

                        <input className="inputItem" 
                            type="text" 
                            onChange={this.handleChange} 
                            name="imgUrl"
                            placeholder="Image URL"
                            value={context.imgUrl} 
                            >
                        </input>

                        <button className="inputItem" 
                            onClick={(e) => context.handleClick(e, this.state.title, this.state.description, this.state.imgUrl)} >Add Ugly Thing
                        </button>

                    </form>
            )}
            </UglyThingsContextConsumer>
            </div>
        )
    }
}

export default Header;