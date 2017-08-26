import React from 'react';
import MenuItem from '../menuItem';
import './style.scss';

const controls = {
  handleEnter: (event) => {
    console.log('Enter', event);
  },
  handleFocus: (event) => {
    console.log('Focus', event);
  },
  handleRight: (event) => {
    console.log('Right', event);
  },
  handleLeft: (event) => {
    console.log('Left', event);
  },
};

class Menu extends React.Component {
  componentDidMount() {
    this.nav_scope.addEventListener('data-enter', controls.handleEnter);
    this.nav_scope.addEventListener('data-focus', controls.handleFocus);
    this.nav_scope.addEventListener('data-right', controls.handleRight);
    this.nav_scope.addEventListener('data-left', controls.handleLeft);
  }

  componentWillUnmount() {
    this.nav_scope.removeEventListener('data-enter', controls.handleEnter);
    this.nav_scope.removeEventListener('data-focus', controls.handleFocus);
    this.nav_scope.removeEventListener('data-right', controls.handleRight);
    this.nav_scope.removeEventListener('data-left', controls.handleLeft);
  }

  render() {
    return (
      <div
        ref={(elem) => { this.nav_scope = elem; }}
        className="menu"
        data-scope
        data-scope-current
      >
        <MenuItem value="Подборки" current />
        <MenuItem value="Рекомендации" />
        <MenuItem value="Моя музыка" />
      </div>
    );
  }
}

export default Menu;
