import React from 'react';
import PropTypes from 'prop-types';

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

Sort.propTypes = {
  sortTasks: PropTypes.func,
};

Sort.defaultProps = {
  sortTasks: PropTypes.func,
};

export default Sort;
