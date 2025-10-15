import React, { useState } from 'react'
import { ProductType } from '../../assets/products/productType'
import '../../styles/children/homeStyle/productcard.css'
import { products } from '../../assets/products/Products'
import kongaNow from '../../assets/images/kongNow.svg'
import Stars from '../Stars'
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from '../../store/Store'
import { addItem } from '../../store/cartitems/cartSlice'
import { Modal } from 'react-bootstrap'

type ProductCardProp = {
    filtProd: ProductType[]
}


const ProductCard = ({ filtProd }: ProductCardProp) => {
    const dispatch = useDispatch<AppDispatch>()
    const cartItems = useSelector((state: RootState) => state.cartItems.value)
    const sponsored = products.filter((prod) => prod.sponsored)
    const handleAddToCartBtn = (p: ProductType) => {
        dispatch(addItem(p))
    }

    return (
        <>
            <div className='sponsored'>
                {sponsored.map((spons, i) => (
                    <div className='sp-card' key={`${spons.id}-${i}`}>
                        <div className='rating-div'>
                            {spons?.discount && <span> - {spons.discount}%</span>}
                        </div>

                        <div style={{ display: 'flex', flexDirection: "column", gap: "8px", padding: '0px 10px' }}>
                            <img src={spons.img} alt='sponsored img ' className={`sponsImg ${spons.discount ? '' : 'extra'}`} />

                            <p className='sponsName'>{spons.name}</p>

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
                                <p style={{ margin: '0px', padding: "0px", fontWeight: 'bold', fontSize: "18px" }}>
                                    ₦{spons.discount
                                        ? Math.ceil(spons.price - (spons.price * spons.discount) / 100).toLocaleString()
                                        : spons.price.toLocaleString()}
                                </p>

                                <p style={{ margin: '0px', padding: '0px', fontWeight: '400', opacity: '0.8', textDecoration: 'line-through', fontSize: "14px" }}>
                                    {spons?.discount && '₦'}{spons?.discount && spons?.price}
                                </p>
                            </div>
                            {spons.discount && <span className='sponsDiscount'>- {spons.discount}%</span>}
                            {spons.discount && <span style={{ color: '#207f55', fontWeight: '500', fontSize: '12px' }}>{`You save ₦${((spons.price * spons.discount) / 100).toLocaleString()}`}</span>}
                            <span style={{ opacity: '0.6', fontSize: '11.5px' }}>Sponsored O</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className='products'>
                {filtProd.map((p, i) => (
                    <div key={`${p.id}-${i}`} className='prod-card'>
                        <span className='kongaNow'><img src={kongaNow} alt='kongaNow' /> <span style={{ fontSize: '20px', opacity: "0.5" }}>♡</span>
                        </span>

                        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginBottom: '10px' }}>
                            <img src={p.img} className='prod-img' />
                        </div>

                        <div style={{ padding: '0px 10px', display: 'flex', flexDirection: 'column' }}>
                            <p className='prod-name'>{p.name}</p>

                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', alignItems: 'center', marginBottom: '26px' }}>
                                <p style={{ margin: '0px', padding: "0px", fontWeight: 'bold', fontSize: "18px" }}>
                                    ₦{p.discount
                                        ? Math.ceil(p.price - (p.price * p.discount) / 100).toLocaleString()
                                        : p.price.toLocaleString()}
                                </p>

                                <p style={{ margin: '0px', padding: '0px', fontWeight: '400', opacity: '0.8', textDecoration: 'line-through', fontSize: "14.5px" }}>
                                    {p?.discount && '₦'}{p?.discount && p?.price}
                                </p>

                                {p.discount && <span className='prodDiscount'>- {p.discount}%</span>}
                            </div>
                            <span style={{ color: '#ed017f', fontSize: '.6875rem', fontWeight: '500', marginBottom: '4px', display: 'block', }}>{p.sameDay && p.sameDay}</span>

                            <span style={{ color: '#644ba0', fontSize: '12px' }}>Sold by {p.soldBy && <span style={{ fontWeight: '500' }}>{p.soldBy}</span>}</span>

                            <div style={{ display: "flex", alignItems: 'center', gap: '4px' }}>
                                <Stars rating={p.rating} /> <span style={{ fontSize: '.75rem', color: '#585858' }}>{p.reviewCount ? p.reviewCount : "No"} Reviews {p.reviewCount ? "" : 'yet'}</span>
                            </div>

                            <button className="add2cart" style={{ marginTop: p.sameDay ? '' : '20px' }} onClick={() => handleAddToCartBtn(p)}>Add To Cart</button>
                        </div>

                    </div>
                ))}
            </div >

        </>
    )
}

export default ProductCard

