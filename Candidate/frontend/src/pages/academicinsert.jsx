import React, { Component } from "react";
import { Link } from "react-router-dom";
// import apis from "../api/api";
import axios from "axios";

class AcademicInsert extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Skill1: "",
      Skill2: "",
      Skill3: "",
      orgName: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      isWorking: "",
      schoolName10: "",
      schoolBoard10: "",
      result10: "",
      schoolName12: "",
      schoolBoard12: "",
      result12: "",
      github: "",
      linkedIn: "",
      experience: "",
      marks10: "",
      marks12: "",
    };
  }

  handleChangeSkill1 = async (event) => {
    const Skill1 = event.target.value;
    console.log(Skill1);
    this.setState({ Skill1 });
  };
  handleChangeSkill2 = async (event) => {
    const Skill2 = event.target.value;
    console.log(Skill2);
    this.setState({ Skill2 });
  };
  handleChangeSkill3 = async (event) => {
    const Skill3 = event.target.value;
    console.log(Skill3);
    this.setState({ Skill3 });
  };
  handleChangeOrgName = async (event) => {
    const orgName = event.target.value;
    console.log(orgName);
    this.setState({ orgName });
  };
  handleChangeStartMonth = async (event) => {
    const startMonth = event.target.value;
    console.log(startMonth);
    this.setState({ startMonth });
  };
  handleChangeStartYear = async (event) => {
    const startYear = event.target.value;
    console.log(startYear);
    this.setState({ startYear });
  };
  handleChangeEndMonth = async (event) => {
    const endMonth = event.target.value;
    console.log(endMonth);
    this.setState({ endMonth });
  };
  handleChangeEndYear = async (event) => {
    const endYear = event.target.value;
    console.log(endYear);
    this.setState({ endYear });
  };
  handleChangeIsWorking = async (event) => {
    const isWorking = event.target.value;
    console.log(isWorking);
    this.setState({ isWorking });
  };
  handleChangeJobTitle = async (event) => {
    const jobTitle = event.target.value;
    console.log(jobTitle);
    this.setState({ jobTitle });
  };
  handleChangeProjectName = async (event) => {
    const projectName = event.target.value;
    console.log(projectName);
    this.setState({ projectName });
  };
  handleChangeDescription = async (event) => {
    const Description = event.target.value;
    console.log(Description);
    this.setState({ Description });
  };
  handleChangeContribution = async (event) => {
    const contribution = event.target.value;
    console.log(contribution);
    this.setState({ contribution });
  };
  handleChangeFrom = async (event) => {
    const projectFrom = event.target.value;
    console.log(projectFrom);
    this.setState({ projectFrom });
  };
  handleChangeTo = async (event) => {
    const projectTo = event.target.value;
    console.log(projectTo);
    this.setState({ projectTo });
  };
  handleChangeComment = async (event) => {
    const otherComment = event.target.value;
    console.log(otherComment);
    this.setState({ otherComment });
  };
  handleChangeSchool10 = async (event) => {
    const schoolName10 = event.target.value;
    console.log(schoolName10);
    this.setState({ schoolName10 });
  };
  handleChangeBoard10 = async (event) => {
    const schoolBoard10 = event.target.value;
    console.log(schoolBoard10);
    this.setState({ schoolBoard10 });
  };
  handleChangeResult10 = async (event) => {
    const result10 = event.target.value;
    console.log(result10);
    this.setState({ result10 });
  };
  handleChangeMarks10 = async (event) => {
    const marks10 = event.target.value;
    console.log(marks10);
    this.setState({ marks10 });
  };

  handleChangeSchool12 = async (event) => {
    const schoolName12 = event.target.value;
    console.log(schoolName12);
    this.setState({ schoolName12 });
  };
  handleChangeBoard12 = async (event) => {
    const schoolBoard12 = event.target.value;
    console.log(schoolBoard12);
    this.setState({ schoolBoard12 });
  };
  handleChangeResult12 = async (event) => {
    const result12 = event.target.value;
    console.log(result12);
    this.setState({ result12 });
  };
  handleChangeMarks12 = async (event) => {
    const marks12 = event.target.value;
    console.log(marks12);
    this.setState({ marks12 });
  };
  handleChangeGithub = async (event) => {
    const github = event.target.value;
    console.log(github);
    this.setState({ github });
  };
  handleChangeLinkedIn = async (event) => {
    const linkedIn = event.target.value;
    console.log(linkedIn);
    this.setState({ linkedIn });
  };
  handleChangeExperience = async (event) => {
    const experience = event.target.value;
    console.log(experience);
    this.setState({ experience });
  };

  onSubmit(event) {
    event.preventDefault();
    const {
      Skill1,
      Skill2,
      Skill3,
      orgName,
      startMonth,
      startYear,
      endMonth,
      endYear,
      isWorking,
      jobTitle,
      projectName,
      Description,
      contribution,
      projectFrom,
      projectTo,
      otherComment,
      schoolName10,
      schoolBoard10,
      result10,
      schoolName12,
      schoolBoard12,
      result12,
      github,
      linkedIn,
      experience,
      marks10,
      marks12,
    } = this.state;
    const payload = {
      Skill1,
      Skill2,
      Skill3,
      orgName,
      startMonth,
      startYear,
      endMonth,
      endYear,
      isWorking,
      jobTitle,
      projectName,
      Description,
      contribution,
      projectFrom,
      projectTo,
      otherComment,
      schoolName10,
      schoolBoard10,
      result10,
      schoolName12,
      schoolBoard12,
      result12,
      github,
      linkedIn,
      experience,
      marks10,
      marks12,
    };
    console.log(payload);

    axios
      .post("http://localhost:5000/details/academic", payload)
      .then((res) => {
        window.alert(`Academic Details Updated Successfully`);
        this.setState({
          Skill1: "",
          Skill2: "",
          Skill3: "",
          orgName: "",
          startMonth: "",
          startYear: "",
          endMonth: "",
          endYear: "",
          isWorking: "",
          jobTitle: "",
          projectName: "",
          Description: "",
          contribution: "",
          projectFrom: "",
          projectTo: "",
          otherComment: "",
          schoolName10: "",
          schoolBoard10: "",
          result10: "",
          schoolName12: "",
          schoolBoard12: "",
          result12: "",
          github: "",
          linkedIn: "",
          experience: "",
          marks10: "",
          marks12: "",
        });
      });
  }

  render() {
    const {
      Skill1,
      Skill2,
      Skill3,
      orgName,
      startMonth,
      startYear,
      endMonth,
      endYear,
      isWorking,
      jobTitle,
      projectName,
      Description,
      contribution,
      projectFrom,
      projectTo,
      otherComment,
      schoolName10,
      schoolBoard10,
      result10,
      schoolName12,
      schoolBoard12,
      result12,
      github,
      linkedIn,
      experience,
      marks10,
      marks12,
    } = this.state;
    return (
      <div className="container1">
        <form onSubmit={this.onSubmit}>
          <div className="meter">
            <span className="myspan1"></span>
          </div>

          <div className="myheader">
            <h2>Professional Details</h2>
          </div>

          <p>SKILLS:</p>
          <label htmlFor="skill1">Skill 1</label>
          <select
            name="skill1"
            id="skill1"
            className="form-control"
            onChange={this.handleChangeSkill1}
            value={Skill1}
          >
            <option value="none">None</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Android_Development">Android Development</option>
            <option value="Spring">Spring</option>
            <option value="Web_development">Web development</option>
            <option value="DevOps">DevOps</option>
          </select>

          <label htmlFor="skill2">Skill 2</label>
          <select
            name="skill2"
            id="skill2"
            className="form-control"
            onChange={this.handleChangeSkill2}
            value={Skill2}
          >
            <option value="none">None</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Android_Development">Android Development</option>
            <option value="Spring">Spring</option>
            <option value="Web_development">Web development</option>
            <option value="DevOps">DevOps</option>
          </select>

          <label htmlFor="skill3">Skill 3</label>
          <select
            name="skill3"
            id="skill3"
            className="form-control"
            onChange={this.handleChangeSkill3}
            value={Skill3}
          >
            <option value="none">None</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Android_Development">Android Development</option>
            <option value="Spring">Spring</option>
            <option value="Web_development">Web development</option>
            <option value="DevOps">DevOps</option>
          </select>

          <p>WORK HISTORY:</p>
          <label htmlFor="orgName">Organisation Name</label>
          <input
            type="text"
            id="orgName"
            name="orgName"
            placeholder="Organisation.."
            value={orgName}
            onChange={this.handleChangeOrgName}
          />
          <br />
          <br />

          <label htmlFor="sMonth">Start Month</label>
          <select
            name="sMonth"
            id="sMonth"
            className="form-control"
            onChange={this.handleChangeStartMonth}
            value={startMonth}
          >
            <option value="none">None</option>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>

          <label htmlFor="sYear">Start Year</label>
          <select
            name="sYear"
            id="sYear"
            className="form-control"
            onChange={this.handleChangeStartYear}
            value={startYear}
          >
            <option value="none">None</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
          </select>

          <label htmlFor="eMonth">End Month</label>
          <select
            name="eMonth"
            id="eMonth"
            className="form-control"
            onChange={this.handleChangeEndMonth}
            value={endMonth}
          >
            <option value="none">None</option>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>

          <label htmlFor="eYear">End Year</label>
          <select
            name="eYear"
            id="eYear"
            className="form-control"
            onChange={this.handleChangeEndYear}
            value={endYear}
          >
            <option value="none">None</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
          </select>

          <label htmlFor="iswork">Is working currently?</label>
          <select
            name="iswork"
            id="iswork"
            className="form-control"
            onChange={this.handleChangeIsWorking}
            value={isWorking}
          >
            <option value="none">None</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <br />

          <label htmlFor="jTitle">Job Title</label>
          <input
            type="text"
            id="jTitle"
            name="jTitle"
            placeholder="Your Job Title.."
            value={jobTitle}
            onChange={this.handleChangeJobTitle}
          />
          <br />

          <p>Work Related:</p>
          <label htmlFor="pName">Project Name</label>
          <input
            type="text"
            id="pName"
            name="pName"
            placeholder="Your Project.."
            value={projectName}
            onChange={this.handleChangeProjectName}
          />

          <label htmlFor="description">Project Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Your Project Description.."
            value={Description}
            onChange={this.handleChangeDescription}
          />
          <label htmlFor="contribution">Contribution</label>
          <input
            type="text"
            id="contribution"
            name="contribution"
            placeholder="Your Contribution.."
            value={contribution}
            onChange={this.handleChangeContribution}
          />
          <label htmlFor="from">Started Project From</label>
          <br />
          <input
            type="date"
            id="from"
            name="from"
            value={projectFrom}
            onChange={this.handleChangeFrom}
          />
          <br />
          <br />

          <label htmlFor="to">Completed Project On</label>
          <br />
          <input
            type="date"
            id="to"
            name="to"
            value={projectTo}
            onChange={this.handleChangeTo}
          />
          <br />
          <br />

          <label htmlFor="comment">Other Comments</label>
          <br />
          <input
            type="text"
            id="comment"
            name="comment"
            placeholder="Your comments on Project.."
            value={otherComment}
            onChange={this.handleChangeComment}
          />
          <br />
          <p>10th EDUCATION:</p>
          <label htmlFor="school10">School Name</label>
          <br />
          <input
            type="text"
            id="school10"
            name="school10"
            placeholder="Your school name.."
            value={schoolName10}
            onChange={this.handleChangeSchool10}
          />
          <label htmlFor="board10">Education Board</label>
          <br />
          <input
            type="text"
            id="board10"
            name="board10"
            placeholder="eg - CBSE"
            value={schoolBoard10}
            onChange={this.handleChangeBoard10}
          />
          <label htmlFor="result10">Marks</label>
          <br />
          <select
            name="result10"
            id="result10"
            className="form-control"
            onChange={this.handleChangeResult10}
            value={result10}
          >
            <option value="percentage">Percentage</option>
            <option value="cgpa">CGPA</option>
          </select>
          <br />
          <input
            type="number"
            id="marks10"
            name="marks10"
            placeholder="Your Marks.."
            value={marks10}
            onChange={this.handleChangeMarks10}
          />

          <br />
          <p>12th EDUCATION:</p>
          <label htmlFor="school12">School Name</label>
          <br />
          <input
            type="text"
            id="school12"
            name="school12"
            placeholder="Your school name.."
            value={schoolName12}
            onChange={this.handleChangeSchool12}
          />
          <label htmlFor="board12">Education Board</label>
          <br />
          <input
            type="text"
            id="board12"
            name="board12"
            placeholder="eg - CBSE"
            value={schoolBoard12}
            onChange={this.handleChangeBoard12}
          />
          <label htmlFor="result12">Marks</label>
          <br />
          <select
            name="result12"
            id="result12"
            className="form-control"
            onChange={this.handleChangeResult12}
            value={result12}
          >
            <option value="percentage">Percentage</option>
            <option value="cgpa">CGPA</option>
          </select>
          <br />
          <input
            type="number"
            id="marks12"
            name="marks12"
            placeholder="Your Marks.."
            value={marks12}
            onChange={this.handleChangeMarks12}
          />
          <p>SOCIAL LINK:</p>
          <label htmlFor="git">GitHub</label>
          <br />
          <input
            type="text"
            id="git"
            name="git"
            placeholder="Your GitHub Link.."
            value={github}
            onChange={this.handleChangeGithub}
          />
          <label htmlFor="linkedin">LinkedIn</label>
          <br />
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            placeholder="Your LinkedIn Profile Link.."
            value={linkedIn}
            onChange={this.handleChangeLinkedIn}
          />
          <label htmlFor="experience">Years of Experience:</label>
          <br />
          <input
            type="number"
            id="experience"
            name="experience"
            placeholder="Years of Work Experience.."
            value={experience}
            onChange={this.handleChangeExperience}
          />

          <div className="myheader">
            {/* <input type="checkbox" name="check" id="check" value="1" required />
            I have downloaded Information Bulletin, read and understood all the
            instructions. <br /> */}
            <br />
            <div className="myheader">
              <input type="submit" value="Add Professional Details" />
              <br />
            </div>
            <div>
              <button>
                <Link to="/personal">Go to Personal Details</Link>
              </button>
              <button>
                <Link to="/">Go Home</Link>
              </button>
            </div>
          </div>
        </form>
        <br />
        <br />
      </div>
    );
  }
}

export default AcademicInsert;
