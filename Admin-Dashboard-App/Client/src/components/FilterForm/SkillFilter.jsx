/********************************************************************************************************
 *                         React Dashboard                                                              *
 *                         About the file: Component to show Skill filter options                       *
 ********************************************************************************************************/

import React, { Component } from "react";

export class SkillFilter extends Component {
  render() {
    return (
      <form>
        <div className="md-form mb-4">
          <label htmlFor="value">Skill</label>
          <input
            type="text"
            className="form-control"
            id="value"
            placeholder="Skill name"
            value={this.props.Value}
            onChange={this.props.valueChange}
          ></input>
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
export default SkillFilter;
