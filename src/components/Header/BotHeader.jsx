import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo.png'

function BotHeader() {
    return (
        <div className="bot-header">
            <div className="grid wide">
                <div className="row botheader">
                    <div className="botheader__brand col xlg-3 lg-3 md-3 sm-12 xsm-12">
                        <Link to="/React-simen-demo">
                            <img src={logo} alt="SNS Simen" />
                        </Link>
                    </div>
                    <div className="col xlg-9 lg-9 md-9 sm-12 xsm-12">
                        <div className="row">
                            <div className="col xlg-4 lg-4 md-4">
                                <div className="sns-icon-box v-center">
                                    <div className="sns-icon-left v-center">
                                        <i className="fa fa-truck" />
                                    </div>
                                    <div className="sns-icon-right-content">
                                        <h4>FREE DELIVERY WORLDWIDE</h4>
                                        <span>On order over $100</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col xlg-4 lg-4 md-4">
                                <div className="sns-icon-box v-center">
                                    <div className="sns-icon-left v-center">
                                        <i className="fa fa-cloud-upload-alt" />
                                    </div>
                                    <div className="sns-icon-right-content">
                                        <h4>UP TO 20% OFF COSY LAYERS</h4>
                                        <span>Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col xlg-4 lg-4 md-4">
                                <div className="sns-icon-box v-center">
                                    <div className="sns-icon-left v-center">
                                        <i className="fa fa-gift" />
                                    </div>
                                    <div className="sns-icon-right-content">
                                        <h4>BUY 1 GET 1 FREE</h4>
                                        <span>On order over $100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default BotHeader