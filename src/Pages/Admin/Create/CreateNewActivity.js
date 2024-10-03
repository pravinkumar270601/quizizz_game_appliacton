


// // // // // import React from 'react';
// // // // // import { IconButton, Button, Box, Typography, Grid } from '@mui/material';
// // // // // import { Close as CloseIcon, ChevronLeft as ChevronLeftIcon, FileCopy as FileCopyIcon, Add as AddIcon, Upload as UploadIcon, CameraAlt as CameraAltIcon } from '@mui/icons-material';

// // // // // const CreateNewActivity = ({ open, onClose }) => {
// // // // //     // Render nothing if `open` is false

// // // // //     return (
// // // // //         <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'auto', padding: 2 }}>


// // // // //             {/* Header Section */}
// // // // //             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: 2, backgroundColor: 'background.paper' }}>
// // // // //                 <IconButton>
// // // // //                     <ChevronLeftIcon />
// // // // //                 </IconButton>
// // // // //                 <Typography variant="h6" component="span">
// // // // //                     Create a new activity
// // // // //                 </Typography>
// // // // //             </Box>

// // // // //             {/* Content Section */}
// // // // //             <Box sx={{ display: 'grid', gridTemplateRows: 'auto 1fr', height: 'calc(100vh - 64px)', overflow: 'hidden', marginTop: 8 }}>
// // // // //                 <Grid container spacing={4} sx={{ padding: 2 }}>
// // // // //                     <Grid item xs={12} md={4}>
// // // // //                         <Box sx={{ border: '1px solid', borderRadius: 2, borderColor: 'divider', overflow: 'hidden', cursor: 'pointer', '&:hover': { borderColor: 'primary.main' } }}>
// // // // //                             <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-min.png" alt="Import worksheets" style={{ width: '100%' }} />
// // // // //                             <Box sx={{ padding: 2, textAlign: 'center' }}>
// // // // //                                 <Typography variant="body1" fontWeight="bold">Import worksheets/questions</Typography>
// // // // //                                 <Typography variant="body2">from documents, google form, spreadsheet</Typography>
// // // // //                             </Box>
// // // // //                         </Box>
// // // // //                     </Grid>
// // // // //                     <Grid item xs={12} md={4}>
// // // // //                         <Box sx={{ border: '1px solid', borderRadius: 2, borderColor: 'divider', overflow: 'hidden', cursor: 'pointer', '&:hover': { borderColor: 'primary.main' } }}>
// // // // //                             <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-1-min.png" alt="Generate with AI" style={{ width: '100%' }} />
// // // // //                             <Box sx={{ padding: 2, textAlign: 'center' }}>
// // // // //                                 <Typography variant="body1" fontWeight="bold">Generate with AI</Typography>
// // // // //                                 <Typography variant="body2">from documents, websites, YouTube, text</Typography>
// // // // //                             </Box>
// // // // //                         </Box>
// // // // //                     </Grid>
// // // // //                     <Grid item xs={12} md={4}>
// // // // //                         <Box sx={{ border: '1px solid', borderRadius: 2, borderColor: 'divider', overflow: 'hidden', cursor: 'pointer', '&:hover': { borderColor: 'primary.main' } }}>
// // // // //                             <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-2-min.png" alt="Create from scratch" style={{ width: '100%' }} />
// // // // //                             <Box sx={{ padding: 2, textAlign: 'center' }}>
// // // // //                                 <Typography variant="body1" fontWeight="bold">Create from scratch</Typography>
// // // // //                                 <Typography variant="body2">from search, question types</Typography>
// // // // //                             </Box>
// // // // //                         </Box>
// // // // //                     </Grid>
// // // // //                 </Grid>

// // // // //             </Box>
// // // // //         </Box>
// // // // //     );
// // // // // };

// // // // // export default CreateNewActivity;


// // // // // import React from 'react';
// // // // // import { IconButton, Button, Box, Typography, Grid } from '@mui/material';
// // // // // import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';

// // // // // const CreateNewActivity = () => {
// // // // //     // Render nothing if `open` is false

// // // // //     const handleImport = () => {
// // // // //         // Handle Import action
// // // // //     };

// // // // //     const handleGenerate = () => {
// // // // //         // Handle Generate action
// // // // //     };

