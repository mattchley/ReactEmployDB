import React, { Component } from "react";
import ManagerCard from "./components/ManagerCard";
import EngineerCard from "./components/EngineerCard";
import InternCard from "./components/InternCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employee from "./employee.json";

class App extends Component {
  // Setting this.state.employee to the employee json array
  state = {
    employee
  };

  removeFriend = id => {
    // Filter this.state.employee for employee with an id not equal to the id being removed
    const employee = this.state.employee.filter(friend => friend.id !== id);
    // Set this.state.employee equal to the new employee array
    this.setState({ employee });
  };

  // Map over this.state.employee and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>employee List</Title>
        {this.state.employee.map(friend => (
          <ManagerCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            officeNum={friend.officeNum}
          />
        ))}
        {this.state.employee.map(friend => (
          <EngineerCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            githubURL={friend.githubURL}
          />
        ))}
        {this.state.employee.map(friend => (
          <InternCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            school={friend.school}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
