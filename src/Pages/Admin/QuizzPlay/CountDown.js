
import React, { useEffect, useState } from 'react';
import './Countdown.css'; // Make sure to create a CSS file for styles
import { Box } from '@mui/material';
import image_background from "../../../Assets/bg_image.jpg";
import { useNavigate } from 'react-router-dom';

const CountDown = () => {
    const [counter, setCounter] = useState(3);
    const [showText, setShowText] = useState(true);
    const navigate =useNavigate()

    useEffect(() => {
        if (counter < 0) return;

        const timer = setInterval(() => {
            setCounter((prev) => {
                if (prev > 0) {
                    setShowText(true);
                    return prev - 1;
                } else {
                    setShowText(false);
                    clearInterval(timer);
                    return prev; // Stop updating counter when it reaches 0
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [counter]);

 

    useEffect(() => {
        if (counter === 0) {
            setTimeout(() => {
                navigate('/admin/playquizz'); // Navigate to '/playquizz'
            }, 1000); // Adjust this delay as needed
        }
    }, [counter, navigate]);

    return (
        <Box
            className="page-container"
            sx={{
                height: "100vh",
                opacity: 1,
                backgroundImage: `url(${image_background})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {showText && (
                <span
                    id="countdown"
                    style={{
                        fontSize: counter > 0 ? '30vw' : '20vw', // Set font size to 40vw for counts and 0vw for "SMILE!!"
                        // opacity: 0.5,
                        transition: '1s',
                        color: 'white',
                        position: 'absolute',
                        // background: "red",
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {counter === 0 ? "Go!" : counter}
                </span>
            )}
        </Box>
    );
};

export default CountDown;
