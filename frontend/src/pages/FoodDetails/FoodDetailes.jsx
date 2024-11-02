import React, { useContext } from 'react';
import './FoodDetails.css';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from '../../assets/assets';
const FoodDetailes = () => {
  const { food_list, cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  const FoodId = useParams();
  const fId = FoodId.id;
  const FoodIteam = food_list;
  console.log(FoodIteam);
  const selectedFoodIteam = FoodIteam.find(food => food._id == fId);
  console.log(selectedFoodIteam);
  return (
    <div className="Detailes">
      <div className="DetailesContent">
        <h2>{selectedFoodIteam.name}</h2>
        <p>{selectedFoodIteam.description}</p>

        <div className="detaileAdd">
          <p>Price: </p> <h3> {selectedFoodIteam.price}</h3>
        </div>
        <div className="food-item-counters">
          <img
            onClick={() => removeFromCart(fId)}
            src={assets.remove_icon_red}
            alt=""
          />
          <p>{cartItems[fId] || 0}</p>
          <img
            onClick={() => addToCart(fId)}
            src={assets.add_icon_green}
            alt=""
          />
        </div>
        <button onClick={() => addToCart(fId)} className="daddbtn">
          Add
        </button>
        <ToastContainer />
        {/* <div className="detailesImg">
          <img src={img1} alt="image" />
          <img src={img2} alt="image" />
          <button>..</button>
        </div> */}
      </div>
      <div className="bigimg">
        <img src={url + '/images/' + selectedFoodIteam.image} alt="" />
      </div>
    </div>
  );
};

export default FoodDetailes;
