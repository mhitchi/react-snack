import React from "react";
import Nav from "../components/Nav";

class Home extends React.Component {
    render () {
        return (
            //allows for multiple children without wrapper div
            <React.Fragment>
                <Nav/>
                This is Home
            </React.Fragment>
        )
    }
}

export default Home;