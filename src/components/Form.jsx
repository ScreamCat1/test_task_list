import React from 'react';

const Form = () => (
  <form>
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
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
);

export default Form;
