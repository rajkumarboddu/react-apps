import React, { Component } from "react";

import { DangerAlert } from "./utils.jsx";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
    this.doLogin = this.doLogin.bind(this);
  }

  doLogin(e) {
    e.preventDefault();
    if (this.refs.username.value === "" || this.refs.password.value === "") {
      this.setState({
        error: "Please enter Username & Password"
      });
    } else {
      this.props.history.push("/question-library");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="col col-10 col-sm-8 col-md-6 col-lg-4 my-3 text-center">
            React Quiz
          </h1>
          <div className="w-100" />
          <div
            className={
              this.state.error !== ""
                ? "col col-10 col-sm-8 col-md-6 col-lg-4 mt-3 p-0 small"
                : "d-none"
            }
          >
            <DangerAlert text={this.state.error} />
          </div>
          <div className="w-100" />
          <div className="col col-10 col-sm-8 col-md-6 col-lg-4 card bg-light mt-1 p-0">
            <div className="card-header">
              <strong>Login</strong>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    ref="username"
                    className="form-control"
                    id="username"
                    type="text"
                    placeholder="Enter Username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    ref="password"
                    className="form-control"
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>
                <input
                  onClick={this.doLogin}
                  className="btn btn-primary w-100"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
