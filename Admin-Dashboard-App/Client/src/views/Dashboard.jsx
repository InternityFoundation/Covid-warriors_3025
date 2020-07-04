/********************************************************************************************************
 *                         Team: Covid worriors                                                   *
 *                         React Dashboard                                                              *
 *                         About the file: component to display Dashboard                               *
 ********************************************************************************************************/

import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
//, Button, Table
// import Popup from "reactjs-popup";
import axios from "axios"; //for handling the requests(like get,post)
import InfiniteScroll from 'react-infinite-scroll-component';

//import the components
import { Card } from "components/Card/Card.jsx";
// import { SkillFilter } from "components/FilterForm/SkillFilter";
// import { ScoreFilter } from "components/FilterForm/ScoreFilter";
// import ShowFilters from "components/showfilters/ShowFilters.component";



const Candidate = (props) => (
  <Card
    name={props.candidate.Full_Name}
    email={props.candidate.Email}
    skills={props.candidate.Skill}
    score = {props.candidate.Score}
    job = {props.candidate.job}
    exp = {props.candidate.Experience}
  />
);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onKeyChange = this.onKeyChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.KeyChange = this.KeyChange.bind(this);
    this.fetchMoreData = this.fetchMoreData.bind(this);
    this.state = {
      key: "",
      value: "",
      operator: "",
      startDate: new Date(),
      endDate: new Date(),
      candidates: [],
      filters: [],
      requests: {},
      open: -1,
    };
  }

  //to list all the candidates
  candidateList() {
    console.log(this.state.candidates);
    return this.state.candidates.map((current) => {
      return <Candidate candidate={current} key={current._id} />;
    });
  }

  // //to list the filters
  // Filterslist() {
  //   return this.state.filters.map((current, index) => {
  //     return (
  //       <ShowFilters
  //         key_={current.key}
  //         value_={current.value}
  //         index={index}
  //         onClick={this.onClear}
  //         key={index}
  //       />
  //     );
  //   });
  // }

  //"proxy": "http://localhost:8081"
  //receive the data
  componentDidMount() {
    var requests_={};
    requests_.filters = [];
    requests_.skip = 0;
    this.setState({
      requests:requests_
    });

    axios
      .get("/app")
      .then((response) => {
        this.setState({ candidates: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //for key change
  onKeyChange(e) {
    console.log(e.target.value);
    this.setState({
      key: e.target.value,
    });
  }

  KeyChange(val) {
    this.setState({
      key: "val",
    });
  }

  //for change in value
  onValueChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  // to clear all the filters
  onClearAll() {
    this.setState({ filters: [] });
  }

  //to remove a filter 
  onClear(e) {
    e.preventDefault();
    var index = Number(e.target.value);
    var newFilters = [...this.state.filters];

    if (isNaN(index) !== true) {
      newFilters.splice(index, 1);
      this.setState({ filters: newFilters });
    }
  }

  // once filter values are set create a new object and add to list

  // //close the model
  // onCancel(e) {
  //   e.preventDefault();
  //   this.closeModal();
  // }

  // //Apply filters
  // Filter() {
  //   let request_={};
  //   request_.filters = this.state.filters;
  //   request_.skip = 0;
  //   this.setState({
  //     requests:request_
  //   })
  //   axios
  //     .post("/app/filter", this.state.requests)
  //     .then((response) => {
  //       this.setState({ candidates: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  //fatch more data
  fetchMoreData(){
    const length = this.state.candidates.length;
    this.setState(prevState => ({
      requests: {
          ...prevState.requests,  
          skip: length
      }
    }))
    axios
    .post("/app/filter", this.state.requests)
    .then((response) => {
      this.setState({
        candidates: this.state.candidates.concat(response.data)
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  // //open a model 
  // openModal(formInd) {
  //   formInd = Number(formInd);
  //   this.setState({ open: formInd });
  // }

  // closeModal() {
  //   this.setState({ open: -1 });
  // }

  render() {
    return (
      <div className="content">
        {/* </div><div className="btn-toolbar"> */}

          {/* <Button
            variant="info"
            className="btn btn-info ml-2"
            onClick={() => this.openModal(1)}
          >
            Skills
          </Button>
          
          <Button
            variant="info"
            className="btn btn-info mx-auto"
            onClick={() => this.openModal(2)}
          >
            Score
          </Button>

          <Button
            variant="info"
            className="btn btn-info mx-auto"
            onClick={() => this.openModal(3)}
          >
            Show Filters
          </Button>

          <Button
            variant="info"
            className="btn btn-info mx-auto"
            onClick={this.Filter}
          >
            Apply Filters
          </Button>

          <Button
            variant="info"
            className="btn btn-info mx-auto"
            onClick={this.onClearAll}
          >
            ClearAll
          </Button>
        </div>

        <Popup
          open={this.state.open === 1}
          modal
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <button className="close" onClick={this.closeModal}>
            &times;
          </button>
          <SkillFilter
            Key="skill"
            Value={this.state.value}
            Opr={this.state.operator}
            onSubmit={this.onDone}
            valueChange={this.onValueChange}
            oprChange={this.onOprChange}
            onCancel={this.onCancel}
          />
        </Popup>

        <Popup
          open={this.state.open === 2}
          modal
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <button className="close" onClick={this.closeModal}>
            &times;
          </button>
          <ScoreFilter
            Key="score"
            Value={this.state.value}
            Opr={this.state.operator}
            valueChange={this.onValueChange}
            oprChange={this.onOprChange}
            onCancel={this.onCancel}
            onSubmit={this.onDone}
          />
        </Popup>

        <Popup
          open={this.state.open === 3}
          modal
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <button className="close" onClick={this.closeModal}>
            &times;
          </button>
          <Grid fluid>
            <Row>
              <Table className="striped table table-hover">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Value</th>
                    <th>Operator</th>
                  </tr>
                </thead>
                <tbody>{this.Filterslist()}</tbody>
              </Table>
            </Row>
          </Grid>
        </Popup>*/}

        <Grid fluid>
          <Row>
            <InfiniteScroll
              dataLength={this.state.candidates.length} 
              next={this.fetchMoreData}
              hasMore={true}
              endMessage={
                <p style={{textAlign: 'center'}}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
              >
              {this.candidateList()}
            </InfiniteScroll>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default Dashboard;
