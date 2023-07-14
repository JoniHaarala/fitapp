import { Box, Typography, Stack } from '@mui/material'
import Loader from './Loader'

const ExcerciseVideo = ({ exerciseVideos, name }) => {

    if (!exerciseVideos.length) return <Loader />

    return (
        <Box sx={{ mt: { lg: '110px', xs: '20px' } }} p='20px'>
            <Typography textTransform='capitalize' variant='h4'>
                Watch some <span style={{ color: '#ff2625' }}>{name}</span> exercises videos
            </Typography>
            <Stack
                justifyContent='flex-start'
                flexWrap='wrap'
                alignItems='center'
                sx={{
                    flexDirection: { lg: 'row' },
                    mt: { xs: 3 },
                    gap: { lg: '110px', xs: 5 }
                }}
            >
                {
                    exerciseVideos?.slice(0, 3).map((item, i) => (
                        <a
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            className='exercise-video'
                            key={i}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                            <Box>
                                <Typography variant='subtitle1'>
                                    {item.video.title}
                                </Typography>
                                <Typography variant='subtitle2' sx={{ mt: 2 }}>
                                    {item.video.channelName}
                                </Typography>
                            </Box>
                        </a>
                    ))
                }
            </Stack>
        </Box>
    )
}

export default ExcerciseVideo
