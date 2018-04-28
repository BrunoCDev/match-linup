import React, { Component } from "react";
import "./index.css";

import field from "./../../assets/images/pitch-bg.png";
import Shirt from "./../Shirt/";

class Formation extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log(this.props.data);
    const { data } = this.props;
    return (
      <div className="container">
        {/* <h3>{data.team}</h3>
        <h4>{data.formation}</h4> */}
        <div className="field">
          {data.players.map((player, i) => {
            if (i === 0) {
              return (
                <div
                  key={i}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Shirt data={player} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Formation;
