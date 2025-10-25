import React, { useEffect, useRef } from 'react'
import '../../styles/children/homeStyle/navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { categories } from '../../assets/categories/Categories'
import { AppDispatch, RootState } from '../../store/Store'
import { setHovered } from '../../store/hover/hoverSlice'

const Navbar = () => {
    const hovered = useSelector((state: RootState) => state.hovered.value) // string | null
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    // keep timer stable across renders
    const hoverTimerRef = useRef<number | null>(null)

    // helper to clear timer
    const clearHoverTimer = () => {
        if (hoverTimerRef.current) {
            clearTimeout(hoverTimerRef.current)
            hoverTimerRef.current = null
        }
    }

    // on nav link enter: check window width and act accordingly
    const handleNavMouseEnter = (key: string) => {
        clearHoverTimer()

        // if small screen, ensure hovered is null (no dropdown)
        if (typeof window !== 'undefined' && window.innerWidth <= 600) {
            dispatch(setHovered(null))
            return
        }

        // otherwise (wide screen) delay showing dropdown slightly
        hoverTimerRef.current = window.setTimeout(() => {
            dispatch(setHovered(key))
            hoverTimerRef.current = null
        }, 250) // small delay to avoid accidental hovers
    }

    // on nav link leave: cancel timer and hide dropdown
    const handleNavMouseLeave = () => {
        clearHoverTimer()
        dispatch(setHovered(null))
    }

    // dropdown enter: keep it open (re-affirm hovered)
    const handleDropdownEnter = () => {
        // noop if hovered already set; re-affirm to be safe
        if (hovered) dispatch(setHovered(hovered))
    }

    // dropdown leave: hide
    const handleDropdownLeave = () => {
        dispatch(setHovered(null))
    }

    return (
        <div className="nav-bar">
            <div className="nav-links">
                {categories.map((cat) => (
                    <button
                        key={cat.key}
                        className="nav-link"
                        onMouseEnter={() => handleNavMouseEnter(cat.key)}
                        onMouseLeave={handleNavMouseLeave}
                        onClick={() => {
                            navigate(`/products?category=${cat.key}`)
                            dispatch(setHovered(null))
                        }}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Render dropdown only when hovered is set (we ensure hovered is null on small screens) */}
            {hovered && (
                <div
                    className="dropdown"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                >
                    <div className="dropdown-inner">
                        {categories.find((c) => c.key === hovered)?.subs?.map((sub) => (
                            <div key={sub.label} className="sub-categories">
                                <h1>{sub.label}</h1>
                                {sub.items.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            navigate(`/products?category=${hovered}&sub=${encodeURIComponent(item)}`)
                                            dispatch(setHovered(null))
                                        }}
                                        className="item"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar