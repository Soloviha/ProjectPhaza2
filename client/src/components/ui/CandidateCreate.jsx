import { Button, TextField, Typography } from '@mui/material';
import axiosInstance from '../../api/axiosInstance';

export default function CandidateCreate() {
  // const [status, setStatus] = useState('');

  const handleAddNewResume = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    //   formData.status = status;
    console.log(formData);

    axiosInstance
      .post('/cards', formData)
      .then(({ data }) => {
        console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
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
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
        }}
      />

      <TextField
        name="speciality"
        label="Должность"
        variant="outlined"
        fullWidth
        required
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
        }}
      />

      <TextField
        name="phone"
        label="Телефон"
        variant="outlined"
        fullWidth
        required
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
        }}
      />

      <TextField
        name="email"
        label="Почта"
        variant="outlined"
        fullWidth
        required
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
        }}
      />

      <TextField
        name="age"
        label="Возраст"
        variant="outlined"
        fullWidth
        required
        type="number"
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
        }}
      />

      <TextField
        name="city"
        label="Город"
        variant="outlined"
        fullWidth
        required
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
        }}
      />

      {/* Поле для выбора статуса */}
      {/* <FormControl fullWidth>
          <InputLabel>Статус</InputLabel>
          <Select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            label="Статус"
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: 'green',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'green',
                },
              },
            }}
          >
            <MenuItem value="Приглашение">Приглашение</MenuItem>
            <MenuItem value="Звонок-скрининг">Звонок-скрининг</MenuItem>
            <MenuItem value="Видео-интервью">Видео-интервью</MenuItem>
            <MenuItem value="Передано заказчику">Передано заказчику</MenuItem>
            <MenuItem value="Назначено интервью">Назначено интервью</MenuItem>
            <MenuItem value="Принят оффер">Принят оффер</MenuItem>
            <MenuItem value="Отказ">Отказ</MenuItem>
          </Select>
        </FormControl> */}

      <TextField
        name="experience"
        label="Опыт работы"
        variant="outlined"
        fullWidth
        type="number"
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
        }}
      />

      <TextField
        name="salary"
        label="Зарплата"
        variant="outlined"
        fullWidth
        type="number"
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
        }}
      />

      <TextField
        name="description"
        label="Описание"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
        }}
      />

      <TextField
        name="img"
        label="Ссылка на фото кандидата"
        variant="outlined"
        fullWidth
        type="url"
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
        }}
      />

      <Button
        variant="contained"
        color="success"
        type="submit"
        style={{ alignSelf: 'center', marginTop: '20px' }}
      >
        Отправить
      </Button>
    </form>
  );
}
