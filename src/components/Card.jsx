import React from 'react';

const renderCard = tasks => (
  tasks.map(({ email, id, image_path, status, text, username }) => (
    <div className="row">
      <div className="col-3">
        <img
          className="card-img-top"
          src={image_path}
          alt="Card cap"
        />
      </div>
      <div className="card-body col-6">
        <h4 className="card-title">Card title</h4>
        <p className="card-text">
          {text}
        </p>
        <a href="" className="btn btn-primary">Go somewhere</a>
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
