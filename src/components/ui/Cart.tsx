import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from '../../store/Store'
import '../../styles/children/homeStyle/cart.css'
import { CartItem, removeItem, updateQuantity } from '../../store/cartitems/cartSlice'
import { Toast, ToastContainer } from 'react-bootstrap'
import { ProductType } from '../../assets/products/productType'

const Cart = () => {
    const cartItems = useSelector((state: RootState) => state?.cartItems?.value)
    const dispatch = useDispatch<AppDispatch>()
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('');

    const handleRemoveItem = (id: number | string) => {
        dispatch(removeItem(id))
        setShowToast(true)
        setToastMessage('Product successfully removed from your cart')
    }

    const subtotal = cartItems.reduce((acc, p) => {
        const price = p.discount ? Math.ceil((p.price - (p.price * p.discount) / 100) * p.quantity) : p.price * p.quantity
        return acc + price
    }, 0)

    return (
        <>
            <div className='cart-cont'>
                <div className='cart-cont2'>
                    {cartItems?.length === 0 && <h2 style={{paddingLeft:'40px',paddingTop:'180px', color:''}}>Your Cart is Empty</h2>}
                    {cartItems?.map((p: CartItem, i: number) => (
                        <div key={`${p.id}-${i}`} className='product'>
                            <div className='product2'>
                                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                    <img src={p.img} alt='cart Image' />
                                    <div style={{ display: 'flex', flexDirection: "column", gap: "10px" }}>
                                        <span>{p?.name && p.name}</span>
                                        <span className='price'>₦{p.discount
                                            ? Math.ceil((p.price - (p.price * p.discount) / 100) * p.quantity).toLocaleString()
                                            : (p.price * p.quantity).toLocaleString()}</span>
                                    </div>
                                </div>
                                <hr style={{ opacity: '0.1', margin: '10px 0px 0px 0px' }} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div className='count'>
                                        <button onClick={() => dispatch(updateQuantity({ id: p.id, quantity: Math.max(p.quantity - 1, 1) }))}>-</button>
                                        <span>{p.quantity}</span>
                                        <button onClick={() => dispatch(updateQuantity({ id: p.id, quantity: p.quantity + 1 }))}>+</button>
                                    </div>
                                    <div className='prodDel'>
                                        <button className='savDel-btn'>❤️ Save Later</button>
                                        <button className='savDel-btn' onClick={() => handleRemoveItem(p.id)}>x Remove Item</button>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ color: 'rgba(0, 0, 0, 0.2)' }} />

                        </div>
                    ))}
                </div>
                <div className='checkout-container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className='subtotal'>Subtotal</span>
                        <span className='subtotalPrice'>₦{subtotal.toLocaleString()}</span>
                    </div>
                    <button className='checkout'>Checkout</button>
                </div>
            </div>

            <ToastContainer position="top-start" className="p-3" style={{ zIndex: 9999 }}>
                <Toast show={showToast} onClose={() => setShowToast(false)} style={{ backgroundColor: 'lavender' }} delay={4000} autohide>
                    <Toast.Body style={{ color: "black", marginLeft: "10px", opacity: "0.9" }}>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default Cart
