import React from 'react';
import Menu from '../menu';
import './style.scss';

const Layout = ({ children }) => (
  <div className="layout">
    <Menu />
    {children}
  </div>
);

export default Layout;
