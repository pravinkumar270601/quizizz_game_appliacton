

// // // // import React, { useState, useRef, useEffect } from 'react';
// // // // import {
// // // //     Dialog,
// // // //     DialogTitle,
// // // //     DialogContent,
// // // //     DialogActions,
// // // //     IconButton,
// // // //     Button,
// // // //     Box,
// // // //     Typography,
// // // // } from '@mui/material';
// // // // import {
// // // //     Close as CloseIcon,
// // // //     Mic as MicIcon,
// // // //     CloudUpload as CloudUploadIcon,
// // // //     PlayArrow as PlayArrowIcon,
// // // //     Pause as PauseIcon,
// // // //     Stop as StopIcon,
// // // //     Delete,
// // // // } from '@mui/icons-material';
// // // // import RecordRTC from 'recordrtc';
// // // // import WaveSurfer from 'wavesurfer.js';
// // // // import { RiDeleteBin5Line } from 'react-icons/ri';
// // // // import { RiDeleteBin6Line } from "react-icons/ri";
// // // // import { RiVideoAddFill } from "react-icons/ri";
// // // // import { InputBase, Paper, Tooltip } from '@mui/material';
// // // // import SearchIcon from '@mui/icons-material/Search';
// // // // import ClearIcon from '@mui/icons-material/Clear';
// // // // import DriveIcon from '@mui/icons-material/DriveFileMove';
// // // // // import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// // // // import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';




// // // // const VideoModal = ({ open, onClose }) => {



// // // //     return (
// // // //         <>
// // // //             <Dialog
// // // //                 open={open}
// // // //                 onClose={onClose}
// // // //                 fullWidth
// // // //                 maxWidth="md"
// // // //                 sx={{ '& .MuiDialog-paper': { borderRadius: 2 } }}
// // // //             >
// // // //                 <Box sx={{ position: 'relative' }}>
// // // //                     <IconButton
// // // //                         aria-label="Close"
// // // //                         onClick={onClose}
// // // //                         sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
// // // //                     >
// // // //                         <CloseIcon />
// // // //                     </IconButton>
// // // //                     <DialogTitle sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
// // // //                         <Box
// // // //                             sx={{
// // // //                                 display: 'flex',
// // // //                                 alignItems: 'center',
// // // //                                 justifyContent: 'center',
// // // //                                 width: 40,
// // // //                                 height: 40,
// // // //                                 borderRadius: '50%',
// // // //                                 backgroundColor: 'rgb(237 230 246)',
// // // //                                 color: 'rgb(136 84 192)',
// // // //                                 marginRight: 1,
// // // //                             }}
// // // //                         >
// // // //                             <RiVideoAddFill />
// // // //                         </Box>
// // // //                         <Box>
// // // //                             <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
// // // //                                 Insert a video
// // // //                             </Typography>
// // // //                             <Typography variant="subtitle2" color="text.secondary">
// // // //                                 Pick a .mp4, .ogg, .webm video from your Google Drive, One Drive or search all of YouTube
// // // //                             </Typography>
// // // //                         </Box>
// // // //                     </DialogTitle>
// // // //                     <DialogContent dividers sx={{ paddingX: 4 }}>
// // // //                         <Box
// // // //                             sx={{
// // // //                                 border: '1px dashed',
// // // //                                 borderColor: 'divider',
// // // //                                 height: 200,
// // // //                                 display: 'flex',
// // // //                                 flexDirection: 'column',
// // // //                                 justifyContent: 'center',
// // // //                                 alignItems: 'center',
// // // //                                 backgroundColor: 'rgb(249 249 249)',
// // // //                                 position: 'relative',
// // // //                                 padding: 2,
// // // //                             }}
// // // //                         >


// // // //                             <Box sx={{  mb: 4 }}>
// // // //                                 {/* Search Box */}
// // // //                                 <Box className="searchbox-elem" mb={2}>
// // // //                                     <Paper
// // // //                                         component="form"
// // // //                                         sx={{
// // // //                                             p: '2px 4px',
// // // //                                             display: 'flex',
// // // //                                             alignItems: 'center',
// // // //                                             borderRadius: 1,
// // // //                                         }}
// // // //                                     >
// // // //                                         <InputBase
// // // //                                             sx={{ ml: 1, flex: 1 }}
// // // //                                             placeholder="Search for anything on YouTube or paste a link here"
// // // //                                             inputProps={{ 'aria-label': 'search' }}
// // // //                                         />
// // // //                                         <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
// // // //                                             <SearchIcon />
// // // //                                         </IconButton>
// // // //                                         <IconButton sx={{ p: '10px' }} aria-label="clear">
// // // //                                             <ClearIcon />
// // // //                                         </IconButton>
// // // //                                     </Paper>
// // // //                                 </Box>

// // // //                                 {/* Google Drive, One Drive, and Upload Video Options */}
// // // //                                 <Box
// // // //                                     sx={{
// // // //                                         display: 'grid',
// // // //                                         gap: 2,
// // // //                                         gridTemplateColumns: '1fr 1fr 1.2fr',
// // // //                                         justifyContent: 'center',
// // // //                                         mb: 2,
// // // //                                     }}
// // // //                                 >
// // // //                                     {/* Google Drive Button */}
// // // //                                     <Button
// // // //                                         variant="outlined"
// // // //                                         startIcon={<img src="https://cf.quizizz.com/img/logos/googleDrive.png" alt="Google Drive" style={{ height: '20px' }} />}
// // // //                                         sx={{ borderRadius: 1, p: 2 }}
// // // //                                     >
// // // //                                         Google Drive
// // // //                                     </Button>

