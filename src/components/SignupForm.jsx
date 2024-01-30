import React from 'react';
import styles from '../pages/signup/signup.module.css'
import { Formik, Form } from 'formik';
import { TextField } from '@mui/material';

export default function SignupForm() {
  return (
    <>
      <div className={styles.formWrapper}>
        <Formik 
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={async (values) => {
            await new Promise((res) => 
              alert(JSON.stringify(values, null, 2))
            );
          }}
        >
          <Form>
            <TextField className={styles.inputField} id="email-id" name="email" label="Email address" />
            <TextField className={styles.inputField} id="password" name="password" label="Enter password" />
            <button type="submit">Get Started</button>
          </Form>
        </Formik>
      </div>
    </>
  )
}
