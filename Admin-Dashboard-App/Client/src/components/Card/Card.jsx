/********************************************************************************************************
 *                         Author: Rajendra Prajapat                                                    *
 *                         React Dashboard                                                              *
 *                         About the file: component to display a single card                           *
 ********************************************************************************************************/

import React, { Component } from "react";
import { Col} from "react-bootstrap";


export class Card extends Component {
  render() {
    return (
      <Col lg={5} sm={10}>
        <div>
          <h1>{this.props.name}</h1>
          <h3>{this.props.job}</h3>
          <p>{this.props.email}</p>
          <span className="badge bg-primary mr-1">
              {this.props.exp}
          </span>
          <span className="badge bg-primary mr-1">
              {this.props.skills}
          </span>
          <span className="badge bg-primary mr-1">
              {this.props.score}
          </span>
          <div className="modal-footer d-flex justify-content-center">
              <button
                className="btn btn-default"
                value={this.props.Key}
                onClick={this.props.onSubmit}
              >
                View
              </button>
          </div>
        </div>
      </Col>
    );
  }
}

export default Card;


        /* <div className="container-fluid rounded">
          <div className="row">
            <div className="col-3 offset-md-6">
              <div className="col content justify-content-center">
                <div className="author mx-auto">
                  
                  <h4 className="title">
                    {this.props.name}
                    <br />
                    <small>{this.props.brand}</small>
                  </h4>

                  <span className="font-weight-boldml-1">
                    £{this.props.offerPrice}
                  </span>

                  <span className="mr-1 text-secondary ml-1">
                    <del>£{this.props.regularPrice}</del>
                  </span>

                </div>

                <p className="description text-center">
                  <span className="badge bg-primary mr-1">
                    {this.props.brand}
                  </span>

                  <span className="badge bg-info mr-1">
                    SKU: {this.props.sku}
                  </span>

                  {this.props.Availability}
                </p>
                
                <p>
                  <span className="mr-1 pink">
                    Created At:{this.props.createdAt}
                  </span>
                </p>

              </div>
              <form
                className="d-flex justify-content-left"
                action={this.props.URL}
              >
                <button className="btn btn-primary btn-md my-0 p" type="submit">
                  Check the product
                  <i className="fas fa-shopping-cart ml-1"></i>
                </button>
                
              </form>
            </div>
          </div>
        </div> */