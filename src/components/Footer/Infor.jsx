const Infor = ({iconClassName, inforText}) => {
    return (
        <div className="infor v-center">
            <div className="infor__icon v-center">
                <i className={iconClassName}/>
            </div>
            <div className="infor__text">{inforText}</div>
        </div>
    )
}

export default Infor