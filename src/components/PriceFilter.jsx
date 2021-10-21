import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './priceFilter.scss'
import FilterButton from './Button/FilterButton';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const PriceFilter = ({min, max, price, handleChange, handleClick}) => {
    return (
        <div className="price-filter--wrap">
            <div className="price-filter">
                <span className='price-filter__title'>PRICE</span>
                <div className='range'>
                    <Range 
                        min={min}
                        max={max}
                        defaultValue={[min,max]}
                        tipFormatter={value => `$ ${value}`}
                        tipProps={{
                            placement: 'top',
                            visible: true
                        }}
                        value={price}
                        onChange={handleChange}
                    />
                </div>
                <div className="box-inner">
                    <span>Price: $ {price[0]} - $ {price[1]}</span>
                    <FilterButton onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}

PriceFilter.defaultProps  = {
    min: 1,
    max: 500,
}

export default PriceFilter


