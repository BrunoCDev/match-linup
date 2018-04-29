import React, { Component } from "react";
import "./index.css";

import shirt from "./../../assets/images/player-shirt.png";

class Shirt extends Component {
  render() {
    const { data, index } = this.props;
    return (
      <div
        className="shirt-container"
        style={index % 2 !== 0 ? { marginLeft: 20, marginRight: 20 } : null}
      >
        <div
          className="text-container"
          title={`${data.formation_place} - ${data.name}`}
        >
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