// // // //                                     {/* One Drive Button */}
// // // //                                     <Button
// // // //                                         variant="outlined"
// // // //                                         startIcon={<img src="https://cf.quizizz.com/img/logos/onedrive.png" alt="One Drive" style={{ height: '20px' }} />}
// // // //                                         sx={{ borderRadius: 1, p: 2 }}
// // // //                                     >
// // // //                                         One Drive
// // // //                                     </Button>

// // // //                                     {/* Upload Video Option */}
// // // //                                     <Box
// // // //                                         sx={{
// // // //                                             display: 'flex',
// // // //                                             alignItems: 'center',
// // // //                                             border: '1px solid #ccc',
// // // //                                             borderRadius: 1,
// // // //                                             p: 1,
// // // //                                             position: 'relative',
// // // //                                         }}
// // // //                                     >
// // // //                                         <Typography sx={{ flexGrow: 1, mx: 2 }}>
// // // //                                             <CloudUploadIcon sx={{ mr: 1 }} />
// // // //                                             Upload Video
// // // //                                         </Typography>
// // // //                                         <input
// // // //                                             type="file"
// // // //                                             accept="video/mp4"
// // // //                                             style={{
// // // //                                                 position: 'absolute',
// // // //                                                 left: 0,
// // // //                                                 top: 0,
// // // //                                                 height: '100%',
// // // //                                                 width: '100%',
// // // //                                                 cursor: 'pointer',
// // // //                                                 opacity: 0,
// // // //                                                 zIndex: 5,
// // // //                                             }}
// // // //                                         />
// // // //                                         <Tooltip title="Info">
// // // //                                             <InfoOutlinedIcon sx={{ ml: 'auto', mr: 2, color: 'grey.600' }} />
// // // //                                         </Tooltip>
// // // //                                     </Box>
// // // //                                 </Box>
// // // //                             </Box>

// // // //                         </Box>
// // // //                     </DialogContent>
// // // //                     <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
// // // //                         <Button onClick={onClose} variant="text"
// // // //                             sx={{
// // // //                                 background: "rgb(249 249 249)",
// // // //                                 color: "black",
// // // //                                 '&:hover': {
// // // //                                     backgroundColor: 'rgb(249 249 249)',
// // // //                                     color: "black"
// // // //                                     // boxShadow: '0 4px #6c4298',
// // // //                                 },
// // // //                             }}>


// // // //                             Cancel
// // // //                         </Button>
// // // //                         <Button
// // // //                             // onClick={handleInsert}
// // // //                             variant="contained"
// // // //                             // disabled={!audioURL}
// // // //                             sx={{
// // // //                                 background: "rgb(136 84 192)",
// // // //                                 '&:hover': {
// // // //                                     backgroundColor: 'rgb(136 84 192)',
// // // //                                     // boxShadow: '0 4px #6c4298',
// // // //                                 },
// // // //                             }}>
// // // //                             Insert
// // // //                         </Button>
// // // //                     </DialogActions>
// // // //                 </Box>
// // // //             </Dialog>
// // // //         </>
// // // //     );
// // // // };

// // // // export default VideoModal;





// // // import React, { useState, useRef } from 'react';
// // // import {
// // //     Dialog,
// // //     DialogTitle,
// // //     DialogContent,
// // //     DialogActions,
// // //     IconButton,
// // //     Button,
// // //     Box,
// // //     Typography,
// // //     Tooltip,
// // //     Paper,
// // //     InputBase,
// // // } from '@mui/material';
// // // import {
// // //     Close as CloseIcon,
// // //     CloudUpload as CloudUploadIcon,
// // //     PlayArrow as PlayArrowIcon,
// // //     Pause as PauseIcon,
// // //     InfoOutlined as InfoOutlinedIcon,
// // //     Search as SearchIcon,
// // //     Clear as ClearIcon
// // // } from '@mui/icons-material';
// // // import { RiVideoAddFill } from "react-icons/ri";

// // // const VideoModal = ({ open, onClose }) => {
// // //     const [selectedVideo, setSelectedVideo] = useState(null);
// // //     const [videoURL, setVideoURL] = useState('');
// // //     const videoRef = useRef(null);

// // //     const handleVideoUpload = (event) => {
// // //         const file = event.target.files[0];
// // //         if (file) {
// // //             const url = URL.createObjectURL(file);
// // //             setSelectedVideo(file);
// // //             setVideoURL(url);
// // //             console.log(url); // Logs the video URL to the console
// // //         }
// // //     };

// // //     const handleInsert = () => {
// // //         if (selectedVideo) {
// // //             console.log('Video selected:', selectedVideo);
// // //             // Implement further actions for the Insert button here
// // //         }
// // //     };

