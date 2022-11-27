import React from 'react'
import { Link } from 'react'
class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="./">
            Nature's Select
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./home">
                  Products
                </a>
              </li>
            </ul>
          </div>
          <div className="cart">
            <div className="cart-info"></div>
            <a className="cart-icon" href="#">
              <img
                src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                alt="Cart"
              />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
