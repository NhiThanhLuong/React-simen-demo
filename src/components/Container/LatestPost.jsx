import { useRef, useEffect, forwardRef } from 'react';
import ScrollButtons from './ScrollButtons.jsx'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


const LatestPost = ({props}) => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const swiperRef = useRef(null)

    useEffect(() => {
        ref1.current.onclick = () => swiperRef.current.swiper.slidePrev()
        ref2.current.onclick = () => swiperRef.current.swiper.slideNext()
    },[])

    return (
        <div className="products__lastest-posts__container">
            <ul className="nav-product v-center">
                <li className="nav-product__item nav-product__item--first">LATEST POST</li>
                <ScrollButtons ref={{ref1, ref2}}/>
            </ul>
            <LatestPostRow ref={swiperRef} props={props}/>
        </div>
    )
}

const LatestPostRow = forwardRef((props, swiperRef) => {
    return (
        <div className="products__lastest-posts row-scroll gutter15">
            <Swiper
                ref={swiperRef}
                // slidesPerView={3}
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
                  }}  
                spaceBetween={0}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                className="mySwiper"
            >
                {props.props.map(({id, ...props}) => (
                    <SwiperSlide key={id}>
                        <LatestPostItem props={props}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
})

const LatestPostItem = ({props}) => {
    const {img, date, month, author, title, excerpt} = props
    return (
        <div className="products__lastest-posts__item col">
            <Link to='/React-simen-demo/no-content' className="products__lastest-posts__item__img img-effect-hover-1">
                <img src={img} alt=""/>
            </Link>
            <div className="products__lastest-posts__item__infor">
                <div className="date-month">
                    <div className="date-month__date">{date}</div>
                    <div className="date-month__month">{month}</div>
                </div>
                <div className="products__lastest-posts__item__content">
                    <Link to='/React-simen-demo/no-content' className="author">{author}</Link>
                    <Link to='/React-simen-demo/no-content' className="title">{title}</Link>
                    <div className="excerpt">{excerpt}</div>
                </div>
            </div>
        </div>
    )
}

export default LatestPost