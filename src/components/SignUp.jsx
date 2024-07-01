import React from 'react'
import SignUplogo from './SignUplogo'
import './SignUp.css'

export default function SignUp() {
  return (
    <div className="d-flex align-items-center">
      <div className="logo">
        <SignUplogo />
      </div>
      <div className="details text-white ms-3">
        <p className='h1'>Happening now</p> <br /> <br />
        <h1>Join today</h1> <br />
        <button className='button1 btn btn-light rounded-pill my-2'>Sign up with Google</button>
        <button className='button1 btn btn-light rounded-pill '>Sign up with Apple</button><br />
        <div className="box"></div>
        <p className='or'>or</p>
        <div className="box"></div>
        <button className='button2 btn btn-primary rounded-pill my-3'>Create account</button>
        <p className='small'>By signing up, you agree to the <a href="">Terms of Service</a> and</p>
        <p className='small'><a href="">Privacy Policy</a>, including <a href="">Cookie Use.</a></p><br />
        <h5>Already have an account?</h5>
        <button className='button3 text-primary rounded-pill'>Sign In</button>
      </div>
    </div>
  )
}
