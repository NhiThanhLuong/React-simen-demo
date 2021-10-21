import './filterButton.scss'

const FilterButton = ({onClick}) => {
    return (
        <button className='filter-button' onClick={onClick}>FILTER</button>
    )
}

export default FilterButton
