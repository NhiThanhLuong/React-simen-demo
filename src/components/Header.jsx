import '../assets/css/style.scss'
import TopHeader from './Header/TopHeader.jsx'
import BotHeader from './Header/BotHeader.jsx'
import HeaderMenu from './Header/HeaderMenu.jsx'

function Header() {
    return (
        <header className="header">
            <TopHeader/>
            <BotHeader/>
            <HeaderMenu/>
        </header>
    )
}

export default Header