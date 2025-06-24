import React from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({
          robots: users,
        });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return (
        <div className="tc loading-container">
          <h1 style={{ textAlign: "center", margin: 0, padding: "50px 0" }}>
            Loading
          </h1>
        </div>
      );
    } else {
      return (
        <div className="tc container">
          <h1 className="f1" style={{ marginTop: 0 }}>
            RoboFriends
          </h1>
          <SearchBox searchChange={this.onSearchChange}></SearchBox>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}></CardList>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
