
import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { addUser } from '../utils/UserSlice';
import { useDispatch } from 'react-redux';
import { LOGIN_PAGE_BG_IMG, PROFILE } from '../utils/constants';

const Login = () => {

 
  const dispatch =useDispatch();

 const[isSignIn ,setIsSignIn]=useState(true);
 const email =useRef(null);
 const password = useRef(null);
 const username =useRef(null);
 const [errorMessage ,setErrorMessage]=useState(null);

 const handlebuttonclick=()=>{
   // validate the form
 
  

   const message= validate(email.current.value,password.current.value);
   setErrorMessage(message);
   if(message) return;

   if (!isSignIn){
      //sign up logic
      
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {displayName: username.current.value , photoURL:PROFILE
    }).then(() => {
      // Profile updated!
       const {uid ,email , displayName , photoURL} = auth.currentUser;
       dispatch(addUser({uid :uid , email:email , displayName:displayName, photoURL:photoURL})); 
      //  navigate("/browse");
      // ...
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message);
      // ...
    });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
    
    // ..
  });
   }


   else{
      //sign in logic
      
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });


   }
 }

 const toggleLoginForm=()=>{
    setIsSignIn(!isSignIn);
 }

  return (
    <div>
     <Header/> 
     <div className='w-screen absolute'>
        <img className=' w-full' src={LOGIN_PAGE_BG_IMG} alt="mainbg" />
     </div>
     <form onSubmit={(e)=>e.preventDefault()} className=' p-12 w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg  text-white '>
        <h1 className='text-white font-bold text-3xl '>{isSignIn? "Sign In": "Sign Up"}</h1>
        {!isSignIn &&<input ref={username} type="text" placeholder='UserName' className='p-4 my-4 w-full bg-gray-800 '/> }
        <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800 '/>
        <input  ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800 '/>
        <p className=' text-red-600 '>{errorMessage}</p>
        <button onClick={handlebuttonclick} className='w-full bg-red-700 py-4 my-6 text-xl rounded-lg'>{isSignIn? "Sign In": "Sign Up"} </button>
        <p className='py-4 w-max cursor-pointer  ' onClick={toggleLoginForm}>{isSignIn? "New to  Netflix ? Sign Up": "Already Have Acc ? Sign In"}</p>
     </form>
    </div>
  )
}

export default Login