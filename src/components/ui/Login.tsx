import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { Link } from 'react-router-dom';
import '../../styles/children/login.css'
import google from '../../assets/images/brands/googletxt.jpg'
import { loggedIn, loggedout } from '../../store/user/userSlice';

type FormValues = {
    email: string,
    password: string
}

const Login = () => {
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm<FormValues>()
    const [showPswd, setShowPswd] = useState(false)
    const onSubmit = (data: FormValues) => {
        dispatch(loggedIn(data))
        alert(`${data.email} is logged in`)
    }

    const handleLogInWithGoogleBtn = () => {
        setTimeout(() => {
            dispatch(loggedIn(null));
        }, 1000);
        alert('you are loggedIn')
    }
    return (
        <div className='modalBody-login'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-col'>
                    {/* Email */}
                    <label htmlFor='email'>Email Address or Phone Number</label>
                    <input type='email' id='email' placeholder='Enter Email Address OR Phone Number' className={`text-input ${errors.email?.message ? 'errorBorder' : ''}`}
                        {...register('email', {
                            required: 'Email is Required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid Format'
                            }
                        })}

                    />
                    {errors.email?.message && <p className='error'>{errors.email?.message}</p>}

                    {/* Password */}
                    <div className='label-splitter'>
                        <label htmlFor='password'>Password</label>
                        <Link to='/forgotPswd' className='forgot-pswd'>Forgot Password?</Link>
                    </div>

                    <input type={showPswd ? 'text' : 'password'} id='password' placeholder='Enter Password' className={`text-input ${errors.password?.message ? 'errorBorder' : ''}`}
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters'
                            }
                        })} />
                    {errors.password?.message && <p className='error'>{errors.password?.message}</p>}
                </div>

                <button type='submit' className='submitBtn'>Login</button>
            </form >

            <div className="text">
                <span>OR</span>
            </div>

            <div className='loginWithGoogle-divider'>
                <button className='LoginBrowsweBtn' onClick={handleLogInWithGoogleBtn}> Login  with Google</button>
                <button className='LoginBrowsweBtn'>Login with Apple</button>
            </div>


            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
                <Link to='/forgotPswd' className='dontHaveAcctBtn'>Don't have an account? Sign Up</Link>

            </div>

        </div >
    )
}

export default Login
