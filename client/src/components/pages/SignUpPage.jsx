import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

export default function SignUpPage({ signUpHandler }) {
  return (
    <Container
      className="justify-content-center align-items-center mt-5"
      style={{ width: '500px' }}
    >
      <Form onSubmit={signUpHandler} style={{ padding: '40px' }}>
        <Form.Group>
          <Form.Label> Имя</Form.Label>
          <Form.Control type="text" name="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlaintextPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
          <Button type="submit" variant="outline-success" style={{ marginTop: '25px' }}>
            Зарегистрироваться
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
