import React from 'react';
import { Box, TextField, InputAdornment, Typography, IconButton, Avatar, Stack } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
// import TemplateCards from './Cards/TemplateCards';
import user_bgimage from "../../Assets/user_page.jpg"
// import { Button } from 'bootstrap';
import Button from '@mui/material/Button';


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

const UserWelcomePage = () => {
    return (
        // <Box sx={{ width: '100%', textAlign: 'center', mt: 8, mb: 4,background:`url:${user_bgimage}`}}>

        // </Box>
        <Box
            sx={{
                width: '100%',
                textAlign: 'center',
                height: "100%",
                backgroundImage: `url(${user_bgimage})`, // Correct format for background image
                backgroundSize: 'cover', // Ensures the image covers the entire box
                backgroundPosition: 'center', // Centers the background image
                backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
                // Adjust the height to fit the background
            }}
        >
            {/* <Box sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                <h2 style={{color:"White",fontWeight:"800"}}> WELCOME TO QUIZZ PLAY!!</h2>
            </Box> */}
            {/* <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start", // Aligns horizontally to the left
                    alignItems: "center", // Centers vertically in the container
                    height: "100%", // Ensures the inner Box takes the full height of the parent
                    paddingLeft: "20px", // Optional: Adds some padding to the left
                }}
            >
                <h2 style={{ color: "White", fontWeight: "800" }}>
                    WELCOME TO QUIZZ PLAY!!
                </h2>
                <Box>
                    <Button>
                        Let's Start
                    </Button>
                </Box>
                
            </Box> */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start", // Aligns horizontally to the left
                    alignItems: "center", // Centers vertically in the container
                    height: "100%", // Ensures the inner Box takes the full height of the parent
                    paddingLeft: "30px", // Optional: Adds some padding to the left
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column" }}>

                    <Box>

                        <h2 style={{ color: "white", fontWeight: "800"}}>
                            WELCOME TO QUIZZ PLAY!!
                        </h2>
                    </Box>
                    <Box sx={{marginTop:"20px"}}>
                        <Button
                            sx={{
                                backgroundColor: "#ff4081", // Sets the initial background color
                                color: "#fff", // White text color
                                padding: "10px 20px", // Adds some padding for a larger button
                                fontSize: "16px", // Increases font size
                                fontWeight: "bold", // Makes the text bold
                                borderRadius: "8px", // Rounds the corners
                                textTransform: "none", // Disables the uppercase transformation
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Adds a shadow for depth
                                "&:hover": {
                                    backgroundColor: "#f50057", // Darker color on hover
                                    boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.3)", // Enhances shadow on hover
                                },
                                "&:focus": {
                                    outline: "none",
                                    boxShadow: "0px 0px 10px rgba(255, 64, 129, 0.5)", // Adds a focus shadow effect
                                },
                            }}
                        >
                            Let's Start
                        </Button>
                    </Box>

                </Box>
            </Box>


        </Box>
    );
};

export default UserWelcomePage;
