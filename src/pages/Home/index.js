import React, { Component } from "react";
import "./index.css";

import infoParser from "./../../components/infoParser/";

class Home extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    infoParser();
  }
  render() {
    return (
      <div className="container">
        <h1>Match Linup</h1>
      </div>
    );
  }
}

export default Home;
