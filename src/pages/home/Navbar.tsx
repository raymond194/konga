import React, { useEffect } from 'react'
import '../../styles/children/homeStyle/navbar.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { categories } from '../../assets/categories/Categories'
import { Hand, HandHelping } from 'lucide-react'
import { products } from '../../assets/products/Products'
import { AppDispatch, RootState } from '../../store/Store'
import { setHovered } from '../../store/hover/hoverSlice'

const Navbar = () => {
    const hovered = useSelector((state: RootState) => state.hovered.value)
    const dispatch = useDispatch<AppDispatch>()
    const subCat = categories.find((cat) => cat.key === hovered)
    const navigate = useNavigate()
    let hoverTimeout: NodeJS.Timeout;

    return (
        <>
            <div className="nav-bar">
                {/* Nav links */}
                <div className="nav-links">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            className="nav-link"
                            onMouseEnter={() => {
                                hoverTimeout = setTimeout(() => {
                                    dispatch(setHovered(cat.key))
                                }, 400)
                            }}
                            onMouseLeave={() => {
                                clearTimeout(hoverTimeout)
                                dispatch(setHovered(null))
                            }}
                            onClick={() => {
                                navigate(`/products?category=${cat.key}`)
                                dispatch(setHovered(null))
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* ONE dropdown, controlled by state */}
                {hovered && (
                    <div
                        className="dropdown"
                        onMouseEnter={() => dispatch(setHovered(hovered))}
                        onMouseLeave={() => dispatch(setHovered(null))}
                    >
                        <div className="dropdown-inner">
                            {subCat && subCat.subs?.map((sub) => (
                                <div key={sub.label} className='sub-categories'>
                                    <h1>{sub?.label}</h1>
                                    {sub?.items.map((item) => {
                                        return <button key={item} onClick={() => {
                                            navigate(`/products?category=${subCat.key}&sub=${encodeURIComponent(item)}`)
                                            dispatch(setHovered(null))
                                        }} className='item'>{item}</button>
                                    })}
                                </div>
                            ))}

                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar
