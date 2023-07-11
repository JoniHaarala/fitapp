import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Home, ExcerciseDetail } from './pages';
import { Navbar, Footer } from './components'
import './App.css';

function App() {
  return (
    <Box width='400px' m='auto' sx={{width: {xl: '1488px'}}}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExcerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
