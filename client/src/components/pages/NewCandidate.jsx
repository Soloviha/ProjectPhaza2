import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import CandidateCreate from '../ui/CandidateCreate';

export default function NewCandidate() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        paddingTop: { xs: '56px', sm: '64px' },
        backgroundImage: 'url("../../../public/6h-media-unsplash.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '16px',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          margin: '2rem auto',
          overflow: 'auto',
        }}
      >
        <CandidateCreate />
      </Container>
    </Box>
  );
}
