import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title";
import ToDoForms from "./ToDoForms";
import ToDoList from "./TodoList";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.toDoHandleManager = this.toDoHandleManager.bind(this);
        this.deleteToDoList = this.deleteToDoList.bind(this);
        this.deleteAllToDoList = this.deleteAllToDoList.bind(this);
        this.state = {
            title: "ToDo List",
            description: props.description,
        };
    };

    componentDidMount() {
        const descriptionString = localStorage.getItem('description');
        const description = JSON.parse(descriptionString);
        this.setState(() => ({
            description,
        }))
    }
    componentDidUpdate(prevProps, prevState) {
        let currentDescription = this.state.description;
        console.log(this.state.description)
        localStorage.setItem('description', JSON.stringify(currentDescription));
    }
    componentWillUnmount() {
        console.log('I AM UNMOUNTED');
    }

    toDoHandleManager(inputTitle, inputSubTitle) {
        this.setState((prevState) => {
            return {
                description: [
                    ...prevState.description,
                    {
                        Title: inputTitle,
                        Description: inputSubTitle
                    },
                ],
            };
        });
    }
    deleteToDoList(deleteIndex) {
        this.setState((prevState) => {
            return {
                description: prevState.description.filter((totalList, index) => index !== deleteIndex)
            }
        })
    };

    deleteAllToDoList() {
        this.setState(() => {
            return {
                description: []
            }
        })
    };

    render() {
        return (
            <div>
                <Title title={this.state.title} totalCount={this.state.description} />
                <ToDoForms toDoHandleManager={this.toDoHandleManager} />
                <ToDoList totalList={this.state.description} deleteToDoList={this.deleteToDoList} deleteAllToDoList={this.deleteAllToDoList} />
            </div>
        );
    }
}

ReactDOM.render(<ToDo description={[]} />, document.getElementById("root"));