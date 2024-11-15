import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import WorkIcon from '@mui/icons-material/Work';
import { Button, Card, Menu, MenuItem, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';

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
        setStatus(response.data.statusId);
      } catch (error) {
        console.error('Ошибка получения кандидата:', error);
      }
    };
    fetchCandidate();
  }, [candidateId]);

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
    <Card>
      <Box
        sx={{
          background:
            'linear-gradient(to right, rgba(245, 245, 245, 0.9), rgba(250, 250, 250, 0.9))',
          padding: '40px',
          borderRadius: '12px 12px 0 0',
          boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.1)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: '200px',
              height: '200px',
              borderRadius: '12px',
              filter: 'grayscale(40%)',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              '&:hover': {
                filter: 'grayscale(0%)',
                transform: 'scale(1.02)',
              },
            }}
            image={cards.img}
            alt="Фото профиля"
          />

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: '#1a1a1a',
                fontWeight: 600,
                letterSpacing: '-0.5px',
              }}
            >
              {cards.fullName}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: '#666',
                fontWeight: 500,
              }}
            >
              {cards.speciality}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: '#1a1a1a',
                fontSize: '1.1rem',
              }}
            >
              Статус кандидата
            </Typography>
            <Button
              onClick={handleClick}
              variant="contained"
              sx={{
                color: '#fff',
                backgroundColor: '#1a1a1a',
                borderRadius: '8px',
                padding: '12px 24px',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: '#333',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                },
              }}
              endIcon={<ArrowDropDownIcon />}
            >
              {status || 'Выберите статус'}
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                },
              }}
            >
              {statuses.map((statusOption) => (
                <MenuItem
                  key={statusOption.id}
                  onClick={() => handleStatusChange(statusOption)}
                  sx={{
                    color: '#1a1a1a',
                    fontSize: '0.95rem',
                    padding: '10px 24px',
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                    },
                  }}
                >
                  {statusOption.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Box>

      <CardContent
        sx={{
          padding: '26px 74px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: 2 }}>
          <PhoneIcon sx={{ color: '#1E88E5', fontSize: 24 }} />
          <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem' }}>
            {cards.phone}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: 2 }}>
          <WorkIcon sx={{ color: '#43A047', fontSize: 24 }} />
          <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem' }}>
            Experience: {cards.experience}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: 2 }}>
          <EmailIcon sx={{ color: '#E53935', fontSize: 24 }} />
          <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem' }}>
            Email: {cards.email}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: 2 }}>
          <VisibilityIcon sx={{ color: '#FB8C00', fontSize: 24 }} />
          <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem' }}>
            Status: {cards?.Status?.status}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: 2 }}>
          <WatchLaterRoundedIcon sx={{ color: '#9C27B0', fontSize: 24 }} />
          <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem' }}>
            Date of creation: {cards.createdAt}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: 2 }}>
          <LocationOnIcon sx={{ color: '#2196F3', fontSize: 24 }} />
          <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem' }}>
            {cards.city}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: 2 }}>
          <MonetizationOnIcon sx={{ color: '#4CAF50', fontSize: 24 }} />
          <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem' }}>
            {cards.salary}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: 2 }}>
          <DescriptionIcon sx={{ color: '#607D8B', fontSize: 24 }} />
          <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem' }}>
            {cards.description}
          </Typography>
        </Stack>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Link to="/candidate" style={{ textDecoration: 'none' }}>
            <Button
              variant={variant}
              size="large"
              color="error"
              aria-label="danger button group"
              onClick={createOnClick('outlined')}
              startIcon={<ArrowBackIcon />}
              sx={{
                minWidth: '120px',
                fontSize: '1.1rem',
                padding: '8px 24px',
              }}
            >
              Назад
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}
