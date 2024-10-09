import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <h2>Education</h2>
        <div className="degree_cl">
        <div className="degree_1">
            <div>
            <p className="title_bold">{this.props.education_1.school}</p>
              <p>{this.props.education_1.degree}</p>
              <p>{this.props.education_1.duration}</p>
              <p>{this.props.education_1.gpa}</p>
            </div>
          </div>
          <div className="degree_2">
            <div>
            <p className="title_bold">{this.props.education_2.school}</p>
              <p>{this.props.education_2.degree}</p>
              <p>{this.props.education_2.duration}</p>
              <p>{this.props.education_2.gpa}</p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Education;
