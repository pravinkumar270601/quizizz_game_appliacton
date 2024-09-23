import React from 'react';
import { Box, TextField, InputAdornment, Typography, IconButton, Avatar, Stack } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import TemplateCards from './Cards/TemplateCards';

const subjects = [
  { name: 'Math', imgSrc: 'https://cf.quizizz.com/image/subject-math.png' },
  { name: 'English', imgSrc: 'https://cf.quizizz.com/image/subject-english.png' },
  { name: 'Social Studies', imgSrc: 'https://cf.quizizz.com/image/subject-social-studies.png' },
  { name: 'Languages', imgSrc: 'https://cf.quizizz.com/image/subject-world-languages.png' },
  { name: 'Science', imgSrc: 'https://cf.quizizz.com/image/subject-science.png' },
  { name: 'Computers', imgSrc: 'https://cf.quizizz.com/image/subject-computers.png' },
  { name: 'Career Ed', imgSrc: 'https://cf.quizizz.com/image/subject-career-ed-professional-development.png' },
  { name: 'Creative Arts', imgSrc: 'https://cf.quizizz.com/image/subject-arts-music.png' },
  { name: 'Health & PE', imgSrc: 'https://cf.quizizz.com/image/subject-physical-ed.png' },
];

const SearchComponent = () => {
  return (
    <Box sx={{ width: '100%', textAlign: 'center', mt: 8, mb: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        What will you teach today?
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          // backgroundColor: 'background.paper',
          // boxShadow: 3,
          // borderRadius: 2,
          p: { xs: 1, md: 2 },
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        <TextField
          fullWidth
          placeholder="Search for activities on any topic"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <ChevronRight />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              fontSize: { xs: '0.875rem', md: '1.5rem' },
              fontWeight: 'bold',
              background: "white"
            },
          }}
        />
      </Box>

      <Box sx={{ overflowX: 'auto', mt: 4 }} >
        <Stack direction="row" spacing={3} sx={{ py: 2, px: 2, justifyContent: "center" }}>
          {subjects.map((subject, index) => (
            <Box key={index} sx={{
              cursor: 'pointer', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' }, display: "flex",
              flexDirection: "column",

              alignItems: "center"
            }}>
              <Avatar
                alt={`${subject.name}_image`}
                src={subject.imgSrc}
                sx={{ width: 56, height: 56, border: '2px solid', borderColor: 'divider', alignItems: "center" }}
              />
              <Typography variant="caption" sx={{ fontWeight: 'bold', mt: 1 }}>
                {subject.name}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
        <TemplateCards />
    </Box>
  );
};

export default SearchComponent;
