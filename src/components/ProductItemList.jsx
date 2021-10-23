import classNames from "classnames"
import { Link } from "react-router-dom"
import AddToCart from "./Button/AddToCart"
import ProductRating from "./Container/ProductRating"
import './productItemList.scss'

const ProductItemList = ({product}) => {
    const {id, isSale, img, name, oldPrice, newPrice, rating} = product

    return (
        <div className={classNames('product', {'product--sale': isSale})}>
            <div className="product-img-info product--list">
                <div className="row">
                    <div className="col xlg-3 lg-3 md-3 sm-12 xsm-12">
                        <Link to={`/React-simen-demo/product/${id}`}  className="product__link">
                            <img src={img} className="product__img" alt=""/>
                            <div className="product__sale">
                                SALE!
                            </div>
                        </Link>
                    </div>
                    <div className="col xlg-9 lg-9 md-9 sm-12 xsm-12">
                        <div className="infor--wrap">
                            <span className="infor--wrap__name">{name}</span>
                            <div className="infor--wrap__price">
                                {isSale && <span className="infor--wrap__old-price">$ {oldPrice.toFixed(2)}</span>}
                                <span className="infor--wrap__new-price">$ {newPrice.toFixed(2)}</span>
                            </div>
                            <ProductRating rating={rating}/>
                            <p className="infor--wrap__description">
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                            </p>
                            <AddToCart product={product}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItemList
