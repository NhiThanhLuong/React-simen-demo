import { furnitureCoverImg } from '../const/img';
import products from '../const/products';
import NavbarPage from "./NavbarPage"

const Furniture = () => {
    return (
        <>
            <NavbarPage namePage='Furniture' products={products} imgCover={furnitureCoverImg} />
        </>
    )
}

export default Furniture
