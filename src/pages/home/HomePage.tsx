import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/Store'
import { MonitorPlay } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { House } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Plane } from 'lucide-react';
import { TvMinimalPlay } from 'lucide-react';
import '../../styles/children/homeStyle/homepage.css'
import { products } from '../../assets/products/Products';
import { ToastBody } from 'react-bootstrap';
import Stars from '../../components/Stars'
import kongaNow from '../../assets/images/kongNow.svg'
import lg from '../../assets/images/productimgs/Lenovo Thinkbook.jpg'
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import slide1 from '../../assets/images/brands/hotLady.webp'
import slide2 from '../../assets/images/brands/promo.gif'

const HomePage = () => {
  const hovered = useSelector((state: RootState) => state.hovered.value)

  const todayKey = new Date().toDateString();
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const todayProd = React.useMemo(() => {
    const seed = new Date().toDateString(); // changes daily
    let rng = seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0);

    // shuffle deterministically based on date
    const shuffled = [...products].sort(() => Math.sin(rng++) - 0.5);

    return shuffled.slice(0, 6); // show 6 products
  }, [products, todayKey]);

  const sponsored = useMemo(() => {
    const s = products.filter(p => p.sponsored)
    return s.sort(() => Math.random() - 0.5)
  }, [searchParams.toString()])

  const sameDay = useMemo(() => {
    const sameDayProd = products.filter(p => p.sameDay)
    return sameDayProd.sort(() => Math.random() - 0.5)
  }, [searchParams])

  const handleBrandClick = (brand: string) => {
    navigate(`/products?brand=${encodeURIComponent(brand)}`)
  }

  if (hovered) return null

  return (
    <div className='contain'>
      <div className='extra1'>
        <div className='slide-images'>
          <img src={slide1} alt='slide-img' />
          <img src={slide2} alt='slide-img' />
        </div>
      </div>
      <div className='h1'>
        {homeLink1.map(item => (
          <a href={item.path} key={item.id} className='homeLinks1-cont'>
            <div className='homeLinks1'>
              {item.icon}
              <span>{item.text}</span>
            </div>
          </a>
        ))}
      </div>

      <div className='h2'>
        <div className='todayDeals-text'>
          <h1>Today's Deals</h1>
          <span>See All Items</span>
        </div>
        <div className='todayDeals-cont'>
          {todayProd.map((p, i) => (
            <div key={`${p.id}-${i}`} className='todayDeals-card'>
              <img src={p.img} alt='today-image' />
              <div className='todayDeals-desc'>
                <span>{p.name}</span>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
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
                {p.discount && <span className="youSave" style={{ color: '#207f55', fontWeight: '500', fontSize: '12px' }}>{`You save ₦${((p.price * p.discount) / 100).toLocaleString()}`}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>


      <h3 className='sponsored-text'>Sponsored Products</h3>

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

      {/* SAME DAY PRODUCTS */}
      <div style={{ backgroundColor: '#ffe9e9', display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', padding: '8px 60px 8px 0px', marginTop: '26px', marginBottom: '16px', overflowX: 'clip'}}>
        <div style={{ display: 'flex', gap: '30px' }}>
          <h5 style={{ fontWeight: '700', textWrap:'nowrap', fontSize: 'clamp(14px, 2vw, 20px)'}}>{`Same Day Delivery Lagos ${'('}Konga Now${')'}`}</h5>
          <span style={{ color: '#8b054d', fontWeight: '600', fontSize: '14px', textWrap:'nowrap' }} className='T_C'>See All Items</span>
        </div>
        <span style={{ color: '#8b054d', fontWeight: '600' }} className='T_C'>T & C Apply</span>

      </div>

      <div className='sameday-cont'>
        {sameDay.map((p, i) => (
          <div key={`${p.id}-${i}`} className='prod-card sameCard' >
            <span className='kongaNow'><img src={kongaNow} alt='kongaNow' /> <span style={{ fontSize: '20px', opacity: "0.5" }}>♡</span>
            </span>

            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginBottom: '10px' }}>
              <img src={p.img} className='prod-img' style={{ width: '150px' }} />
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
              {p.discount && <span style={{ color: '#207f55', fontWeight: '500', fontSize: '12px' }}>{`You save ₦${((p.price * p.discount) / 100).toLocaleString()}`}</span>}
              <span style={{ color: '#ed017f', fontSize: '.6875rem', fontWeight: '500', marginBottom: '4px', display: 'block', }}>{p.sameDay && p.sameDay}</span>

              <span style={{ color: '#644ba0', fontSize: '12px' }}>Sold by {p.soldBy && <span style={{ fontWeight: '500' }}>{p.soldBy}</span>}</span>

              <div style={{ display: "flex", alignItems: 'center', gap: '4px' }}>
                <Stars rating={p.rating} />
              </div>
            </div>

          </div>
        ))}
      </div>
      <h3 className='officialStore'>Official Store</h3>

      {/* BRANDS */}

      <div className='brand-section'>
        {brandsLinks.map((p, i) => (
          <div className='brand-card' key={`${p.id}-${i}`} onClick={() => handleBrandClick(p.name)}>
            <h2>{p.name}</h2>
          </div>
        ))}
      </div>

      <div className='extra2'>
        <div className='slide-images' >
          <img src={slide1} alt='slide-img' />
          <img src={slide2} alt='slide-img' />
        </div>
      </div>
      <div style={{ marginTop: '50px', padding: '0px 14px 20px 14px' }} className='onlineShop'>
        <h5 style={{ fontWeight: 'bold', opacity: '0.8', marginBottom: '20px' }}>Konga Online Shopping in Nigeria - Best Shopping Site</h5>
        <span style={{ opacity: '0.7', fontSize: '14px' }}>Konga.com is Nigeria’s number one online Shopping destination.We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, <span style={{ color: 'ed017f' }}>Fashion</span>, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories include Food and drinks, automotive and industrial, books, musical equipment, babies and kids items, sports and fitness, to mention a few. To make your shopping experience swift and memorable, there are also added services like gift vouchers, consumer promotion activities across different categories and bulk purchases with hassle-free delivery. Enjoy free shipping rates for certain products and with the bulk purchase option, you can enjoy low shipping rates, discounted prices and flexible payment. When you shop on our platform, you can pay with your debit card or via KongaPay, which is a convenient and secured payment solution. Get the best of lifestyle services online. Don't miss out on the biggest sales online which takes place on special dates yearly. Don't miss out on our <span style={{ color: '#ed017f' }}> Valentine 2025.</span> <span style={{ color: '#0072CE' }}>Buy CeraVe Facial Cleansers, CeraVe Skin Care, CeraVe Moisturizers</span>, and more original <span style={{ color: '#ed017f' }}>Cerave</span> & <span style={{ color: '#ed017f' }}>Garnier Products </span> in Nigeria</span>
      </div>
    </div >

  )
}

const homeLink1 = [
  {
    id: 1,
    icon: <MonitorPlay size={14} className='icons1' />,
    path: 'https://blog.konga.com/',
    text: 'Konga Blog'
  },
  {
    id: 2,
    icon: <CreditCard size={14} className='icons1' />,
    path: 'https://www.kongapay.com/download',
    text: 'Pay Bills'
  },
  {
    id: 3,
    icon: <House size={14} className='icons1' />,
    path: 'https://www.konga.com/stores',
    text: 'Offline Stores'
  },
  {
    id: 4,
    icon: <ShoppingCart size={14} className='icons1' />,
    path: 'https://www.konga.com/content/nowonkonga',
    text: 'Brand Stores'
  },
  {
    id: 5,
    icon: <Plane size={14} className='icons1' />,
    path: 'https://travel.konga.com/',
    text: 'Book Flights'
  },

  {
    id: 6,
    icon: <TvMinimalPlay size={14} className='icons1' />,
    path: 'https://kongatv.com/',
    text: 'Watch KongaTV'
  }
]

const brandsLinks = [
  { name: 'TECNO', id: 1 },
  { name: 'HP', id: 2 },
  { name: 'STARLINK', id: 3 },
  { name: 'ZINOX', id: 4 },
  { name: 'ZTE', id: 5 },
  { name: 'INFINIX', id: 6 },
  { name: 'THERMOCOOL', id: 7 },
  { name: 'HUAWEI', id: 8 },
  { name: 'XIAOMI', id: 9 },
  { name: 'LG', id: 10 },
  { name: 'TGI', id: 11 },
  { name: 'INTEL', id: 12 },

]
export default HomePage
