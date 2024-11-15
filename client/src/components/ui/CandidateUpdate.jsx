
import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CandidateUpdate({ updateHandler, candidate }) {
  return (
    <>
      <Form onSubmit={(event) => updateHandler(event, candidate.id)}>
        <Form.Control
          name="fullName"
          defaultValue={candidate?.fullName}
          type="text"
          placeholder="Name"
        />
        <Form.Control
          name="phone"
          defaultValue={candidate?.phone}
          type="text"
          placeholder="Phone"
        />
        <Form.Control
          name="email"
          defaultValue={candidate?.email}
          type="email"
          placeholder="Email"
        />
        <Button type="submit" variant="light">
          <Icon.Save />
        </Button>
      </Form>
    </>
  );
}
