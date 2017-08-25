import React from 'react';
import './style.scss';

const MenuItem = props => (
  <div className="menuItem" data-element data-element-target={props.current ? '' : null} >
    {props.value}
  </div>
);

export default MenuItem;