// // //     return (
// // //         <Dialog
// // //             open={open}
// // //             onClose={onClose}
// // //             fullWidth
// // //             maxWidth="md"
// // //             sx={{ '& .MuiDialog-paper': { borderRadius: 2 } }}
// // //         >
// // //             <Box sx={{ position: 'relative' }}>
// // //                 <IconButton
// // //                     aria-label="Close"
// // //                     onClick={onClose}
// // //                     sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
// // //                 >
// // //                     <CloseIcon />
// // //                 </IconButton>
// // //                 <DialogTitle sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
// // //                     <Box
// // //                         sx={{
// // //                             display: 'flex',
// // //                             alignItems: 'center',
// // //                             justifyContent: 'center',
// // //                             width: 40,
// // //                             height: 40,
// // //                             borderRadius: '50%',
// // //                             backgroundColor: 'rgb(237 230 246)',
// // //                             color: 'rgb(136 84 192)',
// // //                             marginRight: 1,
// // //                         }}
// // //                     >
// // //                         <RiVideoAddFill />
// // //                     </Box>
// // //                     <Box>
// // //                         <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
// // //                             Insert a video
// // //                         </Typography>
// // //                         <Typography variant="subtitle2" color="text.secondary">
// // //                             Pick a .mp4, .ogg, .webm video from your Google Drive, One Drive or search all of YouTube
// // //                         </Typography>
// // //                     </Box>
// // //                 </DialogTitle>
// // //                 <DialogContent dividers sx={{ paddingX: 4 }}>
// // //                     <Box
// // //                         sx={{
// // //                             border: '1px dashed',
// // //                             borderColor: 'divider',
// // //                             height: 300,
// // //                             display: 'flex',
// // //                             flexDirection: 'column',
// // //                             justifyContent: 'center',
// // //                             alignItems: 'center',
// // //                             backgroundColor: 'rgb(249 249 249)',
// // //                             position: 'relative',
// // //                             padding: 2,
// // //                         }}
// // //                     >
// // //                         {videoURL ? (
// // //                             <video
// // //                                 ref={videoRef}
// // //                                 src={videoURL}
// // //                                 controls
// // //                                 style={{ width: '100%', height: '100%' }}
// // //                             />
// // //                         ) : (
// // //                             <Typography>Select a video to preview</Typography>
// // //                         )}
// // //                         <Box sx={{ mt: 2 }}>
// // //                             {/* Search Box */}
// // //                             <Box className="searchbox-elem" mb={2}>
// // //                                 <Paper
// // //                                     component="form"
// // //                                     sx={{
// // //                                         p: '2px 4px',
// // //                                         display: 'flex',
// // //                                         alignItems: 'center',
// // //                                         borderRadius: 1,
// // //                                     }}
// // //                                 >
// // //                                     <InputBase
// // //                                         sx={{ ml: 1, flex: 1 }}
// // //                                         placeholder="Search for anything on YouTube or paste a link here"
// // //                                         inputProps={{ 'aria-label': 'search' }}
// // //                                     />
// // //                                     <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
// // //                                         <SearchIcon />
// // //                                     </IconButton>
// // //                                     <IconButton sx={{ p: '10px' }} aria-label="clear">
// // //                                         <ClearIcon />
// // //                                     </IconButton>
// // //                                 </Paper>
// // //                             </Box>

// // //                             {/* Google Drive, One Drive, and Upload Video Options */}
// // //                             <Box
// // //                                 sx={{
// // //                                     display: 'grid',
// // //                                     gap: 2,
// // //                                     gridTemplateColumns: '1fr 1fr 1.2fr',
// // //                                     justifyContent: 'center',
// // //                                     mb: 2,
// // //                                 }}
// // //                             >
// // //                                 <Button
// // //                                     variant="outlined"
// // //                                     startIcon={<img src="https://cf.quizizz.com/img/logos/googleDrive.png" alt="Google Drive" style={{ height: '20px' }} />}
// // //                                     sx={{ borderRadius: 1, p: 2 }}
// // //                                 >
// // //                                     Google Drive
// // //                                 </Button>
// // //                                 <Button
// // //                                     variant="outlined"
// // //                                     startIcon={<img src="https://cf.quizizz.com/img/logos/onedrive.png" alt="One Drive" style={{ height: '20px' }} />}
// // //                                     sx={{ borderRadius: 1, p: 2 }}
// // //                                 >
// // //                                     One Drive
// // //                                 </Button>
// // //                                 <Box
// // //                                     sx={{
// // //                                         display: 'flex',
// // //                                         alignItems: 'center',
// // //                                         border: '1px solid #ccc',
// // //                                         borderRadius: 1,
// // //                                         p: 1,
// // //                                         position: 'relative',
// // //                                     }}
// // //                                 >
// // //                                     <Typography sx={{ flexGrow: 1, mx: 2 }}>
// // //                                         <CloudUploadIcon sx={{ mr: 1 }} />
// // //                                         Upload Video
// // //                                     </Typography>
// // //                                     <input
// // //                                         type="file"
// // //                                         accept="video/mp4, video/ogg, video/webm"
// // //                                         style={{
// // //                                             position: 'absolute',
// // //                                             left: 0,
// // //                                             top: 0,
// // //                                             height: '100%',
// // //                                             width: '100%',
// // //                                             cursor: 'pointer',
// // //                                             opacity: 0,
// // //                                             zIndex: 5,
// // //                                         }}
// // //                                         onChange={handleVideoUpload}
// // //                                     />
// // //                                     <Tooltip title="Info">
// // //                                         <InfoOutlinedIcon sx={{ ml: 'auto', mr: 2, color: 'grey.600' }} />
// // //                                     </Tooltip>
// // //                                 </Box>
// // //                             </Box>
// // //                         </Box>
// // //                     </Box>
// // //                 </DialogContent>
// // //                 <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
// // //                     <Button
// // //                         onClick={onClose}
// // //                         variant="text"
// // //                         sx={{
// // //                             background: "rgb(249 249 249)",
// // //                             color: "black",
// // //                             '&:hover': {
// // //                                 backgroundColor: 'rgb(249 249 249)',
// // //                                 color: "black",
// // //                             },
// // //                         }}
// // //                     >
// // //                         Cancel
// // //                     </Button>
// // //                     <Button
// // //                         onClick={handleInsert}
// // //                         variant="contained"
// // //                         disabled={!selectedVideo}
// // //                         sx={{
// // //                             background: selectedVideo ? "rgb(136 84 192)" : "grey",
// // //                             '&:hover': {
// // //                                 backgroundColor: selectedVideo ? 'rgb(136 84 192)' : 'grey',
// // //                             },
// // //                         }}
// // //                     >
// // //                         Insert
// // //                     </Button>
// // //                 </DialogActions>
// // //             </Box>
// // //         </Dialog>
// // //     );
// // // };

