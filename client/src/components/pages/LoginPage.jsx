import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function LoginPage({ signInHandler }) {
  const [variant, setVariant] = React.useState('outlined');
  const [showPassword, setShowPassword] = React.useState(false);

  const createOnClick = (value) => () => {
    setVariant(value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: { xs: '56px', sm: '64px' },
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("../../../public/2h-media-unsplash.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          maxWidth: '400px',
          padding: '2rem',
          backgroundColor: 'rgba(230, 230, 230, 0.9)',
          borderRadius: '8px',
        }}
      >
        <Form onSubmit={signInHandler} className="d-flex flex-column align-items-center">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              width: '100%',
            }}
          >
            <FormControl variant="standard" sx={{ width: '100%' }} type="email">
              <InputLabel htmlFor="email-input">Введите email</InputLabel>
              <Input
                name="email"
                id="email-input"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl variant="standard" sx={{ width: '100%' }} name="password">
              <InputLabel htmlFor="password-input">Введите пароль</InputLabel>
              <Input
                name="password"
                id="password-input"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'hide password' : 'show password'}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              type="submit"
              variant={variant}
              size="large"
              fullWidth
              onClick={createOnClick('outlined')}
              sx={{
                backgroundColor: 'black',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#333333',
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Form>
      </Container>
    </Box>
  );
}
