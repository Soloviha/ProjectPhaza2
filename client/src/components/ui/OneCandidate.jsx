import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import WorkIcon from '@mui/icons-material/Work';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { Button, Card, Menu, MenuItem, Stack } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';
import { useEffect } from 'react';

export default function OneCandidate() {
  const [variant, setVariant] = React.useState('outlined');
  const createOnClick = (value) => () => {
    setVariant(value);
  };
  const [status, setStatus] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [statuses, setStatuses] = useState([]);

  const [cards, setCards] = useState({
    img: '',
    fullName: '',
    phone: '',
    email: '',
    age: '',
    city: '',
    speciality: '',
    experience: '',
    salary: '',
    description: '',
  });
  const { candidateId } = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/cards/${candidateId}`)
      .then(({ data }) => setCards(data))
      .catch((err) => console.log(err));
  }, [candidateId]);

  useEffect(() => {
    axiosInstance
      .get('/statuses')
      .then(({ data }) => setStatuses(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(statuses);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await axiosInstance.get(`/cards/${candidateId}`);
        // console.log(response);

        setStatus(response.data.statusId); // Предполагаем, что статус имеет поле name
      } catch (error) {
        console.error('Ошибка получения кандидата:', error);
      }
    };
    fetchCandidate();
  }, [candidateId]);

  console.log(status);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusChange = async (newStatus) => {
    try {
      await axiosInstance.put(`/cards/status/${candidateId}`, { statusId: newStatus.id });
      setStatus(newStatus.status); 
      handleClose(); 
    } catch (error) {
      console.error('Ошибка изменения статуса:', error);
    }
  };



  return (
    <>
      <Card>
        <Box
          sx={{
            background: '#f5f5f5',
            padding: '86px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CardMedia
              component="img"
              sx={{
                width: '230px',
                height: '230px',
                borderRadius: 1,
                filter: 'grayscale(50%)',
                transition: 'filter 0.3s ease',
                '&:hover': { filter: 'grayscale(30%)' },
              }}
              image={cards.img}
              alt="Фото профиля"
            />

            <Box sx={{ marginLeft: 14 }}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: '#000000',
                  padding: '4px 12px',
                  borderRadius: 2,
                }}
              >
                {cards.fullName}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: '#333333' }}
              >
                {cards.speciality}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                margin: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                Статус кандидата
              </Typography>
              <Button
                onClick={handleClick}
                variant="outlined"
                sx={{
                  color: '#fff', 
                  borderColor: '#000', 
                  '&:hover': { borderColor: '#333', backgroundColor: '#f0f0f' },
                  borderRadius: 2,
                  padding: '10px 20px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  backgroundColor: '#000', 
                }}
              >
                {status || 'Выберите статус'}
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                {statuses.map((statusOption) => (
                  <MenuItem
                    key={statusOption.id}
                    onClick={() => handleStatusChange(statusOption)}
                    sx={{ color: '#000', '&:hover': { backgroundColor: '#f0f0f0' } }} // Черный текст
                  >
                    {statusOption.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Box>

        <CardContent sx={{ padding: '26px 74px', flex: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
            <PhoneIcon sx={{ color: '#1E88E5' }} />
            <Typography variant="body2" sx={{ color: '#333333' }}>
              {cards.phone}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
            <WorkIcon sx={{ color: '#43A047' }} />
            <Typography variant="body2" sx={{ color: '#333333' }}>
              Experience: {cards.experience}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
            <EmailIcon sx={{ color: '#E53935' }} />
            <Typography variant="body2" sx={{ color: '#333333' }}>
              Email: {cards.email}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
            <VisibilityIcon sx={{ color: '#FB8C00' }} />
            <Typography variant="body2" sx={{ color: '#333333' }}>
              Status: {cards?.Status?.status}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
            <WatchLaterRoundedIcon />
            <Typography variant="body2" sx={{ color: '#333333' }}>
              Date of creation: {cards.createdAt}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
            <Typography variant="body2" sx={{ color: '#333333' }}>
              {cards.city}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
            <Typography variant="body2" sx={{ color: '#333333' }}>
              {cards.salary}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1 }}>
            <Typography variant="body2" sx={{ color: '#333333' }}>
              {cards.description}
            </Typography>
          </Stack>
          <ButtonGroup size="lg" aria-label="soft button group">
            <Link to="/candidate">
              <Button
                variant={variant}
                size="sm"
                color="error"
                aria-label="danger button group"
                onClick={createOnClick('outlined')}
              >
                Назад
              </Button>
            </Link>
          </ButtonGroup>
        </CardContent>
      </Card>
    </>
  );
}
