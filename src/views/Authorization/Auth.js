import React, { useState } from 'react';
import { signInUser, signupUser } from '../../services/users';
import AuthForm from '../../components/Authorization/AuthForm';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signupUser(email, password);
      }
      setCurrentUser(resp);
    } catch {
      setErrorMessage('Oops, something went wrong. Please try again.');
    }
  };

  return (
    <div>
      {/* <h3>Sign In</h3>
      <h3>Sign Up</h3>
      <p> Type: {type} </p> */}
      <AuthForm
        errorMessage={errorMessage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
