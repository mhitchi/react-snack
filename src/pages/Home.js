import React from "react";
import Nav from "../components/Nav";
import "../css/Style.scss"
import Posts from "../components/Post"

class Home extends React.Component {
    render () {
        return (
            //allows for multiple children without wrapper div
            <React.Fragment>
                <Nav/>
                This is Home
                <Posts/>
            </React.Fragment>
        )
    }
}

export default Home;