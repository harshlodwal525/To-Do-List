import React from "react";
class List extends React.Component {
    constructor() {
        super();
        this.state = { isPrior: "Set as Prior",
        favbtnColor: true              };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.isPrior === "Set as Prior") {
            this.setState(() => ({ isPrior: "High Priority",favbtnColor: !this.state.favbtnColor}))
        }
        else {
            this.setState(() => ({ isPrior: "Set as Prior",favbtnColor: !this.state.favbtnColor}))
        }
    }

  
    render() {
       
       
        let btn_class = this.state.favbtnColor ? "btn btn-danger" : "btn btn-warning";
        return (

            <tr>
                <td>{this.props.todoList.Title}</td>
                <td>{this.props.todoList.Description}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        this.props.deleteToDoList(this.props.index);
                    }}>Delete</button>
                    &nbsp;

                    <button id="priorbtn" className={btn_class} onClick={this.handleClick}>{this.state.isPrior}</button>   
                </td>
            </tr>
        );

    }
}
export default List;