// // // // //     const handleCreate = () => {
// // // // //         // Handle Create action
// // // // //     };

// // // // //     return (
// // // // //         <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'auto', padding: 2 }}>
// // // // //             {/* Header Section */}
// // // // //             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: 2, backgroundColor: 'background.paper' }}>
// // // // //                 <IconButton>
// // // // //                     <ChevronLeftIcon />
// // // // //                 </IconButton>
// // // // //                 <Typography variant="h6" component="span">
// // // // //                     Create a new activity
// // // // //                 </Typography>
// // // // //             </Box>

// // // // //             {/* Content Section */}
// // // // //             <Box sx={{ padding: 2, marginTop: 2 }}>
// // // // //                 <Grid container spacing={4}>
// // // // //                     <Grid item xs={12} md={4}>
// // // // //                         <Box 
// // // // //                             sx={{ 
// // // // //                                 border: '1px solid', 
// // // // //                                 borderRadius: 2, 
// // // // //                                 borderColor: 'divider', 
// // // // //                                 overflow: 'hidden', 
// // // // //                                 cursor: 'pointer', 
// // // // //                                 transition: '0.3s', 
// // // // //                                 boxShadow: 3, 
// // // // //                                 '&:hover': { 
// // // // //                                     borderColor: 'primary.main', 
// // // // //                                     boxShadow: 6 
// // // // //                                 } 
// // // // //                             }}
// // // // //                         >
// // // // //                             <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-min.png" alt="Import worksheets" style={{ width: '100%' }} />
// // // // //                             <Box sx={{ padding: 2, textAlign: 'center' }}>
// // // // //                                 <Typography variant="body1" fontWeight="bold">Import worksheets/questions</Typography>
// // // // //                                 <Typography variant="body2">from documents, Google Forms, spreadsheets</Typography>
// // // // //                                 <Button variant="contained" color="primary" onClick={handleImport} sx={{ marginTop: 2 }}>
// // // // //                                     Import
// // // // //                                 </Button>
// // // // //                             </Box>
// // // // //                         </Box>
// // // // //                     </Grid>
// // // // //                     <Grid item xs={12} md={4}>
// // // // //                         <Box 
// // // // //                             sx={{ 
// // // // //                                 border: '1px solid', 
// // // // //                                 borderRadius: 2, 
// // // // //                                 borderColor: 'divider', 
// // // // //                                 overflow: 'hidden', 
// // // // //                                 cursor: 'pointer', 
// // // // //                                 transition: '0.3s', 
// // // // //                                 boxShadow: 3, 
// // // // //                                 '&:hover': { 
// // // // //                                     borderColor: 'primary.main', 
// // // // //                                     boxShadow: 6 
// // // // //                                 } 
// // // // //                             }}
// // // // //                         >
// // // // //                             <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-1-min.png" alt="Generate with AI" style={{ width: '100%' }} />
// // // // //                             <Box sx={{ padding: 2, textAlign: 'center' }}>
// // // // //                                 <Typography variant="body1" fontWeight="bold">Generate with AI</Typography>
// // // // //                                 <Typography variant="body2">from documents, websites, YouTube, text</Typography>
// // // // //                                 <Button variant="contained" color="primary" onClick={handleGenerate} sx={{ marginTop: 2 }}>
// // // // //                                     Generate
// // // // //                                 </Button>
// // // // //                             </Box>
// // // // //                         </Box>
// // // // //                     </Grid>
// // // // //                     <Grid item xs={12} md={4}>
// // // // //                         <Box 
// // // // //                             sx={{ 
// // // // //                                 border: '1px solid', 
// // // // //                                 borderRadius: 2, 
// // // // //                                 borderColor: 'divider', 
// // // // //                                 overflow: 'hidden', 
// // // // //                                 cursor: 'pointer', 
// // // // //                                 transition: '0.3s', 
// // // // //                                 boxShadow: 3, 
// // // // //                                 '&:hover': { 
// // // // //                                     borderColor: 'primary.main', 
// // // // //                                     boxShadow: 6 
// // // // //                                 } 
// // // // //                             }}
// // // // //                         >
// // // // //                             <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-2-min.png" alt="Create from scratch" style={{ width: '100%' }} />
// // // // //                             <Box sx={{ padding: 2, textAlign: 'center' }}>
// // // // //                                 <Typography variant="body1" fontWeight="bold">Create from scratch</Typography>
// // // // //                                 <Typography variant="body2">from search, question types</Typography>
// // // // //                                 <Button variant="contained" color="primary" onClick={handleCreate} sx={{ marginTop: 2 }}>
// // // // //                                     Create
// // // // //                                 </Button>
// // // // //                             </Box>
// // // // //                         </Box>
// // // // //                     </Grid>
// // // // //                 </Grid>
// // // // //             </Box>
// // // // //         </Box>
// // // // //     );
// // // // // };

