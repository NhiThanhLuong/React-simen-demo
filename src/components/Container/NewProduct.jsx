import img from '../../assets/image/new-product1.jpg'

const NewProduct = () => {
    return (
        <div className="new-product">
            <div className="row">
                <div className="col xlg-6 lg-6 md-6 sm-12 xsm-12">
                    <div className="new-product__image-container">
                        <img src={img} alt=""/>
                    </div>
                </div>
                <div className="col xlg-6 lg-6 md-6 sm-12 xsm-12">
                    <div className="new-product__content">
                        <h2>AXEL - STOOL</h2>
                        <h4>NEW PRODUCTS</h4>
                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        <button>BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProduct