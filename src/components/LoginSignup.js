import React, { useEffect, useState } from 'react'

import pic from '../images/rocket.svg'
import pic2 from '../images/desk.svg'

import '../App.css';
import { Link } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const getFormValues = () => {
    const storedValues = localStorage.getItem('form')
    if (!localStorage)
        return {
            email: '',
            userEvent: '',
            name: '',

        }
    return JSON.parse(storedValues)

}

const LoginSignup = () => {
    const [values, setValues] = useState(getFormValues)
    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(values))

    }, [values])




    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])

    useEffect(() => {

        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener('click', () => {
            container.classList.add("sign-up-mode");

        });
        sign_in_btn.addEventListener('click', () => {
            container.classList.remove("sign-up-mode");

        });
    })
    const inputField = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const passwordField = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    const submitForm = (e) => {
        e.preventDefaul()
        const newEntry = { email: email, password: password }

        setValues(setAllEntry([...allEntry, newEntry]))

    }



    return (
        <div>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">


                        <form action="" className="sign-up-form" name="contact" >
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" onChange={inputField} value={email} autoComplete="off" />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" value={password} onChange={passwordField} placeholder="Password" autoComplete='off' />
                            </div>
                            <Link type="submit" className=' btn solid change' to="/todo" >Sign up</Link>
                            <p className="social-text">Or Sign up with social platform</p>

                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>

                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>

                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>

                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                        <form action="" className="sign-in-form" name="contact" onSubmit={submitForm} >
                            <h2 className="title">Log in</h2>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" onChange={inputField} value={email} autoComplete="off" />

                            </div>

                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" value={password} onChange={passwordField} placeholder="Password" autoComplete='off' />
                            </div>
                            <Link type="submit" className=' btn solid change' to="/todo" >  Login</Link>

                            <p className="social-text">Or Sign in with social platform</p>

                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>

                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>

                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>

                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>





                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta, fugit doloremque neque nulla dolorem?</p>
                            <button className="btn transparent" id="sign-up-btn">Sign up </button>
                        </div>
                        <img src={pic} className="image" />

                    </div>

                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One Of Us?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta, fugit doloremque neque nulla dolorem?</p>
                            <button className="btn transparent" id="sign-in-btn">Sign in</button>
                        </div>
                        <img src={pic2} className="image" />

                    </div>
                </div>
            </div>

        </div >
    )
}

export default LoginSignup