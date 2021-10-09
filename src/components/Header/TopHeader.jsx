import en from '../../assets/image/en.jpg'
import ru from '../../assets/image/ru.jpg'
import bra from '../../assets/image/bra.jpg'
import fr from '../../assets/image/fr.jpg'

function TopHeader() {
    return (
        <div className="top-header">
            <div className="grid wide">
                <div className="topheader v-center">
                    <TopHeaderLeft/>
                    <TopHeaderRight/>
                </div>
            </div>
      </div>
    )
}

function TopHeaderLeft() {
    const language =  [
        {
            id: 1,
            src: en,
            alt: 'en',
            content: 'English'
        },
        {   
            id: 2,
            src: ru,
            alt: 'ru',
            content: 'Russian'
        },
        {
            id: 3,
            src: bra,
            alt: 'bra',
            content: 'Brazil'
        },
        {
            id: 4,
            src: fr,
            alt: 'fr',
            content: 'France'
        },
    ]

    const currency = [
        {
            id: 1,
            content: 'USD'
        },
        {
            id: 2,
            content: 'EURO'
        },
    ]

    return (
        <div className="topheader__left v-center">
            <ul className="topheader__left__list v-center">
                <li className="topheader__left__item switch-language">
                    <div className="select-language">
                        <img src={en} alt="en" /> English
                    </div>
                    <ul className="language__list">
                        {language.map(({ id, src, alt, content }) => {
                            return <LanguageItem key ={id} src = {src} alt = {alt} content = {content}/>
                        })}
                    </ul>
                </li>
                <li className="topheader__left__item switch-currency">
                    <div className="select-currency">
                        USD
                    </div>
                    <ul className="currency__list">
                        {currency.map(({id, content}) => <CurrencyItem key={id} content={content}/>)}
                    </ul>
                </li>
            </ul>
        </div>
    )
}

function LanguageItem({src, alt, content}) {
    return (
        <li className="language__item">
            <img src={src} alt={alt} /> {content}
        </li>
    )
}

function CurrencyItem({content}) {
    return (
        <li className="currency__item">
            {content}
        </li>
    )
}

function TopHeaderRight() {
    const item = [
        {
            id: 1,
            iconClass: "fa fa-user",
            content: 'My Account'
        },
        {
            id: 2,
            iconClass: "fa fa-heart",
            content: 'Wishlist'
        },
        {
            id: 3,
            iconClass: "fa fa-check-square",
            content: 'Checkout'
        },
        {
            id: 4,
            iconClass: "fa fa-key",
            content: 'Login'
        },
    ]

    return (
        <div className="topheader__right v-center">
            <div className="icon__mobile">
                <i className="fas fa-anchor" />
            </div>
            <ul className="topheader__right__list v-center">
                {item.map(({id, iconClass, content}) => <TopHeaderRightItem key={id} iconClass={iconClass} content={content}/>)}
            </ul>
      </div>
    )
}

function TopHeaderRightItem({iconClass, content}) {
    return (
        <li className="topheader__right__item">
            <i className={iconClass} /> {content}
        </li>
    )
}

export default TopHeader

