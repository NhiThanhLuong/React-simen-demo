import { Link } from "react-router-dom"


const ContentLink = ({link}) => {
    return (
        <Link to='/React-simen-demo/no-content' className="footer__widget__content__link">{link}</Link>
    )
}

export default ContentLink