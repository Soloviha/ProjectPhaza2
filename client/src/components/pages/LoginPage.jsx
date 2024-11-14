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
import ButtonGroup from '@mui/material/ButtonGroup';
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
    <div
      style={{
        height: '95vh',
        backgroundImage: 'url("../../../public/IMG_1846.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        className="d-flex flex-column justify-content-center align-items-center mt-5"
        style={{ width: '500px', height: '80vh' }}
      >
        <Form onSubmit={signInHandler} style={{ padding: '40px', width: '100%' }}>
          <Box sx={{ '& > :not(style)': { m: 1 } }} />
          <FormControl variant="standard" sx={{ m: 1, width: '30ch' }} type="email">
            <InputLabel htmlFor="input-with-icon-adornment">Введите email</InputLabel>
            <Input
              name="email"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '30ch' }} variant="standard" name="password">
            <InputLabel htmlFor="standard-adornment-password">Введите пароль</InputLabel>
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
          <ButtonGroup
            className="mb-3"
            variant={variant}
            size="medium"
            color="success"
            aria-label="success button group"
          >
            <Button type="submit" onClick={createOnClick('outlined')}>
              Sign In
            </Button>
          </ButtonGroup>
        </Form>
      </Container>
    </div>
  );
}
