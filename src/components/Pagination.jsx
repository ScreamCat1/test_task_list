import React from 'react';

const renderPageLink = (totalTaskCount) => {
  const countPages = Math.ceil(totalTaskCount / 3);
  const links = [];
  for (let i = 1; i <= countPages; i += i) {
    links.push(
      <li className="page-item" key={i}>
        <a className="page-link" href="">{i}</a>
      </li>,
    );
  }
  return links;
};

const Pagination = ({ totalTaskCount }) => (
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item"><a className="page-link" href="#">Previous</a></li>
      {renderPageLink(totalTaskCount)}
      <li className="page-item"><a className="page-link" href="#">Next</a></li>
    </ul>
  </nav>
);

export default Pagination;
