import classNames from "classnames"
import './navbarPage.scss'
import { useEffect, useState } from 'react';
import PriceFilter from '../components/PriceFilter';
import ProductsGrid from '../components/ProductsGrid';
import ProductsList from '../components/ProductsList';
import NoProduct from "../components/page/NoProduct";


const NavbarPage = ({namePage, products, imgCover}) => {
    const [price, setPrice] = useState([1,500])
    const [option, setOption] = useState('Default sorting')
    const [productsFilter, setProductsFilter] = useState([...products])
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

    useEffect(() => {
        handleClick()
    }, [option])

    const handleClick = () => {
        sortProducts = sortProducts.filter(({newPrice}) => newPrice >= price[0] && newPrice <= price[1])
        setProductsFilter(sortProducts)
    }

    return (
        <div className="navbar-page">
            <div className="grid wide">
                <div className="img-cover">
                    <img src={imgCover} alt=""/>
                </div>
                <div className="row header-page">
                    <div className="col xlg-3 lg-3 md-8 sm-12 xsm-12">
                        <PriceFilter 
                            // min={1}
                            // max={500}
                            price={price}
                            handleChange={price => setPrice(price)}
                            handleClick={handleClick}
                        />
                    </div>
                    <div className="col xlg-9 lg-9 md-12 sm-12 xsm-12">
                        <div className="sort--wrap">
                            <span className="title-page">{namePage.toUpperCase()}</span>
                            <div className="sort--wrap__box">
                                <div className="icons-sort">
                                    <div 
                                        className={classNames('sort-item', {'sort-item--selected': listSort})} 
                                        onClick={() => setListSort(true)}
                                    >
                                        <i className="fas fa-th"/>
                                    </div>
                                    <div 
                                        className={classNames('sort-item', {'sort-item--selected': !listSort})} 
                                        onClick={() => setListSort(false)}
                                    >
                                        <i className="fas fa-list"/>
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

export default NavbarPage
