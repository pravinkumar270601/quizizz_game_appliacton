// // // import React from 'react'

// // // import { Box, Typography, Paper, IconButton, SvgIcon, Button } from "@mui/material";
// // // import { AccountCircle, EmojiEvents, SportsEsports } from '@mui/icons-material';
// // // import imaege_background from "../../../Assets/bg_image.jpg"


// // // const GameEndPage = () => {
// // //     return (
// // //         <Box className="page-container" sx={{ height: "100vh", opacity: 1 , backgroundImage: `url(${imaege_background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
// // //             <Box className="screen-summary" sx={{display:"flex",alignItems:"center", minHeight: "100%" ,margin:"auto"}}>
// // //                 <Paper
// // //                     elevation={3}
// // //                     className="screen-container"
// // //                     sx={{
// // //                         borderRadius: "16px 16px 0 0",
// // //                         padding: 2,
// // //                         backgroundColor: "#1a1a1a",
// // //                         color: "#fff",
// // //                     }}
// // //                 >
// // //                     {/* Title */}
// // //                     <Typography
// // //                         variant="h6"
// // //                         align="center"
// // //                         sx={{ fontWeight: 500, color: "#9e9e9e" }}
// // //                     >
// // //                         Summary
// // //                     </Typography>

// // //                     {/* Game Type */}
// // //                     <Box
// // //                         className="game-type-title-wrapper"
// // //                         sx={{
// // //                             display: "flex",
// // //                             justifyContent: "center",
// // //                             mt: 2,
// // //                         }}
// // //                     >
// // //                         <Box
// // //                             className="game-type-title"
// // //                             sx={{
// // //                                 display: "flex",
// // //                                 alignItems: "center",
// // //                                 backgroundColor: "rgba(255, 255, 255, 0.1)",
// // //                                 padding: "8px 12px",
// // //                                 borderRadius: "8px",
// // //                             }}
// // //                         >
// // //                             <AccountCircle sx={{ fontSize: 16, mr: 1, color: "#9e9e9e" }} />
// // //                             <Typography variant="caption" sx={{ color: "#9e9e9e", fontWeight: 500 }}>
// // //                                 Solo review
// // //                             </Typography>
// // //                         </Box>
// // //                     </Box>

// // //                     {/* Quiz Completed Message */}
// // //                     <Box sx={{ textAlign: "center", mt: 2 }}>
// // //                         <Typography variant="h5" sx={{ fontWeight: "bold", color: "#e0e0e0" }}>
// // //                             Congratulations, you finished the quiz.
// // //                         </Typography>
// // //                     </Box>

// // //                     {/* Player Information */}
// // //                     <Box className="player-stats" sx={{ mt: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
// // //                         <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
// // //                             VALLARASU K
// // //                         </Typography>
// // //                         <Box sx={{ mt: 3, display: "flex", alignItems: "center" }}>
// // //                             <SvgIcon sx={{ width: 40, height: 40, mr: 1 }}>
// // //                                 {/* Custom Coin Icon */}
// // //                                 <path d="M26.5484 13.5001C26.5484 20.4309 20.9308 26.0485 14 26.0485C7.06911 26.0485 1.45154 20.4309 1.45154 13.5001C1.45154 6.56923 7.06911 0.951659 14 0.951659C20.9308 0.951659 26.5484 6.56923 26.5484 13.5001Z" fill="url(#paint0_linear)" stroke="url(#paint1_linear)" strokeWidth="1.5" />
// // //                                 <path opacity="0.5" d="M2.98011 20.7358C3.08745 20.9028 3.20075 21.0578 3.30808 21.2069L21.3224 2.36373C21.1554 2.2564 20.9765 2.1431 20.7917 2.02981C20.6068 1.91651 20.4279 1.81514 20.249 1.71973C14.3755 7.86165 8.50188 14.0036 2.6283 20.1455C2.73563 20.3363 2.84893 20.5331 2.98011 20.7358Z" fill="#FFE7BB" />
// // //                             </SvgIcon>
// // //                             <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ffb74d" }}>
// // //                                 500 coins
// // //                             </Typography>
// // //                         </Box>
// // //                     </Box>

