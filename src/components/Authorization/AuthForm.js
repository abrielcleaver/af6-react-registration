import React from 'react';

export default function Auth() {
  return (
    <form className="form" >
      <div className="form-controls">
        <label>Email:</label>
        <input type="email" placeholder="email" />
      </div>
      <div className="form-controls">
        <label>Password:</label>
        <input type="email" placeholder="password" />
      </div>
      <input type="submit" />
    </form>
  );
}
