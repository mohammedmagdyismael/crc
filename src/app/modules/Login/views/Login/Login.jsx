import { useState } from 'react';
import { redirectionPathAfterLogin } from 'app/configs/Login';
import { loginAPI } from 'app/api/User';
import Layout from 'app/components/Layout/Layout';
import { LoginContainer, LoginForm, LoginInput, LoginButton } from './Login.style';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await loginAPI(username, password);
      if (response?.status === 200) {
        window.location.href = redirectionPathAfterLogin;
      } else {
        setError('Wrong Email or Password, Try Again!');
      }
    } catch (err) {
      console.log(err);
      setError('Wrong Email or Password, Try Again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <LoginContainer>
        <LoginForm onSubmit={handleLogin}>
          <LoginInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <LoginInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </LoginButton>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </LoginForm>
      </LoginContainer>
    </Layout>
  );
};

export default Login;
