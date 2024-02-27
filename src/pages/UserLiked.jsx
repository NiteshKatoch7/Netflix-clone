import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase-authentication'
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { netflixSelector } from '../redux/reducer/movieReducer';
import { getUserLikedMovies } from '../redux/reducer/movieReducer';
import Card from '../components/Card';

export default function UserLiked() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const { movies } = useSelector(netflixSelector);
    const [email, setEmail] = useState(undefined);   
    const dispatch = useDispatch();

    onAuthStateChanged(auth, (user) =>{
      if(user){
        setEmail(user.email);
      }else{
        navigate('/signin')
      }
    })
  
    useEffect(()=>{
        if(email){
            dispatch(getUserLikedMovies(email));
        }
    }, [email])
  
    window.scroll = () => {
      setIsScrolled(window.scrollY === 0 ? alert("hi") : true);
      return () => (window.onscroll = null)
    }

    return (
      <Container>
        <Navbar isScrolled={isScrolled} />
        <div className="list-wrapper">
            <h1>My List</h1>
            <div className="list-item">
                {movies.map((movie, index) => {
                    return <Card movieData={movie} index={index} key={movie.id} isLiked={true} />
                })}
            </div>
        </div>
      </Container>
    )
}
const Container = styled.div`
    .list-wrapper{
        display: flex;
        flex-direction: column;
        margin: 2.3rem;
        margin-top: 8rem;
        gap: 3rem;
        h1{
            margin-left: 3rem;
        }
        .list-item{
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
`;
