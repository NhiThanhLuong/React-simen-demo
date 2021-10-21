import { animated, useTrail } from "@react-spring/web";
import ProductItemList from "./ProductItemList"
import { memo } from "react"

const ProductsList = ({listProducts}) => {
    const trail = useTrail(listProducts.length, {
        from: { opacity: 0, transform: 'scale(0)'},
        to: { opacity: 1, transform: 'scale(1)'},
        reset: true,
    })

    return (
        <div className='row'>
            {trail.map(({...otherProps}, idx) => {
                const product = listProducts[idx]
                return (
                    <animated.div className="col xlg-12" style={{...otherProps}}>
                        <ProductItemList key={idx} product={product}/>
                    </animated.div>
                )
            })}
        </div>
        
    )
}

export default memo(ProductsList)
