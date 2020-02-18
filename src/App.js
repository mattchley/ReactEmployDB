import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav"
import SearchBox from "./components/SearchBox";

class App extends Component {
  // Setting this.state.employee to the employee json array
  // state = {
  //   employee
  // };


  render() {
    return (

      <Wrapper>
        <Nav>
        </Nav>
      <SearchBox />
      </Wrapper>

    );
  }
}

export default App;