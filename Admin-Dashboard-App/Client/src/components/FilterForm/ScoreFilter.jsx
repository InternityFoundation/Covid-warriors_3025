/********************************************************************************************************
 *                         React Dashboard                                                              *
 *                         About the file: Component to display discount filters                        *
 ********************************************************************************************************/

import React, { Component } from "react";

export class ScoreFilter extends Component {
  render() {
    return (
      <form>
        <div className="md-form mb-4">
          <label className="mt-3" htmlFor="customRange">
            Range with steps
          </label>
          <input
            required
            min={0}
            max={100}
            className="form-control"
            placeholder="10"
            onChange={this.props.valueChange}
          ></input>
        </div>

        <div className="md-form mb-4">
          <label htmlFor="selectOpr">Operator</label>
          <select
            required
            className="custom-select form-control"
            id="selectOpr"
            value={this.props.Opr}
            onChange={this.props.oprChange}
          >
            <option value="Default"> -- select an option -- </option>
            <option value="smaller_than">Smaller Than</option>
            <option value="greater_than">Greater Than</option>
            <option value="equal">equal</option>
          </select>
        </div>
        <div className="modal-footer d-flex justify-content-center">
          <button
            className="btn btn-default"
            value={this.props.Key}
            onClick={this.props.onSubmit}
          >
            Done
          </button>
          <button className="btn btn-default" onClick={this.props.onCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
export default ScoreFilter;
