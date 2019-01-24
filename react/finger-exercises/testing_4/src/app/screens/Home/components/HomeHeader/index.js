import React from 'react';

import logo from '../../../../../assets/jest.png';

import './styles.css';

function HomeHeader() {
  return (
    <header className="home-header">
      <img src={logo} className="home-logo" alt="logo" />
      <h1 className="home-title">Welcome to Jest over async actions</h1>
    </header>
  );
}

export default HomeHeader;
