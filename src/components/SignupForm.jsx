import React, { useState } from 'react';
import styles from '../pages/signup/signup.module.css'
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { auth } from '../utils/firebase-authentication';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
  const [showPassword, setshowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email:"",
    password:""
  });
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser){
      navigate('/');
    }
  })

  return (
    <>
      <Container showPassword={showPassword} className={styles.formWrapper}>
        <Formik 
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={async (values) => {
            await new Promise((res) => {
              const {email, password} = values;
              createUserWithEmailAndPassword(auth, email, password);
            });
          }}
        >
          <Form>
            <div className="form-wrapper">
              <Field className={styles.inputField} id="email-id" name="email" placeholder="Email address" />
              {
                showPassword && (
                  <Field className={styles.inputField} id="password" name="password" placeholder="Enter password" />
                )
              }
              {
                !showPassword && <button onClick={()=>setshowPassword(true)} className={styles.submitBtn}>Get Started</button>
              }
            </div>
            <button type="submit">Sign In</button>
          </Form>
        </Formik>
      </Container>
    </>
  )
}

const Container = styled.div`
  .form-wrapper {
    display: grid;
    grid-template-columns: ${({showPassword})=> (showPassword ? "1fr 1fr" : "2fr 1fr")  }; 
    column-gap: 10px;
    row-gap: 10px;
    align-items: center;
    margin: 25px 0 0;
  }
`;