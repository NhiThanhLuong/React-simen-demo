import classNames from "classnames"
import './furniture.scss'
import { furnitureCoverImg } from '../const/img';
import { useState } from 'react';
import products from '../const/products';
import PriceFilter from '../components/PriceFilter';
import ProductsGrid from '../components/ProductsGrid';
import ProductsList from '../components/ProductsList';
import NoProduct from "../components/page/NoProduct";


const Furniture = () => {
    const [price, setPrice] = useState([1,500])
    const [option, setOption] = useState('Default sorting')
    const [productsFilter, setProductsFilter] = useState(products)
    const [listSort, setListSort] = useState(true)
    let sortProducts

    switch(option) {
        case 'Default sorting':
            sortProducts = products.sort((a,b) => a.id - b.id)
            break
        case 'low to high':
            sortProducts = products.sort((a,b) => a.newPrice - b.newPrice)
            break
        case 'high to low':
            sortProducts = products.sort((a,b) => b.newPrice - a.newPrice)
            break
        default:
    }

    const handleClick = () => {
        const filter = sortProducts.filter(({newPrice}) => newPrice >= price[0] && newPrice <= price[1])
        setProductsFilter(filter)
    }

    return (
        <div className="furniture-page">
            <div className="grid wide">
                <div className="img-cover">
                    <img src={furnitureCoverImg} alt=""/>
                </div>
                <div className="row header-page">
                    <div className="col xlg-3">
                        <PriceFilter 
                            // min={1}
                            // max={500}
                            price={price}
                            handleChange={price => setPrice(price)}
                            handleClick={handleClick}
                        />
                    </div>
                    <div className="col xlg-9">
                        <div className="sort--wrap">
                            <span className="title-page">FURNITURE</span>
                            <div className="sort--wrap__box">
                                <div className="icons-sort">
                                    <div 
                                        className={classNames('sort-item', {'sort-item--selected': listSort})} 
                                        onClick={() => setListSort(true)}
                                    >
                                        <i class="fas fa-th"/>
                                    </div>
                                    <div 
                                        className={classNames('sort-item', {'sort-item--selected': !listSort})} 
                                        onClick={() => setListSort(false)}
                                    >
                                        <i class="fas fa-list"/>
                                    </div>
                                </div>
                                <div className="option-sort">
                                    <select
                                        value={option}
                                        onChange={e => setOption(e.target.value)}
                                    >
                                        <option value="Default sorting">Default sorting</option>
                                        <option value="low to high">Sort by price: low to high</option>
                                        <option value="high to low">Sort by price: hight to low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span>{productsFilter.length} items</span>
                <div className="product--wrapper">
                    {listSort
                    ? <ProductsGrid listProducts={productsFilter} sort={option}/>
                    : <ProductsList listProducts={productsFilter} sort={option}/>
                    }
                    {productsFilter.length === 0 && <NoProduct />}
                </div>
                
            </div>
        </div>
    )
}

export default Furniture
