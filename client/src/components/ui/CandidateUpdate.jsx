import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import Form from 'react-bootstrap/Form';

export default function CandidateUpdate({ updateHandler, candidate }) {
  return (
    <Box
      sx={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          textAlign: 'center',
          color: '#1a1a1a',
          fontWeight: 600,
        }}
      >
        Update Candidate
      </Typography>

      <Form
        onSubmit={(event) => updateHandler(event, candidate.id)}
        style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }} // Уменьшен gap
      >
        <TextField
          name="fullName"
          defaultValue={candidate?.fullName}
          label="Full Name"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        />

        <TextField
          name="phone"
          defaultValue={candidate?.phone}
          label="Phone"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        />

        <TextField
          name="email"
          defaultValue={candidate?.email}
          type="email"
          label="Email"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        />

        <TextField
          name="age"
          defaultValue={candidate?.age}
          type="number"
          label="Age"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        />

        <TextField
          name="city"
          defaultValue={candidate?.city}
          label="City"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        />

        <TextField
          name="speciality"
          defaultValue={candidate?.speciality}
          label="Speciality"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        />

        <TextField
          name="experience"
          defaultValue={candidate?.experience}
          label="Experience"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        />

        <TextField
          name="salary"
          defaultValue={candidate?.salary}
          label="Salary"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        />

        <TextField
          name="description"
          defaultValue={candidate?.description}
          label="Description"
          variant="outlined"
          size="small"
          multiline
          rows={3}
          fullWidth
          sx={{ mb: 1 }}
        />

        <TextField
          name="img"
          defaultValue={candidate?.img}
          label="Image URL"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
        />

        <Button
          type="submit"
          variant="contained"
          startIcon={<SaveIcon />}
          sx={{
            backgroundColor: 'black',
            color: 'white',
            padding: '8px 16px',
            fontSize: '0.9rem',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#333',
            },
            alignSelf: 'center',
            width: '160px',
          }}
        >
          Save Changes
        </Button>
      </Form>
    </Box>
  );
}
