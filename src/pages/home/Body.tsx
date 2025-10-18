import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/Store'
import { useSearchParams } from 'react-router-dom'
import { products } from '../../assets/products/Products'
import { normalize } from '../../utility/helpers/normalize'
import "../../styles/children/homeStyle/body.css"
import { Link } from 'react-router-dom'
import AdComponent from '../../assets/ads/AdComponent'
import { categories } from '../../assets/categories/Categories'
import adDiaper from '../../assets/images/ads/adult diaper.jpg'
import ProductCard from '../../components/ui/ProductCard'
import { Toast, ToastContainer } from 'react-bootstrap'


const Body = () => {
  const hovered = useSelector((state: RootState) => state.hovered.value)
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const subParam = searchParams.get('sub')
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('');

  const byCategory = categoryParam
    ? products.filter(p => normalize(p.category) === normalize(categoryParam))
    : []

  const bySub = subParam
    ? byCategory?.filter(
      p =>
        normalize(p.category) === normalize(categoryParam) && normalize(subParam) === normalize(p.subType) // ensure same parent category
    )
    : byCategory

  const filtered = bySub
  if (hovered) return null
  if (filtered.length === 0) return <h1 style={{ paddingTop: '230px' }}>No Products Found</h1>
  return (
    <>
      <div className='cont'>
        <div className='header'>
          <div className='f-btw'>
            <div className='h-btns'>
              <Link to="/" className='h-btn'>Home</Link>&nbsp;{">"}<button className='h-btn red' disabled>{categoryParam && categoryParam}</button>{subParam && '>'}<button className='h-btn red' disabled>{subParam && subParam}</button>
            </div>
            <span style={{ fontSize: "11px", color: 'gray' }}>1-40 of 2000 results</span>
          </div>

          <div className='f-btw'>
            <h2 style={{ fontWeight: "bold" }}>{categoryParam && categoryParam}</h2>

            <span style={{ display: 'flex', alignItems: 'center' }}>
              <span className='sortby'>Sort by: </span> &nbsp; &nbsp;
              <div className='sortby-flex'>
                <button>Relevance</button>
                <button>Price - High To Low</button>
                <button>price-Low To High</button>
              </div>
            </span>

          </div>
        </div>


        <div className='body'>
          <div className='body-side'>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'baseline', marginBottom: '10px' }}>
              <h6 style={{ fontWeight: "bold" }}>Browse Categories</h6>  <span style={{ fontWeight: 'bold' }}>{'--'}</span>
            </div>

            <div className='side-1'>
              <button>Yakata</button>
              <button>Deals</button> <button>Bulk Products</button>
              <button>Samsung Specials</button>
              <button>Naija Brand</button>
              <button>Drinks & Groceries</button>
              {categories.map((cat) => {
                return <button key={cat.key}>{cat.label}</button>
              })}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'baseline', marginBottom: '10px', marginTop: '20px' }}>
              <h6 style={{ fontWeight: "bold" }}>Price</h6>  <span style={{ fontWeight: 'bold' }}>{'--'}</span>
            </div>

            <div>
              {priceFilters.map((check) => {
                return <label key={check.id} style={{ display: 'block' }}>
                  <input name='price' type='radio' />
                  &nbsp; <span style={{ fontSize: '12px' }}>{check.label}</span>
                </label>
              })}
            </div>

          </div>

          <div className='body-main'>
            <div className='ads'>
              <div className='ads-content'>
                <img src={adDiaper} alt='diaper' /> <h3 style={{ fontWeight: "bold" }}>adult diaper factory</h3> <button>Open</button>
              </div>
            </div>

            <ProductCard filtProd={filtered} setShowToast={setShowToast} setToastMessage={setToastMessage}/>
          </div>
        </div>
      </div >
      <ToastContainer position="bottom-start" className="p-3" style={{ zIndex: '9999', position: 'fixed'}}>
        <Toast show={showToast} onClose={() => setShowToast(false)} bg='success' delay={4000} autohide>
          <Toast.Body style={{ color: "white", marginLeft: "10px", opacity: "1" }}>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}


export default Body

export const priceFilters = [
  { id: 1, label: "Under ₦2000", min: 0, max: 2000 },
  { id: 2, label: "₦2000 to ₦5000", min: 2000, max: 5000 },
  { id: 3, label: "₦5000 to ₦1000", min: 5000, max: 10000 },
  { id: 4, label: "₦1000 to ₦0000", min: 10000, max: 20000 },
];