// // // // // export default CreateNewActivity;


// // // // import React from 'react';
// // // // import { IconButton, Box, Typography, Grid } from '@mui/material';
// // // // import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';

// // // // const CreateNewActivity = () => {
// // // //     // Handle Import action
// // // //     const handleImport = () => {
// // // //         // Implement import logic
// // // //     };

// // // //     // Handle Generate action
// // // //     const handleGenerate = () => {
// // // //         // Implement generate logic
// // // //     };

// // // //     // Handle Create action
// // // //     const handleCreate = () => {
// // // //         // Implement create logic
// // // //     };

// // // //     return (
// // // //         <Box sx={{ position: 'relative', width: '100%', overflow: 'auto', padding: 2 ,height:"100vh"}}>
// // // //             {/* Header Section */}
// // // //             <Box 
// // // //                 sx={{ 
// // // //                     display: 'flex', 
// // // //                     alignItems: 'center', 
// // // //                     gap: 2, 
// // // //                     padding: 2, 
// // // //                     backgroundColor: 'background.paper', 
// // // //                     borderBottom: '1px solid', 
// // // //                     borderColor: 'divider',

// // // //                 }}
// // // //             >
// // // //                 <IconButton>
// // // //                     <ChevronLeftIcon />
// // // //                 </IconButton>
// // // //                 <Typography variant="h6" component="span">
// // // //                     Create a new activity
// // // //                 </Typography>
// // // //             </Box>

// // // //             {/* Content Section */}
// // // //             <Box sx={{ padding: 2, marginTop: 2 ,height:"100%"}}>
// // // //                 <Grid container spacing={4}>
// // // //                     <Grid item xs={12} md={4}>
// // // //                         <Box 
// // // //                             sx={{ 
// // // //                                 border: '1px solid', 
// // // //                                 borderRadius: 2, 
// // // //                                 height:"50vh",
// // // //                                 borderColor: 'divider', 
// // // //                                 overflow: 'hidden', 
// // // //                                 cursor: 'pointer', 
// // // //                                 transition: '0.3s', 
// // // //                                 boxShadow: 3, 
// // // //                                 textAlign: 'center', 
// // // //                                 '&:hover': { 
// // // //                                     borderColor: 'primary.main', 
// // // //                                     boxShadow: 6 
// // // //                                 } 
// // // //                             }}
// // // //                         >
// // // //                             <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-min.png" alt="Import worksheets" style={{ width: '100%' }} />
// // // //                             <Box sx={{ padding: 2 }}>
// // // //                                 <Typography variant="body1" fontWeight="bold">Import worksheets/questions</Typography>
// // // //                                 <Typography variant="body2">from documents, Google Forms, spreadsheets</Typography>
// // // //                             </Box>
// // // //                         </Box>
// // // //                     </Grid>
// // // //                     <Grid item xs={12} md={4}>
// // // //                         <Box 
// // // //                             sx={{ 
// // // //                                 border: '1px solid', 
// // // //                                 borderRadius: 2, 
// // // //                                 borderColor: 'divider', 
// // // //                                 overflow: 'hidden', 
// // // //                                 cursor: 'pointer', 
// // // //                                 transition: '0.3s', 
// // // //                                 boxShadow: 3, 
// // // //                                 textAlign: 'center', 
// // // //                                 height:"50vh",
// // // //                                 '&:hover': { 
// // // //                                     borderColor: 'primary.main', 
// // // //                                     boxShadow: 6 
// // // //                                 } 
// // // //                             }}
// // // //                         >
// // // //                             <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-1-min.png" alt="Generate with AI" style={{ width: '100%' }} />
// // // //                             <Box sx={{ padding: 2 }}>
// // // //                                 <Typography variant="body1" fontWeight="bold">Generate with AI</Typography>
// // // //                                 <Typography variant="body2">from documents, websites, YouTube, text</Typography>
// // // //                             </Box>
// // // //                         </Box>
// // // //                     </Grid>
// // // //                     <Grid item xs={12} md={4}>
// // // //                         <Box 
// // // //                             sx={{ 
// // // //                                 border: '1px solid', 
// // // //                                 borderRadius: 2, 
// // // //                                 borderColor: 'divider', 
// // // //                                 overflow: 'hidden', 
// // // //                                 cursor: 'pointer', 
// // // //                                 transition: '0.3s', 
// // // //                                 boxShadow: 3, 
// // // //                                 textAlign: 'center', 
// // // //                                 height:"50vh",
// // // //                                 '&:hover': { 
// // // //                                     borderColor: 'primary.main', 
// // // //                                     boxShadow: 6 
// // // //                                 } 
// // // //                             }}
// // // //                         >
// // // //                             <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-2-min.png" alt="Create from scratch" style={{ width: '100%' }} />
// // // //                             <Box sx={{ padding: 2 }}>
// // // //                                 <Typography variant="body1" fontWeight="bold">Create from scratch</Typography>
// // // //                                 <Typography variant="body2">from search, question types</Typography>
// // // //                             </Box>
// // // //                         </Box>
// // // //                     </Grid>
// // // //                 </Grid>
// // // //             </Box>
// // // //         </Box>
// // // //     );
// // // // };

