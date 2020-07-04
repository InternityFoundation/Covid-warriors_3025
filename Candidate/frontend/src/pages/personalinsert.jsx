import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PersonalInsert extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Full_Name: "",
      Email: "",
      Phone_Number: "",
      WhatsApp_Number: "",
      Gender: "",
      Marital_Status: "",
      Language_Known1: "",
      Language_Known2: "",
      Language_Known3: "",
      Native: "",
    };
  }

  handleChangeFullname = async (event) => {
    const Full_Name = event.target.value;
    this.setState({ Full_Name });
  };
  handleChangeGender = async (event) => {
    const Gender = event.target.value;
    this.setState({ Gender });
  };
  handleChangePhone = async (event) => {
    const Phone_Number = event.target.value;
    this.setState({ Phone_Number });
  };
  handleChangeEmail = async (event) => {
    const Email = event.target.value;
    this.setState({ Email });
  };
  handleChangeWhatsapp = async (event) => {
    const WhatsApp_Number = event.target.value;
    this.setState({ WhatsApp_Number });
  };
  handleChangeMarital = async (event) => {
    const Marital_Status = event.target.value;
    this.setState({ Marital_Status });
  };
  handleChangeLang1 = async (event) => {
    const Language_Known1 = event.target.value;
    this.setState({ Language_Known1 });
  };
  handleChangeLang2 = async (event) => {
    const Language_Known2 = event.target.value;
    this.setState({ Language_Known2 });
  };
  handleChangeLang3 = async (event) => {
    const Language_Known3 = event.target.value;
    this.setState({ Language_Known3 });
  };
  handleChangeNative = async (event) => {
    const Native = event.target.value;
    this.setState({ Native });
  };

  onSubmit(event) {
    event.preventDefault();
    const {
      Full_Name,
      Email,
      Phone_Number,
      WhatsApp_Number,
      Gender,
      Marital_Status,
      Language_Known1,
      Language_Known2,
      Language_Known3,
      Native,
    } = this.state;
    const payload = {
      Full_Name,
      Email,
      Phone_Number,
      WhatsApp_Number,
      Gender,
      Marital_Status,
      Language_Known1,
      Language_Known2,
      Language_Known3,
      Native,
    };
    console.log(payload);

    axios
      .post("http://localhost:5000/details/personal", payload)
      .then((res) => {
        window.alert(`Personal Details Updated Successfully`);
        this.setState({
          Full_Name: "",
          Email: "",
          Phone_Number: "",
          WhatsApp_Number: "",
          Gender: "",
          Marital_Status: "",
          Language_Known1: "",
          Language_Known2: "",
          Language_Known3: "",
          Native: "",
        });
      });
  }

  render() {
    const {
      Full_Name,
      Email,
      Phone_Number,
      WhatsApp_Number,
      Gender,
      Marital_Status,
      Language_Known1,
      Language_Known2,
      Language_Known3,
      Native,
    } = this.state;
    return (
      <div className="container1">
        <form onSubmit={this.onSubmit}>
          <div className="meter">
            <span id="myspan2"></span>
          </div>

          <div className="myheader">
            <h2>Personal Details</h2>
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

          <label htmlFor="email">
            {" "}
            <p>E-mail:</p>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="info@example.com"
            value={Email}
            onChange={this.handleChangeEmail}
          />
          <br />

          <label htmlFor="zip">
            <p>Phone Number:</p>+91-
          </label>
          <input
            type="number"
            id="zip"
            name="phone"
            placeholder="Phone Number.."
            value={Phone_Number}
            onChange={this.handleChangePhone}
          />
          <br />

          <label htmlFor="whatsapp">
            <p>WhatsApp Number:</p>+91-
          </label>
          <input
            type="number"
            id="whatsapp"
            name="whatsapp"
            placeholder="WhatsApp Number.."
            value={WhatsApp_Number}
            onChange={this.handleChangeWhatsapp}
          />
          <br />

          <p>Please select your gender:</p>
          <select
            name="gender"
            id="gender"
            className="form-control"
            onChange={this.handleChangeGender}
            value={Gender}
          >
            <option value="none">None</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <br />
          <br />

          <p>Please select your Marital status:</p>
          <select
            name="marital"
            id="mStatus"
            className="form-control"
            onChange={this.handleChangeMarital}
            value={Marital_Status}
          >
            <option value="none">None</option>
            <option value="unmarried">Unmarried</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
          <br />
          <br />

          <p>Languages Known:</p>
          <label htmlFor="lang1">First Language</label>
          <input
            type="text"
            id="lang1"
            name="language1"
            placeholder="Your first language.."
            value={Language_Known1}
            onChange={this.handleChangeLang1}
          />

          <label htmlFor="lang2">Second Language</label>
          <input
            type="text"
            id="lang2"
            name="language2"
            placeholder="Your second language.."
            value={Language_Known2}
            onChange={this.handleChangeLang2}
          />

          <label htmlFor="lang3">Third Language</label>
          <input
            type="text"
            id="lang3"
            name="language3"
            placeholder="Your third language"
            value={Language_Known3}
            onChange={this.handleChangeLang3}
          />
          <br />
          <br />

          <label htmlFor="native">Native Location</label>
          <select
            background-color="white"
            name="native"
            id="native"
            className="form-control"
            value={Native}
            onChange={this.handleChangeNative}
          >
            <option value="none">None</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>

          {/* <div className="myheader">
            <input type="checkbox" name="check" id="check" value="1" required />
            I have downloaded Information Bulletin, read and understood all the
            instructions. <br />
          </div> */}
          <div className="myheader">
            <input type="submit" value="Add Personal Details" />
          </div>
          <div>
            <button>
              <Link to="/">Go Home</Link>
            </button>
            <button>
              <Link to="/academic">Go to Professional Details</Link>
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

export default PersonalInsert;
