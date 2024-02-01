import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../../components/BackgroundImage';
import Header from '../../components/Header';
import styles from './signin.module.css'
import SigninForm from '../../components/SigninForm';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <BackgroundImage />
        <Header login />
        <div className={styles.contentContainer}>
          <div className={styles.formContainer}>
            <h1>Sign In</h1>
            <SigninForm />
            <p>New to Netflix? 
                <button onClick={()=>navigate('/signup')}>Sign up now</button>
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
`;