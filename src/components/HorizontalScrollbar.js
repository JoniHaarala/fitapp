import { Box } from '@mui/material';
import BodyPart from './BodyPart';
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 870, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (

  <Carousel breakPoints={breakPoints} enableAutoPlay={false} showArrows>
    {data.map((item, index) => (
      <Box
        key={index}
        itemId={index}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />}
      </Box>
    ))}
  </Carousel>

);

export default HorizontalScrollbar;