// // // // export default CreateNewActivity;



// // // import React from 'react';
// // // import { IconButton, Box, Typography, Grid } from '@mui/material';
// // // import { ChevronLeft as ChevronLeftIcon, GifBoxOutlined } from '@mui/icons-material';
// // // import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


// // // const CreateNewActivity = () => {
// // //     // Handle Import action
// // //     const handleImport = () => {
// // //         // Implement import logic
// // //     };

// // //     // Handle Generate action
// // //     const handleGenerate = () => {
// // //         // Implement generate logic
// // //     };

// // //     // Handle Create action
// // //     const handleCreate = () => {
// // //         // Implement create logic
// // //     };
// // //     const navigate = useNavigate(); // Initialize useNavigate

// // //     // Handle back navigation
// // //     const handleBackNavigation = () => {
// // //         navigate(-1); // Navigate to the previous page
// // //     };

// // //     const handleCreation = () => {
// // //         navigate("/importworksheet"); // Navigate to the previous page
// // //     };

// // //     return (
// // //         <Box sx={{ position: 'relative', width: '100%', height: '90vh' }}>
// // //             {/* Header Section */}
// // //             <Box
// // //                 sx={{
// // //                     display: 'flex',
// // //                     alignItems: 'center',
// // //                     gap: 1,
// // //                     padding: 1,
// // //                     backgroundColor: 'background.paper',
// // //                     borderBottom: '1px solid',


// // //                 }}
// // //             >
// // //                 <IconButton >
// // //                     <ChevronLeftIcon
// // //                         onClick={handleBackNavigation}

// // //                         style={{ border: "1px solid #b6b6b6", height: "2rem", width: "32px", borderRadius: "5px", }} />
// // //                 </IconButton>
// // //                 <Typography variant="h6" component="span" sx={{ color: "rgb(102 102 102)", fontSize: "17px" }}>
// // //                     Create a new activity
// // //                 </Typography>
// // //             </Box>

// // //             {/* Content Section */}
// // //             <Box sx={{ m: 10 }}>
// // //                 <Box sx={{ textAlign: "center" }}>
// // //                     <Typography variant="h4" >
// // //                         Create a new activity
// // //                     </Typography>
// // //                 </Box>
// // //                 <Box
// // //                     sx={{
// // //                         padding: 2,
// // //                         marginTop: 2,
// // //                         display: 'flex',
// // //                         justifyContent: 'center',
// // //                         alignItems: 'center',
// // //                         height: 'calc(100% - 64px)', // Adjust for header height if needed
// // //                     }}
// // //                 >
// // //                     <Grid container spacing={4} justifyContent="center">
// // //                         <Grid item xs={12} md={4}>
// // //                             <Box
// // //                                 onClick={handleCreation}

