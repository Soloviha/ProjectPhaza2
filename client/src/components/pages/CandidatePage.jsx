import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axiosInstance from '../../api/axiosInstance';
import CandidateCard from '../ui/CandidateCard';

export default function CandidatePage() {
  const [candidate, setCandidate] = useState([]);
  useEffect(() => {
    try {
      fetch('/api/cards')
        .then((res) => res.json())
        .then((data) => {
          setCandidate(data);
        });
    } catch (error) {
      console.log({ message: error });
      alert('Что-то пошло не так');
    }
  }, []);

  const deleteHandler = async (id) => {
    try {
      const res = await axiosInstance.delete(`/cards/${id}`);
      if (res.status === 200) {
        setCandidate((value) => value.filter((el) => el.id !== id));
      }
    } catch (error) {
      console.log({ message: error });
      alert('Что-то пошло не так');
    }
  };

  const createHandler = async (e) => {
    e.preventDefault();
    const newCard = Object.fromEntries(new FormData(e.target));
    try {
      const res = await axiosInstance.post('/cards', newCard);
      if (res.status === 200) {
        setCandidate((value) => [...value, res.data]);
      }
    } catch (error) {
      console.log({ message: error });
      alert('Что-то пошло не так');
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Row>
          {candidate.map((el) => (
            <CandidateCard
              key={el.id}
              candidate={el}
              // updateHandler={updateHandler}
              deleteHandler={deleteHandler}
              createHandler={createHandler}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
