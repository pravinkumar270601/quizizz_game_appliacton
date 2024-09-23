// // import React from 'react'

// // const CreateScratch = () => {
// //   return (
// //     <div style={{border:"1px solid #09090933",height:"80vh",borderRadius:"3px"}}>CreateScratch</div>
// //   )
// // }

// // export default CreateScratch


// // import React from 'react';
// // import {
// //     Box,
// //     Button,
// //     Grid,
// //     InputAdornment,
// //     TextField,
// //     Typography,
// //     IconButton
// // } from '@mui/material';
// // import { Search, Check, Rectangle, Draw, FormatAlignLeft, Videocam, Mic, Poll, Cloud, Layers, SignalCellularAlt } from '@mui/icons-material';

// // const CreateScratch = () => {
// //     return (
// //     // <div style={{border:"1px solid #09090933",height:"80vh",borderRadius:"3px",overflowX:"scroll"}}>

// //     <Box
// //       sx={{
// //         borderRadius: 2,
// //         overflow: 'auto',
// //         display: 'flex',
// //         flexDirection: 'column',
// //         gap: 3,
// //         p: 2,
// //         border:"1px solid #09090933",height:"80vh",borderRadius:"3px",overflowX:"scroll"
// //       }}
// //     >
// //       <Box
// //         sx={{
// //         //   backgroundColor: 'lightgrey',
// //           p: 2,
// //           borderRadius: 2,
// //           border: '1px solid',
// //           borderColor: 'grey.400',
// //         }}
// //       >
// //         <Typography variant="subtitle1" fontWeight="bold" mb={2}>
// //           Search questions from quizzes made by other teachers
// //         </Typography>

// //         <TextField
// //           variant="outlined"
// //           fullWidth
// //           placeholder="Search from millions of free quizzes"
// //           InputProps={{
// //             startAdornment: (
// //               <InputAdornment position="start">
// //                 <Search />
// //               </InputAdornment>
// //             ),
// //           }}
// //         />
// //         <Button
// //           variant="contained"
// //           disabled
// //           sx={{
// //             mt: 1,
// //             width: '100%',
// //             // backgroundColor: 'grey.600',
// //             color: 'white',
// //             fontWeight: 'bold',
// //             textTransform: 'none',
// //             '&:hover': {
// //               backgroundColor: 'grey.700',
// //             },
// //           }}
// //         >
// //           Search quizzes
// //         </Button>

// //         <Typography variant="h6" fontWeight="bold" mt={4}>
// //           Or select a question type to add question
// //         </Typography>

// //         <Grid container spacing={2} sx={{ mt: 2 }}>
// //           <Grid item xs={6}>
// //             <Button
// //               variant="outlined"
// //               fullWidth
// //               sx={{
// //                 textAlign: 'left',
// //                 justifyContent: 'flex-start',
// //                 gap: 1,
// //               }}
// //             >
// //               <IconButton >
// //                 <Check />
// //               </IconButton>
// //               <Typography variant="body2" fontWeight="600" color="black">
// //                 Multiple Choice
// //               </Typography>
// //             </Button>
// //           </Grid>

// //           <Grid item xs={6}>
// //             <Button
// //               variant="outlined"
// //               fullWidth
// //               sx={{
// //                 textAlign: 'left',
// //                 justifyContent: 'flex-start',
// //                 gap: 1,
// //               }}
// //             >
// //               <IconButton >
// //                 <Rectangle />
// //               </IconButton>
// //               <Typography variant="body2" fontWeight="600" color="black">
// //                 Fill in the Blank
// //               </Typography>
// //             </Button>
// //           </Grid>
// //         </Grid>

// //         <Typography variant="body2" fontWeight="600" color="rgb(109 109 109)" mt={4}>
// //           Open ended responses
// //         </Typography>

// //         <Grid container spacing={2} sx={{ mt: 2 }}>
// //           <Grid item xs={6}>
// //             <Button
// //               variant="outlined"
// //               fullWidth
// //               sx={{
// //                 textAlign: 'left',
// //                 justifyContent: 'flex-start',
// //                 gap: 1,
// //               }}
// //             >
// //               <IconButton >
// //                 <Draw />
// //               </IconButton>
// //               <Typography variant="body2" fontWeight="600" color="black">
// //                 Draw
// //               </Typography>
// //             </Button>
// //           </Grid>

