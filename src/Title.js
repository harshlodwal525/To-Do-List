import React from "react";
import ReactDOM from "react-dom";
class Title extends React.Component {
    render() {
        return (
            <div>
                <center>
                    <h1><b>{this.props.title}</b></h1>
                    <h2>Total Number of Tasks : {this.props.totalCount.length}</h2>
                </center>
            </div>
        );
    }
}

export default Title;