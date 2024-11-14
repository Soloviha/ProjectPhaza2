import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axiosInstance from '../../api/axiosInstance';
import CandidateCard from '../ui/CandidateCard';

export default function CandidatePage() {
  const [candidate, setCandidate] = useState([]);
  useEffect(() => {
    try {
      axiosInstance.get(`/cards`).then(({ data }) => {
        setCandidate(data);
      });
    } catch (error) {
      console.log({ message: error });
      alert('Что-то пошло не так');
    }
  }, []);

  console.log(candidate);

  const createHandler = async (e) => {
    try {
      e.preventDefault();
      const newCard = Object.fromEntries(new FormData(e.target));
      const res = await axiosInstance.post('/cards', newCard);
      if (res.status === 200) {
        setCandidate((value) => [...value, res.data]);
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
      const newCandidate = await res.data;
      setCandidate((prev) => prev.map((el) => (el.id === id ? newCandidate : el)));
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
        setCandidate((value) => value.filter((el) => el.id !== id));
      }
    } catch (error) {
      console.log({ message: error });
      alert('Что-то пошло не так!');
    }
  };

  return (
    <div
      style={{
        height: '100%',
        backgroundImage: 'url("../../../public/IMG_1846.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <div className="row">
          {candidate.map((el) => (
            <div className="col-6" key={el.id}>
              <CandidateCard
                candidate={el}
                createHandler={createHandler}
                deleteHandler={deleteHandler}
                updateHandler={updateHandler}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