// // //                     {/* Avatar Link */}
// // //                     <Box sx={{ mt: 3, textAlign: "center" }}>
// // //                         <Button
// // //                             variant="contained"
// // //                             color="primary"
// // //                             href="/join/avatar-shop"
// // //                             target="_blank"
// // //                             sx={{
// // //                                 padding: 2,
// // //                                 backgroundColor: "#333",
// // //                                 borderRadius: "16px",
// // //                                 minWidth: 200,
// // //                             }}
// // //                         >
// // //                             <Typography variant="button" sx={{ fontWeight: "bold" }}>
// // //                                 Avatar Shop
// // //                             </Typography>
// // //                         </Button>
// // //                     </Box>
// // //                 </Paper>
// // //             </Box>
// // //         </Box>
// // //     )
// // // }

// // // export default GameEndPage


import React from 'react';

import { Box, Typography, Paper, IconButton, SvgIcon, Button } from "@mui/material";
import { AccountCircle, EmojiEvents, SportsEsports } from '@mui/icons-material';
import image_background from "../../../Assets/bg_image.jpg";
import coins_imag from "../../../Assets/4917459.webp"
import { useNavigate } from 'react-router-dom';
import success_page from "../../../Assets/Success_page.png"



const GameEndPage = ({score}) => {
    const navigate=useNavigate()
    const handleReturnPublish=()=>{
        navigate("/admin/mylibrary")
    }

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
            <Box 
                className="screen-summary" 
                sx={{ 
                    display: "flex", 
                    justifyContent: "center",  // Center horizontally
                    alignItems: "center",  // Center vertically
                    // minHeight: "100%", 
                    // minHeight:"50vh"
                    height:"100%"
                }}
            >
                <Paper
                    elevation={3}
                    className="screen-container"
                    sx={{
                        borderRadius: "16px",
                        padding: 2,
                        backgroundColor: "#1a1a1a",
                        color: "#fff",
                        height:"70vh",
                        display:"flex",
                        flexDirection:"column",
                        alignItems:'center',
                        justifyContent:'center'

                    }}
                >
                    {/* Title */}
                    {/* <Box component="img" src={success_page} sx={{ width: 50, height: 50 }} /> */}

                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ fontWeight: 500, color: "#9e9e9e" }}
                    >
                        Summary
                    </Typography>
                    <Box component="img" src={success_page} sx={{ width: 50, height: 50 ,mt:2}} />


                    {/* Game Type */}
                    <Box
                        className="game-type-title-wrapper"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 2,
                        }}
                    >
                        {/* <Box
                            className="game-type-title"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                padding: "8px 12px",
                                borderRadius: "8px",
                            }}
                        >
                            <AccountCircle sx={{ fontSize: 16, mr: 1, color: "#9e9e9e" }} />
                            <Typography variant="caption" sx={{ color: "#9e9e9e", fontWeight: 500 }}>
                                Solo review
                            </Typography>
                        </Box> */}
                    </Box>

                    {/* Quiz Completed Message */}
                    <Box sx={{ textAlign: "center", mt: 2 }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#e0e0e0" }}>
                            Congratulations, you finished the quiz.
                        </Typography>
                    </Box>

                    {/* Player Information */}
                    <Box className="player-stats" sx={{ mt: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
                            VALLARASU K
                        </Typography>
                        <Box sx={{ mt: 3,p:1, display: "flex", alignItems: "center",border:'1px solid #ffb74d' ,borderRadius:"5px"}}>
                            {/* <SvgIcon sx={{ width: 40, height: 40, mr: 1 }}> */}
                                {/* Custom Coin Icon */}
                                {/* <img src={coins_imag}></img> */}
                            {/* </SvgIcon> */}
                            <Box component="img" src={coins_imag} sx={{ width: 30, height: 30 }} />
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ffb74d" }}>
                                {score} Coins
                            </Typography>
                        </Box>
                    </Box>

                    {/* Avatar Link */}
                    <Box sx={{ mt: 3, textAlign: "center" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleReturnPublish}

                            sx={{
                                padding: 2,
                                backgroundColor: "#333",
                                borderRadius: "16px",
                                minWidth: 200,
                            }}
                        >
                            <Typography variant="button"  sx={{ fontWeight: "bold" }}>
                               Go to Publish
                            </Typography>
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}

export default GameEndPage;



