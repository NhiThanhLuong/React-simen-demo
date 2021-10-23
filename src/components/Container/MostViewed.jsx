import { useRef, useEffect, forwardRef } from 'react';
import ScrollButtons from './ScrollButtons.jsx'
import ProductRating from "./ProductRating.jsx";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, { Pagination, Navigation } from "swiper";
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/slice/cartSlice.js';
import { Link } from 'react-router-dom';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


const MostViewed = ({props}) => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const swiperRef = useRef(null)

    useEffect(() => {
        ref1.current.onclick = () => swiperRef.current.swiper.slidePrev()
        ref2.current.onclick = () => swiperRef.current.swiper.slideNext()
    },[])

    return (
        <div className="products__most-viewed__container">
            <ul className="nav-product v-center">
                <li className="nav-product__item nav-product__item--first">MOST VIEWED</li>
                <ScrollButtons ref={{ref1, ref2}}/>
            </ul>
            <MostViewedRow ref={swiperRef} props={props}/>
        </div>
    )
}

const MostViewedRow = forwardRef((props, swiperRef) => {
    return (
        <div className="products__most-viewed row-scroll gutter10">
            <Swiper
                ref={swiperRef}
                // slidesPerView={4}
                spaceBetween={0}
                slidesPerGroup={1}
                breakpoints={{
                    // when window width is >= 200px
                    "200": {
                      "slidesPerView": 1,
                    },
                    // when window width is >= 569px
                    "569": {
                      "slidesPerView": 2,
                    },
                    // when window width is >= 1024px
                    "1024": {
                      "slidesPerView": 3,
                    },
                    // when window width is >= 1240px
                    "1240": {
                        "slidesPerView": 4,
                    }
                  }}  
                loop={true}
                loopFillGroupWithBlank={true}
                className="mySwiper"
            >
                {props.props.map(({id, col}) => (
                    <SwiperSlide key={id}>
                        <MostViewedCol props={col}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
})

const MostViewedCol = ({props}) => {
    const dispatch = useDispatch()
    const handleClick = (item) => {
        dispatch(addToCart(item))
    }
    return (
        <div className="products__most-viewed__col col">
            {props.map(({id, isSale, img, name, oldPrice, newPrice, rating}) => (
                <div 
                    key={id}
                    className={classNames('products__most-viewed__col__item', {'products__most-viewed__col__item--sale': isSale})}
                >
                    <Link to={`/React-simen-demo/product/${id}`}>
                        <img src={img} alt=""/>
                    </Link>
                    <div className="products__most-viewed__col__item__content">
                        <Link to={`/React-simen-demo/product/${id}`} className="product__name">{name}</Link>
                        <div className="product__price">
                            {isSale && <span className="old-price">$ {oldPrice.toFixed(2)}</span>}
                            <span className="new-price">$ {newPrice.toFixed(2)}</span>
                        </div>
                        <ProductRating rating={rating}/>
                        <div className="cart-wrap" onClick={() => handleClick({id, isSale, img, name, oldPrice, newPrice, rating})}>
                            <i className="fas fa-shopping-cart"></i> ADD TO CART
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MostViewed