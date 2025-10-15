import React from 'react'

const Stars = ({rating}: {rating:number | undefined}) => {
    const filledStars = rating
    const emptyStars = 5 - (filledStars ? filledStars : 0)
  return (
    <div style={{color: '#FFD700', fontSize: '18px'}}>
     {"★".repeat(filledStars? filledStars : 0)}<span style={{ color: "#ccc" }}>{"★".repeat(emptyStars)}</span> 
    </div>
  )
}

export default Stars