// //           <Grid item xs={6}>
// //             <Button
// //               variant="outlined"
// //               fullWidth
// //               sx={{
// //                 textAlign: 'left',
// //                 justifyContent: 'flex-start',
// //                 gap: 1,
// //               }}
// //             >
// //               <IconButton >
// //                 <FormatAlignLeft />
// //               </IconButton>
// //               <Typography variant="body2" fontWeight="600" color="black">
// //                 Open Ended
// //               </Typography>
// //             </Button>
// //           </Grid>

// //           <Grid item xs={6}>
// //             <Button
// //               variant="outlined"
// //               fullWidth
// //               sx={{
// //                 textAlign: 'left',
// //                 justifyContent: 'flex-start',
// //                 gap: 1,
// //               }}
// //             >
// //               <IconButton >
// //                 <Videocam />
// //               </IconButton>
// //               <Typography variant="body2" fontWeight="600" color="black">
// //                 Video Response
// //               </Typography>
// //             </Button>
// //           </Grid>

// //           <Grid item xs={6}>
// //             <Button
// //               variant="outlined"
// //               fullWidth
// //               sx={{
// //                 textAlign: 'left',
// //                 justifyContent: 'flex-start',
// //                 gap: 1,
// //               }}
// //             >
// //               <IconButton >
// //                 <Mic />
// //               </IconButton>
// //               <Typography variant="body2" fontWeight="600" color="black">
// //                 Audio Response
// //               </Typography>
// //             </Button>
// //           </Grid>

// //           <Grid item xs={6}>
// //             <Button
// //               variant="outlined"
// //               fullWidth
// //               sx={{
// //                 textAlign: 'left',
// //                 justifyContent: 'flex-start',
// //                 gap: 1,
// //               }}
// //             >
// //               <IconButton >
// //                 <Poll />
// //               </IconButton>
// //               <Typography variant="body2" fontWeight="600" color="black">
// //                 Poll
// //               </Typography>
// //             </Button>
// //           </Grid>

// //           <Grid item xs={6}>
// //             <Button
// //               variant="outlined"
// //               fullWidth
// //               sx={{
// //                 textAlign: 'left',
// //                 justifyContent: 'flex-start',
// //                 gap: 1,
// //               }}
// //             >
// //               <IconButton >
// //                 <Cloud />
// //               </IconButton>
// //               <Typography variant="body2" fontWeight="600" color="black">
// //                 Word Cloud
// //               </Typography>
// //             </Button>
// //           </Grid>

// //           <Grid item xs={6}>
// //             <Button
// //               variant="outlined"
// //               fullWidth
// //               sx={{
// //                 textAlign: 'left',
// //                 justifyContent: 'flex-start',
// //                 gap: 1,
// //               }}
// //             >
// //               <IconButton >
// //                 <Layers />
// //               </IconButton>
// //               <Typography variant="body2" fontWeight="600" color="black">
// //                 Match
// //               </Typography>
// //             </Button>
// //           </Grid>

// //           <Grid item xs={6}>
// //             <Button
// //               variant="outlined"
// //               fullWidth
// //               sx={{
// //                 textAlign: 'left',
// //                 justifyContent: 'flex-start',
// //                 gap: 1,
// //               }}
// //             >
// //               <IconButton >
// //                 <SignalCellularAlt />
// //               </IconButton>
// //               <Typography variant="body2" fontWeight="600" color="black">
// //                 Reorder
// //               </Typography>
// //             </Button>
// //           </Grid>
// //         </Grid>
// //       </Box>
// //     </Box>
// // // </div>
// //     );
// // };

// // export default CreateScratch;



// // import React from 'react';
// // import {
// //     Box,
// //     Button,
// //     Grid,
// //     InputAdornment,
// //     TextField,
// //     Typography,
// //     IconButton
// // } from '@mui/material';
// // import { Search, Check, Rectangle, Draw, FormatAlignLeft, Videocam, Mic, Poll, Cloud, Layers, SignalCellularAlt } from '@mui/icons-material';

