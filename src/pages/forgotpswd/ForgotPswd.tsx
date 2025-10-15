import React from 'react'
import imageBrand from '../../assets/images/brands/kongabrand.jpg'
import { Link } from 'react-router-dom'
const ForgotPswd = () => {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <h1>Oopsie, page yet to be updated</h1>
      <img src={imageBrand} alt='konga' width='400px' height='100px' />
      <Link to='/'>Go back to Home</Link>
    </div>
  )
}

export default ForgotPswd