// // //                                 sx={{
// // //                                     border: '2px solid',
// // //                                     borderRadius: 2,
// // //                                     height: "50vh",
// // //                                     borderColor: 'divider',
// // //                                     overflow: 'hidden',
// // //                                     cursor: 'pointer',
// // //                                     transition: '0.3s',
// // //                                     boxShadow: 3,
// // //                                     textAlign: 'center',
// // //                                     '&:hover': {
// // //                                         // borderColor: 'primary.main',
// // //                                         // boxShadow: 6,
// // //                                         border: '2px solid rgb(136 84 192)',
// // //                                     }
// // //                                 }}
// // //                             >
// // //                                 <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-min.png" alt="Import worksheets" style={{ width: '100%' }} />
// // //                                 <Box sx={{ padding: 2 }}>
// // //                                     <Typography variant="body1" fontWeight="bold">Import worksheets/questions</Typography>
// // //                                     <Typography variant="body2">from documents, Google Forms, spreadsheets</Typography>
// // //                                 </Box>
// // //                             </Box>
// // //                         </Grid>
// // //                         {/* <Grid item xs={12} md={4}>
// // //                             <Box
// // //                                 sx={{
// // //                                     border: '1px solid',
// // //                                     borderRadius: 2,
// // //                                     borderColor: 'divider',
// // //                                     overflow: 'hidden',
// // //                                     cursor: 'pointer',
// // //                                     transition: '0.3s',
// // //                                     boxShadow: 3,
// // //                                     textAlign: 'center',
// // //                                     height: "50vh",
// // //                                     '&:hover': {
// // //                                         borderColor: 'primary.main',
// // //                                         boxShadow: 6
// // //                                     }
// // //                                 }}
// // //                             >
// // //                                 <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-1-min.png" alt="Generate with AI" style={{ width: '100%' }} />
// // //                                 <Box sx={{ padding: 2 }}>
// // //                                     <Typography variant="body1" fontWeight="bold">Generate with AI</Typography>
// // //                                     <Typography variant="body2">from documents, websites, YouTube, text</Typography>
// // //                                 </Box>
// // //                             </Box>
// // //                         </Grid> */}
// // //                         <Grid item xs={12} md={4}>
// // //                             <Box
// // //                                 sx={{
// // //                                     border: '1px solid',
// // //                                     borderRadius: 2,
// // //                                     borderColor: 'divider',
// // //                                     overflow: 'hidden',
// // //                                     cursor: 'pointer',
// // //                                     transition: '0.3s',
// // //                                     boxShadow: 3,
// // //                                     textAlign: 'center',
// // //                                     height: "50vh",
// // //                                     '&:hover': {
// // //                                         // borderColor: 'primary.main',
// // //                                         // boxShadow: 6,
// // //                                         border: '2px solid rgb(136 84 192)',
// // //                                     }
// // //                                 }}
// // //                             >
// // //                                 <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-2-min.png" alt="Create from scratch" style={{ width: '100%' }} />
// // //                                 <Box sx={{ padding: 2 }}>
// // //                                     <Typography variant="body1" fontWeight="bold">Create from scratch</Typography>
// // //                                     <Typography variant="body2">from search, question types</Typography>
// // //                                 </Box>
// // //                             </Box>
// // //                         </Grid>
// // //                     </Grid>
// // //                 </Box>
// // //             </Box>
// // //         </Box>
// // //     );
// // // };

// // // export default CreateNewActivity;

// // import React, { useState } from 'react';
// // import { IconButton, Box, Typography, Grid } from '@mui/material';
// // import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
// // import { useNavigate } from 'react-router-dom';
// // import QuizEditor from './QuizEditor'; // Import the QuizEditor component

// // const CreateNewActivity = () => {
// //     const navigate = useNavigate();
// //     const [activeComponent, setActiveComponent] = useState(''); // State to track which component to render

// //     // Handle back navigation
// //     const handleBackNavigation = () => {
// //         navigate(-1); // Navigate to the previous page
// //     };

// //     // Handle the first box click to render the QuizEditor component
// //     const handleCreation = () => {
// //         setActiveComponent('QuizEditor');
// //     };

