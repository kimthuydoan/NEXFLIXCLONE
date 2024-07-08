import { Link } from "react-router-dom";
import "./index.scss";
import { SearchOutlined,CloseOutlined  } from "@ant-design/icons";
import { useState } from "react";

function Header() {
  const [isShowSearch, setIsShowSearch] = useState(false);
  return (
    <header className="header">
      <div className="header__logo">
        <Link tp="">
        <img
          src="https://movie-eta-sage.vercel.app/assets/movix-logo-d720c325.svg"
          alt=""
          width={200}
        />
        </Link>
        
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/movie-management">Movie Management</Link>
          </li>
          <li onClick={()=> setIsShowSearch(true)}>
            <SearchOutlined />
          </li>
        </ul>
      </nav>

      <div className={`header__search ${isShowSearch ? "active": ""}`}>
       <input type="text"placeholder="Search a movie..." />
       <CloseOutlined onClick={()=> setIsShowSearch(false)}/>
      </div>
    </header>
  );
}

export default Header;
