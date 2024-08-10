import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import styles from './Register.module.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Aquí agregar lógica de registro
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.form}>
        <Typography variant="h5" gutterBottom>
          Register
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
        <TextField
          className={styles.inputField}
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          className={styles.button}
          variant="contained"
          fullWidth
          onClick={handleRegister}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
