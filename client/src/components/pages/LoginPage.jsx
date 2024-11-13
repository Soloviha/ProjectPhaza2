import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function LoginPage({ signInHandler }) {
  const [variant, setVariant] = React.useState('outlined');
  const createOnClick = (value) => () => {
    setVariant(value);
  };

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center mt-5"
      style={{ width: '500px', height: '80vh' }}
    >
      <Form onSubmit={signInHandler} style={{ padding: '40px', width: '100%' }}>
        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formPlaintextPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
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
  );
}
