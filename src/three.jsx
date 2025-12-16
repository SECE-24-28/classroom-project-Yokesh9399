import React, { useContext } from 'react'
import { DataContext } from './context'

const Three = () => {
    const { setData } = useContext(DataContext)
    
    const handleDecrement = () => {
        setData(prev => prev.slice(0, -1))
    }
    
    return (
        <div>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}
export default Three