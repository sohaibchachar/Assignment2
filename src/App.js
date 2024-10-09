import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import PersonalProfile from "./PersonalProfile";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: {
        name: "Sohaib Chachar",
        occupation: "Data Science Student"
      },
      contactInfo: {
        email: "sc2476@njit.edu",
        mobile: "01234567890",
        city: "Jersey City, NJ"
      },
      profileInfo: "A motivated Data Science student with a strong foundation in data analytics, model development, and problem-solving. Currently seeking a role to leverage my skills in machine learning, data cleaning, and generative AI to contribute to impactful projects. Passionate about applying data-driven solutions to optimize performance and deliver insights that support organizational goals. Prepared to make immediate contributions to a dynamic team environment.",
      workExperience_1: {
        title: "Data Analyst Intern at Andrena (June 2024 - August 2024)",
        description: "As a Data Analyst Intern at Andrena, I analyzed customer behavior data to support the marketing team's efforts in optimizing their strategies. I was responsible for cleaning and processing large datasets to ensure accurate insights. I regularly utilized Google BigQuery to manage live datasets and generate comprehensive reports."
      },
      workExperience_2: {
        title: "Invoice Clerk at Rajbhog Inc. (September 2019 – April 2020)",
        description: "I created and sent accurate invoices using company software, ensuring their timely delivery via mail or email. Additionally, I planned and optimized delivery routes for truck drivers, which enhanced logistics and ensured timely deliveries to each city. I also conducted regular checks on warehouse workers to ensure timely and accurate order fulfillment, contributing to overall operational efficiency."
      },
      skills: ["Python", "C", "Cpp", "Java", "SQL", "TensorFlow", "PyTorch", "NumPy", "Pandas"],
      education_1 :
        {
          school: "Hudson County Community College",
          degree: "AS in Computer Science",
          duration: "2019 - 2021",
          gpa: "GPA: 3.8"
        },
        education_2:
        {
          school: "New Jersey Institute of Technology",
          degree: "BS in Data Science",
          duration: "2022 - 2024",
          gpa: "GPA: 3.3"
        }
    };
  }

  render() {
    return (
      <div className="App">
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo} />
        <PersonalProfile profileInfo={this.state.profileInfo} />
        <WorkExperience workExperience_1={this.state.workExperience_1} workExperience_2={this.state.workExperience_2} />
        <Skills skills={this.state.skills} />
        <Education education_1={this.state.education_1} education_2={this.state.education_2}/>
      </div>
    );
  }
}

export default App;
