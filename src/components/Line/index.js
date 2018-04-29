import React, { Component } from "react";
import "./index.css";

import Shirt from "./../Shirt/";

class Line extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="line-container">
        {data.map((player, i) => <Shirt key={i} data={player} index={i} />)}
      </div>
    );
  }
}

export default Line;
