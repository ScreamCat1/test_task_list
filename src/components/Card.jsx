import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const renderCard = (tasks, autorized, editTask) => (
=======
const renderCard = tasks => (
>>>>>>> 58775b3e4f1318fa31ba1e7b7c5b7bab4a264d19
  tasks.map(({ email, id, image_path: imagePath, status, text, username }) => (
    <div className="row" key={id}>
      <div className="col-3">
        <img
          className="card-img-top"
          src={imagePath}
          alt="Card cap"
        />
      </div>
<<<<<<< HEAD
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
=======
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
>>>>>>> 58775b3e4f1318fa31ba1e7b7c5b7bab4a264d19
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
