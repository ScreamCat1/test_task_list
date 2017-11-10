import React from 'react';

const renderCard = tasks => (
  tasks.map(({ email, id, image_path: imagePath, status, text, username }) => (
    <div className="row" key={id}>
      <div className="col-3">
        <img
          className="card-img-top"
          src={imagePath}
          alt="Card cap"
        />
      </div>
      <div className="card-body col-6">
        <p className="card-title">
          <span className="card-subtitle mb-2 text-muted">
            Создал: </span>
          {username}</p>
        <p className="card-text">
          <span className="card-subtitle mb-2 text-muted">
            Email: </span>
          {email}
        </p>
        <p className="card-text">
          <span className="card-subtitle mb-2 text-muted">
            Текст: </span>
          {text}
        </p>
        <p className="card-text">
          <span className="card-subtitle mb-2 text-muted">
            Статус: </span>
          {status === 0 ? 'Не сделана' : 'Сделана'}
        </p>
      </div>
    </div>
  ))
);

const Card = ({ tasks }) => (
  <div>
    {renderCard(tasks)}
  </div>
);

export default Card;
