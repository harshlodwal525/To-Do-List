import React from "react";
import List from "./List";
class ToDoList extends React.Component {
    render() {
        return (
            <div>
                <center>
                    <div>{this.props.totalList.length > 0 ? "" : 'Please ADD Some Task to your TO-DO LIST'}</div>
                    <button className="btn btn-danger" onClick={() => { this.props.deleteAllToDoList() }} disabled={this.props.totalList.length === 0} >Delete All ToDoList</button><br />
                    <br />
                    {this.props.totalList.length > 0 && (
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.totalList.map((items, index) => (
                                    <List key={index.toString()} todoList={items} index={index} deleteToDoList={this.props.deleteToDoList} />

                                ))}
                            </tbody>
                        </table>
                    )}
                </center>
            </div>
        );

    }
}
export default ToDoList;