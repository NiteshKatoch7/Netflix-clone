import React, { useState } from 'react'
import { auth } from '../../utils/firebase-authentication'
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  window.scroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null)
  }

  onAuthStateChanged(auth, (user) =>{
    if(!user){
      navigate('/signin')
    }
  })

  return (
    <>
    <Navbar isScrolled={isScrolled} />
    <div>Netflix</div>
    {/* <button onClick={()=>auth.signOut()}>Logout</button> */}
    </>
  )
}
