import React from 'react'

const CatCard = ({title,img}) => {
    return (
        <>
            <div className="swiper-slide">
                <a href="restaurant-listing.html" className="food-categories">
                    <img
                        className="img-fluid categories-img"
                        src={`assets/images/product/${img}`}
                        alt="p-1"
                    />
                    <h4 className="dark-text">{title}</h4>
                </a>
            </div>
        </>
    )
}

export default CatCard
