import React, { Component } from 'react';
import { setNewTask } from '../actions/actions';
import ModalWindow from './ModalWindow';
import { defaultFormState } from '../constants/';

class Form extends Component {
  constructor(prop) {
    super(prop);
    this.state = defaultFormState;
  }

  onChangeField = ({ target: { value, id } }) => {
    this.setState(prevState => ({
      ...prevState, [id]: value,
    }));
  }

  addTask = (e) => {
    e.preventDefault();
    const file = document.getElementById('file').files[0];
    const { username, email, text } = this.state;
    const form = new FormData();
    form.append('username', username);
    form.append('email', email);
    form.append('text', text);
    form.append('image', file);
    setNewTask(form);
    this.toggleModal();
    this.setState(defaultFormState);
  };

  toggleModal = () => (this.setState(prevState => (
    {
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    })))
  render() {
    const { username, email, file, text, isModalOpen } = this.state;
    return (
      <div>
        <form encType="multipart/form-data" onSubmit={this.addTask}>
          <div className="form-group">
            <label htmlFor="username">Введите Ваше имя</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Ваше имя"
              value={username}
              onChange={this.onChangeField}
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
              onChange={this.onChangeField}
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
            <label htmlFor="file">Выберите картинку</label>
            <input
              type="file"
              className="form-control-file"
              id="file"
              value={file}
              onChange={this.onChangeField}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.toggleModal}
          >
        Submit
          </button>
        </form>
        {isModalOpen &&
          <ModalWindow
            data={[username, email, text, email]}
            toggleModal={this.toggleModal}
            addTask={this.addTask}
          />}
      </div>
    );
  }
}

export default Form;
