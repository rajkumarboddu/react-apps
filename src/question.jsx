import React, { Component } from "react";

class Question extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.data;
    const options = this.props.data.options;
    return (
      <div className="card my-3">
        <div className="card-body">
          <p className="card-text">
            Q{this.props.qId + 1}) {data.question}
          </p>
          <ol>
            {options.map((option, index) => {
              return <li key={"qlqo" + index}>{option}</li>;
            })}
          </ol>
          <div className="row">
            <div className="col-3">
              <div className="badge badge-success p-1">
                Answer - {data.answer + 1}
              </div>
            </div>
            <div className="col-9">
              <div className="row justify-content-end">
                <div className="col-6 small text-right">
                  <a href="#" className="mx-2 d-inline-block mt-1">
                    Edit
                  </a>
                  |
                  <a href="#" className="text-danger mx-2">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
