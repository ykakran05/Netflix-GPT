import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data

    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(name.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message);

    if(message) return;

    // else Sign in /sign up logic
    if(!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value, photoURL : "https://avatars.githubusercontent.com/u/47622948?s=400&u=45bc8cec6a4a05ec62917c4e0d1089414ca467db&v=4"
          }).then(() => {
              const {uid , email, displayName, photoURL} = auth.currentUser;
                          dispatch(addUser({uid : uid,
                             email : email, 
                             displayName : displayName, 
                             photoURL : photoURL}))

            // Profile updated!
            navigate("/browse")
            // ...
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
            // ...
          });
          
          
           // ...
         })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ "-" +errorMessage);
          // ..
        });
      }
    else {
      //Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate("/browse")
        
        // ...
        })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" +errorMessage);
      });
    }
    

    //once validation is done, then we can proceed to sign in/ sign up (Authentication)




    
  }

  const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
  }

  
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg" alt='bgimage'></img>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-black rounded-md bg-opacity-80'>
        <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input 
         ref={name}
         type='text'
         placeholder='Full Name' 
         className='p-4 my-4 w-full border bg-gray-700 bg-opacity-30 rounded-md'/>)}


        <input
         ref={email}
         type='text'
         placeholder='Email Address' 
         className='p-4 my-4 w-full border bg-gray-700 bg-opacity-30 rounded-md'/>

        <input
        ref={password}
        type='password' 
        placeholder='Password' 
        className='p-4 my-4 w-full border bg-gray-700 bg-opacity-30 rounded-md'/>

        <p className='text-red-500 text-md py-2'>{errorMessage}</p>

        <button className='p-4 my-6 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now!" : "Already Registered. Sign In Now!"}</p>
      </form>
    </div>
  )
}

export default Login
