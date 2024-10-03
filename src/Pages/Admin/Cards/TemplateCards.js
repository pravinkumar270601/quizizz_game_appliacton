import React from 'react';
import { Box, Typography, IconButton, Button, Card, CardMedia, CardContent, Grid, Container } from '@mui/material';
import { Star, ChevronRight } from '@mui/icons-material';
import CardComponent from './CardComponent';
import card_image from "../../../Assets/card_imageemoj.png"

const TemplateCards = () => {
    return (
      <Container sx={{ mt: 8 }}>
        <Box display="flex" alignItems="center" mb={4}>
          <IconButton sx={{ color: 'primary.main' }}>
            <Star />
          </IconButton>
          <Typography variant="h5" sx={{ ml: 2, fontWeight: 'bold' }}>
            Templates
          </Typography>
          <Box ml="auto">
            <Button
              variant="contained"
              endIcon={<ChevronRight />}
              sx={{
                bgcolor: 'purple',
                color: 'white',
                textTransform: 'none',
                borderRadius: '20px',
                px: 3,
                '&:hover': { bgcolor: 'purple' }
              }}
            >
              See more
            </Button>
          </Box>
        </Box>
        
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardComponent
              title="Daily Check-in"
              description="4 Questions"
              imageUrl={card_image}
              type="QUIZ"
              questions="4"
              plays="173.4K"
            />
          </Grid>
          {/* Repeat for other cards */}
        </Grid>
      </Container>
    );
  };
  
  export default TemplateCards;