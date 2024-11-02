import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import Header from '../../components/Header/Header.jsx';
import './Home.css';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx';
import AppDownload from '../../components/AppDownload/AppDownload.jsx';
import RestaurentPart from '../../components/RestaurentPart/RestaurentPart.jsx';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <RestaurentPart />
      <AppDownload />
    </div>
  );
};

export default Home;
