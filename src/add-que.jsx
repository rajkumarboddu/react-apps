import React, { Component } from "react";

import AdminNav from "./admin-nav.jsx";

class AddQue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      options: ["", ""],
      answer: ""
    };
    this.addOption = this.addOption.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
  }

  addOption() {
    const options = this.state.options;
    options.push("");
    this.setState({
      options
    });
  }

  deleteOption(event) {
    const options = this.state.options;
    options.splice(event.target.getAttribute("index"), 1);
    this.setState({
      options
    });
  }

  render() {
    return (
      <div>
        <AdminNav />
        <div className="container pb-3 mb-5">
          <div className="row justify-content-center">
            <div className="col col-12 col-md-6">
              <h5 className="my-3">Add Question</h5>
            </div>
            <div className="w-100" />
            <div className="col col-12 col-md-6">
              <form>
                <div className="form-group">
                  <label htmlFor="question">Question</label>
                  <textarea
                    className="form-control"
                    id="question"
                    placeholder="Enter question"
                  />
                </div>
                <div className="form-group clearfix">
                  <label className="w-100 d-block my-3">
                    Options
                    <a
                      onClick={this.addOption}
                      href="#"
                      className="small float-right"
                    >
                      Add Option
                    </a>
                  </label>
                  <ol className="m-0 pl-3">
                    {this.state.options.map((option, index) => {
                      return (
                        <li key={"aqqo" + index} className="clearfix mb-2">
                          <input
                            className="d-inline-block form-control"
                            type="text"
                            placeholder="Enter option"
                          />
                          {index > 1 ? (
                            <a
                              onClick={this.deleteOption}
                              index={index}
                              href="#"
                              className="text-danger float-right small"
                            >
                              Delete
                            </a>
                          ) : (
                            ""
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="answer">Answer</label>
                  <select className="form-control" id="answer">
                    <option value="">Select Option</option>
                    {this.state.options.map((option, index) => {
                      return (
                        <option key={"aqqo" + index} value={index}>
                          Option #{index + 1}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <input
                  type="reset"
                  className="btn btn-danger float-right ml-4"
                />
                <input
                  type="submit"
                  className="btn btn-primary float-right"
                  value="Add"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddQue;
