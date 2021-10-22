import { forwardRef } from "react"

const ScrollButtons = (props, ref) => {
    const {ref1, ref2} = ref
    return (
        <div className="scroll__button">
            <button className="prew-button" ref={ref1}>
                <i className="fas fa-long-arrow-alt-left"/>
            </button>
            <button className="next-button" ref={ref2}>
                <i className="fas fa-long-arrow-alt-right"/>
            </button>
        </div>
    )
}

export default forwardRef(ScrollButtons)