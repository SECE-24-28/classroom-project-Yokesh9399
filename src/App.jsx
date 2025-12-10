import React from 'react'
import './App.css'
import One from './one'
import Two from './two'
import Three from './three'
import DataProvider from './datacontext'
function App() {
  return (
    <>
     <DataProvider>
          <One/>
          <Two/>
          <Three/>
     </DataProvider>
    </>
  )
}

export default App