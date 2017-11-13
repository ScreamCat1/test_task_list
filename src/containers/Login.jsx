import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { autorizeAdmin } from '../actions/actions';

class Login extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      login: '',
      password: '',
    };
  }

  onChangeField = ({ target: { value, id } }) => (
    this.setState({ [id]: value }));

  submitAutorize = () => {
    this.props.autorizeAdmin(this.state);
  };

  render() {
    const { autorized } = this.props;
    return (

      <div className="row justify-content-md-center">
        {autorized ?
          (<div>
            <h1>
            Вы авторизованы
            </h1>
          </div>)
          :
          (<div className="col-md-6">
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
          </div>)
        }
      </div>

    );
  }
}

const mapStateToProps = autorized => (autorized);

Login.propTypes = {
  autorizeAdmin: PropTypes.func.isRequired,
  autorized: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { autorizeAdmin })(Login);
