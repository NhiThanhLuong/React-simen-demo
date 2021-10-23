import img1 from '../../assets/image/img1.png'
import img2 from '../../assets/image/img2.jpg'
import img3 from '../../assets/image/img3.jpg'
import { useState, useRef, useEffect } from 'react';
import { createRef } from 'react'
import { Link } from 'react-router-dom';
import {useTrail, animated } from '@react-spring/web'
import classNames from 'classnames';


const ImagesAndAnimations = () => {
    return (
        <div className="row">
            <ContentBoxLeft/>
            <ContentBoxRight/>
        </div>
    )
}

const ContentBoxLeft = () => {
    // state
    const [bulletIndex, setBulletIndex] = useState(0)
    //constant
    const numberBullet = [...Array(3).keys()]
    const numberImagesSplit = [...Array(5).keys()]
    // Ref
    const refs = useRef([...new Array(3)].map(() => [...new Array(numberImagesSplit.length)].map(() => createRef())))

    const trail = useTrail(5, {
        from: { opacity: 0, transform: 'translateY(-100vh)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        // loop: true,
        reset: true,

      });

    useEffect(() => {
        // Side effect
        const interval = setInterval(() => setBulletIndex(bulletIndex => (bulletIndex + 1 ) % numberBullet.length), 5000)
        numberBullet.forEach(index => {
            const w = refs.current[index][0].current.offsetWidth
            numberImagesSplit.forEach(id => {
                const ImageItemNodeId = refs.current[index][id].current
                ImageItemNodeId.style.backgroundPosition = `-${w * id}px 0`
                ImageItemNodeId.style.left = `${(w - 1) * id}px`
            });
        })
        // Clean up
        return () => clearInterval(interval)
    },[])

    // Animation when change BulletIndex
    useEffect(() => {
        numberBullet.forEach(index => {
            numberImagesSplit.forEach(id => {
                const ImageItemNodeId = refs.current[index][id].current
                if (index === bulletIndex) {
                    ImageItemNodeId.style.zIndex = '2'
                } else {
                    ImageItemNodeId.style.zIndex = '1'
                }
            });
        })
    },[bulletIndex, numberBullet, numberImagesSplit])

    const handleClick = id => setBulletIndex(id)

    return (
        <div className="content-box-left col xlg-6 lg-6 md-6 sm-12 xsm-12">
            <div className="image__list">
                {numberBullet.map(index => {
                    return (trail.map(({...otherProps}, id) => {
                        if (index !== bulletIndex) otherProps = {}
                        return  (
                            <animated.div 
                                key={id} 
                                className={classNames(`image__item${index}`)}
                                style={{...otherProps}}
                                ref = {refs.current[index][id]}
                             />
                        )
                    }))
                })
                }
                <div className="bullets">
                    {numberBullet.map(id => {
                        return (
                            <div 
                                key={id} 
                                className={classNames('bullet', {'selected': bulletIndex === id})}
                                onClick={() => handleClick(id)}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const ContentBoxRight = () => {
    return (
        <div className="content-box-right col xlg-6 lg-6 md-6 sm-12 xsm-12">
            <Link to='/React-simen-demo/adv' className="content-box-right__top img-effect-hover-1">
                <img src={img1} alt="" className="content-box-right__top__img"/>
            </Link>
            <div className="row content-box-right__bot">
                <div className="col xlg-6 lg-6 md-6 sm-6 xsm-6">
                    <Link to='/React-simen-demo/adv' className="content-box-right__bot__left img-effect-hover-2">
                        <img src={img2} alt="" className="content-box-right__bot__left__img"/>
                    </Link>
                </div>
                <div className="col xlg-6 lg-6 md-6 sm-6 xsm-6">
                    <Link to='/React-simen-demo/adv' className="content-box-right__bot__right img-effect-hover-3">
                        <img src={img3} alt="" className="content-box-right__bot__right__img"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ImagesAndAnimations