// // // export default VideoModal;








// // import React, { useState, useRef } from 'react';
// // import {
// //     Dialog,
// //     DialogTitle,
// //     DialogContent,
// //     DialogActions,
// //     IconButton,
// //     Button,
// //     Box,
// //     Typography,
// //     Tooltip,
// //     Paper,
// //     InputBase,
// // } from '@mui/material';
// // import {
// //     Close as CloseIcon,
// //     CloudUpload as CloudUploadIcon,
// //     PlayArrow as PlayArrowIcon,
// //     Pause as PauseIcon,
// //     InfoOutlined as InfoOutlinedIcon,
// //     Search as SearchIcon,
// //     Clear as ClearIcon
// // } from '@mui/icons-material';
// // import { RiVideoAddFill } from "react-icons/ri";

// // const VideoModal = ({ open, onClose }) => {
// //     const [selectedVideo, setSelectedVideo] = useState(null);
// //     const [videoURL, setVideoURL] = useState('');
// //     const [isPlaying, setIsPlaying] = useState(false);
// //     const videoRef = useRef(null);

// //     const handleVideoUpload = (event) => {
// //         const file = event.target.files[0];
// //         console.log(file,"file.......")
// //         if (file) {
// //             const url = URL.createObjectURL(file);
// //             setSelectedVideo(file);
// //             setVideoURL(url);
// //             console.log(url); // Logs the video URL to the console
// //         }
// //     };

// //     const handleInsert = () => {
// //         if (selectedVideo) {
// //             console.log('Video selected:', selectedVideo);
// //             // Implement further actions for the Insert button here
// //         }
// //     };

// //     const togglePlayPause = () => {
// //         if (videoRef.current) {
// //             if (isPlaying) {
// //                 videoRef.current.pause();
// //             } else {
// //                 videoRef.current.play();
// //             }
// //             setIsPlaying(!isPlaying);
// //         }
// //     };

// //     const handleVideoCloseModal = () => {
// //         setSelectedVideo(null);
// //         setVideoURL('');
// //         setIsPlaying(false);
// //         onClose(); // Call the passed `onClose` prop to handle additional closing actions
// //       };
// //     return (
// //         <Dialog
// //             open={open}
// //             onClose={onClose}
// //             fullWidth
// //             maxWidth="md"
// //             sx={{ '& .MuiDialog-paper': { borderRadius: 2 } }}
// //         >
// //             <Box sx={{ position: 'relative' }}>
// //                 <IconButton
// //                     aria-label="Close"
// //                     onClick={onClose}
// //                     sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
// //                 >
// //                     <CloseIcon />
// //                 </IconButton>
// //                 <DialogTitle sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
// //                     <Box
// //                         sx={{
// //                             display: 'flex',
// //                             alignItems: 'center',
// //                             justifyContent: 'center',
// //                             width: 40,
// //                             height: 40,
// //                             borderRadius: '50%',
// //                             backgroundColor: 'rgb(237 230 246)',
// //                             color: 'rgb(136 84 192)',
// //                             marginRight: 1,
// //                         }}
// //                     >
// //                         <RiVideoAddFill />
// //                     </Box>
// //                     <Box>
// //                         <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
// //                             Insert a video
// //                         </Typography>
// //                         <Typography variant="subtitle2" color="text.secondary">
// //                             Pick a .mp4, .ogg, .webm video from your Google Drive, One Drive or search all of YouTube
// //                         </Typography>
// //                     </Box>
// //                 </DialogTitle>
// //                 <DialogContent dividers sx={{ paddingX: 4 }}>
// //                     <Box
// //                         sx={{
// //                             border: '1px dashed',
// //                             borderColor: 'divider',
// //                             height: 300,
// //                             display: 'flex',
// //                             flexDirection: 'column',
// //                             justifyContent: 'center',
// //                             alignItems: 'center',
// //                             backgroundColor: 'rgb(249 249 249)',
// //                             position: 'relative',
// //                             padding: 2,
// //                         }}
// //                     >
// //                         {videoURL ? (
// //                             <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
// //                                 <video
// //                                     ref={videoRef}
// //                                     src={videoURL}
// //                                     style={{ width: '100%', height: '100%' }}
// //                                     onClick={togglePlayPause}  // Toggle play/pause on video click
// //                                 />
// //                                 <IconButton
// //                                     onClick={togglePlayPause}
// //                                     sx={{
// //                                         position: 'absolute',
// //                                         top: '50%',
// //                                         left: '50%',
// //                                         transform: 'translate(-50%, -50%)',
// //                                         backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //                                         color: 'white',
// //                                     }}
// //                                 >
// //                                     {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
// //                                 </IconButton>
// //                             </Box>
// //                         ) : (


