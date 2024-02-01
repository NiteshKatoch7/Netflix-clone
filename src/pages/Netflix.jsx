import React from 'react'
import { auth } from '../utils/firebase-authentication'
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Netflix() {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) =>{
    if(!user){
      navigate('/signin')
    }
  })

  return (
    <>
    <div>Netflix</div>
    <button onClick={()=>auth.signOut()}>Logout</button>
    </>
  )
}