// // import { IoIosCheckbox } from "react-icons/io";
// // import "./CreateScratch.css"
// // import { PiRectangle } from 'react-icons/pi';
// // import { Card, CardMedia, CardContent, Chip } from '@mui/material';
// // import { FaRegHandPaper } from "react-icons/fa";
// // import { FaRegCaretSquareDown } from "react-icons/fa";

// // import { LuMousePointerClick } from "react-icons/lu";
// // import { BiMessageAdd } from "react-icons/bi";
// // import { HiOutlineViewColumns } from "react-icons/hi2";
// // import { TbMathFunction } from "react-icons/tb";

// // import { FaChartLine } from "react-icons/fa6";
// // import { LuPresentation } from "react-icons/lu";




// // const CreateScratch = () => {
// //     return (
// //         <Box
// //             sx={{
// //                 borderRadius: 2,
// //                 overflow: 'auto',
// //                 display: 'flex',
// //                 flexDirection: 'column',
// //                 gap: 3,
// //                 p: 2,
// //                 border: "1px solid #09090933",
// //                 height: "80vh",
// //                 overflowX: "scroll",
// //                 backgroundColor: 'transparent' // Ensures no background color
// //             }}
// //         >
// //             <Box
// //                 sx={{
// //                     p: 2,
// //                     borderRadius: 2,
// //                     //   border: '1px solid',
// //                     //   borderColor: 'grey.400',
// //                     backgroundColor: 'transparent' // Ensures no background color
// //                 }}
// //             >
// //                 <Typography variant="subtitle1" fontWeight="bold" mb={2}>
// //                     Search questions from quizzes made by other teachers
// //                 </Typography>

// //                 <TextField
// //                     variant="outlined"
// //                     fullWidth
// //                     placeholder="Search from millions of free quizzes"
// //                     InputProps={{
// //                         startAdornment: (
// //                             <InputAdornment position="start">
// //                                 <Search />
// //                             </InputAdornment>
// //                         ),
// //                     }}
// //                 />
// //                 <Button
// //                     variant="contained"
// //                     disabled
// //                     sx={{
// //                         mt: 1,
// //                         width: '100%',
// //                         color: 'white',
// //                         fontWeight: 'bold',
// //                         textTransform: 'none',
// //                         '&:hover': {
// //                             backgroundColor: 'grey.700',
// //                         },
// //                     }}
// //                 >
// //                     Search quizzes
// //                 </Button>

// //                 <Typography variant="h6" fontWeight="bold" mt={4}>
// //                     Or select a question type to add question
// //                 </Typography>
// //                 <div >
// //                     <Box sx={{ width: "100%", mr: 2, }}>
// //                         <Grid container spacing={2} sx={{ mt: 0 }}>
                            
// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <Check className='icons_button' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Multiple Choice
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <PiRectangle className='icons_button' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Fill in the Blank
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>
// //                         </Grid>

// //                         <Typography variant="body2" fontWeight="600" color="rgb(109 109 109)" mt={4}>
// //                             Open ended responses
// //                         </Typography>

// //                         <Grid container spacing={2} sx={{ mt: 0 }}>
// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <Draw className='icons_button1' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Draw
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <FormatAlignLeft className='icons_button1' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Open Ended
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <Videocam className='icons_button1' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Video Response
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <Mic className='icons_button1' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Audio Response
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <Poll className='icons_button1' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Poll
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <Cloud className='icons_button1' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Word Cloud
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                         </Grid>

// //                         {/* ----------------------------------------- */}

// //                         <Typography variant="body2" fontWeight="600" color="rgb(109 109 109)" mt={4}>
// //                             Interactive/Higher-order thinking
// //                         </Typography>

// //                         <Grid container spacing={2} sx={{ mt:0 }}>
// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <Layers className='icons_button2' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Match
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <SignalCellularAlt className='icons_button2' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Recorder
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <FaRegHandPaper className='icons_button2' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Drag & Drop
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <FaRegCaretSquareDown className='icons_button2' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Drop Down
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <LuMousePointerClick className='icons_button2' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Hotspots
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <BiMessageAdd className='icons_button2' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Labelling
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <HiOutlineViewColumns className='icons_button2' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Categorize
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>
// //                         </Grid>