// //                         <Box sx={{ mt: 2 }}>
// //                             {/* Search Box */}
// //                             <Box className="searchbox-elem" mb={2}>
// //                                 <Paper
// //                                     component="form"
// //                                     sx={{
// //                                         p: '2px 4px',
// //                                         display: 'flex',
// //                                         alignItems: 'center',
// //                                         borderRadius: 1,
// //                                     }}
// //                                 >
// //                                     <InputBase
// //                                         sx={{ ml: 1, flex: 1 }}
// //                                         placeholder="Search for anything on YouTube or paste a link here"
// //                                         inputProps={{ 'aria-label': 'search' }}
// //                                     />
// //                                     <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
// //                                         <SearchIcon />
// //                                     </IconButton>
// //                                     <IconButton sx={{ p: '10px' }} aria-label="clear">
// //                                         <ClearIcon />
// //                                     </IconButton>
// //                                 </Paper>
// //                             </Box>

// //                             {/* Google Drive, One Drive, and Upload Video Options */}
// //                             <Box
// //                                 sx={{
// //                                     display: 'grid',
// //                                     gap: 2,
// //                                     gridTemplateColumns: '1fr 1fr 1.2fr',
// //                                     justifyContent: 'center',
// //                                     mb: 2,
// //                                 }}
// //                             >
// //                                 <Button
// //                                     variant="outlined"
// //                                     startIcon={<img src="https://cf.quizizz.com/img/logos/googleDrive.png" alt="Google Drive" style={{ height: '20px' }} />}
// //                                     sx={{ borderRadius: 1, p: 2 }}
// //                                 >
// //                                     Google Drive
// //                                 </Button>
// //                                 <Button
// //                                     variant="outlined"
// //                                     startIcon={<img src="https://cf.quizizz.com/img/logos/onedrive.png" alt="One Drive" style={{ height: '20px' }} />}
// //                                     sx={{ borderRadius: 1, p: 2 }}
// //                                 >
// //                                     One Drive
// //                                 </Button>
// //                                 <Box
// //                                     sx={{
// //                                         display: 'flex',
// //                                         alignItems: 'center',
// //                                         border: '1px solid #ccc',
// //                                         borderRadius: 1,
// //                                         p: 1,
// //                                         position: 'relative',
// //                                     }}
// //                                 >
// //                                     <Typography sx={{ flexGrow: 1, mx: 2 }}>
// //                                         <CloudUploadIcon sx={{ mr: 1 }} />
// //                                         Upload Video
// //                                     </Typography>
// //                                     <input
// //                                         type="file"
// //                                         accept="video/mp4, video/ogg, video/webm"
// //                                         style={{
// //                                             position: 'absolute',
// //                                             left: 0,
// //                                             top: 0,
// //                                             height: '100%',
// //                                             width: '100%',
// //                                             cursor: 'pointer',
// //                                             opacity: 0,
// //                                             zIndex: 5,
// //                                         }}
// //                                         onChange={handleVideoUpload}
// //                                     />
// //                                     <Tooltip title="Info">
// //                                         <InfoOutlinedIcon sx={{ ml: 'auto', mr: 2, color: 'grey.600' }} />
// //                                     </Tooltip>
// //                                 </Box>
// //                             </Box>
// //                         </Box>
// //                          )}
// //                     </Box>
// //                 </DialogContent>
// //                 <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
// //                     <Button
// //                         onClick={handleVideoCloseModal}
// //                         variant="text"
// //                         sx={{
// //                             background: "rgb(249 249 249)",
// //                             color: "black",
// //                             '&:hover': {
// //                                 backgroundColor: 'rgb(249 249 249)',
// //                                 color: "black",
// //                             },
// //                         }}
// //                     >
// //                         Cancel
// //                     </Button>
// //                     <Button
// //                         onClick={handleInsert}
// //                         variant="contained"
// //                         disabled={!selectedVideo}
// //                         sx={{
// //                             background: selectedVideo ? "rgb(136 84 192)" : "grey",
// //                             '&:hover': {
// //                                 backgroundColor: selectedVideo ? 'rgb(136 84 192)' : 'grey',
// //                             },
// //                         }}
// //                     >
// //                         Insert
// //                     </Button>
// //                 </DialogActions>
// //             </Box>
// //         </Dialog>
// //     );
// // };

// // export default VideoModal;


// import React, { useState, useRef } from 'react';
// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     IconButton,
//     Button,
//     Box,
//     Typography,
//     Tooltip,
//     Paper,
//     InputBase,
// } from '@mui/material';
// import {
//     Close as CloseIcon,
//     CloudUpload as CloudUploadIcon,
//     PlayArrow as PlayArrowIcon,
//     Pause as PauseIcon,
//     InfoOutlined as InfoOutlinedIcon,
//     Search as SearchIcon,
//     Clear as ClearIcon
// } from '@mui/icons-material';
// import { RiVideoAddFill } from "react-icons/ri";

// const VideoModal = ({ open, onClose }) => {
//     const [selectedVideo, setSelectedVideo] = useState(null);
//     const [videoURL, setVideoURL] = useState('');
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [searchValue, setSearchValue] = useState('');
//     const videoRef = useRef(null);

//     const handleVideoUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const url = URL.createObjectURL(file);
//             setSelectedVideo(file);
//             setVideoURL(url);
//         }
//     };

