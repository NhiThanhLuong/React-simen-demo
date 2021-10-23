import { Link } from 'react-router-dom';
import './notFound.scss'

const NotFound = () => (
    <div className="grid wide">
        <div className="not-found">
            <span className='error-404'>404</span>
            <span className='error-infor'>OPPS, PAGE NOT FOUND</span>
            <span className='error-detail'>Sorry,an error has occured. Request Page Not Found.</span>
            <Link to="/React-simen-demo" className="link-home">
                Go Home
            </Link>
        </div>
    </div>
);

export default NotFound;