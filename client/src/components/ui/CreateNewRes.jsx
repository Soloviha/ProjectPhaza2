import { Button, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import axiosInstance from '../../api/axiosInstance';

function CreateNewRes() {
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
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="file"
        accept="application/pdf"
        style={{ display: 'none' }}
        id="upload-pdf-input"
        onChange={handleFileSelect}
      />
      <Button
        variant="contained"
        color="primary"
        component="label"
        htmlFor="upload-pdf-input"
        style={{
          marginBottom: '20px',
          background: 'linear-gradient(45deg, #434343, #000000)',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '30px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.background = 'linear-gradient(45deg, #555, #222)')
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.background = 'linear-gradient(45deg, #434343, #000000)')
        }
      >
        Загрузить резюме
      </Button>

      <Typography variant="body1" style={{ margin: '5px 0' }}>
        или
      </Typography>
      <Paper
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '500px',
          margin: 'auto',
          padding: '20px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        }}
        component="form"
        onSubmit={handleAddNewResume}
      >
        <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '16px' }}>
          Создать Резюме
        </Typography>

        <TextField
          name="fullName"
          label="Имя"
          variant="outlined"
          fullWidth
          required
          defaultValue={formData.fullName || ''}
        />
        <TextField
          name="speciality"
          label="Должность"
          variant="outlined"
          fullWidth
          required
          defaultValue={formData.speciality || ''}
        />
        <TextField
          name="phone"
          label="Телефон"
          variant="outlined"
          fullWidth
          required
          defaultValue={formData.phone || ''}
        />
        <TextField
          name="email"
          label="Почта"
          variant="outlined"
          fullWidth
          required
          defaultValue={formData.email || ''}
        />
        <TextField
          name="age"
          label="Возраст"
          variant="outlined"
          fullWidth
          required
          type="number"
          defaultValue={formData.age || ''}
        />
        <TextField
          name="city"
          label="Город"
          variant="outlined"
          fullWidth
          required
          defaultValue={formData.city || ''}
        />
        <TextField
          name="experience"
          label="Опыт работы"
          variant="outlined"
          fullWidth
          type="number"
          defaultValue={formData.experience || ''}
        />
        <TextField
          name="salary"
          label="Зарплата"
          variant="outlined"
          fullWidth
          type="number"
          defaultValue={formData.salary || ''}
        />
        <TextField
          name="description"
          label="Описание"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          defaultValue={formData.description || ''}
        />
        <TextField
          name="img"
          label="Ссылка на фото кандидата"
          variant="outlined"
          fullWidth
          type="url"
          defaultValue={formData.img || ''}
        />

        <Button
          variant="contained"
          color="success"
          type="submit"
          style={{ alignSelf: 'center', marginTop: '20px' }}
        >
          Отправить
        </Button>
      </Paper>
    </div>
  );
}

export default CreateNewRes;
