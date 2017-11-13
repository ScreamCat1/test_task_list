import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const renderCard = (tasks, autorized, editTask) => (
  tasks.map(({ email, id, image_path: imagePath, status, text, username }) => (
    <div className="row" key={id}>
      <div className="col-3">
        <img
          className="card-img-top"
          src={imagePath}
          alt="Card cap"
        />
      </div>
      <div className="card-body col-9">

        {autorized ? (
          <Link to="/edit" className="card-title" data-id={id} onClick={editTask}>
            <span className="card-subtitle mb-2 text-muted">
              Создал: </span>
            {username}
          </Link>

        ) : (
          <p className="card-title">
            <span className="card-subtitle mb-2 text-muted">
              Создал: </span>
            {username}</p>
        )}
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

const Card = ({ tasks, autorized, editTask }) => (
  <div>
    {renderCard(tasks, autorized, editTask)}
  </div>
);

Card.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  autorized: PropTypes.bool.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default Card;
