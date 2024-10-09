import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
      <div className="profile">
        <h2>Objective</h2>
        <p>{this.props.profileInfo}</p>
      </div>
    );
  }
}

export default PersonalProfile;
