import React, { Component } from "react";

import AdminNav from "./admin-nav.jsx";
import Question from "./question.jsx";

class QueLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          question: "React is a framework.",
          options: ["True", "False"],
          answer: 0
        },
        {
          question: "1+1 = ?",
          options: ["11", "2"],
          answer: 1
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <AdminNav />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-12 col-lg-10">
              <h5 className="my-3">Question Library</h5>
            </div>
            <div className="w-100" />
            <div className="col col-12 col-lg-10">
              {this.state.questions.map((question, index) => {
                return (
                  <Question key={"qlq" + index} qId={index} data={question} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QueLibrary;
