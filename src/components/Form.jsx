import React from 'react';
import axios from 'axios';

const addTask = (e) => {
  e.preventDefault();
  const form = new FormData();
  form.append('username', 'Pushkarov');
  form.append('email', 'pushmaks@gmail.com');
  form.append('text', 'Some text 5');
  form.append('image', document.getElementById('exampleFormControlFile1').files[0]);
  console.log(document.getElementById('exampleFormControlFile1').files[0]);
  axios({
    url: 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Maksym',
    crossDomain: true,
    method: 'POST',
    mimeType: 'multipart/form-data',
    contentType: false,
    processData: false,
    data: form,
    dataType: 'json',

  }).then(({ data: { message } }) => console.log(message));
};

const Form = () => (
  <form encType="multipart/form-data">
    <div className="form-group">
      <label htmlFor="form-group-name">Введите Ваше имя</label>
      <input
        type="text"
        className="form-control"
        id="form-group-name"
        placeholder="Ваше имя"
      />
    </div>
    <div className="form-group">
      <label htmlFor="form-group-email">Введите Ваш email</label>
      <input
        type="email"
        className="form-control"
        id="form-group-email"
        aria-describedby="emailHelp"
        placeholder="Ваш email"
      />
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">Введите текст задачи</label>
      <textarea
        className="form-control"
        id="form-group-task"
        rows="3"
        placeholder="Текст задачи"
      />
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlFile1">Выберите картинку</label>
      <input
        type="file"
        className="form-control-file"
        id="exampleFormControlFile1"
      />
    </div>
    <button type="submit" className="btn btn-primary" onClick={addTask}>Submit</button>
  </form>
);

export default Form;
