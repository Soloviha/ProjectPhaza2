import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function MainPage() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: { xs: '56px', sm: '64px' },
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("../../../public/3h-media-unsplash.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          maxWidth: '400px',
          padding: '2rem',
          backgroundColor: 'rgba(69, 69, 69, 0.9)',
          borderRadius: '8px',
        }}
      >
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ color: 'white', fontFamily: 'sans-serif' }}
        >
          <p>
            <span
              style={{
                background: 'linear-gradient(to right, red, black)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
              }}
            >
              Welcomе
            </span>{' '}
            to HUNTFLOW📌
          </p>
        </Typography>

        <Typography
          variant="h5"
          align="center"
          sx={{ color: 'white', marginBottom: '40px' }}
        >
          Your go-to application for recruiting top-tier talent.
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: 'white', fontFamily: 'sans-serif' }}
          >
            HUNTFLOW is designed to help you streamline your recruitment process, making
            it easier to connect with highly qualified candidates.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: 'white', fontFamily: 'sans-serif' }}
          >
            With powerful tools and analytics, you can make data-driven decisions to
            enhance your hiring strategy.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
