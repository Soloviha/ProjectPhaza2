import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import WorkIcon from '@mui/icons-material/Work';
// import Stack from '@mui/joy/Stack';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CandidateUpdate from './CandidateUpdate';

export default function CandidateCard({ candidate, deleteHandler, updateHandler }) {
  const [variant, setVariant] = React.useState('outlined');
  const [show, setShow] = useState(false);
  const createOnClick = (value) => () => {
    setVariant(value);
  };
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '20px',
        marginLeft: '150px',
        maxWidth: 600,
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        background: 'rgba(255, 255, 255, 0.8)', // Полупрозрачный белый фон
        backdropFilter: 'blur(8px)', // Эффект размытия фона
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        border: '1px solid rgba(176, 176, 176, 0.5)', // Полупрозрачная граница
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
          background: 'rgba(255, 255, 255, 0.9)', // Более непрозрачный при наведении
        },
      }}
    >
      <Box
        sx={{
          background: '#f5f5f5',
          padding: '16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', // Изменено на колонку
            alignItems: 'center', // Центрирование по горизонтали
            textAlign: 'center', // Центрирование текста
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 100,
              height: 100,
              borderRadius: 1,
              filter: 'grayscale(50%)',
              transition: 'filter 0.3s ease',
              '&:hover': { filter: 'grayscale(30%)' },
              marginBottom: 2, // Отступ снизу от фото
            }}
            image={candidate.img}
            alt="Фото профиля"
          />

          <Box>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: '#000000',
                padding: '4px 12px',
                borderRadius: 2,
                textAlign: 'center', // Дополнительное центрирование текста
              }}
            >
              {candidate.fullName}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                color: '#333333',
                textAlign: 'center', // Дополнительное центрирование текста
              }}
            >
              {candidate.speciality}
            </Typography>
          </Box>
        </Box>
      </Box>

      <CardContent sx={{ padding: '16px 24px', flex: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
          <PhoneIcon sx={{ color: '#1E88E5' }} />
          <Typography variant="body2" sx={{ color: '#333333' }}>
            {candidate.phone}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
          <WorkIcon sx={{ color: '#43A047' }} />
          <Typography variant="body2" sx={{ color: '#333333' }}>
            Experience: {candidate.experience}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
          <EmailIcon sx={{ color: '#E53935' }} />
          <Typography variant="body2" sx={{ color: '#333333' }}>
            Email: {candidate.email}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
          <VisibilityIcon sx={{ color: '#FB8C00' }} />
          <Typography variant="body2" sx={{ color: '#333333' }}>
            Status: {candidate?.Status?.status}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
          <WatchLaterRoundedIcon />
          <Typography variant="body2" sx={{ color: '#333333' }}>
            Date of creation: {candidate.createdAt.slice(0, 10)}
          </Typography>
        </Stack>
        <Stack spacing={1} sx={{ alignItems: 'center' }}>
          <ButtonGroup size="lg" aria-label="soft button group">
            <Link to={`/candidate/${candidate.id}`}>
              <Button
                variant={variant}
                size="sm"
                color="error"
                aria-label="danger button group"
                onClick={createOnClick('outlined')}
              >
                Подробнее
              </Button>
            </Link>
            <Button
              variant={variant}
              size="sm"
              color="warning"
              aria-label="danger button group"
              onClick={createOnClick('outlined')}
              onClick={() => setShow((prev) => !prev)}
            >
              Edit
            </Button>

            <Button
              variant={variant}
              size="sm"
              color="error"
              aria-label="danger button group"
              onClick={createOnClick('outlined')}
              onClick={() => deleteHandler(candidate.id)}
            >
              Delete
            </Button>
          </ButtonGroup>
        </Stack>
        {show && <CandidateUpdate candidate={candidate} updateHandler={updateHandler} />}
      </CardContent>
    </Card>
  );
}