// //     return (
// //         <Box sx={{ position: 'relative', width: '100%', height: '90vh' }}>
// //             {/* Header Section */}
// //             <Box
// //                 sx={{
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     gap: 1,
// //                     padding: 1,
// //                     backgroundColor: 'background.paper',
// //                     borderBottom: '1px solid',
// //                 }}
// //             >
// //                 <IconButton onClick={handleBackNavigation}>
// //                     <ChevronLeftIcon
// //                         style={{
// //                             border: "1px solid #b6b6b6",
// //                             height: "2rem",
// //                             width: "32px",
// //                             borderRadius: "5px",
// //                         }}
// //                     />
// //                 </IconButton>
// //                 <Typography variant="h6" component="span" sx={{ color: "rgb(102 102 102)", fontSize: "17px" }}>
// //                     Create a new activity
// //                 </Typography>
// //             </Box>

// //             {/* Content Section */}
// //             <Box sx={{ m: 10 }}>
// //                 <Box sx={{ textAlign: "center" }}>
// //                     <Typography variant="h4">
// //                         Create a new activity
// //                     </Typography>
// //                 </Box>
// //                 <Box
// //                     sx={{
// //                         padding: 2,
// //                         marginTop: 2,
// //                         display: 'flex',
// //                         justifyContent: 'center',
// //                         alignItems: 'center',
// //                         height: 'calc(100% - 64px)', // Adjust for header height if needed
// //                     }}
// //                 >
// //                     {activeComponent === 'QuizEditor' ? (
// //                         <QuizEditor /> // Render the QuizEditor component
// //                     ) : (
// //                         <Grid container spacing={4} justifyContent="center">
// //                             <Grid item xs={12} md={4}>
// //                                 <Box
// //                                     onClick={handleCreation}
// //                                     sx={{
// //                                         border: '2px solid',
// //                                         borderRadius: 2,
// //                                         height: "50vh",
// //                                         borderColor: 'divider',
// //                                         overflow: 'hidden',
// //                                         cursor: 'pointer',
// //                                         transition: '0.3s',
// //                                         boxShadow: 3,
// //                                         textAlign: 'center',
// //                                         '&:hover': {
// //                                             border: '2px solid rgb(136 84 192)',
// //                                         }
// //                                     }}
// //                                 >
// //                                     <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-min.png" alt="Import worksheets" style={{ width: '100%' }} />
// //                                     <Box sx={{ padding: 2 }}>
// //                                         <Typography variant="body1" fontWeight="bold">Import worksheets/questions</Typography>
// //                                         <Typography variant="body2">from documents, Google Forms, spreadsheets</Typography>
// //                                     </Box>
// //                                 </Box>
// //                             </Grid>
// //                             <Grid item xs={12} md={4}>
// //                                 <Box
// //                                     sx={{
// //                                         border: '1px solid',
// //                                         borderRadius: 2,
// //                                         borderColor: 'divider',
// //                                         overflow: 'hidden',
// //                                         cursor: 'pointer',
// //                                         transition: '0.3s',
// //                                         boxShadow: 3,
// //                                         textAlign: 'center',
// //                                         height: "50vh",
// //                                         '&:hover': {
// //                                             border: '2px solid rgb(136 84 192)',
// //                                         }
// //                                     }}
// //                                 >
// //                                     <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-2-min.png" alt="Create from scratch" style={{ width: '100%' }} />
// //                                     <Box sx={{ padding: 2 }}>
// //                                         <Typography variant="body1" fontWeight="bold">Create from scratch</Typography>
// //                                         <Typography variant="body2">from search, question types</Typography>
// //                                     </Box>
// //                                 </Box>
// //                             </Grid>
// //                         </Grid>
// //                     )}
// //                 </Box>
// //             </Box>
// //         </Box>
// //     );
// // };

// // export default CreateNewActivity;


// import React, { useState } from 'react';
// import { IconButton, Box, Typography, Grid } from '@mui/material';
// import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import QuizEditor from './QuizEditor'; // Import the QuizEditor component

// const CreateNewActivity = () => {
//     const navigate = useNavigate();
//     const [activeComponent, setActiveComponent] = useState(''); // State to track which component to render

