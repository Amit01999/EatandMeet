import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="gradient-text">Best food wating for your belly</h1>
        <div className="Searchbtn">
          <input
            className="searchinput"
            type="text"
            placeholder="Enter your food item"
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
