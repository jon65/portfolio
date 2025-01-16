import React from 'react';
import { Button, Stack } from '@mui/material';
import { styled } from '@mui/system';

const GradientButton = styled(Button)(({ theme }) => ({
  border: '2px solid transparent', // Transparent border for the gradient
  borderRadius: '8px',
  padding: '8px 16px',
  fontSize: '16px',
  color: '#fff',
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'linear-gradient(black, black), linear-gradient(90deg, #ff7eb3, #ff758c, #ffe57e)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 10px rgba(255, 118, 137, 0.6)',
  },
}));

export default GradientButton;
