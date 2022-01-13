import React, { useState } from 'react';
import { signupUser } from '../../services/users';
import AuthForm from '../../components/Authorization/AuthForm';

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupUser(email, password);
    } catch {
      setErrorMessage('Oops, something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <h1>Sign Up User</h1>
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
