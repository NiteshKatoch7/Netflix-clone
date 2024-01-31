import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../../components/BackgroundImage';
import Header from '../../components/Header';
import SignupForm from '../../components/SignupForm';
import styles from './signin.module.css'

export default function Signin() {
  return (
    <>
      <Container>
        <BackgroundImage />
        <Header login />
        <div className={styles.contentContainer}>
            <div className="text-center">
              <div className={styles.formContainer}>
                <SignupForm />
              </div>
            </div>
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
`;