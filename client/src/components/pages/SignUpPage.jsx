import Button from '@mui/material/Button';
import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function LoginPage({ signUpHandler }) {
  const [variant, setVariant] = React.useState('outlined');
  const createOnClick = (value) => () => {
    setVariant(value);
  };

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center mt-5"
      style={{ width: '500px', height: '80vh' }}
    >
      <Form onSubmit={signUpHandler} style={{ padding: '40px', width: '100%' }}>
        <Form.Group className="mb-4">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formPlaintextPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
      </Form>
      <Button
        type="submit"
        className="mb-3"
        variant={variant}
        size="medium"
        color="success"
        aria-label="success button group"
        onClick={createOnClick('outlined')}
      >
        Sign Up
      </Button>
    </Container>
  );
}
