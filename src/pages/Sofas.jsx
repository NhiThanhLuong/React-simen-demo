import { sofasCoverImg } from '../const/img';
import products from '../const/products';
import NavbarPage from "./NavbarPage"

const Sofas = () => {
    const sofasProducts = products.filter(
        ({categorys}) => categorys.indexOf('Sofas') > -1
    )

    return (
        <>
            <NavbarPage namePage='Sofas' products={sofasProducts} imgCover={sofasCoverImg} />
        </>
    )
}

export default Sofas
