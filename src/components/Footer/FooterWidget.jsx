import FooterWidgetTitle from "./FooterWidgetTitle.jsx"

const FooterWidget = ({title, children}) => {
    return (
        <div className="col xlg-2-4 lg-2-4 md-6 sm-12 xsm-12">
            <div className="footer__widget">
                <FooterWidgetTitle title={title}/>
                <div className="footer__widget__content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default FooterWidget