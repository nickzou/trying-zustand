import './left-column.css'

import useStore from '../../store/UseStore'

const LeftColumn = () => {

    const increase = useStore(state => state.increaseCount)
    const decrease = useStore(state => state.decreaseCount)

    return(
        <div className="left-column">
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default LeftColumn