import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../../components/BackgroundImage';
import Header from '../../components/Header';
import SignupForm from '../../components/SignupForm';
import styles from './signup.module.css'

export default function Signup() {
  return (
    <>
      <Container>
        <BackgroundImage />
        <Header login />
        <div className={styles.contentContainer}>
            <h1>Unlimited movies, TV shows and more</h1>
            <h5>Watch anywhere. Cancel anytime.</h5>
            <div className="text-center">
              <div className={styles.formContainer}>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
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