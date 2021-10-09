import { useRef, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, { Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const DonorLogo = ({props}) => {
    const swiperRef = useRef(null)
    useEffect(() => {
        // Side Effect
        const interval = setInterval(() => swiperRef.current.swiper.slideNext(), 5000)
        // Clean up
        return () => clearInterval(interval)
    },[])

    return (
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
                    {props.map(({id, img}) => (
                        <SwiperSlide key={id}>
                            <a href="" className="donor-logo__item col">
                                <img src={img} alt=""/>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}




export default DonorLogo