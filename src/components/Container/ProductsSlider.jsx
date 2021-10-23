import { animated, useTrail } from "@react-spring/web";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Product} from './Products.jsx';
import { useRef, useEffect } from 'react';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, { Pagination, Navigation } from "swiper";
import './productsSlider.scss'
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const ProductsSlider = ({products}) => {
  const swiperRef = useRef(null);
  const ref = useRef(null)
  const prevButton = useRef(null)
  const nextButton = useRef(null)

  const trail = useTrail(products.length, {
    from: { opacity: 0, transform: 'scale(0)'},
    to: { opacity: 1, transform: 'scale(1)'},
    reset: true,
  })

  useEffect(() => {
    const h = ref.current.offsetHeight/2
    prevButton.current.style.top = `${h}px`
    nextButton.current.style.top = `${h}px`
  }, [ref.current]);

    return (
          <div className="row">
            <button className="previousButton" ref={prevButton} onClick={() => swiperRef.current.swiper.slidePrev()} >
              <i className="fas fa-long-arrow-alt-left"></i>
            </button>
            <button className="nextButton" ref={nextButton} onClick={() => swiperRef.current.swiper.slideNext()} >
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
            <Swiper
              ref={swiperRef}
              // slidesPerView={5}
              breakpoints={{
                // when window width is >= 200px
                "200": {
                  "slidesPerView": 1,
                },
                // when window width is >= 569px
                "569": {
                  "slidesPerView": 2,
                },
                // when window width is >= 740px
                "740": {
                  "slidesPerView": 3,
                },
                // when window width is >= 1024px
                "1024": {
                  "slidesPerView": 5,
                },
              }}  
              spaceBetween={0}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              className="mySwiper"
            >
              {trail.map(({...otherProps}, idx) => {
                    const {id, isSale, img, name, oldPrice, newPrice, rating} = products[idx] 
                    return (
                      <SwiperSlide>
                        <animated.div className="col" style={{...otherProps}}>
                          <Product ref={ref} key={id} id={id} isSale={isSale} img={img} name={name} oldPrice={oldPrice} newPrice={newPrice} rating={rating}/>
                        </animated.div>
                      </SwiperSlide>
                    )})}
            </Swiper>
          </div>
    )
}

export default ProductsSlider