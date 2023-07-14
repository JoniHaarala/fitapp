import { Box } from '@mui/material';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import Carousel from "react-elastic-carousel";

const breakPointsBodyParts = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 870, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const breakPointsExercises = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 870, itemsToShow: 3 },
];

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart, isBodyPart }) => {

  return (
    <Carousel breakPoints={isBodyPart ? breakPointsBodyParts : breakPointsExercises} showArrows>
      {
        isBodyPart
          ? data.map((item, index) => (
            <Box
              key={index}
              itemId={index}
              title={item.id || item}
              m="0 40px"
            >
              {
                bodyParts && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
              }
            </Box>
          ))
          : data.slice(0, 9).map((item, index) => (
            <Box
              key={index}
              itemId={index}
              title={item.id || item}
              m="0 40px"
            >
              {
                <ExerciseCard exercise={item} />
              }
            </Box>
          ))
      }
    </Carousel>
  )
};

export default HorizontalScrollbar;