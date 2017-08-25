import React from 'react';
import MenuItem from '../menuItem';
import './style.scss';

const Menu = () => (
  <div className="menu" data-scope data-scope-current >
    <MenuItem value="Подборки" current />
    <MenuItem value="Рекомендации" />
    <MenuItem value="Моя музыка" />
  </div>
);

export default Menu;
