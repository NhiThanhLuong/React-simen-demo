const ProductRating = ({rating}) => {
    const numberStars = [...Array(5).keys()].map(x => ++x)
    return (
        <div className="product__rating">
            {numberStars.map(i => {
                if (i <= rating ) return <i className="far fa-star fas fa-star--gold"/>
                else {
                    return (i === rating + 0.5) ? <i className="fas fa-star-half-alt"/> : <i className="far fa-star"/>
                }
            })}
        </div>    
    )
}

export default ProductRating