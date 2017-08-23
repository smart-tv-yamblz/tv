import React from 'react';
import Menu from '../menu';
import Content from '../content';

import './style.scss';

const Layout = () => (
  <div className="layout">
    <Menu />
    <Content />
  </div>
);

export default Layout;
