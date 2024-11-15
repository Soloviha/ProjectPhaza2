import { Box, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';

export default function TabBar({ candidates, setFilteredCandidates }) {
  const [value, setValue] = useState('all');
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    axiosInstance
      .get('/statuses')
      .then(({ data }) => {
        setStatuses(data);
      })
      .catch((error) => {
        console.error('Error loading statuses:', error);
        alert('Не удалось загрузить статусы.');
      });
  }, []);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === 'all') {
      setFilteredCandidates(candidates);
    } else {
      const filtered = candidates.filter(
        (candidate) => candidate.statusId === parseInt(newValue, 10),
      );
      setFilteredCandidates(filtered);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 4,
        mt: 2,
      }}
    >
      <Tabs
        value={value}
        onChange={handleTabChange}
        textColor="white"
        indicatorColor="secondary"
        sx={{
          '& .MuiTab-root': {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1rem',
            fontWeight: 400,
            minWidth: '120px',
            '&.Mui-selected': {
              color: 'white',
            },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'white',
          },
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '8px',
          padding: '8px',
        }}
      >
        <Tab value="all" label="Все кандидаты" />
        {statuses.map((status) => (
          <Tab key={status.id} value={status.id.toString()} label={status.status} />
        ))}
      </Tabs>
    </Box>
  );
}
