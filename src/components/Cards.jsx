import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Pagination from './Pagination';
import Card from './Card';
import Sort from './Sort';

import { setTasks, sortTasks, setTask } from '../actions/actions';

class Cards extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      username: '',
      email: '',
      status: '',
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.props.setTasks(this.state.currentPage);
  }

  paginationPages = (e) => {
    e.preventDefault();
    const { totalTaskCount, setTasks: set } = this.props;
    const { currentPage } = this.state;
    const { target: { innerHTML } } = e;
    let page;
    switch (innerHTML) {
    case 'Previous':
      if (currentPage === 1) {
        page = currentPage;
      } else {
        page = +currentPage - 1;
      }

      break;
    case 'Next':
      if (currentPage === Math.ceil(totalTaskCount / 3)) {
        page = currentPage;
      } else {
        page = currentPage + 1;
      }
      break;
    default:
      page = +innerHTML;
    }
    this.setState(prevState => ({ ...prevState, currentPage: page }), function () { return set(this.state.currentPage); });
    // return false;
  }

  sortTasks = ({ target: { dataset: { field } } }) => {
    if (field) {
      const { tasks, sortTasks: sort } = this.props;
      let direction = this.state[field];
      sort({ field, tasks, direction });
      direction = direction === '' ? 'asc' : '';
      this.setState({ [field]: direction });
    }
  }

  editTask = ({ target: { dataset: { id } } }) => {
    const { tasks, setTask: set } = this.props;
    set({ id, tasks });
  }

  render() {
    const { tasks, totalTaskCount, autorized } = this.props;
    return (
      <div
        role="presentation"
        onClick={this.sortTasks}
      >
        <Sort />
        <Card tasks={tasks} autorized={autorized} editTask={this.editTask} />
        <Pagination
          totalTaskCount={totalTaskCount}
          paginationPages={this.paginationPages}
        />
      </div>
    );
  }
}

const mapStateToProps =
({ tasks: { tasks, totalTaskCount }, autorized }) => (
  {
    tasks,
    totalTaskCount,
    autorized,
  });

Cards.propTypes = {
  totalTaskCount: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setTasks: PropTypes.func.isRequired,
  sortTasks: PropTypes.func.isRequired,
  setTask: PropTypes.func.isRequired,
  autorized: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { setTasks, sortTasks, setTask })(Cards);
