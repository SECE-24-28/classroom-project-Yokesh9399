import React, { useContext } from 'react'
import { DataContext } from './context'

const Two = () => {
    const { setData } = useContext(DataContext)
    
    const handleIncrement = () => {
        setData(prev => [...prev, prev.length + 1])
    }
    
    return (
        <div>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Two