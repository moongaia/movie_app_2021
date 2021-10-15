import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    console.log("I'm just mounted");
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    console.log("I'm rendering");
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
