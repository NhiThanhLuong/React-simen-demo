import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './donorLogo.scss'
import { logo1Img,logo2Img,logo3Img,logo4Img,logo5Img,logo6Img } from '../../const/img';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, { Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const DonorLogo = () => {
    const donorlogos = [
        { id: 1, img: logo1Img},
        { id: 2, img: logo2Img},
        { id: 3, img: logo3Img},
        { id: 4, img: logo4Img},
        { id: 5, img: logo5Img},
        { id: 6, img: logo6Img},
    ]
    const swiperRef = useRef(null)
    useEffect(() => {
        // Side Effect
        const interval = setInterval(() => swiperRef.current.swiper.slideNext(), 5000)
        // Clean up
        return () => clearInterval(interval)
    },[])

    return (
        <div className="grid wide">
            <div className="donor-logo__container">
                <div className="donor-logo row-scroll no-gutters">
                    <Swiper
                        ref={swiperRef}
                        breakpoints={{
                            // when window width is >= 200px
                            "200": {
                            "slidesPerView": 2,
                            },
                            // when window width is >= 569px
                            "569": {
                            "slidesPerView": 3,
                            },
                            // when window width is >= 740px
                            "740": {
                            "slidesPerView": 4,
                            },
                            // when window width is >= 1024px
                            "1024": {
                            "slidesPerView": 5,
                            },
                            // when window width is >= 1240px
                            "1240": {
                                "slidesPerView": 6,
                            },
                        }} 
                        spaceBetween={0}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        className="mySwiper"
                    >
                        {donorlogos.map(({id, img}) => (
                            <SwiperSlide key={id}>
                                <Link to='/React-simen-demo/logo' className="donor-logo__item col">
                                    <img src={img} alt=""/>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}




export default DonorLogo