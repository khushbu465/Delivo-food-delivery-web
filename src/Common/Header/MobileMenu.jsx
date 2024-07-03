import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = () => {
    return (
        <>
            <div className="mobile-menu d-md-none d-block mobile-cart">
                <ul>
                    <li className="active">
                        <Link to="/" className="menu-box">
                            <i className="ri-home-4-line" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="mobile-category">
                        <a href="#!" className="menu-box">
                            <i className="ri-apps-line" />
                            <span>Category</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="menu-box">
                            <i className="ri-heart-3-line" />
                            <span>Wishlist</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="menu-box">
                            <i className="ri-shopping-cart-2-line" />
                            <span>Cart</span>
                        </a>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default MobileMenu
