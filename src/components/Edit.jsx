import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Edit extends Component {
  // componentWillReceiveProps(nextProps) {
  //   this.setState(nextProps);
  // }

  render() {
    return (
      <div>
        sdsdsdsds
      </div>
    );
  }
}

const mapStateToProps = currentTask => (currentTask);

Edit.propTypes = {
  currentTask: PropTypes.shape({}).isRequired,
};
export default connect(mapStateToProps)(Edit);
