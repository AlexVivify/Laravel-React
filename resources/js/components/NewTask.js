import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        };
    }
    // componentDidMount() {
    //     axios
    //         .get("/api/tasks/" + this.props.match.params.id)
    //         .then(response => {
    //             this.setState({ task: response.data });
    //         })
    //         .catch(error => console.log(error));
    // }

    onTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }
    onDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        axios
            .post("/api/tasks", this.state)
            .then(response => {
                alert("Task created successfuly");
                <Redirect
                    to={{
                        pathname: "/"
                    }}
                />;
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1> Insert new task </h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Insert task title"
                        onChange={this.onTitleChange.bind(this)}
                    />{" "}
                    <br />
                    <textarea
                        name="description"
                        placeholder="Insert title description"
                        onChange={this.onDescriptionChange.bind(this)}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
