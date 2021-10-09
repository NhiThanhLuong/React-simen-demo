const AdversImages = ({imgs}) => {
    return (
        <div className="advers-images">
            <div className="row">
                <div className="advers-images__1 col xlg-6 lg-6 md-6 sm-12 xsm-12">
                    <a href="" className="advers-images__wrapper img-effect-hover-1">
                        <img src={imgs[0].img} alt=""/>
                    </a>
                </div>
                <div className="advers-images__2 col xlg-3 lg-3 md-3 sm-6 xsm-o-1 xsm-10">
                    <a href="" className="advers-images__wrapper img-effect-hover-2">
                        <img src={imgs[1].img} alt=""/>
                    </a>
                </div>
                <div className="advers-images__3 col xlg-3 lg-3 md-3 sm-6 xsm-o-1 xsm-10">
                    <a href="" className="advers-images__wrapper img-effect-hover-3">
                        <img src={imgs[2].img} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AdversImages