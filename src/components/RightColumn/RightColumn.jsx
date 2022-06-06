import './right-column.css'

import useStore from '../../store/UseStore'

const RightColumn = () => {

    const count = useStore(state => state.count)

    return(
        <div className="right-column"><code>Count: {count}</code></div>
    )
}

export default RightColumn