// //                         {/* ------------------------------------------------------- */}


// //                         <Typography variant="body2" fontWeight="600" color="rgb(109 109 109)" mt={4}>
// //                             Mathematics
// //                         </Typography>

// //                         <Grid container spacing={2} sx={{ mt: 0}}>
// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <TbMathFunction className='icons_button3' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Math Response
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <FaChartLine className='icons_button3' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         Graphing
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>

// //                         </Grid>

// //                         {/* ----------------------------------------------------------------------------------- */}
// //                         <Typography variant="body2" fontWeight="600" color="rgb(109 109 109)" mt={4}>
// //                             Others
// //                         </Typography>

// //                         <Grid container spacing={2} sx={{ mt: 0 }}>
// //                             <Grid item xs={6}>
// //                                 <Button
// //                                     // variant="outlined"
// //                                     fullWidth
// //                                     sx={{
// //                                         textAlign: 'left',
// //                                         justifyContent: 'flex-start',
// //                                         gap: 1,
// //                                         p: 0
// //                                     }}
// //                                 >
// //                                     <IconButton >
// //                                         <LuPresentation className='icons_button4' />
// //                                     </IconButton>
// //                                     <Typography variant="body2" fontWeight="600" color="black">
// //                                         slide
// //                                     </Typography>
// //                                 </Button>
// //                             </Grid>


// //                         </Grid>
// //                     </Box>










// //                     {/* ---------------------- */}






// //                 </div>
// //             </Box>
// //         </Box>
// //     );
// // };

// // export default CreateScratch;


// import React, { useState } from 'react';
// import {
//     Box,
//     Button,
//     Grid,
//     InputAdornment,
//     TextField,
//     Typography,
//     IconButton
// } from '@mui/material';
// import { Search, Check, Rectangle, Draw, FormatAlignLeft, Videocam, Mic, Poll, Cloud, Layers, SignalCellularAlt } from '@mui/icons-material';

// import { IoIosCheckbox } from "react-icons/io";
// import "./CreateScratch.css"
// import { PiRectangle } from 'react-icons/pi';
// import { FaRegHandPaper } from "react-icons/fa";
// import { FaRegCaretSquareDown } from "react-icons/fa";

// import { LuMousePointerClick } from "react-icons/lu";
// import { BiMessageAdd } from "react-icons/bi";
// import { HiOutlineViewColumns } from "react-icons/hi2";
// import { TbMathFunction } from "react-icons/tb";

// import { FaChartLine } from "react-icons/fa6";
// import { LuPresentation } from "react-icons/lu";
// import { Navigate } from 'react-router-dom';

// const questionTypes = [
//     { label: "Multiple Choice", icon: <Check  className='icons_button'/>, category: "Select a question type" },
//     { label: "Fill in the Blank", icon: <PiRectangle className='icons_button'/>, category: "Select a question type" },
//     { label: "Draw", icon: <Draw  className='icons_button1'/>, category: "Open ended responses" },
//     { label: "Open Ended", icon: <FormatAlignLeft  className='icons_button1'/>, category: "Open ended responses" },
//     { label: "Video Response", icon: <Videocam className='icons_button1'/>, category: "Open ended responses" },
//     { label: "Audio Response", icon: <Mic className='icons_button1'/>, category: "Open ended responses" },
//     { label: "Poll", icon: <Poll className='icons_button1'/>, category: "Open ended responses" },
//     { label: "Word Cloud", icon: <Cloud className='icons_button1'/>, category: "Open ended responses" },
//     { label: "Match", icon: <Layers className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
//     { label: "Recorder", icon: <SignalCellularAlt className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
//     { label: "Drag & Drop", icon: <FaRegHandPaper className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
//     { label: "Drop Down", icon: <FaRegCaretSquareDown className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
//     { label: "Hotspots", icon: <LuMousePointerClick className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
//     { label: "Labelling", icon: <BiMessageAdd className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
//     { label: "Categorize", icon: <HiOutlineViewColumns className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
//     { label: "Math Response", icon: <TbMathFunction className='icons_button3'/>, category: "Mathematics" },
//     { label: "Graphing", icon: <FaChartLine className='icons_button3'/>, category: "Mathematics" },
//     { label: "Slide", icon: <LuPresentation className='icons_button4'/>, category: "Others" },
// ];

