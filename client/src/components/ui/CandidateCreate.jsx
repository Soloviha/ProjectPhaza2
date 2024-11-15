import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import axiosInstance from '../../api/axiosInstance';

export default function CandidateCreate() {
  const [formData, setFormData] = useState({});
  const [isUploadMode, setIsUploadMode] = useState(false);

  const handleAddNewResume = (e) => {
    e.preventDefault();
    const data = { ...formData, ...Object.fromEntries(new FormData(e.target)) };

    axiosInstance
      .post('/cards', data)
      .then(({ data }) => {
        console.log('Резюме успешно создано:', data);
      })
      .catch((error) => {
        console.error('Ошибка при создании резюме:', error);
      });
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    console.log('Файл выбран:', file);
    if (file) {
      const formData = new FormData();
      formData.append('pdf', file);

      try {
        const response = await axiosInstance.post('/upload-pdf', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log('Ответ от сервера:', response.data);

        if (response.data && response.data.extractedData) {
          setFormData(response.data.extractedData);
          setIsUploadMode(true);
        } else {
          console.warn('Данные не были извлечены или пустые.');
        }
      } catch (error) {
        console.error('Ошибка при загрузке PDF:', error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5rem',
      }}
    >
      <Box
        sx={{
          maxWidth: '400px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '12px',
          padding: '1.5rem',
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
          New Candidate
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <input
            type="file"
            accept="application/pdf"
            style={{ display: 'none' }}
            id="upload-pdf-input"
            onChange={handleFileSelect}
          />
          <Button
            variant="contained"
            component="label"
            htmlFor="upload-pdf-input"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              padding: '8px 16px',
              fontSize: '0.9rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#333',
              },
              width: '160px',
            }}
          >
            Upload Resume
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            mb: 2,
            color: '#666',
          }}
        >
          or
        </Typography>

        <Box
          component="form"
          onSubmit={handleAddNewResume}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
          }}
        >
          <TextField
            name="fullName"
            label="Full Name"
            variant="outlined"
            size="small"
            fullWidth
            required
            defaultValue={formData.fullName || ''}
          />

          <TextField
            name="speciality"
            label="Position"
            variant="outlined"
            size="small"
            fullWidth
            required
            defaultValue={formData.speciality || ''}
          />

          <TextField
            name="phone"
            label="Phone"
            variant="outlined"
            size="small"
            fullWidth
            required
            defaultValue={formData.phone || ''}
          />

          <TextField
            name="email"
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            required
            defaultValue={formData.email || ''}
          />

          <TextField
            name="age"
            label="Age"
            variant="outlined"
            size="small"
            fullWidth
            required
            type="number"
            defaultValue={formData.age || ''}
          />

          <TextField
            name="city"
            label="City"
            variant="outlined"
            size="small"
            fullWidth
            required
            defaultValue={formData.city || ''}
          />

          <TextField
            name="experience"
            label="Experience"
            variant="outlined"
            size="small"
            fullWidth
            type="number"
            defaultValue={formData.experience || ''}
          />

          <TextField
            name="salary"
            label="Salary"
            variant="outlined"
            size="small"
            fullWidth
            type="number"
            defaultValue={formData.salary || ''}
          />

          <TextField
            name="description"
            label="Description"
            variant="outlined"
            size="small"
            fullWidth
            multiline
            rows={3}
            defaultValue={formData.description || ''}
          />

          <TextField
            name="img"
            label="Image URL"
            variant="outlined"
            size="small"
            fullWidth
            type="url"
            defaultValue={formData.img || ''}
          />

          <Button
            type="submit"
            variant="contained"
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
              mt: 1,
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
