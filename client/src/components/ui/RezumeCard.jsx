import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WorkIcon from '@mui/icons-material/Work';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function RezumeCard() {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400,
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        background: '#FFFFFF',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        border: '1px solid #B0B0B0',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      {/* Обёртка для фона фото и имени */}
      <Box
        sx={{
          background: '#f5f5f5', // Фоновый цвет
          padding: '16px', // Отступы для обёртки
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CardMedia
            component="img"
            sx={{
              width: 100,
              height: 100,
              borderRadius: 1,
              filter: 'grayscale(50%)',
              transition: 'filter 0.3s ease',
              '&:hover': { filter: 'grayscale(30%)' },
            }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1Yro0_rHizlzRwvkOIExLsG7tUMj9GwiSw&s"
            alt="Фото профиля"
          />

          <Box sx={{ marginLeft: 2 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: '#000000',
                padding: '4px 12px',
                borderRadius: 2,
              }}
            >
              Вася
            </Typography>
            <Typography gutterBottom variant="h6" component="div" sx={{ color: '#333333' }}>
              JS разработчик
            </Typography>
          </Box>
        </Box>
      </Box>

      <CardContent sx={{ padding: '16px 24px', flex: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
          <PhoneIcon sx={{ color: '#1E88E5' }} />
          <Typography variant="body2" sx={{ color: '#333333' }}>
            +7 (999) 999-99-99
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
          <WorkIcon sx={{ color: '#43A047' }} />
          <Typography variant="body2" sx={{ color: '#333333' }}>
            Стаж: 1 год
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
          <EmailIcon sx={{ color: '#E53935' }} />
          <Typography variant="body2" sx={{ color: '#333333' }}>
            email: vasya@mail.email
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <VisibilityIcon sx={{ color: '#FB8C00' }} />
          <Typography variant="body2" sx={{ color: '#333333' }}>
            статус: просмотрено
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
