import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí agregar lógica de autenticación
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.form}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField
          className={styles.inputField}
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={styles.inputField}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className={styles.button}
          variant="contained"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
