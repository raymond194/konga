import React, { useEffect, useState } from 'react'
import '../../styles/children/homeStyle/header.css'
import ktravels from '../../assets/images/brands/ktravels.jpg'
import kongapay from '../../assets/images/brands/kongapay.jpg'
import kongadrinks from '../../assets/images/brands/kongadrinks.jpg'
import kongahealth from '../../assets/images/brands/kongahealth.jpg'
import logistics from '../../assets/images/brands/logistics.jpg'
import groceries from '../../assets/images/brands/groceries.jpg'
import kongatv from '../../assets/images/brands/kongatv.jpg'
import konganow from '../../assets/images/brands/konganow.jpg'
import kongabrand from '../../assets/images/brands/kongabrand.jpg'
import { href } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import { ArrowLeft, Car, LogIn, Pointer } from 'lucide-react';
import { Store } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { CircleQuestionMark } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import Modal from '../../components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/Store'
import Login from '../../components/ui/Login'
import { UserRound } from 'lucide-react';
import { CalendarArrowDown } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { MapPinCheckInside } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { loggedIn, loggedout } from '../../store/user/userSlice'
import { Menu } from 'lucide-react';
import path from 'path'
import { categories } from '../../assets/categories/Categories'
import Navbar from './Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import Cart from '../../components/ui/Cart'
import { products } from '../../assets/products/Products'
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [search, setSearch] = useState('');
  const [loginModal, setLoginModal] = useState(false);
  const [cart, setCart] = useState(false)
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const dispatch2 = useDispatch<AppDispatch>()
  const cartItems = useSelector((state: RootState) => state.cartItems.value)

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isHome = pathname === '/'
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  //search
  const filtSuggest = search ?
    products.filter((p) => p.name.trim().toLowerCase().includes(search.trim().toLowerCase())).slice(0, 5) :
    []
  const onSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!search.trim()) return
    navigate(`/products?search=${encodeURIComponent(search)}`)
    setSearch('')
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSuggBtn = (name: string) => {
    navigate(`/products?search=${encodeURIComponent(name)}`)
    setSearch('')
  }

  const handleLoginModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoginModal(true)
  }

  const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  const handleLogOutBtn = (e: React.MouseEvent<HTMLButtonElement>) => {

    dispatch(loggedout(null));
    alert('you are loggedOut')
    setLoginModal(false)
  }

  // useEffect(() => {
  //   console.log(window.innerWidth)
  // }, [])
  return (
    <>
      <div className='h1-cont'>
        {adsImg.map((ads, i) => {
          return (
            <Link to='/' key={ads}>
              <img src={ads} alt='Konga All in All Campaign' className={i === 0 ? "h1-desktopImg" : "h1-mobileImg"} />
            </Link>
          )
        })}

        <div className='h2-brandLinks'>
          {brandLinks.map((brand, i) => {
            const isExternal = brand.href.startsWith("http");

            return isExternal ? (
              <a href={brand.href} key={`${brand.href}-${i}`} target="_blank" rel="noopener noreferrer" title={brand.alt} aria-label={brand.alt}>
                <img src={brand.src} alt={brand.alt} className='brand' />
              </a>
            ) : (
              <Link to='/' key={`${brand.href}-${i}`} title={brand.alt} aria-label={brand.alt}>
                <img src={brand.src} className='brand' />
              </Link>
            )
          })}
        </div>

        {/* BUTTONS FOR MOBILE SCREEN */}
        <div className='nav-sm-screen'>
          {isHome ? (
            <button className='nav-sm-menuBtn'><Menu size={22} /></button>
          )
            : (
              <button className='nav-sm-menuBtn' onClick={() => navigate(-1)}><ArrowLeft size={22} /></button>
            )}

          <div className='nav-sm-screenInner'>
            <Link to='/' className='nav-sm-screenIcon'><Store size={22} cursor='pointer' /></Link>

            <Link to='/' className='nav-sm-screenIcon'> <ShoppingCart size={22} cursor='pointer' /></Link>
          </div>
        </div>

        <div className='h3-quickLinks'>
          <Link to='/' title='konga' aria-label={'konga'}>
            <img src={kongabrand} alt='konga' className='kongaLogo' />
          </Link>

          <Link to='/' title='store Locator' aria-label='store Locator' className='quickLinks-link disappear1'>
            Store Locator
          </Link>

          <Link to='/' title='Sell on Konga' aria-label='Sell on Konga' className='quickLinks-link disappear1'>
            Sell on Konga
          </Link>

          <div style={{ position: 'relative', width: '650px' }}>
            <form onSubmit={onSubmit1} style={{ width: '545px', display: 'flex', zIndex: '10', position: 'relative' }}>
              <input type='text' value={search} onChange={handleSearch} className='search-input1' placeholder='Search for products, brands and categories...' />
              <button type='submit' className='search-icon1'><Search size={16} style={{ paddingBottom: '4px' }} /></button>
            </form>

            <AnimatePresence>
              {search && (
                <>
                  <motion.div
                    className="backdrop"
                    onClick={() => setSearch('')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />

                  <motion.div
                    className="suggestionBox"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {filtSuggest.length > 0 ? (
                      <>
                        <h4>SUGGESTIONS</h4>
                        <div>
                          {filtSuggest.map((sugg, i) => (
                            <button
                              key={`${sugg.id}-${i}`}
                              onClick={() => handleSuggBtn(sugg.name)}
                            >
                              {sugg.name.toLowerCase()}
                            </button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <h4>{(`no result found for ${search}`).toUpperCase()}</h4>
                    )}
                  </motion.div>
                </>
              )}
            </AnimatePresence>

          </div>


          <div className='help' >
            <Link to='/' className='help-link' title='help' aria-label='help'>
              <CircleQuestionMark size={20} />&nbsp;Help&nbsp;<ChevronDown size={17} />
            </Link>

            <div className='helpDropdown' >
              <Link to='/' className='helpDropd-link'>Help Centre</Link>
              <Link to='/' className='helpDropd-link'>Contact Us</Link>
              <Link to='/trackMyOrder' className='helpDropd-link'>Track my Order</Link>
              <Link to='' className='helpDropd-link'>Konga Return Policy</Link>
              <Link to='' className='helpDropd-link'>FAQs</Link>
              <Link to='' className='helpDropd-link'>Store Locator</Link>
              <Link to='' className='helpDropd-link'>Sell on Konga</Link>
            </div>
          </div>


          {/* USERLOGIN|| USERACCT*/}
          {user?.isLoggedIn ?
            <div className='help'>
              <Link to='/' className='help-link' style={{ whiteSpace: 'nowrap', zIndex: '9999' }} title='myAccount' aria-label='myAccount'>
                My Account
              </Link>

              <div className='helpDropdown'>
                <p>Hi Raymond</p>
                <Link to='/' className='myAcctDropdown-link'>
                  <UserRound size={16} /> <span>My Profile</span>
                </Link>
                <Link to='/' className='myAcctDropdown-link'>
                  <CalendarArrowDown size={16} /> <span>My Orders</span>
                </Link>
                <Link to='/' className='myAcctDropdown-link'>
                  <Heart size={16} /> <span>My Saved Items</span>
                </Link>
                <Link to='/' className='myAcctDropdown-link'>
                  <Wallet size={16} /> <span>My Wallet</span>
                </Link>
                <Link to='/trackMyOrder' className='myAcctDropdown-link'>
                  <MapPinCheckInside size={17} /> <span>Track My Order</span>
                </Link>
                <button className='myAcctDropdown-link logOut' onClick={handleLogOutBtn}>
                  <LogOut size={16} /> <span>Log Out</span>
                </button>
              </div>
            </div>
            :
            (
              <>
                <button className='loginSignup' onClick={handleLoginModal}>
                  Login / Signup
                </button>

                <Modal isOpen={loginModal} onClose={() => setLoginModal(false)} >
                  <Login />
                </Modal>
              </>
            )
          }

          <button className='add2cart-btn' onClick={() => setCart(true)}>
            <ShoppingCart size={17} /> <span style={{ fontSize: '13px' }}>My Cart</span>&nbsp; <span className='product-count1'>{cartItems.length}</span>
          </button>

        </div>
        {/* Navbar Section */}
        <Navbar />
      </div >

      <Modal isOpen={cart} onClose={() => setCart(false)} title='Cart Overview'>
        <Cart />
      </Modal>
    </>
  )
}

const adsImg = [
  "https://www-konga-com-res.cloudinary.com/image/upload/v1756726456/contentservice/STRIP%20all-in-all.gif_0sLdL0dhI.gif",
  "https://www-konga-com-res.cloudinary.com/image/upload/v1756726456/contentservice/MOBILE%20STRIP%20all-in-all.gif_4FU-6feFS.gif"
]

const brandLinks = [
  { src: ktravels, alt: 'ktravels', href: 'https://travel.konga.com/' },
  { src: kongapay, alt: 'kongapay', href: 'https://www.kongapay.com' },
  { src: kongadrinks, alt: 'kongadrinks', href: 'https://corporate.konga.com/' },
  { src: kongahealth, alt: 'kongahealth', href: 'https://www.konga.com/content/Health' },
  { src: logistics, alt: 'logistics', href: 'https://logistics.konga.com' },
  { src: groceries, alt: 'groceries', href: '/' },
  { src: kongatv, alt: 'kongatv', href: 'https://kongatv.com/' },
  { src: konganow, alt: 'konganow', href: '/' },
]

export default Header

