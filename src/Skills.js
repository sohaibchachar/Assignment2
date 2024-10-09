import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h2>Key Skills</h2>
        <ul>
          {this.props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skills;
