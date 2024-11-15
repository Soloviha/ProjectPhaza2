import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Badge,
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import MailIcon from '@mui/icons-material/Mail';

export default function LoginPage({ signUpHandler }) {
  const [variant, setVariant] = React.useState('outlined');
  const createOnClick = (value) => () => {
    setVariant(value);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: 'url("../../../public/IMG_1846.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        style={{
          maxWidth: '400px',
          padding: '2rem',
          backgroundColor: 'rgba(230, 230, 230, 0.9)',
          borderRadius: '8px',
        }}
      >
        <Form
          onSubmit={signUpHandler}
          className="d-flex flex-column align-items-center"
          style={{ width: '100%' }}
        >
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
              <InputLabel htmlFor="input-with-icon-adornment">Введите имя</InputLabel>
              <Input
                name="name"
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl variant="standard" sx={{ width: '100%' }} type="email">
              <InputLabel htmlFor="input-with-icon-adornment">Введите email</InputLabel>
              <Input
                name="email"
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <Badge color="secondary" badgeContent={0}>
                      <MailIcon />
                    </Badge>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl variant="standard" sx={{ width: '100%' }} name="password">
              <InputLabel htmlFor="standard-adornment-password">
                Введите пароль
              </InputLabel>
              <Input
                name="password"
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                      }
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
              Sign Up
            </Button>
          </Box>
        </Form>
      </Container>
    </div>
  );
}
