import classNames from "classnames"
import { useState, useEffect, forwardRef  } from 'react';
import { animated, useTrail } from "@react-spring/web";
import { addToCart } from "../../features/slice/cartSlice.js";
import { useDispatch } from "react-redux";
import './products.scss'
import { Link } from "react-router-dom";

import ProductRating from "./ProductRating.jsx";
import ProductsSlider from "./ProductsSlider.jsx"

const Products = ({navProducts, children}) => {
    const [active, setActive] = useState(1)

    useEffect(() => {
        if (navProducts.length < 2) setActive(0)
    }, [])
    

    return (
        <div className="products">
            <NavProduct navProducts={navProducts} active={active}/>
            {children}
        </div>
    )
}

const NavProduct = ({navProducts, active, children}) => {
    return (
        <ul className="nav-product v-center">
            {navProducts.map(({id, title}) => <NavProductItem key={id} id={id} title={title} active={active}/>)}
            {children}
        </ul>
    )
}

const NavProductItem = ({id, active, title}) => {
    return (
        <li className={classNames("nav-product__item", {"nav-product__item--first": id === 1})}>
            <span className={classNames("nav-product__item__title-link", {"nav-product__item__title-link--active": active === id})}>
                {title}
            </span>
        </li>
    )
}

const ProductItems = ({products}) => {
    const [listProducts, setListProduct] = useState([...Array(5).keys()])
    const trail = useTrail(listProducts.length, {
        from: { opacity: 0, transform: 'scale(0)'},
        to: { opacity: 1, transform: 'scale(1)'},
    })

    return (
        <>
            <div className="row">
                {trail.map(({...otherProps}, idx) => {
                    const {id, isSale, img, name, oldPrice, newPrice, rating} = products[idx]
                    return (
                        <animated.div className="col xlg-2-4 lg-2-4 md-4 sm-6 xsm-12" style={{...otherProps}}>
                            <Product key={id} id={id} isSale={isSale} img={img} name={name} oldPrice={oldPrice} newPrice={newPrice} rating={rating}/>
                        </animated.div>
                    )
                })}
            </div>
            {listProducts.length < products.length && <LoadButton setListProduct={setListProduct}/>}
        </>
    )
}

const Product = forwardRef(({id, isSale, img, name, oldPrice, newPrice, rating}, ref) => {
    const [isHover, setIsHover] = useState(false)
    const styles = {
        overflow: isHover ? 'initial' : 'hidden'
    }
    const handleOnMouseOver = () => {
        setIsHover(true)
    }

    const handleOnMouseOut = () => {
        setIsHover(false)
    }
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(addToCart({id, isSale, img, name, oldPrice, newPrice, rating}))
    }

    return (
        <div className={classNames('product', {'product--sale': isSale})}>
            <div className="product-img-info" style={styles}>
                <Link to={`/React-simen-demo/product/${id}`}  className="product__link" ref={ref}>
                    <img src={img} className="product__img" alt=""/>
                    <div className="product__sale">
                        SALE!
                    </div>
                </Link>
                <div className="item-box-hover">
                    <div className="cart-wrap" onClick={handleClick}>
                        <i className="fas fa-shopping-cart"></i> ADD TO CART
                    </div>
                    <div className="box-inner v-center">
                        <span 
                            className="box-inner__item wishlist" 
                            onMouseOver={handleOnMouseOver}
                            onMouseOut={handleOnMouseOut}
                        >
                            <i className="fas fa-heart"></i>
                            <div className="icon-script">Add to Wishlist</div>
                        </span>
                        <span 
                            className="box-inner__item compare" 
                            onMouseOver={handleOnMouseOver}
                            onMouseOut={handleOnMouseOut}
                        >
                            <i className="fas fa-random"></i>
                            <div className="icon-script">Compare</div>

                        </span>
                        <span 
                            className="box-inner__item view" 
                            onMouseOver={handleOnMouseOver}
                            onMouseOut={handleOnMouseOut}
                        >
                            <i className="fas fa-eye"></i>
                            <div className="icon-script">Quick View</div>
                        </span>
                    </div>
                </div>
            </div>
            <Link to={`/React-simen-demo/product/${id}`} className="product__name">{name}</Link>
            <div className="product__price">
                {isSale && <span className="old-price">$ {oldPrice.toFixed(2)}</span>}
                <span className="new-price">$ {newPrice.toFixed(2)}</span>
            </div>
            <ProductRating rating={rating}/>   
        </div>
    )
})

const LoadButton = ({setListProduct}) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = () => {
        setIsLoading(true)
        setListProduct(prevState => ([...prevState, ...Array.from(Array(5).keys(), n => n + prevState.length)]))
        setTimeout(() => setIsLoading(false), 400)
    }
    return (
        <button onClick={handleClick} className='load-btn'>
            {isLoading ? 'LOADING...' : 'LOAD MORE ITEMS'}
        </button>
    )
}

const NavSuggest = ({products, titles}) => {
    const [active, setActive] = useState(0)
    const newProducts = products.filter((el, idx) => idx > active)

    return (
        <>
            <div className="nav-suggest">
                <NavSuggestTitlesMobile titles={titles} active={active} setActive={setActive}/>
                <NavSuggestTitles titles={titles} active={active} setActive={setActive}/>
            </div>
            <ProductsSlider products={newProducts}/>
        </>
    )
}

const NavSuggestTitles = ({titles, active, setActive}) => {
    return (
        <div className="nav-suggest__titles-row row no-gutters">
            {titles.map(({id, img, title}) => (
                <div key={id} className="col xlg-1-3 lg-1-3">
                    <div 
                        className={classNames('suggest__title-img', {'suggest__title-img--active': id === active})}
                        onClick={() => setActive(id)}
                    >
                        <div>
                            <img src={img} alt=""/>
                            <p>{title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const NavSuggestTitlesMobile = ({titles, active, setActive}) => {
    
    return (
        <div className="nav-suggest__mobile-button">
            <i className="fas fa-bars"/>
            <div className="nav-suggest__mobile-button__title__list">
                {titles.map(({id, title}) =>(
                    <div
                    key={id}
                    className={classNames('nav-suggest__mobile-button__title__item', 
                        {'nav-suggest__mobile-button__title__item--active': id === active} )}
                    onClick={() => setActive(id)}
                    >
                        {title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export {
    Products,
    Product,
    ProductItems,
    NavSuggest,
    NavProduct
  }
