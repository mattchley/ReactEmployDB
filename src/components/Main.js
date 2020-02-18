import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Nav from "./Nav";
import SearchBox from "./SearchBox";
import DataArea from "./DataArea";
import API from "../utils/API";

class Main extends Component {
    state = {
        result: {},
        search: ""
    };

    // When this component mounts, search for the movie "The Matrix"
    // componentDidMount() {
    //     this.searchEmployeees("");
    // }

    searchEmployeees = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployeees(this.state.search);
    };

    render() {
        return (
            <Wrapper>
                <Nav />
                <div>
                    <SearchBox
                        search={this.state.search}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                    <DataArea results={this.state.results} />
                </div>
            </Wrapper>
        );
    }
}

export default Main;