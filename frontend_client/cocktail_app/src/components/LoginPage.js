import React from 'react';

function LoginPage({ handleLogin }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = {
      username: formData.get('username'),
      password: formData.get('password'),
    };
    handleLogin(user);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" required />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;