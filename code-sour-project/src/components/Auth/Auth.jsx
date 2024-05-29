import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [code, setCode] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api-guest.codesour.com/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Login successful');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleCheckTokenCode = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api-guest.codesour.com/oauth/token/user/checkTokenCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, code }),
      });

      if (response.ok) {
        console.log('Token and code are valid');
      } else {
        console.error('Token and code are not valid');
      }
    } catch (error) {
      console.error('Error during token and code check:', error);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api-guest.codesour.com/oauth/token/user/delete', {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        },
      });

      if (response.ok) {
        console.log('User deleted successfully');
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error during user deletion:', error);
    }
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api-guest.codesour.com/oauth/token/user/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username }),
      });

      if (response.ok) {
        console.log('Password reset email sent successfully');
      } else {
        console.error('Failed to send password reset email');
      }
    } catch (error) {
      console.error('Error during password reset email sending:', error);
    }
  };

  const handleRevoke = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api-guest.codesour.com/oauth/token/user/logout', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        },
      });

      if (response.ok) {
        console.log('Token revoked successfully');
      } else {
        console.error('Failed to revoke token');
      }
    } catch (error) {
      console.error('Error during token revocation:', error);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api-guest.codesour.com/oauth/token/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error during user registration:', error);
    }
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api-guest.codesour.com/oauth/token/user/resetPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });

      if (response.ok) {
        console.log('Password reset successfully');
      } else {
        console.error('Failed to reset password');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <input type="password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
      </form>

      <form onSubmit={handleCheckTokenCode}>
        <input type="text" value={token} onChange={handleTokenChange} />
        <input type="text" value={code} onChange={handleCodeChange} />
        <button type="submit">Check Token and Code</button>
      </form>

      <form onSubmit={handleDelete}>
        <button type="submit">Delete User</button>
      </form>

      <form onSubmit={handleForgotPassword}>
        <button type="submit">Forgot Password</button>
      </form>

      <form onSubmit={handleRevoke}>
        <button type="submit">Revoke Token</button>
      </form>

      <form onSubmit={handleRegister}>
        <button type="submit">Register User</button>
      </form>

      <form onSubmit={handleResetPassword}>
        <input type="text" value={token} onChange={handleTokenChange} />
        <input type="password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default Login;
