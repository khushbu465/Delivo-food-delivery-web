import React from 'react'
import { Link } from 'react-router-dom'

const CatCard = ({ title, img }) => {
    return (
        <>
            <div className="swiper-slide food_category">
                <Link to="/" className="food-categories">
                    <img className="img-fluid categories-img" src={`assets/images/product/${img}`} alt="p-1" />
                    <h4 className="dark-text">{title}</h4>
                </Link>
            </div>
        </>
    )
}

export default CatCard
