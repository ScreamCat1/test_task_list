import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> 58775b3e4f1318fa31ba1e7b7c5b7bab4a264d19

const Sort = ({ sortTasks }) => (
  <div className="btn-group" role="group" aria-label="Basic example">
    <button
      onChange={sortTasks}
      data-field="username"
      type="button"
      className="btn btn-secondary"
    >
      Имя пользователя
    </button>
    <button
      onChange={sortTasks}
      data-field="email"
      type="button"
      className="btn btn-secondary"
    >
      Email
    </button>
    <button
      onChange={sortTasks}
      data-field="status"
      type="button"
      className="btn btn-secondary"
    >
      Статус
    </button>
  </div>
);

<<<<<<< HEAD
Sort.propTypes = {
  sortTasks: PropTypes.func,
};

Sort.defaultProps = {
  sortTasks: PropTypes.func,
};

export default Sort;
=======
export default Sort;

>>>>>>> 58775b3e4f1318fa31ba1e7b7c5b7bab4a264d19
