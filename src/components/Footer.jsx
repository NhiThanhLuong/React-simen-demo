import FooterWidget from './Footer/FooterWidget.jsx'
import Infor from './Footer/Infor.jsx'
import ContentLink from './Footer/ContentLink.jsx'

const Footer = () => {
    const contactUs = {
        title: 'CONTACT US',
        infor: [
            {
                iconClassName: 'fas fa-home',
                inforText: '8888 South Avenue Street, New York',
            },
            {
                iconClassName: 'fas fa-phone-alt',
                inforText: 
                <>
                    <p>(12) 3 456 7896</p>
                    <p>(12) 3 456 7895</p>
                </>,
            },
            {
                iconClassName: 'fas fa-envelope',
                inforText: 
                <>
                    <span>contact@simen.com</span>
                    <span>info@simen.com</span>
                </>,
            },
        ]
    }

    const footerWidgetLink = [
        {
            title: 'SERVICE',
            links : [
                {link: 'Prices & Currencies'},
                {link: 'Secure Payment'},
                {link: 'Delivery Times & Costs'},
                {link: 'Returns & Exchanges'},
                {link: 'FAQ’s'},
            ]
        },
        {
            title: 'ACCOUNT',
            links : [
                {link: 'My Account'},
                {link: 'Wishlist'},
                {link: 'Order History'},
                {link: 'Specials'},
                {link: 'Gift Vouchers'},
            ]
        },
        {
            title: 'IMFORMATION',
            links : [
                {link: 'My Account'},
                {link: 'Wishlist'},
                {link: 'Order History'},
                {link: 'Specials'},
                {link: 'Gift Vouchers'},
            ]
        },
    ]

    return (
        <footer className="footer">
            <div className="grid wide">
                <div className="row">
                    <FooterWidget title={contactUs.title}>
                        {contactUs.infor.map(({iconClassName, inforText}, index) => (
                            <Infor key={index} iconClassName={iconClassName} inforText={inforText}/>
                        ))}
                    </FooterWidget>
                    {footerWidgetLink.map(({title, links}, i) => (
                        <FooterWidget key={i} title={title}>
                            {links.map(({link}, index) => (
                                <ContentLink key={index} link={link}/>
                            ))}
                        </FooterWidget>
                    ))}
                    <FooterWidget title='NEWSLETTER'>
                        <span className="register-text">Register your email for news</span>
                        <input type="text" placeholder="Your email here"/>
                        <button>SUBSCRIBE</button>
                    </FooterWidget>
                </div>
            </div>
        </footer>
    )
}


export default Footer