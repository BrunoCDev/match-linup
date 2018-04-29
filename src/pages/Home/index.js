import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";
import Field from "./../../components/Field/";

import "./index.css";
import { teams } from "./utils";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      teamSelected: "Tottenham Hotspur",
      formationSelected: "3421"
    };
  }

  render() {
    const { teamSelected, formationSelected } = this.state;
    const menu = (
      <Menu>
        {teams.map(({ team, formation }, i) => {
          return (
            <Menu.Item key={i}>
              <button
                onClick={() =>
                  this.setState({
                    teamSelected: team,
                    formationSelected: formation
                  })
                }
              >
                {`${team} - ${formation}`}
              </button>
            </Menu.Item>
          );
        })}
      </Menu>
    );
    return (
      <div className="container">
        <div className="menu-container">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link">
              Choose Team <Icon type="down" />
            </a>
          </Dropdown>
        </div>

        {teams.map((team, i) => {
          if (
            team.team === teamSelected &&
            team.formation === formationSelected
          ) {
            return <Field key={i} data={team} />;
          }
        })}
      </div>
    );
  }
}

export default Home;
