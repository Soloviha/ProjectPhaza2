import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function MainPage() {
  return (
    <Box
      sx={{
        height: '95vh',
        backgroundImage:
          'url("https://bogatyr.club/uploads/posts/2023-03/thumbs/1679419138_bogatyr-club-p-serii-fon-geometriya-vkontakte-9.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        sx={{
          mt: 0,
          mb: 5,
          // backgroundColor: 'rgba(255, 255, 255, 0.80)',
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ color: 'black', fontFamily: 'sans-serif' }}
        >
          Welcome to HUNTFLOW!
        </Typography>

        <Typography
          variant="h5"
          align="center"
          sx={{ color: 'gray', marginBottom: '40px' }}
        >
          Your go-to application for recruiting top-tier talent.
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Typography variant="body1" align="center">
            HUNTFLOW is designed to help you streamline your recruitment process, making
            it easier to connect with highly qualified candidates.
          </Typography>
          <Typography variant="body1" align="center">
            With powerful tools and analytics, you can make data-driven decisions to
            enhance your hiring strategy.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
