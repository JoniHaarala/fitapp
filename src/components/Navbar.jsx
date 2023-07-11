import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
        px: 2
      }}
    >
      <Link to='/'>
        <img
          src={logo} alt="logo" width='48px'
          style={{ margin: '0 20px' }}
        />
      </Link>
      <Stack
        direction='row'
        gap={4}
        fontSize={{ sm: '24px', xs: '18px' }}
        alignItems='flex-end'
      >
        <Link to='/'
          style={{
            textDecoration: 'none',
            borderBottom: '3px solid #ff2625',
            color: '#3a1212'
          }}
        >
          Home
        </Link>
        <a
          href='#exersices'
          style={{
            textDecoration: 'none',
            borderBottom: '3px solid #ff2625',
            color: '#3a1212'
          }}
        >
          Exersices
        </a>
      </Stack>
    </Stack >
  )
}

export default Navbar
