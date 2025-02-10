import React, { useState } from 'react'

const Login = () => {
  const [currentState,setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) =>{
    event.preventDefault()
  }

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 text-gray-800' onSubmit={()=>onSubmitHandler()} >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
     {currentState === 'Sign Up' ? <input className='px-3 py-2 my-3 border border-gray-800 w-full' required type='text' placeholder='Name'/> : <></>} 
      <input className='px-3 py-2 my-3 border border-gray-800 w-full' required type='email' placeholder='Email'/>
      <input className='px-3 py-2 my-3 border border-gray-800 w-full' required type='password' placeholder='Password'/>

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Your Password ?</p>
        {currentState === 'Login' ? <p className='cursor-pointer' onClick={()=>setCurrentState('Sign Up')}>Create Account</p> : <p className='cursor-pointer' onClick={()=>setCurrentState('Login')}>Login</p>}
      </div>
      <button className='bg-black text-white px-8 py-3 mt-2'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
