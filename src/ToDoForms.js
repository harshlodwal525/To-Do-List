import React from "react";
class ToDoForms extends React.Component {
    constructor(props) {
        super(props);
        this.toDoHandleManager = this.toDoHandleManager.bind(this);
        this.state = {
            error: '',
        }
        this.state = {
            error1: '',
        }
    }
    toDoHandleManager(event) {
        event.preventDefault();
        var inputTitle = event.target.elements.toDoTitle.value.trim();
        var inputSubTitle = event.target.elements.toDoSubtitle.value.trim();
        if (!(inputTitle)) {
            this.setState(() => ({ error: ' * Please Add Title' }));
            return;
        }
        else if (!inputSubTitle) {
            this.setState(() => ({ error1: ' * Please Add TASK Description' }));
            return;
        }

        this.setState(() => ({ error: '' }))
        this.setState(() => ({ error1: '' }))

        this.props.toDoHandleManager(inputTitle, inputSubTitle);

        event.target.elements.toDoTitle.value = "";
        event.target.elements.toDoSubtitle.value = "";
    };

    render() {
        return (
            <div>
                <center>
                    <br />
                    <img src="https://c.tenor.com/xtFf2a8D2uMAAAAd/writing-notepad.gif" alt="ERROR" width="250" height="200"></img>
                    <br />
                    <form onSubmit={(event) => { this.toDoHandleManager(event) }}>
                        Title:    <input className="form-control" type="text" name="toDoTitle" /> <br />
                        <br />
                        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
                        Description: <input className="form-control" type="text" name="toDoSubtitle" /> <br />
                        <br />
                        {this.state.error1 && <p style={{ color: 'red' }}>{this.state.error1}</p>}
                        <input className="btn btn-success" type="submit" />

                    </form>
                    <br />
                </center>
            </div>
        );
    }
}
export default ToDoForms;