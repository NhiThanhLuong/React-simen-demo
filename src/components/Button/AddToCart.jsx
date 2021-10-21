import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/slice/cartSlice'
import './addToCart.scss'

const AddToCart = ({product}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(addToCart(product))
    }

    return (
        <div className="add-to-cart-wrap"
            onClick={handleClick}
        >
            <i className="fas fa-shopping-cart"></i> ADD TO CART
        </div>
    )
}

export default AddToCart
