import React, { useEffect } from 'react'
import {  onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  {addUser,removeUser} from "../utils/UserSlice"
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/GptSlice';
import { SUPPORTED_LANG } from '../utils/constants';
import { changeLanguage } from '../utils/ConfigSlice';

const Header = () => {
  const navigate=useNavigate();
  const user = useSelector(store=>store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  const dispatch =useDispatch();

 
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }


  useEffect(()=>{
     const unsubcribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid ,email , displayName , photoURL} = user;
          dispatch(addUser({
            uid :uid , 
            email:email , 
            displayName:displayName, 
            photoURL:photoURL,
          })
        );

          navigate ("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });
      
      return ()=>unsubcribe();
    },[])

    const handleGptSearch=()=>{
      dispatch(toggleGptSearchView());
    }

    const handleLanguagebutton=(e)=>{
      dispatch(changeLanguage(e.target.value));
    }

    return (
      <div className="justify-between flex w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-44" src={LOGO} alt="logo" />
    
        {user && (
          <div className="flex p-2">
            { showGptSearch && (<select className='p-2 m-2 mb-4 bg-gray-900 text-white rounded-lg ' onChange={handleLanguagebutton}>
              {SUPPORTED_LANG.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
            </select>)}
            <button className="bg-purple-800  mb-4 text-white px-4 mx-4 my-2 rounded-lg" 
            onClick={handleGptSearch}>
              {showGptSearch ? "HomePage" : "GPTSearch"}
            </button>
            
            {/* Wrap profile image in a separate div with group */}
            <div className="relative group">
              <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="profile-img" />
              
              <button 
                onClick={handleSignOut} 
                className="my-1 absolute w-max top-12 left-0 bg-red-700 rounded-lg px-4 py-2 hover:underline opacity-0 group-hover:opacity-100 transition duration-300 font-bold text-white"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    );
    
}

export default Header
