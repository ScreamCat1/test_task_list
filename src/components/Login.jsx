import React, { Component } from 'react';
import { connect } from 'react-redux';

import { autorizeAdmin } from '../actions/actions';
// const Login = () => (
//   <div>Login</div>
// );

class Login extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      login: '',
      password: '',
    };
  }

  onChangeField = ({ target: { value, id } }) => (this.setState({ [id]: value }));

  submitAutorize = () => {
    // const { login, password } this.state;
    this.props.autorizeAdmin(this.state);
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="login">Login</label>
              <input
                type="text"
                className="form-control"
                id="login"
                placeholder="Enter Login"
                onChange={this.onChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={this.onChangeField}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.submitAutorize}
            >
    Submit
            </button>
          </form>
        </div>
      </div>

    );
  }
}

const mapStateToProps = autorize => (autorize);

export default connect(mapStateToProps, { autorizeAdmin })(Login);
