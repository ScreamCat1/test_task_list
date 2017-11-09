import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (

  <ul className="nav nav-pills justify-content-end">
    <li className="nav-item">
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="active"
      >
      Task List
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/add-task"
        exact
        className="nav-link"
        activeClassName="active"
      >
      Add task
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/login"
        exact
        className="nav-link"
        activeClassName="active"
      >
      Login
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
