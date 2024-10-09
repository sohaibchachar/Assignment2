import React, { Component } from "react";
class WorkExperience extends Component {
    render() {
      return (
        <div className="work">
          <h2>Work Experience</h2>
          <div className="work_cl">
          <div className="work_1">
            <div>
            <p className="title_bold">{this.props.workExperience_1.title}</p>
              <p>{this.props.workExperience_1.description}</p>
            </div>
          </div>
          <div className="work_2">
            <div>
            <p className="title_bold">{this.props.workExperience_2.title}</p>
              <p>{this.props.workExperience_2.description}</p>
            </div>
          </div>
          </div>
          
        </div>
      );
    }
  }
  
  export default WorkExperience;