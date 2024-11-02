import React from 'react';
import './RestaurentPart.css';
import img1 from '../../assets/restaurent/1.jpg';
import img2 from '../../assets/restaurent/2.jpeg';
import img3 from '../../assets/restaurent/4.webp';
import img4 from '../../assets/restaurent/5.jpeg';

const RestaurentPart = () => {
  const images = [img1, img2, img3, img4];
  return (
    <div className="container">
      <div className="content">
        <div className="image-grid">
          {images.map((img, index) => (
            <div key={index} className="image-container">
              <img src={img} alt={`Gallery ${index}`} className="image" />
            </div>
          ))}
        </div>
        <div className="about-section">
          <h2 className="heading">
            Welcome to <span className="highlight">Eat&Meet</span>
          </h2>
          <p className="description">
            Eat&Meet is a place where delicious flavors meet great company!
            Enjoy a warm, inviting atmosphere with a menu inspired by global
            tastes, crafted from fresh, locally sourced ingredients.
          </p>
          <p className="description">
            Perfect for casual get-togethers, family dinners, or a special night
            out. Come for the food, stay for the experience!.
          </p>

          <div className="stats">
            <div className="stat-item">
              <h3 className="stat-number">15</h3>
              <p className="stat-label">
                Years of
                <br />
                Experience
              </p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">50</h3>
              <p className="stat-label">
                Popular
                <br />
                Master Chefs
              </p>
            </div>
          </div>

          <button className="read-more-btn">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurentPart;
