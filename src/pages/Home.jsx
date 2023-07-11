import { useState } from 'react';
import { Box } from '@mui/material';
import { SearchExercises, Exercises, HeroBanner } from '../components';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  //traemos estos datos aca al home ya que el cambio de estado de estos va a afectar en toda la app
  // nota: podes usar useContext o redux para esto pero como es algo puntual lo podemos evitar
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home