//     const handleInsert = () => {
//         if (selectedVideo || videoURL) {
//             console.log('Video selected or URL:', selectedVideo || videoURL);
//             // Implement further actions for the Insert button here
//         }
//     };

//     const togglePlayPause = () => {
//         if (videoRef.current) {
//             if (isPlaying) {
//                 videoRef.current.pause();
//             } else {
//                 videoRef.current.play();
//             }
//             setIsPlaying(!isPlaying);
//         }
//     };

//     const handleVideoCloseModal = () => {
//         setSelectedVideo(null);
//         setVideoURL('');
//         setSearchValue('');
//         setIsPlaying(false);
//         onClose();
//     };

//     const handleSearchChange = (event) => {
//         setSearchValue(event.target.value);
//     };

//     const handleSearchSubmit = (event) => {
//         event.preventDefault();
//         if (searchValue.trim()) {
//             setVideoURL(searchValue.trim());
//             setSelectedVideo(null); // Reset file selection if using URL
//         }
//     };

//     const clearSearch = () => {
//         setSearchValue('');
//         setVideoURL('');
//     };

//     return (
//         <Dialog
//             open={open}
//             onClose={onClose}
//             fullWidth
//             maxWidth="md"
//             sx={{ '& .MuiDialog-paper': { borderRadius: 2 } }}
//         >
//             <Box sx={{ position: 'relative' }}>
//                 <IconButton
//                     aria-label="Close"
//                     onClick={handleVideoCloseModal}
//                     sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
//                 >
//                     <CloseIcon />
//                 </IconButton>
//                 <DialogTitle sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             width: 40,
//                             height: 40,
//                             borderRadius: '50%',
//                             backgroundColor: 'rgb(237 230 246)',
//                             color: 'rgb(136 84 192)',
//                             marginRight: 1,
//                         }}
//                     >
//                         <RiVideoAddFill />
//                     </Box>
//                     <Box>
//                         <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
//                             Insert a video
//                         </Typography>
//                         <Typography variant="subtitle2" color="text.secondary">
//                             Pick a .mp4, .ogg, .webm video from your Google Drive, One Drive, or search all of YouTube
//                         </Typography>
//                     </Box>
//                 </DialogTitle>
//                 <DialogContent dividers sx={{ paddingX: 4 }}>
//                     <Box
//                         sx={{
//                             border: '1px dashed',
//                             borderColor: 'divider',
//                             height: 300,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             backgroundColor: 'rgb(249 249 249)',
//                             position: 'relative',
//                             padding: 2,
//                         }}
//                     >
//                         {videoURL ? (
//                             <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
//                                 <video
//                                     ref={videoRef}
//                                     src={videoURL}
//                                     style={{ width: '100%', height: '100%' }}
//                                     controls
//                                     onClick={togglePlayPause}
//                                 />
//                                 <IconButton
//                                     onClick={togglePlayPause}
//                                     sx={{
//                                         position: 'absolute',
//                                         top: '50%',
//                                         left: '50%',
//                                         transform: 'translate(-50%, -50%)',
//                                         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                                         color: 'white',
//                                     }}
//                                 >
//                                     {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
//                                 </IconButton>
//                             </Box>
//                         ) : (
//                             <Box sx={{ mt: 2 }}>
//                                 {/* Search Box */}
//                                 <Box className="searchbox-elem" mb={2}>
//                                     <Paper
//                                         component="form"
//                                         onSubmit={handleSearchSubmit}
//                                         sx={{
//                                             p: '2px 4px',
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             borderRadius: 1,
//                                         }}
//                                     >
//                                         <InputBase
//                                             sx={{ ml: 1, flex: 1 }}
//                                             placeholder="Search for anything on YouTube or paste a link here"
//                                             inputProps={{ 'aria-label': 'search' }}
//                                             value={searchValue}
//                                             onChange={handleSearchChange}
//                                         />
//                                         <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
//                                             <SearchIcon />
//                                         </IconButton>
//                                         <IconButton sx={{ p: '10px' }} aria-label="clear" onClick={clearSearch}>
//                                             <ClearIcon />
//                                         </IconButton>
//                                     </Paper>
//                                 </Box>

