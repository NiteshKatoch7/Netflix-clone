import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres, netflixSelector } from '../redux/reducer/movieReducer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase-authentication';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from './NotAvailable';
import SelectGenre from '../components/SelectGenre';

export default function Movies() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const { genresLoaded, genres } = useSelector(netflixSelector);
    const { movies } = useSelector(netflixSelector);   
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getGenres());
    }, [])
  
    useEffect(()=>{
      if(genresLoaded){
        dispatch(fetchMovies({ type: 'movie'}))
      }
    }, [genresLoaded])
  
    window.scroll = () => {
      setIsScrolled(window.scrollY === 0 ? alert("hi") : true);
      return () => (window.onscroll = null)
    }

    onAuthStateChanged(auth, (user) =>{
      if(!user){
        navigate('/signin')
      }
    })

  return (
    <Container>
        <div className="navbar">
            <Navbar isScrolled={isScrolled} />
        </div>
        <div className="data">
            <SelectGenre genres={genres} type='movie' />
            {
                movies.length ? <Slider movies={movies} /> :
                <NotAvailable />
            }
        </div>
    </Container>
  )
}


const Container = styled.div`


.data{
    margin-top: 6rem;
    .not-available{
        text-align: center;
        color: white;
        margin-top: 4rem;
    }
}
`;