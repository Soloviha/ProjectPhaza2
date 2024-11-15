import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axiosInstance from '../../api/axiosInstance';
import CandidateCard from '../ui/CandidateCard';
import TabBar from '../ui/TabBar';

export default function CandidatePage() {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);

  useEffect(() => {
    try {
      axiosInstance.get(`/cards`).then(({ data }) => {
        setCandidates(data);
        setFilteredCandidates(data);
      });
    } catch (error) {
      console.log({ message: error });
      alert('Что-то пошло не так');
    }
  }, []);

  const createHandler = async (e) => {
    try {
      e.preventDefault();
      const newCard = Object.fromEntries(new FormData(e.target));
      const res = await axiosInstance.post('/cards', newCard);
      if (res.status === 200) {
        const updatedCandidates = [...candidates, res.data];
        setCandidates(updatedCandidates);
        setFilteredCandidates(updatedCandidates);
      }
    } catch (error) {
      console.log({ message: error });
      alert('Что-то пошло не так!');
    }
  };

  const updateHandler = async (e, id) => {
    try {
      e.preventDefault();
      const data = e.target;
      const newData = Object.fromEntries(new FormData(data));
      const res = await axiosInstance.put(`/cards/${id}`, newData);
      const newCandidate = res.data;

      const updatedCandidates = candidates.map((el) =>
        el.id === id ? newCandidate : el,
      );

      setCandidates(updatedCandidates);
      setFilteredCandidates(updatedCandidates);
      e.target.reset();
    } catch (error) {
      console.log({ message: error });
      alert('Что-то пошло не так!');
    }
  };

  const deleteHandler = async (id) => {
    try {
      const res = await axiosInstance.delete(`/cards/${id}`);
      if (res.status === 200) {
        const updatedCandidates = candidates.filter((el) => el.id !== id);
        setCandidates(updatedCandidates);
        setFilteredCandidates(updatedCandidates);
      }
    } catch (error) {
      console.log({ message: error });
      alert('Что-то пошло не так!');
    }
  };

  return (
    <Box
      sx={{
        background:
          'linear-gradient(145deg, rgba(30, 30, 30, 0.95), rgba(69, 69, 69, 0.8), rgba(40, 40, 40, 0.9))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: { xs: '56px', sm: '64px' },
      }}
    >
      <Container className="py-5">
        <TabBar candidates={candidates} setFilteredCandidates={setFilteredCandidates} />
        <Row className="g-4 justify-content-center">
          {filteredCandidates.map((el) => (
            <div className="col-6" key={el.id}>
              <CandidateCard
                candidate={el}
                createHandler={createHandler}
                deleteHandler={deleteHandler}
                updateHandler={updateHandler}
              />
            </div>
          ))}
        </Row>
      </Container>
    </Box>
  );
}
