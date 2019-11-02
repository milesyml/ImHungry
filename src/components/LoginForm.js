import React from 'react';
import { Button, Form } from 'reactstrap';

const LoginForm = () => (
  <div className="form-signin">
    <Form>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          name="text"
          id="username"
          placeholder="Username"
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
      <Button color="danger" className="col-sm-12">
        <i className="fa fa-unlock" />
        &nbsp;Log In
      </Button>
    </Form>
    <hr />
  </div>
);

export default LoginForm;
