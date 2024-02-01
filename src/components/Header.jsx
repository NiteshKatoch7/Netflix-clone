import React from 'react'
import styled from 'styled-components';
import logo from '../assets/background/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {

  const navigate = useNavigate();

  return (
    <Container>
      <div className="container">
        <div className="logo">
          <img className='logo-img' src={logo} alt="logo" />
        </div>
        <div className="right-content">
          <button onClick={()=>navigate(props.login ? '/signin' : '/signup')}>
            {props.login ? 'Log In' : 'Sign In'}
          </button>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  padding: 2rem 4rem;

  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    .logo{
      width: 9.25rem;
      height: 2.5rem;
      .logo-img{
        width: 100%;
        object-fit: contain;
      }
    }

    .right-content{
      width: auto;

      button{
        padding: 0.5rem 1rem;
        background-color: rgb(229,9,20);
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;