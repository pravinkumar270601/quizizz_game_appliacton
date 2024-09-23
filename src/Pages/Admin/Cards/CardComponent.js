
import React from 'react';
import { Box, Typography, IconButton, Button, Card, CardMedia, CardContent, Grid, Container } from '@mui/material';
import { Star, ChevronRight } from '@mui/icons-material';

const CardComponent = ({ title, description, imageUrl, type, questions, plays }) => {
  return (
    <Card sx={{ maxWidth: 240, borderRadius: 2, boxShadow: 3, cursor: 'pointer' }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {type}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {questions} Questions • {plays} plays
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent
