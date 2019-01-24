import React from 'react';

import HomeHeader from './components/HomeHeader';
import FoodList from './components/FoodList';

import './styles.css';

function Home() {
  return (
    <div className="home">
      <HomeHeader />
      <FoodList />
    </div>
  );
}

export default Home;
