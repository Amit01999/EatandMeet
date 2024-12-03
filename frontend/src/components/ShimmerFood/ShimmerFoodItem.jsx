import './ShimmerFoodItem.css';
const ShimmerFoodItem = () => {
  return (
    <div className="food-item shimmer">
      <div className="food-item-img-container shimmer-img-container">
        <div className="shimmer-box shimmer-img"></div>
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <div className="shimmer-box shimmer-text shimmer-title"></div>
          <div className="shimmer-box shimmer-text shimmer-rating"></div>
        </div>
        <div className="shimmer-box shimmer-text shimmer-desc"></div>
        <div className="shimmer-box shimmer-text shimmer-price"></div>
      </div>
    </div>
  );
};

export default ShimmerFoodItem;
