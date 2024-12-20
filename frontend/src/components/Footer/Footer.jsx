import { assets } from '../../assets/assets';
import './Footer.css';
import logo from '../../assets/img/cropped_image.png';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={logo} alt="" />
          <p>
            Discover a diverse menu at Eat&Meet - Food Delivery! Enjoy fresh
            salads, savory rolls, creamy pastas, delicious sandwiches, and sweet
            desserts. We offer pure vegetarian options and hearty meals,
            delivered right to your door. Perfect for every craving and
            occasion.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </div>
        <div className="footer-content-right">
          <ul>
            <li>+91-99999-99999</li>
            <li>contact@Eat&Meet.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Eat&Meet.com - All Right Reserved.
      </p>
      <p>Develop by-Amit Kumar Bishwas</p>
    </div>
  );
};

export default Footer;