// const CreateScratch = () => {
//     const [searchTerm, setSearchTerm] = useState("");

//     const filteredQuestions = questionTypes.filter((type) =>
//         type.label.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     const handleClick=()=>{
//         Navigate("")
//     }

//     return (
//         <Box
//             sx={{
//                 borderRadius: 2,
//                 overflow: 'auto',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: 3,
//                 p: 2,
//                 border: "1px solid #09090933",
//                 height: "80vh",
//                 overflowX: "scroll",
//                 backgroundColor: 'transparent' // Ensures no background color
//             }}
//         >
//             <Box
//                 sx={{
//                     p: 2,
//                     borderRadius: 2,
//                     backgroundColor: 'transparent' // Ensures no background color
//                 }}
//             >
//                 <Typography variant="subtitle1" fontWeight="bold" mb={2}>
//                     Search questions from quizzes made by other teachers
//                 </Typography>

//                 <TextField
//                     // variant="outlined"
//                     fullWidth
//                     placeholder="Search from millions of free quizzes"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     InputProps={{
//                         startAdornment: (
//                             <InputAdornment position="start">
//                                 <Search />
//                             </InputAdornment>
//                         ),
//                     }}
//                     sx={{
//                         '&:hover .MuiOutlinedInput-root': {
//                           borderColor: 'blueviolet',
//                           '& fieldset': {
//                             borderColor: 'blueviolet', // Changes the border color on hover
//                           },
//                         },
//                       }}
//                 />
//                 {/* <Button
//                     variant="contained"
//                     disabled
//                     sx={{
//                         mt: 1,
//                         width: '100%',
//                         color: 'white',
//                         fontWeight: 'bold',
//                         textTransform: 'none',
//                         '&:hover': {
//                             backgroundColor: 'grey.700',
//                         },
//                     }}
//                 >
//                     Search quizzes
//                 </Button> */}

//                 <Typography variant="h6" fontWeight="bold" mt={3}>
//                     Or select a question type to add question
//                 </Typography>
//                 <Box sx={{ width: "100%", mr: 2 }}>
//                     {["Select a question type", "Open ended responses", "Interactive/Higher-order thinking", "Mathematics", "Others"].map((category) => (
//                         <>
//                             {filteredQuestions.some((type) => type.category === category) && (
//                                 <>
//                                     <Typography variant="body2" fontWeight="600" color="rgb(109 109 109)" mt={4}>
//                                         {category}
//                                     </Typography>
//                                     <Grid container spacing={2} sx={{ mt: 0 }}>
//                                         {filteredQuestions.filter((type) => type.category === category).map((type) => (
//                                             <Grid item xs={6} key={type.label}>
//                                                 <Button
//                                                     fullWidth
//                                                     sx={{
//                                                         textAlign: 'left',
//                                                         justifyContent: 'flex-start',
//                                                         gap: 1,
//                                                         p: 0
//                                                     }}
//                                                 >
//                                                     <IconButton>
//                                                         {type.icon}
//                                                     </IconButton>
//                                                     <Typography variant="body2" fontWeight="600" color="black">
//                                                         {type.label}
//                                                     </Typography>
//                                                 </Button>
//                                             </Grid>
//                                         ))}
//                                     </Grid>
//                                 </>
//                             )}
//                         </>
//                     ))}
//                 </Box>
//             </Box>
//         </Box>
//     );
// };

// export default CreateScratch;


import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    InputAdornment,
    TextField,
    Typography,
    IconButton
} from '@mui/material';
import { Search, Check, Rectangle, Draw, FormatAlignLeft, Videocam, Mic, Poll, Cloud, Layers, SignalCellularAlt } from '@mui/icons-material';

import { IoIosCheckbox } from "react-icons/io";
import "./CreateScratch.css";
import { PiRectangle } from 'react-icons/pi';
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegCaretSquareDown } from "react-icons/fa";

import { LuMousePointerClick } from "react-icons/lu";
import { BiMessageAdd } from "react-icons/bi";
import { HiOutlineViewColumns } from "react-icons/hi2";
import { TbMathFunction } from "react-icons/tb";

