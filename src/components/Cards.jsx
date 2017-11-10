import React, { Component } from 'react';

import { connect } from 'react-redux';

import Pagination from './Pagination';
import Card from './Card';
import Sort from './Sort';

import { setTasks, sortTasks } from '../actions/actions';

class Cards extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      totalTaskCount: 0,
      tasks: [],
    };
  }

  componentDidMount() {
    this.props.setTasks();
  }

  sortTasks({ target: { dataset: { field } } }) {
    if (field) {
      const { tasks } = this.props.tasks;
      console.log(this.props.sortTasks({ field: field, tasks: tasks})
    );
    }
  }
  render() {
    const { tasks, totalTaskCount } = this.props;
    return (
      <div
        onClick={this.sortTasks}
      >
        <Sort />
        <Card tasks={tasks} />
        <Pagination totalTaskCount={totalTaskCount} />
      </div>
    );
  }
}

const mapStateToProps = ({ tasks: { tasks, totalTaskCount } }) => (
  {
    tasks,
    totalTaskCount,
  });

export default connect(mapStateToProps, { setTasks, sortTasks })(Cards);
