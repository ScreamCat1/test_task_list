import React from 'react';
import PropTypes from 'prop-types';

const renderPageLink = (totalTaskCount) => {
  const countPages = Math.ceil(totalTaskCount / 3);
  const links = [];
  for (let i = 1; i <= countPages; i += 1) {
    links.push(
      <li className="page-item" key={i}>
        <a className="page-link" href="">{i}</a>
      </li>,
    );
  }
  return links;
};

const Pagination = ({ totalTaskCount, paginationPages }) => (
  <nav
    aria-label="Page navigation example"
    onClick={paginationPages}
  >
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="">Previous</a>
      </li>
      {renderPageLink(totalTaskCount)}
      <li className="page-item">
        <a className="page-link" href="">Next</a>
      </li>
    </ul>
  </nav>
);

Pagination.propTypes = {
  totalTaskCount: PropTypes.number.isRequired,
  paginationPages: PropTypes.func.isRequired,
};

export default Pagination;
