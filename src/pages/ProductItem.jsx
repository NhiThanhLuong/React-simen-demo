import ReactImageMagnify from "react-image-magnify"
import products from "../const/products"
import './productItem.scss'
import {useState} from 'react'
import { useParams } from "react-router"
import ProductRating from "../components/Container/ProductRating.jsx"
import NotFound from './NotFound'
import { useDispatch } from "react-redux"
import { addQuantityItem } from "../features/slice/cartSlice"
import useWindowDimensions from "../hook/useWindowDimensions"
import { toast } from "react-toastify"

const ProductItem = () => {
    const  { width } = useWindowDimensions()
    const ratio = width/1500
    const [input, setInput] = useState(1)
    const dispatch = useDispatch()
    const {id} = useParams()
    const productItem = products.find(item => item.id == id)
    if (productItem) {
        const {isSale, img, name, oldPrice, newPrice, rating} = productItem
        const handleClick = () => {
            if (Number.isInteger(+input) && +input > 0) {
                dispatch(addQuantityItem({productItem, quantity: +input}))
            } else {
                toast.error(`Please, Enter input is a integer`, {
                    position: 'bottom-left',
                })
            }
        }
        return (
            <div className="container">
                <div className="grid wide">
                    <div className="product-item row">
                        <div className="col xlg-5 lg-5 md-5 sm-5 xsm-12">
                            <div className="image-product-page">
                                <ReactImageMagnify {...{
                                    imageStyle: {
                                        border: '1px solid #eaeaea',
                                    },
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        // width: 475,
                                        // height: 570,
                                        src: img,
                                    },
                                    largeImage: {
                                        src: img,
                                        width: 475 * ratio * 2,
                                        height: 570 * ratio * 2,
                                    }
                                }}/>
                            </div>
                        </div>
                        <div className="col xlg-5 lg-6 md-7 sm-7 xsm-12">
                            <div className="infor">
                                <p className='name'>{name}</p>
                                <div className="price">
                                    {isSale && <span className="old-price">$ {oldPrice.toFixed(2)}</span>}
                                    <span className="new-price">$ {newPrice.toFixed(2)}</span>
                                </div>
                                <ProductRating rating={rating}/>
                                <p className="description">
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                                </p>
                                <input className='quantity' type='number' step='1' min='1' inputMode='numeric' value={input} onInput={e => setInput(e.target.value)}/>
                                <button className="add-to-cart" onClick={handleClick}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
    return (
        <NotFound/>
    )

}
export default ProductItem
