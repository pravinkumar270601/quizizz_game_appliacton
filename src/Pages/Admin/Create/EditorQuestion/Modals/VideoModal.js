
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
import { setInitialStateOfQuestionVideoPost } from '../../../../../ReduxStore/Slices/QuestionEdit/QuestionVideoPost';


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
            setSelectedVideo(null)
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
