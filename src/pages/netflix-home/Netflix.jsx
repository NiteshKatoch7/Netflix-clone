import React, { useEffect, useState } from 'react'
import { auth } from '../../utils/firebase-authentication'
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import backgroundImage from '../../assets/background/home/backgroundImage.jpg';
import MovieLogo from '../../assets/background/home/MovieLogo.webp';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres, netflixSelector } from '../../redux/reducer/movieReducer';
import Slider from '../../components/Slider';

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { genresLoaded } = useSelector(netflixSelector);
  const { movies } = useSelector(netflixSelector);   
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [])

  useEffect(()=>{
    if(genresLoaded){
      dispatch(fetchMovies({ type: 'all'}))
    }
  })

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
    <Container >
    <Navbar isScrolled={isScrolled} />
    <div className="hero">
      <img src={backgroundImage}
       alt="background"
       className='background-image'
      />
      <div className="container">
        <div className="logo">
          <img src={MovieLogo}
           alt="movie-logo"
           className="movie-logo"
          />
        </div>
        <div className="buttons">
          <button onClick={() => navigate('/player')}>
              <FaPlay /> Play
          </button>
          <button>
              <AiOutlineInfoCircle /> More Info
          </button>
        </div>
      </div>
    </div>
    <Slider movies={movies} />
    </Container>
  )
}


const Container = styled.div`
  background-color: black;
  .hero{
    position: relative;
    .background-image{
      filter: brightness(60%);
    }
    img{
      height: 100vh;
      width: 100vw;
    }
    .container{
      position: absolute;
      bottom: 5rem;
      .logo{
        img{
          height: 100%;
          width: 100%;
          margin-left: 5rem;
          z-index: 2;
          position: relative;
        }
      }
      .buttons{
        margin: 5rem;
        gap: 2rem;
        display: flex;
        align-items: center;
        justify-content: start;
        position: relative;
        z-index: 2;

        button{
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          gap: 1rem;
          height: 100%;
          border-radius: 0.2rem;
          padding: 0.5rem 2.4rem 0.5rem 2rem;
          border: none;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover{
            opacity: 0.8;
          }
          &:nth-of-type(2){
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            padding-top: 0.4rem;
            padding-bottom: 0.3rem;
            svg{
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;