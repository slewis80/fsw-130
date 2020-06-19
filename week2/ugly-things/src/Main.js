import React from "react";
import {UglyThingsContextConsumer} from "./uglyThingsContext";
import UglyPost from "./UglyPost";

class Main extends React.Component {

    render() {
        return(
            <UglyThingsContextConsumer>
                {context => (
                    <div id="mainSection">
                        <h1 id="pageTitle">Ugly Things List</h1>
                        <div id="postsContainer">
                            {context.posts.map(post => (
                                <UglyPost post={post} updatePostValue={context.updatePostValue} />
                            ))}
                        </div>
                    </div>
                )}
            </UglyThingsContextConsumer>
        )
    }
}

export default Main;