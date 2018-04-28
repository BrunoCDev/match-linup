import React, { Component } from "react";
import "./index.css";

import shirt from "./../../assets/images/player-shirt.png";

class Shirt extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="container">
        <div className="text-container">
          <p>{data.name}</p>
          <p>{data.formation_place}</p>
          <p>{data.type}</p>
          <p>{data.position}</p>
        </div>
      </div>
    );
  }
}

export default Shirt;
