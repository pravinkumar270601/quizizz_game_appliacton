import React from 'react';
import { Box, TextField, InputAdornment, Typography, IconButton, Avatar, Stack } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import TemplateCards from './Cards/TemplateCards';
import math_image from "../../Assets/subject-math.png"
import subject_english from "../../Assets/subject-english.png"
import subject_social_studies from "../../Assets/subject-social-studies.png"
import subject_world_languages from "../../Assets/subject-world-languages.png"
import subject_science from "../../Assets/subject-science.png"
import subject_computers from "../../Assets/subject-computers.png"
import subject_career from "../../Assets/subject-career-ed-professional-development.png"
import  subject_arts_music from "../../Assets/subject-arts-music.png"
import subject_physical from "../../Assets/subject-physical-ed.png"


const subjects = [
  { name: 'Math', imgSrc: math_image },
  { name: 'English', imgSrc:  subject_english},
  { name: 'Social Studies', imgSrc:  subject_social_studies},
  { name: 'Languages', imgSrc: subject_world_languages },
  { name: 'Science', imgSrc: subject_science },
  { name: 'Computers', imgSrc:  subject_computers},
  { name: 'Career Ed', imgSrc:subject_career },
  { name: 'Creative Arts', imgSrc:  subject_arts_music},
  { name: 'Health & PE', imgSrc: subject_physical},
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
