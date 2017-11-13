import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'js-md5';

import { updateTask } from '../actions/actions';

class Edit extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      username: '',
      email: '',
      text: '',
      status: 0,
    };
  }
  componentDidMount() {
    this.setCurrentState();
  }

  onChangeField =
    ({ target: { id, value } }) => (this.setState({ [id]: value }));

  setCurrentState = () => (this.setState(this.props.currentTask));

  updateTask = (e) => {
    e.preventDefault();
    let fieldArr = [];
    const state = this.state;
    const token = 'token=beejee';
    Object.keys(state).forEach(element => fieldArr.push(element));
    fieldArr = fieldArr.sort((a, b) => (a > b));
    let stringFields = '';
    for (let i = 0; i < fieldArr.length; i += 1) {
      stringFields += `${fieldArr[i]}=${state[fieldArr[i]]}&`;
    }
    stringFields += token;

    const hashString = md5(encodeURIComponent(stringFields));
    const { username, email, text, image_path, status, id } = this.state;
    const form = new FormData();
    form.append('email', email);
    form.append('image', image_path);
    form.append('signature', hashString);
    form.append('status', status);
    form.append('text', text);
    form.append('username', username);
    form.append('token', 'beejee');
    updateTask({ id, data: form });
  };
  render() {
    const
      {
        username,
        email,
        text,
        status,
        image_path: imagePath,
      } = this.state;
    return (
      <div>
        <form encType="multipart/form-data" onSubmit={this.updateTask}>
          <div className="form-group">
            <label htmlFor="username">Введите Ваше имя</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Ваше имя"
              value={username}
              disabled="disabled"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Введите Ваш email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Ваш email"
              value={email}
              disabled="disabled"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="text"
            >
              Введите текст задачи
            </label>
            <textarea
              className="form-control"
              id="text"
              rows="3"
              placeholder="Текст задачи"
              value={text}
              onChange={this.onChangeField}
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">Изменить статус</label>
            <select
              className="form-control form-control-sm"
              value={status}
              id="status"
              onChange={this.onChangeField}
            >
              <option value={10}>Сделана</option>
              <option value={0}>Не сделана</option>
            </select>
          </div>
          <div className="form-group">
            <div>
              Картинка:
            </div>
            <img src={imagePath} alt="" />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Edit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = currentTask => (currentTask);

Edit.propTypes = {
  currentTask: PropTypes.shape({}).isRequired,
};
export default connect(mapStateToProps)(Edit);
