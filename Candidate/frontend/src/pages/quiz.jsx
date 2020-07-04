import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Full_Name: "",
      Ques1: "",
      Ques2: "",
      Ques3: "",
      Ques4: "",
      Ques5: "",
      score: 0,
    };
  }
  handleChangeFullname = async (event) => {
    const Full_Name = event.target.value;
    this.setState({ Full_Name });
  };
  handleChangeQues1 = async (event) => {
    const Ques1 = event.target.value;
    this.setState({ Ques1 });
  };
  handleChangeQues2 = async (event) => {
    const Ques2 = event.target.value;
    this.setState({ Ques2 });
  };
  handleChangeQues3 = async (event) => {
    const Ques3 = event.target.value;
    this.setState({ Ques3 });
  };
  handleChangeQues4 = async (event) => {
    const Ques4 = event.target.value;
    this.setState({ Ques4 });
  };
  handleChangeQues5 = async (event) => {
    const Ques5 = event.target.value;
    this.setState({ Ques5 });
  };
  handleChangeScore = async (event) => {
    const score = event.target.value;
    this.setState({ score });
  };
  onSubmit(event) {
    event.preventDefault();
    const { Full_Name, Ques1, Ques2, Ques3, Ques4, Ques5 } = this.state;
    var { score } = this.state;
    if (Ques1 === "C") {
      score = score + 1;
    } else {
      score = score - 1;
    }
    if (Ques2 === "A") {
      score = score + 1;
    } else {
      score = score - 1;
    }
    if (Ques3 === "D") {
      score = score + 1;
    } else {
      score = score - 1;
    }
    if (Ques4 === "D") {
      score = score + 1;
    } else {
      score = score - 1;
    }
    if (Ques5 === "D") {
      score = score + 1;
    } else {
      score = score - 1;
    }
    const payload = {
      Full_Name,
      score,
    };
    console.log(payload);

    axios.post("http://localhost:5000/details/quiz", payload).then((res) => {
      window.alert(`Your Calculated Score Sent! Good Luck!`);
      this.setState({
        Full_Name: "",
        Ques1: "",
        Ques2: "",
        Ques3: "",
        Ques4: "",
        Ques5: "",
        score: 0,
      });
    });
  }
  render() {
    const { Full_Name, Ques1, Ques2, Ques3, Ques4, Ques5 } = this.state;
    return (
      <div className="container1">
        <form onSubmit={this.onSubmit}>
          <div className="meter">
            <span id="myspan3"></span>
          </div>

          <div className="myheader">
            <h2>Quiz</h2>
          </div>
          <p>Candidate's Name:</p>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Your name.."
            value={Full_Name}
            onChange={this.handleChangeFullname}
          />
          <br />

          <p>
            What is the name of the program that converts Java byte code into
            Dalvik byte code?
          </p>
          <select
            name="Ques1"
            id="Ques1"
            className="form-control"
            onChange={this.handleChangeQues1}
            value={Ques1}
          >
            <option value="none">None</option>
            <option value="A">Android Interpretive Compiler (AIC)</option>
            <option value="B">Dalvik Converter</option>
            <option value="C">Dex compiler</option>
            <option value="D">Mobile Interpretive Compiler (MIC)</option>
          </select>
          <br />
          <br />
          <p>Definition of Loader ?</p>
          <select
            name="Ques2"
            id="Ques2"
            className="form-control"
            onChange={this.handleChangeQues2}
            value={Ques2}
          >
            <option value="none">None</option>
            <option value="A">
              loaders make it easy to asynchronously load data in an activity or
              fragment
            </option>
            <option value="B">
              loaders make it easy to synchronously load data in an activity or
              fragment
            </option>
            <option value="C">
              loaders does not make it easy to asynchronously load data in an
              activity or fragment
            </option>
            <option value="D">None of the above</option>
          </select>
          <br />
          <br />
          <p>Android is based on Linux for the following reason.</p>
          <select
            name="Ques3"
            id="Ques3"
            className="form-control"
            onChange={this.handleChangeQues3}
            value={Ques3}
          >
            <option value="none">None</option>
            <option value="A">Security</option>
            <option value="B">Portability</option>
            <option value="C">Networking</option>
            <option value="D">All of these</option>
          </select>
          <br />
          <br />
          <p>
            Which among the following are part of "Application" layer of Android
            Architecture?
          </p>
          <select
            name="Ques4"
            id="Ques4"
            className="form-control"
            onChange={this.handleChangeQues4}
            value={Ques4}
          >
            <option value="none">None</option>
            <option value="A">Contacts</option>
            <option value="B">Browser</option>
            <option value="C">Phone</option>
            <option value="D">All of these</option>
          </select>
          <br />
          <br />
          <p>Which one is NOT related to fragment class?</p>
          <select
            name="Ques5"
            id="Ques5"
            className="form-control"
            onChange={this.handleChangeQues5}
            value={Ques5}
          >
            <option value="none">None</option>
            <option value="A">DialogFragment</option>
            <option value="B">ListFragment</option>
            <option value="C">PreferenceFragment</option>
            <option value="D">CursorFragment</option>
          </select>
          <br />
          <br />
          <div className="myheader">
            <input type="submit" value="Submit Quiz" />
          </div>
          <div>
            <button>
              <Link to="/">Go Home</Link>
            </button>
          </div>
          <br />
        </form>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Quiz;
