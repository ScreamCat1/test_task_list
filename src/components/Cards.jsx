import React from 'react';

const Cards = () => (
  <div className="col-md-6">
    <div className="row">
      <div className="col-3">
        <img
          className="card-img-top"
          src="https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836540_1.jpg"
          alt="Card cap"
        />
      </div>
      <div className="card-body col-6">
        <h4 className="card-title">Card title</h4>
        <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the content.
        </p>
        <a href="" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div className="card">
      <img
        className="card-img-top"
        src="https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836666_3.jpg"
        alt="Card cap"
      />
      <div className="card-body">
        <h4 className="card-title">Card title</h4>
        <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the content.
        </p>
        <a href="" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div className="card">
      <img
        className="card-img-top"
        src="https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836803_4.jpg"
        alt="Card cap"
      />
      <div className="card-body">
        <h4 className="card-title">Card title</h4>
        <p className="card-text">
            Some quick example text
            to build on the card
            title and make up the bulk of the content.</p>
        <a href="" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
);

export default Cards;
