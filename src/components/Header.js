import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';



const Header = () => {

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user)

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
    // Sign-out successful
    })
    .catch((error) => {
    // An error happened.
    navigate("/error")
    });
  } 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          // User is signed in
          const {uid , email, displayName, photoURL} = user;
          dispatch(addUser({uid : uid,
             email : email, 
             displayName : displayName, 
             photoURL : photoURL}))

          // navigate user to the browse page after successfully signed in
          navigate("/browse")
      
        } else {
          // User is signed out
          dispatch(removeUser());
          // navigate user to the main page after signing out
          navigate("/")
          
  
    }
  });

      // unsubscribe when the component unmounts
      return () => unsubscribe();

  }, []);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
      className='w-44'
      src={NETFLIX_LOGO} alt='Logo'>
      </img>
      {user && (
        <div className='flex p-2'>
        <img className='w-12 h-12 my-2'
        alt='usericon' src={user.photoURL}>
        </img>
        <button onClick={handleSignOut} className='border border-black bg-red-500 rounded-lg h-8 my-3 mx-2 px-2 font-bold'>Sign Out</button>
      </div>)}
    </div>
    
  )
}

export default Header
