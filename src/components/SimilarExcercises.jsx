import { Box, Typography, Stack } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExcercises = ({ targetMuscleExercises, equipmentExercises }) => {

  return (
    <Box sx={{ mt: { lg: '80px', xs: '10px' } }}>
      <Typography variant='h4'>
        exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{ p: 2, position: 'relative' }}>
        {
          targetMuscleExercises.length 
          ? <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExcercises