// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar-header">
    <div className="nav_bar_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website_logo"
      />
      <ul className="nav_menu">
        <Link to="/" className="nav_link">
          <li>Home</li>
        </Link>
        <Link to="/product" className="nav_link">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="nav_link">
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
