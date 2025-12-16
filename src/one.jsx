import React, { useContext } from 'react'
import { DataContext } from './context'

const One = () => {
    const { data } = useContext(DataContext)
  return (
    <div>
        <h1>Count: {data.length}</h1>
    </div>
  )
}

export default One