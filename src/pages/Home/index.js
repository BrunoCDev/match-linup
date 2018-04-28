import React, { Component } from "react";

import Formation from "./../../components/Formation/";

import "./index.css";
import { lineup } from "./utils";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currentSelected: 0
    };
  }

  render() {
    const { currentSelected } = this.state;
    console.log(lineup);
    return (
      <div className="container">
        {lineup.map((el, i) => {
          return <Formation key={i} data={el} />;
        })}
      </div>
    );
  }
}

export default Home;
