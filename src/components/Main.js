import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Nav from "./Nav";
import SearchBox from "./SearchBox";
import DataBody from "./DataBody";
import API from "../utils/API";

class Main extends Component {
    state = {
        result: {},
        search: ""
    };

    componentDidMount() {
        this.searchEmployeees();
    }

    searchEmployeees = () => {
        API.search(20)
        .then(res => {
            this.setState({results: res.data.results});
            console.log(this.state.results)
        }).catch(err => console.log(err))
    };

    handleInputChange = event => {
        const value = event.target.value;
        const search = event.target.search;
        this.setState({
            [search]: value
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
                    <SearchBox
                        search={this.state.search}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                <DataBody />
            </Wrapper>
        );
    }
}

export default Main;


