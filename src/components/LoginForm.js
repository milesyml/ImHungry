import React from "react";
import { Form } from "reactstrap";
import { NavLink } from "react-router-dom";

const LoginForm = props => {
  let user;
  let button;

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
            ref={btn => {
              button = btn;
            }}
            className="btn btn-success col-sm-12"
            onClick={() => {
              if (
                user.value == "Alice" ||
                user.value == "Bob" ||
                user.value == "Candy"
              ) {
                button.setAttribute("disabled", "disabled");
                button.innerHTML = "Logging in..."
                props.login(user.value).then(() => {
                  props.toggle();
                });
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
