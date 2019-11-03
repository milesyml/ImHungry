import React from "react";
import { Button, Form } from "reactstrap";
import { NavLink } from "react-router-dom";
import { tsPropertySignature } from "@babel/types";

const LoginForm = props => {
  let user;

  return (
    <div className="form-signin">
      <Form>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            name="text"
            id="username"
            placeholder="Username"
            ref={el => (user = el)}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fa fa-envelope" />
            </span>
          </div>
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fa fa-lock" />
            </span>
          </div>
        </div>
        <NavLink to="">
          <button
            type="button"
            className="btn btn-success col-sm-12"
            onClick={() => {
              if (user.value == "Alice" || user.value == "Bob" || user.value == "Candy") {
                props.login(user.value);
                props.toggle();
              }
            }}
          >
            <i className="fa fa-unlock" />
            &nbsp;Log In
          </button>
        </NavLink>
      </Form>
      <hr />
    </div>
  );
};

export default LoginForm;
