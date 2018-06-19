import React from 'react';

import SearchContainer from '../containers/SearchContainer';

const Home = () => (
  <div className="home-container">
    <h1 className="header">Please enter the city</h1>
    <SearchContainer />
  </div>
);

export default Home;
