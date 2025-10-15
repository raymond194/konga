import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from '../../store/Store'

const Cart = () => {
    const cartItems = useSelector((state: RootState) => state.cartItems.value)
    return (
        <>
        {cartItems.map((p) => {
            return<p style={{color: 'white', backgroundColor: 'red'}}>{p.name}</p>
        })}
        </>
    )
}

export default Cart
