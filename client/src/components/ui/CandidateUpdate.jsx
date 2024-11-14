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
        <Form.Control
          name="age"
          defaultValue={candidate?.age}
          type="number"
          placeholder="Age"
        />
        <Form.Control
          name="city"
          defaultValue={candidate?.city}
          type="text"
          placeholder="City"
        />
        <Form.Control
          name="speciality"
          defaultValue={candidate?.speciality}
          type="text"
          placeholder="Speciality"
        />
        <Form.Control
          name="experience"
          defaultValue={candidate?.experience}
          type="text"
          placeholder="Experience"
        />
        <Form.Control
          name="salary"
          defaultValue={candidate?.salary}
          type="text"
          placeholder="salary"
        />
        <Form.Control
          name="description"
          defaultValue={candidate?.description}
          type="text"
          placeholder="description"
        />
        <Form.Control
          name="img"
          defaultValue={candidate?.img}
          type="img"
          placeholder="img"
        />
        <Button type="submit" variant="light">
          <Icon.Save />
        </Button>
      </Form>
    </>
  );
}
