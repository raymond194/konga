import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/Store'

const HomePage = () => {
      const hovered = useSelector((state: RootState) => state.hovered.value)
    if (hovered) return null

  return (
    <> 
     <h1 style={{marginTop: '230px'}}>404: HOME PAGE IS UNDER CONSTRUCTION</h1>
    </>
  )
}

export default HomePage
