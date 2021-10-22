import { furnitureCoverImg } from '../const/img';
import products from '../const/products';
import NavbarPage from "./NavbarPage"

const CoffeeTables = () => {
    const coffeeTablesProducts = products.filter(
        ({categorys}) => categorys.indexOf('Coffee Tables') > -1
    )

    return (
        <>
            <NavbarPage namePage='Coffee Tables' products={coffeeTablesProducts} imgCover={furnitureCoverImg} />
        </>
    )
}

export default CoffeeTables
