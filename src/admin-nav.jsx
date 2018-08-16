import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminNav extends Component {
  constructor(props) {
    super(props);
    this.doLogout = this.doLogout.bind(this);
  }

  doLogout(e) {
    e.preventDefault();
    this.props.history.push("/");
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <strong>React Quiz</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/question-library" className="nav-link">
                Questions Library
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-question" className="nav-link">
                Add Questions
              </Link>
            </li>
          </ul>
          <button
            onClick={this.doLogout}
            className="btn btn-danger my-2 my-lg-0"
          >
            Logout
          </button>
        </div>
      </nav>
    );
  }
}

export default AdminNav;