import { FaChartLine } from "react-icons/fa6";
import { LuPresentation } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';  // Import useNavigate


const questionTypes = [
    { label: "Multiple Choice", icon: <Check  className='icons_button'/>, category: "Select a question type" },
    { label: "Fill in the Blank", icon: <PiRectangle className='icons_button'/>, category: "Select a question type" },
    { label: "Draw", icon: <Draw  className='icons_button1'/>, category: "Open ended responses" },
    { label: "Open Ended", icon: <FormatAlignLeft  className='icons_button1'/>, category: "Open ended responses" },
    { label: "Video Response", icon: <Videocam className='icons_button1'/>, category: "Open ended responses" },
    { label: "Audio Response", icon: <Mic className='icons_button1'/>, category: "Open ended responses" },
    { label: "Poll", icon: <Poll className='icons_button1'/>, category: "Open ended responses" },
    { label: "Word Cloud", icon: <Cloud className='icons_button1'/>, category: "Open ended responses" },
    { label: "Match", icon: <Layers className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
    { label: "Recorder", icon: <SignalCellularAlt className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
    { label: "Drag & Drop", icon: <FaRegHandPaper className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
    { label: "Drop Down", icon: <FaRegCaretSquareDown className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
    { label: "Hotspots", icon: <LuMousePointerClick className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
    { label: "Labelling", icon: <BiMessageAdd className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
    { label: "Categorize", icon: <HiOutlineViewColumns className='icons_button2'/>, category: "Interactive/Higher-order thinking" },
    { label: "Math Response", icon: <TbMathFunction className='icons_button3'/>, category: "Mathematics" },
    { label: "Graphing", icon: <FaChartLine className='icons_button3'/>, category: "Mathematics" },
    { label: "Slide", icon: <LuPresentation className='icons_button4'/>, category: "Others" },
];


const CreateScratch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();  // Create a navigate instance

    const filteredQuestions = questionTypes.filter((type) =>
        type.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleClick = () => {
        navigate("/admin/question-editor");  // Navigate to the QuestionEditor component
    };

    return (
        <Box
            sx={{
                borderRadius: 2,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                p: 2,
                border: "1px solid #09090933",
                height: "80vh",
                overflowX: "scroll",
                backgroundColor: 'transparent' // Ensures no background color
            }}
        >
            <Box
                sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'transparent' // Ensures no background color
                }}
            >
                <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                    Search questions from quizzes made by other teachers
                </Typography>

                <TextField
                    fullWidth
                    placeholder="Search from millions of free quizzes"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        '&:hover .MuiOutlinedInput-root': {
                            borderColor: 'blueviolet',
                            '& fieldset': {
                                borderColor: 'blueviolet', // Changes the border color on hover
                            },
                        },
                    }}
                />

                <Typography variant="h6" fontWeight="bold" mt={3}>
                    Or select a question type to add question
                </Typography>
                <Box sx={{ width: "100%", mr: 2 }}>
                    {["Select a question type", "Open ended responses", "Interactive/Higher-order thinking", "Mathematics", "Others"].map((category) => (
                        <>
                            {filteredQuestions.some((type) => type.category === category) && (
                                <>
                                    <Typography variant="body2" fontWeight="600" color="rgb(109 109 109)" mt={4}>
                                        {category}
                                    </Typography>
                                    <Grid container spacing={2} sx={{ mt: 0 }}>
                                        {filteredQuestions.filter((type) => type.category === category).map((type) => (
                                            <Grid item xs={6} key={type.label}>
                                                <Button
                                                    fullWidth
                                                    sx={{
                                                        textAlign: 'left',
                                                        justifyContent: 'flex-start',
                                                        gap: 1,
                                                        p: 0
                                                    }}
                                                    onClick={handleClick}  // Call the navigation function on click
                                                >
                                                    <IconButton>
                                                        {type.icon}
                                                    </IconButton>
                                                    <Typography variant="body2" fontWeight="600" color="black">
                                                        {type.label}
                                                    </Typography>
                                                </Button>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </>
                            )}
                        </>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default CreateScratch;
