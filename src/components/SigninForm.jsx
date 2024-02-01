import React, { useState } from 'react';
import styles from '../pages/signin/signin.module.css'
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { auth } from '../utils/firebase-authentication';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function SigninForm() {
  const [formValues, setFormValues] = useState({
    email:"",
    password:""
  });
  const navigate = useNavigate();
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
        navigate('/');
    }
  });

  return (
    <>
      <Container className={styles.formWrapper}>
        <Formik 
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={async (values) => {
            await new Promise((res) => {
              const {email, password} = values;
              signInWithEmailAndPassword(auth, email, password)
            });
          }}
        >
          <Form>
            <div className="form-wrapper">
              <Field className={styles.inputField} id="email-id" name="email" placeholder="Email address" />
              <Field className={styles.inputField} id="password" name="password" placeholder="Enter password" />
            </div>
            <button type="submit">Sign In</button>
          </Form>
        </Formik>
      </Container>
    </>
  )
}

const Container = styled.div`
    margin: 25px 0;

    form{
        .form-wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px 0;
        }
    }
`;