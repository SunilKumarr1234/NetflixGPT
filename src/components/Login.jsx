import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

 const[isSignIn ,setIsSignIn]=useState();

 const toggleLoginForm=()=>{
    setIsSignIn(!isSignIn);
 }

  return (
    <div>
     <Header/> 
     <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg" alt="mainbg" />
     </div>
     <form className=' p-12 w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg  text-white '>
        <h1 className='text-white font-bold text-3xl '>{isSignIn? "Sign In": "Sign Up"}</h1>
        {!isSignIn &&<input type="text" placeholder='UserName' className='p-4 my-4 w-full bg-gray-700 bg-opacity-75'/> }
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 bg-opacity-75'/>
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 bg-opacity-75'/>
        <button className='w-full bg-red-700 py-4 my-6 text-xl rounded-lg'>{isSignIn? "Sign In": "Sign Up"} </button>
        <p className='py-4 w-max cursor-pointer  ' onClick={toggleLoginForm}>{isSignIn? "New to  Netflix ? Sign Up": "Already Have Acc ? Sign In"}</p>
     </form>
    </div>
  )
}

export default Login
