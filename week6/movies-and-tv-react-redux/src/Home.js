import React from 'react';
import Alert from 'react-bootstrap/Alert'

function Home() {
    return (
        <div id="homeContainer">
            <Alert variant="primary">
                <Alert.Heading>Movies & TV Shows Lists</Alert.Heading>
                <p>
                    Click on the links above to go to the list of your choice...
                </p>
             
            </Alert>
        </div>
    )
}

export default Home;