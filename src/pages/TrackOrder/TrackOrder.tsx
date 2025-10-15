import React from 'react'
import trackLogo from '../../assets/images/brands/trackImg.jpg'
import '../../styles/children/trackOrder.css'

const TrackOrder = () => {
  return (
    <div className='flex1'>
      <img src={trackLogo} alt='trackLogo' width='185px' height='50px' />

      <div className='flex2'>
        <h2>Track A Package</h2>

        <div className='flex3'>
          <input type='text' placeholder='Your tracking number' />
          <button>TRACK</button>
        </div>
      </div>

      <div className='flex4'>
        <span>Help? Call 0708 063 5700</span>
        <span>Copyright © 2025 Kxpress. All rights reserved</span>
      </div>

    </div>
  )
}

export default TrackOrder