//                                 {/* Google Drive, One Drive, and Upload Video Options */}
//                                 <Box
//                                     sx={{
//                                         display: 'grid',
//                                         gap: 2,
//                                         gridTemplateColumns: '1fr 1fr 1.2fr',
//                                         justifyContent: 'center',
//                                         mb: 2,
//                                     }}
//                                 >
//                                     <Button
//                                         variant="outlined"
//                                         startIcon={<img src="https://cf.quizizz.com/img/logos/googleDrive.png" alt="Google Drive" style={{ height: '20px' }} />}
//                                         sx={{ borderRadius: 1, p: 2 }}
//                                     >
//                                         Google Drive
//                                     </Button>
//                                     <Button
//                                         variant="outlined"
//                                         startIcon={<img src="https://cf.quizizz.com/img/logos/onedrive.png" alt="One Drive" style={{ height: '20px' }} />}
//                                         sx={{ borderRadius: 1, p: 2 }}
//                                     >
//                                         One Drive
//                                     </Button>
//                                     <Box
//                                         sx={{
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             border: '1px solid #ccc',
//                                             borderRadius: 1,
//                                             p: 1,
//                                             position: 'relative',
//                                         }}
//                                     >
//                                         <Typography sx={{ flexGrow: 1, mx: 2 }}>
//                                             <CloudUploadIcon sx={{ mr: 1 }} />
//                                             Upload Video
//                                         </Typography>
//                                         <input
//                                             type="file"
//                                             accept="video/mp4, video/ogg, video/webm"
//                                             style={{
//                                                 position: 'absolute',
//                                                 left: 0,
//                                                 top: 0,
//                                                 height: '100%',
//                                                 width: '100%',
//                                                 cursor: 'pointer',
//                                                 opacity: 0,
//                                                 zIndex: 5,
//                                             }}
//                                             onChange={handleVideoUpload}
//                                         />
//                                         <Tooltip title="Info">
//                                             <InfoOutlinedIcon sx={{ ml: 'auto', mr: 2, color: 'grey.600' }} />
//                                         </Tooltip>
//                                     </Box>
//                                 </Box>
//                             </Box>
//                         )}
//                     </Box>
//                 </DialogContent>
//                 <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
//                     <Button
//                         onClick={handleVideoCloseModal}
//                         variant="text"
//                         sx={{
//                             background: "rgb(249 249 249)",
//                             color: "black",
//                             '&:hover': {
//                                 backgroundColor: 'rgb(249 249 249)',
//                                 color: "black",
//                             },
//                         }}
//                     >
//                         Cancel
//                     </Button>
//                     <Button
//                         onClick={handleInsert}
//                         variant="contained"
//                         disabled={!selectedVideo && !videoURL}
//                         sx={{
//                             background: selectedVideo || videoURL ? "rgb(136 84 192)" : "grey",
//                             '&:hover': {
//                                 backgroundColor: selectedVideo || videoURL ? 'rgb(136 84 192)' : 'grey',
//                             },
//                         }}
//                     >
//                         Insert
//                     </Button>
//                 </DialogActions>
//             </Box>
//         </Dialog>
//     );
// };

// export default VideoModal;



