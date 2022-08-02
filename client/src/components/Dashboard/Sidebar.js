import React from 'react';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <Menu>
      <Link className="menu-item" to="/dashboard/calendar">
        Calendar
      </Link>
      <Link className="menu-item" to="/dashboard/taskmanager">
        Task Manager
      </Link>
    </Menu>
  );
};

export default Sidebar