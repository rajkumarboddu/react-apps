import React, { Component } from "react";

const DangerAlert = props => {
  return (
    <div class="alert alert-danger" role="alert">
      {props.text}
    </div>
  );
};

export { DangerAlert };