import React, { useState, useRef } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Button,
    Box,
    Typography,
    Tooltip,
    Paper,
    InputBase,
} from '@mui/material';
import {
    Close as CloseIcon,
    CloudUpload as CloudUploadIcon,
    PlayArrow as PlayArrowIcon,
    Pause as PauseIcon,
    InfoOutlined as InfoOutlinedIcon,
    Search as SearchIcon,
    Clear as ClearIcon
} from '@mui/icons-material';
import { RiVideoAddFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import actions from "../../../../../ReduxStore/actions/index";


const VideoModal = ({ open, onClose,videoURL,setVideoURL,setUpdateVideoURL }) => {
    const dispatch = useDispatch();
    const [selectedVideo, setSelectedVideo] = useState(null);
    // const [videoURL, setVideoURL] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const videoRef = useRef(null);

    const handleVideoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setSelectedVideo(file);
            setVideoURL(url);
        }
    };
    const { QuestionVideoPost } = useSelector((state) => state?.QuestionVideoPost);
    console.log(QuestionVideoPost,"QuestionVideoPostvideovoideo video video")
    

    
    // const handleInsert = () => {
    //     if (selectedVideo || videoURL) {


    //         const data3 = {
    //             data:
    //             {
    //               "video": videoURL
    //             },
    //             method: "post",
    //             apiName: "uploadVideo",
    //           };
    //           dispatch(actions.QUESTIONVIDEOPOST(data3));
     
    //         // console.log(videoURL,"selectedVideo for upload")
    //         console.log('Video selected or URL:', selectedVideo || videoURL);
    //         setUpdateVideoURL(selectedVideo || videoURL)
    //         onClose()
    //         // setVideoURL(selectedVideo || videoURL)
    //         // Implement further actions for the Insert button here
    //     }
    // };



    // const handleInsert = async () => {
    //     if (selectedVideo || videoURL) {
    //         let file;
    
    //         if (videoURL && videoURL.startsWith('blob:')) {
    //             try {
    //                 // Fetch the Blob data from the URL
    //                 const response = await fetch(videoURL);
    //                 const blob = await response.blob();
    
    //                 // Create a File object with the desired filename
    //                 const filename = selectedVideo.name; // Replace with dynamic filename if needed
    //                 file = new File([blob], filename, { type: blob.type });
    //                 console.log(file,"filesssaaaaaaaaaaaaaaaaaaaaaaaaaa")
    //             } catch (error) {
    //                 console.error('Error fetching Blob data:', error);
    //                 return;
    //             }
    //         } else {
    //             // If it's a File object already
    //             file = selectedVideo;
    //         }
    
    //         const data3 = {
    //             data:file,
    //             method: "post",
    //             apiName: "uploadVideo",
    //         };
    //         dispatch(actions.QUESTIONVIDEOPOST(data3));
    
    //         console.log('Video selected or URL:', file);
    //         setUpdateVideoURL(URL.createObjectURL(file));
    //         onClose();
    //     }
    // };


    const handleInsert = async () => {
        if (selectedVideo || videoURL) {
            console.log(videoURL,"videoUrllllllll")
            let file;
    
            if (videoURL && videoURL.startsWith('blob:')) {
                try {
                    // Fetch the Blob data from the URL
                    const response = await fetch(videoURL);
                    const blob = await response.blob();
    
                    // Create a File object with the desired filename
                    const filename = selectedVideo.name; // Replace with dynamic filename if needed
                    file = new File([blob], filename, { type: blob.type });
                    console.log(file, "file created from blob");
                } catch (error) {
                    console.error('Error fetching Blob data:', error);
                    return;
                }
            } else {
                // If it's a File object already
                file = selectedVideo;
            }
    
            // Create FormData and append the file
            const formData = new FormData();
            formData.append('video', file);
    
            // Prepare data for the API request
            const data3 = {
                data: formData,
                method: "post",
                apiName: "uploadVideo",
            };
            dispatch(actions.QUESTIONVIDEOPOST(data3));
    
            console.log('Video selected or URL:', file);
            setUpdateVideoURL(URL.createObjectURL(file));
            onClose();
        }
    };
    
    
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoCloseModal = () => {
        setSelectedVideo(null);
        setVideoURL('');
        setSearchValue('');
        setIsPlaying(false);
        onClose();
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchValue.trim()) {
            setVideoURL(searchValue.trim());
            setSelectedVideo(null); // Reset file selection if using URL
        }
    };

    const clearSearch = () => {
        setSearchValue('');
        setVideoURL('');
    };

    const isYouTubeUrl = (url) => {
        return url.match(/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/);
    };

    const getYouTubeEmbedUrl = (url) => {
        const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return match ? `https://www.youtube.com/embed/${match[1]}` : '';
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
            sx={{ '& .MuiDialog-paper': { borderRadius: 2 } }}
        >
            <Box sx={{ position: 'relative' }}>
                <IconButton
                    aria-label="Close"
                    onClick={handleVideoCloseModal}
                    sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogTitle sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundColor: 'rgb(237 230 246)',
                            color: 'rgb(136 84 192)',
                            marginRight: 1,
                        }}
                    >
                        <RiVideoAddFill />
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
                            Insert a video
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            Pick a .mp4, .ogg, .webm video from your Google Drive, One Drive, or search all of YouTube
                        </Typography>
                    </Box>
                </DialogTitle>
                <DialogContent dividers sx={{ paddingX: 4 }}>
                    <Box
                        sx={{
                            border: '1px dashed',
                            borderColor: 'divider',
                            height: 300,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgb(249 249 249)',
                            position: 'relative',
                            padding: 2,
                        }}
                    >
                        {videoURL ? (
                            isYouTubeUrl(videoURL) ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={getYouTubeEmbedUrl(videoURL)}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="YouTube Video"
                                ></iframe>
                            ) : (
                                <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <video
                                        ref={videoRef}
                                        src={videoURL}
                                        style={{ width: '100%', height: '100%' }}
                                        controls
                                        onClick={togglePlayPause}
                                    />
                                    <IconButton
                                        onClick={togglePlayPause}
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            color: 'white',
                                        }}
                                    >
                                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                                    </IconButton>
                                </Box>
                            )
                        ) : (
                            <Box sx={{ mt: 2 }}>
                                {/* Search Box */}
                                <Box className="searchbox-elem" mb={2}>
                                    <Paper
                                        component="form"
                                        onSubmit={handleSearchSubmit}
                                        sx={{
                                            p: '2px 4px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            borderRadius: 1,
                                        }}
                                    >
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Search for anything on YouTube or paste a link here"
                                            inputProps={{ 'aria-label': 'search' }}
                                            value={searchValue}
                                            onChange={handleSearchChange}
                                        />
                                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                            <SearchIcon />
                                        </IconButton>
                                        <IconButton sx={{ p: '10px' }} aria-label="clear" onClick={clearSearch}>
                                            <ClearIcon />
                                        </IconButton>
                                    </Paper>
                                </Box>

                                {/* Google Drive, One Drive, and Upload Video Options */}
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gap: 2,
                                        gridTemplateColumns: '1fr',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        mb: 2,
                                        textAlign: 'center', // Center the text inside the box
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center', // Center the content horizontally
                                            border: '1px solid #ccc',
                                            borderRadius: 1,
                                            p: 1,
                                            position: 'relative',
                                            width: '100%', // Ensure the Box takes up full width of its container
                                            maxWidth: '300px', // Set a maximum width to keep the box compact
                                            mx: 'auto', // Center the box horizontally
                                        }}
                                    >
                                        <Typography sx={{ flexGrow: 1, mx: 2, textAlign: 'center' }}>
                                            <CloudUploadIcon sx={{ mr: 1 }} />
                                            Upload Video
                                        </Typography>
                                        <input
                                            type="file"
                                            accept="video/mp4, video/ogg, video/webm"
                                            style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: 0,
                                                width: '100%',
                                                height: '100%',
                                                opacity: 0,
                                                cursor: 'pointer',
                                            }}
                                            onChange={handleVideoUpload}
                                        />
                                        <Tooltip title="Upload an MP4, OGG, or WebM video. Maximum size: 100MB">
                                            <InfoOutlinedIcon color="action" sx={{ position: 'absolute', right: 8, top: 8 }} />
                                        </Tooltip>
                                    </Box>
                                </Box>


                                {/* Info Tooltip */}

                            </Box>
                        )}
                    </Box>
                </DialogContent>
                <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
                    <Button
                        onClick={handleVideoCloseModal}
                        variant="text"
                        sx={{
                            background: "rgb(249 249 249)",
                            color: "black",
                            '&:hover': {
                                backgroundColor: 'rgb(249 249 249)',
                                color: "black",
                            },
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleInsert}
                        variant="contained"
                        disabled={!selectedVideo && !videoURL}
                        sx={{
                            background: selectedVideo || videoURL ? "rgb(136 84 192)" : "grey",
                            '&:hover': {
                                backgroundColor: selectedVideo || videoURL ? 'rgb(136 84 192)' : 'grey',
                            },
                        }}
                    >
                        Insert
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

export default VideoModal;
