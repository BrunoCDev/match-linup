import React, { Component } from "react";
import "./index.css";

import Line from "./../Line/";

class Field extends Component {
  constructor() {
    super();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="field-container">
        <h3>{data.team}</h3>
        <h4>{data.formation}</h4>
        <div className="field">
          {data.players.map((line, i) => {
            return (
              <div
                key={i}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Line data={line} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Field;
