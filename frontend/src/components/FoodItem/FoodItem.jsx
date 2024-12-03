import { useContext, useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import ShimmerFoodItem from '../ShimmerFood/ShimmerFoodItem';

const FoodItem = ({ id, name, price, description, image }) => {
  const { url } = useContext(StoreContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handelFoodDetails = () => {
    console.log('Food details clicked');
    navigate('/FoodDetailes/' + id);
  };

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = url + '/images/' + image;
    imageLoader.onload = () => setIsLoading(false);
  }, [url, image]);

  if (isLoading) {
    return <ShimmerFoodItem></ShimmerFoodItem>;
  }

  return (
    <div onClick={handelFoodDetails} className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + '/images/' + image}
          alt=""
        />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img className="star-rating" src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