//     // Handle back navigation
//     const handleBackNavigation = () => {
//         if (activeComponent === 'QuizEditor') {
//             setActiveComponent(''); // Reset to show the previous content
//         } else {
//             navigate(-1); // Navigate to the previous page
//         }
//     };

//     // Handle the first box click to render the QuizEditor component
//     const handleCreation = () => {
//         setActiveComponent('QuizEditor');
//     };

//     return (
//         <Box sx={{ position: 'relative', width: '100%', height: '90vh' }}>
//             {/* Header Section */}
//             <Box
//                 sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 1,
//                     padding: 1,
//                     backgroundColor: 'background.paper',
//                     borderBottom: '1px solid',
//                 }}
//             >
//                 <IconButton onClick={handleBackNavigation}>
//                     <ChevronLeftIcon
//                         style={{
//                             border: "1px solid #b6b6b6",
//                             height: "2rem",
//                             width: "32px",
//                             borderRadius: "5px",
//                         }}
//                     />
//                 </IconButton>
//                 <Typography variant="h6" component="span" sx={{ color: "rgb(102 102 102)", fontSize: "17px" }}>
//                     Create a new activity
//                 </Typography>
//             </Box>

//             {/* Content Section */}
//             <Box sx={{ m: 10 }}>
//                 <Box sx={{ textAlign: "center" }}>
//                     <Typography variant="h4">
//                         Create a new activity
//                     </Typography>
//                 </Box>
//                 <Box
//                     sx={{
//                         padding: 2,
//                         marginTop: 2,
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         height: 'calc(100% - 64px)', // Adjust for header height if needed
//                     }}
//                 >
//                     {activeComponent === 'QuizEditor' ? (
//                         <QuizEditor /> // Render the QuizEditor component
//                     ) : (
//                         <Grid container spacing={4} justifyContent="center">
//                             <Grid item xs={12} md={4}>
//                                 <Box
//                                     onClick={handleCreation}
//                                     sx={{
//                                         border: '2px solid',
//                                         borderRadius: 2,
//                                         height: "50vh",
//                                         borderColor: 'divider',
//                                         overflow: 'hidden',
//                                         cursor: 'pointer',
//                                         transition: '0.3s',
//                                         boxShadow: 3,
//                                         textAlign: 'center',
//                                         '&:hover': {
//                                             border: '2px solid rgb(136 84 192)',
//                                         }
//                                     }}
//                                 >
//                                     <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-min.png" alt="Import worksheets" style={{ width: '100%' }} />
//                                     <Box sx={{ padding: 2 }}>
//                                         <Typography variant="body1" fontWeight="bold">Import worksheets/questions</Typography>
//                                         <Typography variant="body2">from documents, Google Forms, spreadsheets</Typography>
//                                     </Box>
//                                 </Box>
//                             </Grid>
//                             <Grid item xs={12} md={4}>
//                                 <Box
//                                     sx={{
//                                         border: '1px solid',
//                                         borderRadius: 2,
//                                         borderColor: 'divider',
//                                         overflow: 'hidden',
//                                         cursor: 'pointer',
//                                         transition: '0.3s',
//                                         boxShadow: 3,
//                                         textAlign: 'center',
//                                         height: "50vh",
//                                         '&:hover': {
//                                             border: '2px solid rgb(136 84 192)',
//                                         }
//                                     }}
//                                 >
//                                     <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-2-min.png" alt="Create from scratch" style={{ width: '100%' }} />
//                                     <Box sx={{ padding: 2 }}>
//                                         <Typography variant="body1" fontWeight="bold">Create from scratch</Typography>
//                                         <Typography variant="body2">from search, question types</Typography>
//                                     </Box>
//                                 </Box>
//                             </Grid>
//                         </Grid>
//                     )}
//                 </Box>
//             </Box>
//         </Box>
//     );
// };

// export default CreateNewActivity;


import React, { useState } from 'react';
import { IconButton, Box, Typography, Grid } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import QuizEditor from './QuizEditor'; // Import the QuizEditor component
import { Slide } from '@mui/material';
import { TransitionGroup } from 'react-transition-group'; // Import TransitionGroup
import StartForm from './StartForm';
import import_image from "../../../Assets/import_image.png"
import create_scratch_image from "../../../Assets/create_scratch_image.png"


