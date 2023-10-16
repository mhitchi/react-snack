import React from "react";
import Style from "../css/Style.css";
//import logo from "../assets/img/logo.png";


class Nav extends React.Component {
    render() {
        return (
            <div className="navigation">
                <header role="banner">
                        <img id="logo-main" src="../assets/img/logo.png" width="200" alt="Visit homepage" description="Graphic logo for independent contractor freelancer web developer and designer"/>
                    <nav id="navbar-primary" className="navbar navbar-default" role="navigation">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-primary-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="navbar-primary-collapse">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="#">Home</a></li>
                                    <li><a href="#">Design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Resume</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Nav;