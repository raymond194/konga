import React from 'react'
import '../../styles/children/homeStyle/footer.css'
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';
import { X } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';


const Footer = () => {
    const user = useSelector((state: RootState) => state.user)
    return (
        <div className='footer'>
            <div className='footer1'>
                <div className='footer1-items1'>
                    <Mail size={28} className='footerIcon1' />
                    <div className='footer-items2'>
                        <h4>EMAIL SUPPORT</h4>
                        <span>help@konga.com</span>
                    </div>
                </div>

                <div className='footer1-items1'>
                    <Phone size={28} className='footerIcon1' />
                    <div className='footer-items2'>
                        <h4>PHONE SUPPORT</h4>
                        <span>07080635700, 02018883435</span>
                    </div>
                </div>

                <div className='footer1-items1'>
                    <Mail size={28} className='footerIcon1' />
                    <div className='footer-items2'>
                        <h4>WHATSAPP</h4>
                        <span>0907 0038 400, 0809 460 5555</span>
                    </div>
                </div>

                <div className='footer1-items1 smOff'>
                    <div className='footer-items2'>
                        <h4>GET LATEST DEALS</h4>
                        <span>Our best promotions sent to your inbox</span>
                    </div>
                </div>

                <div className="emailWrapper">
                    <input type='email' placeholder='Email Address' value={user.userInfo?.email} className='subscribeEmail' />
                    <button className='subscribeBtn'>Subscribe</button>
                </div>
            </div>

            <div className='footer2-cont'>
                <div className='footer2'>
                    <div className='footer2-items1'>
                        <div className='footer2-links'>
                            <h6 className='link-h6'>ABOUT KONGA</h6>
                            <Link to='/' className='footer2-link'>Contact us</Link>
                            <Link to='/' className='footer2-link'>About Us</Link>
                            <Link to='/' className='footer2-link'>Careers</Link>
                            <Link to='/' className='footer2-link'>Our Blog</Link>
                            <Link to='/' className='footer2-link'>Forum</Link>
                            <Link to='/' className='footer2-link'>Terms & Conditions</Link>
                        </div>

                        <div className='footer2-links'>
                            <h6 className='link-h6'>PAYMENT</h6>
                            <Link to='/' className='footer2-link'>KongaPay</Link>
                            <Link to='/' className='footer2-link'>Wallet</Link>
                            <Link to='/' className='footer2-link'>Verve</Link>
                            <Link to='/' className='footer2-link'>Mastercard</Link>
                            <Link to='/' className='footer2-link'>Visa</Link>
                        </div>


                        <div className='footer2-links'>
                            <h6 className='link-h6'>BUYING ON KONGA</h6>
                            <Link to='/' className='footer2-link'>Buyer Safety Centre</Link>
                            <Link to='/' className='footer2-link'>FAQs</Link>
                            <Link to='/' className='footer2-link'>Delivery</Link>
                            <Link to='/' className='footer2-link'>Konga Return Policy</Link>
                            <Link to='/' className='footer2-link'>Bulk Purchase</Link>
                        </div>


                        <div className='footer2-links'>
                            <h6 className='link-h6'>MORE INFO</h6>
                            <Link to='/' className='footer2-link'>Site Map</Link>
                            <Link to='/' className='footer2-link'>Track My Order</Link>
                            <Link to='/' className='footer2-link'>Provacy Policy</Link>
                            <Link to='/' className='footer2-link'>Authentic Items Policy</Link>
                        </div>

                        <div className='footer2-links'>
                            <h6 className='link-h6'>MAKE MONEY ON KONGA</h6>
                            <Link to='/' className='footer2-link'>Become a Konga Affiliate</Link>
                        </div>
                    </div>

                    <div className='footer2-items2'>
                        <div className='item2-row'>
                            <p>Download on <br /> <span>App Store</span></p>
                            <p>Download on <br /> <span>Google Play</span></p>
                        </div>

                        <div>
                            <p className='connectWithUs'>CONNECT WITH US</p>
                            <div className='footer-icons'>
                                <Facebook className='footer-icon' size={43.5} />
                                <X className='footer-icon' size={43.5} />
                                <Instagram className='footer-icon' size={43.5} />
                                <Youtube className='footer-icon' size={43.5} />
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

                <div className='text2'>
                    &nbsp;   Copyright © 2025 Konga.com. All rights reserved &nbsp;
                </div>
            </div>
        </div>
    )
}

export default Footer