const CreateNewActivity = () => {
    const navigate = useNavigate();
    const [activeComponent, setActiveComponent] = useState(''); // State to track which component to render
    const [slideDirection, setSlideDirection] = useState('left'); // State to control slide direction
    const [selectedComponent, setSelectedComponent] = useState("");
    // Handle back navigation
    const handleBackNavigation = () => {
        if (activeComponent === 'QuizEditor') {
            setSlideDirection('right'); // Set slide direction for back navigation
            setActiveComponent(''); // Reset to show the previous content
        } else {
            navigate(-1); // Navigate to the previous page
        }
    };

    // Handle the first box click to render the QuizEditor component
    const handleCreation = (selectcom) => {
        setSlideDirection('left'); // Set slide direction for forward navigation
        setActiveComponent('QuizEditor');
        setSelectedComponent(selectcom)
    };

    return (
        <Box sx={{ position: 'relative', width: '100%', height: '90vh' }}>
            {/* Header Section */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    padding: 1,
                    backgroundColor: 'background.paper',
                    borderBottom: '1px solid',
                }}
            >
                <IconButton onClick={handleBackNavigation}>
                    <ChevronLeftIcon
                        style={{
                            border: "1px solid #b6b6b6",
                            height: "2rem",
                            width: "32px",
                            borderRadius: "5px",
                        }}
                    />
                </IconButton>
                <Typography variant="h6" component="span" sx={{ color: "rgb(102 102 102)", fontSize: "17px" }}>
                    Create a new activity
                </Typography>
            </Box>

            {/* Content Section */}
            <TransitionGroup>
                <Slide direction={slideDirection} in={true} mountOnEnter unmountOnExit>
                    <Box sx={{ width: '100%' }}>
                        {activeComponent === 'QuizEditor' ? (
                            <QuizEditor selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent}/>
                            //   <StartForm /> 
                        ) : (
                            <Box sx={{ m: 10 }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography variant="h4">
                                        Create a new activity
                                    </Typography>
                                </Box>
                                <Box

                                    sx={{
                                        padding: 2,
                                        marginTop: 2,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 'calc(100% - 64px)', // Adjust for header height if needed
                                    }}
                                >

                                    <Grid container spacing={4} justifyContent="center">
                                        <Grid item xs={12} md={4}>
                                            <Box
                                                onClick={()=>handleCreation("WorksheetTabs")}
                                                sx={{
                                                    border: '2px solid',
                                                    borderRadius: 2,
                                                    height: "50vh",
                                                    borderColor: 'divider',
                                                    overflow: 'hidden',
                                                    cursor: 'pointer',
                                                    transition: '0.3s',
                                                    boxShadow: 3,
                                                    textAlign: 'center',
                                                    '&:hover': {
                                                        border: '2px solid rgb(136 84 192)',
                                                    }
                                                }}
                                            >
                                                <img src={import_image} alt="Import worksheets" style={{ width: '100%' }} />
                                                <Box sx={{ padding: 2 }}>
                                                    <Typography variant="body1" fontWeight="bold">Import worksheets/questions</Typography>
                                                    <Typography variant="body2">from documents, Google Forms, spreadsheets</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Box
                                                onClick={()=>handleCreation("AnotherComponent")}
                                                sx={{
                                                    border: '1px solid',
                                                    borderRadius: 2,
                                                    borderColor: 'divider',
                                                    overflow: 'hidden',
                                                    cursor: 'pointer',
                                                    transition: '0.3s',
                                                    boxShadow: 3,
                                                    textAlign: 'center',
                                                    height: "50vh",
                                                    '&:hover': {
                                                        border: '2px solid rgb(136 84 192)',
                                                    }
                                                }}
                                            >
                                                <img src={create_scratch_image} alt="Create from scratch" style={{ width: '100%' }} />
                                                <Box sx={{ padding: 2 }}>
                                                    <Typography variant="body1" fontWeight="bold">Create from scratch</Typography>
                                                    <Typography variant="body2">from search, question types</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        )}
                    </Box>


                </Slide>

            </TransitionGroup>

        </Box>


    );
};

export default CreateNewActivity;
