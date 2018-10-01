import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {}
        };
    }
    componentDidMount() {
        axios
            .get("/api/tasks/" + this.props.match.params.id)
            .then(response => {
                this.setState({ task: response.data });
            })
            .catch(error => console.log(error));
    }

    handleDelete() {
        axios
            .delete("/api/tasks/" + this.props.match.params.id)
            .then(response => {
                <Redirect to="/api/tasks" />;
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <h1> {this.state.task.title} </h1>
                <p> {this.state.task.description} </p>
                <hr />
                <button onClick={this.handleDelete.bind(this)}>Delete</button>
            </div>
        );
    }
}
