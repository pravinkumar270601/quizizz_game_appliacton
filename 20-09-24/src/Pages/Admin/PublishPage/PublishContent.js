import React from 'react';
import { Box, Button, IconButton, Typography, Avatar, Tooltip, Divider } from '@mui/material';
import { Code, Share, CopyAll, Delete, Print, Settings, Download, Folder, Sparkles } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import ContentCopy from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Check from '@mui/icons-material/Check';
import AccessTime from '@mui/icons-material/AccessTime';
import { IoMdCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../ReduxStore/actions';
import { adminUrl as baseUrl } from '../../../constants';
import imageUp from "../../../Assets/Quizz_image.png"
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import publishImage from "../../../Assets/publishImage.jpg"
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { PiBooksDuotone } from "react-icons/pi";




const PublishContent = () => {

    const navigate = useNavigate()
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md')); // Detect medium and smaller devices
    const [anchorEl, setAnchorEl] = useState(null); // State to manage the Menu anchor
    const [mediaType, setMediaType] = useState(''); // State to manage the media type
    const [mediaUrl, setMediaUrl] = useState(''); // State to manage the media URL
    const [publishModal, setPublishModal] = useState(false)



    const { QuestionWithAnsPost } = useSelector((state) => state?.QuestionWithAnsPost);
    const { GetAllQuestion } = useSelector((state) => state?.GetAllQuestion);
    const { DeleteQuestionById } = useSelector((state) => state?.DeleteQuestionById);
    const { GetQuestionById } = useSelector((state) => state?.GetQuestionById);
    console.log(GetQuestionById, "getquetiobyid__________--")

    console.log(GetAllQuestion, "GetAllQuestiond")

    const { GetAllQuestionByPublishId } = useSelector((state) => state?.GetAllQuestionByPublishId);

    const { GetPublishById } = useSelector((state) => state?.GetPublishById);
    console.log(GetPublishById, "GetPublishById")

    const { PublishPost } = useSelector((state) => state?.PublishPost);
    console.log(PublishPost, " PublishPost");



    useEffect(() => {
        console.log(PublishPost.data.publish_id, "PublishPost.dataPublishPost.data");
        if (PublishPost?.data?.publish_id) {
            const data = { data: {}, method: "get", apiName: `getAllQuestionAnswersByPublishId/${PublishPost?.data?.publish_id}` };
            // console.log("Dispatching LOCATIONMOVIEDROPDOWN action:", data);
            dispatch(actions.GETALLQUESTIONBYPUBLISHID(data));

            const data2 = { data: {}, method: "get", apiName: `getPublishById/${PublishPost?.data?.publish_id}` };
            // console.log("Dispatching LOCATIONMOVIEDROPDOWN action:", data);
            dispatch(actions.GETPUBLISHBYID(data2));


        }
        // setPublishCreateId(PublishPost?.data?.publish_id)


    }, [PublishPost?.data])



    const [GetPublishByIdData, setGetPublishByIdData] = useState([])

    useEffect(() => {

        console.log(GetPublishById, "GetPublishByIdGetPublishById");


        if (GetPublishById?.data) {
            const PublishheadContent =
            {
                name: GetPublishById?.data?.name,
                visibilityType: GetPublishById?.data?.visibilityType,
                grade: GetPublishById?.data?.grade,
                imageUrl: GetPublishById?.data?.imageUrl || publishImage,
                language: GetPublishById?.data?.language,
                subject: GetPublishById?.data?.subject,
                publish_id: GetPublishById?.data?.publish_id,
                user_id: GetPublishById?.data?.user_id
            }

            setGetPublishByIdData(PublishheadContent)
            console.log(PublishheadContent,"PublishheadContentPublishheadContent");
            
        }

    }, [GetPublishById?.data])
    const dispatch = useDispatch()


    const choices = [
        { imageurl: "", text: "valla", correct: "true" },
        { imageurl: "", text: "valla" },
        { imageurl: imageUp, text: "valla" },
        { imageurl: imageUp, text: "valla" }
    ];
    useEffect(() => {
        // Initialize mediaType and mediaUrl when component mounts
        setMediaType("image");
        setMediaUrl(imageUp);
    }, []);

    const handlePublishModalOpen = () => {
        setPublishModal(true)
    }

    const handlePublishModalClose = () => {
        setPublishModal(false)
    }

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleEditQuestion = (question_id) => {
        console.log(question_id, "questionId----edit")
        navigate("/question-editor")
        const data = { data: {}, method: "get", apiName: `getQuestionAnswersById/${question_id}` };
        // console.log("Dispatching LOCATIONMOVIEDROPDOWN action:", data);
        dispatch(actions.GETQUESTIONBYID(data));

    }

    const [containers, setContainers] = useState([{
        mediaType: 'image',
        mediaUrl: imageUp,
        questionText: "",
        choices: [
            { imageurl: '', text: 'valla', correct: 'true' },
            { imageurl: '', text: 'valla' },
            { imageurl: imageUp, text: 'valla' },
            { imageurl: imageUp, text: 'valla' }
        ]
    }]);


    const container1 = GetAllQuestionByPublishId?.data?.map((data) => {
        // Determine the media type and URL
        let mediaType;
        let mediaUrl;

        if (data.questionImageUrl) {
            mediaType = 'image';
            mediaUrl = data.questionImageUrl;
            console.log(mediaUrl, "questionImageUrl____image");
        } else if (data.questionVideoUrl) {
            mediaType = 'video';
            mediaUrl = data.questionVideoUrl;
            console.log(mediaUrl, "questionVideoUrl____");
        } else if (data.questionAudioUrl) {
            mediaType = 'audio';
            mediaUrl = data.questionAudioUrl;
            console.log(mediaUrl, "questionAudioUrl____audio");
        } else {
            mediaType = null; // Default value for media type
            mediaUrl = null;  // Default value for media URL
        }

        // Safely parse options and correctAnswers
        let options = [];
        let correctAnswers = [];
        try {
            options = JSON.parse(data.options);
        } catch (error) {
            console.error('Error parsing options:', error);
        }

        try {
            const parsedCorrectAnswers = JSON.parse(data.correctAnswer);
            // Determine if correctAnswer is an array of objects or strings
            if (Array.isArray(parsedCorrectAnswers) && typeof parsedCorrectAnswers[0] === 'object') {
                // Format: [{ text: "example", image: "" }]
                correctAnswers = parsedCorrectAnswers;
            } else if (Array.isArray(parsedCorrectAnswers) && typeof parsedCorrectAnswers[0] === 'string') {
                // Format: ["example"]
                correctAnswers = parsedCorrectAnswers.map(text => ({ text, image: '' }));
            } else {
                console.error('Unknown correctAnswer format');
            }
        } catch (error) {
            console.error('Error parsing correctAnswer:', error);
        }

        const imageUrl = JSON.parse(data.optionsImageUrl) || []; // Default to empty array if null

        // Return the mapped object for each question
        return {
            questionText: data.questionText,
            mediaType: mediaType, // Assign media type
            mediaUrl: mediaUrl,   // Assign media URL
            imageUrls: imageUrl,
            question_id: data.question_id,
            questionType: JSON.parse(data.questionType),
            questionPoint: JSON.parse(data.questionPoint),
            questionTiming: JSON.parse(data.questionTiming),
            choices: Array.isArray(options) ? options.map((optionText, index) => {
                // Get the corresponding image URL for the option
                const optionImageUrl = imageUrl[index] || null;

                // Check if the current option (text and image) is in the correctAnswers array
                const isCorrect = correctAnswers.some(
                    (correctAnswer) =>
                        correctAnswer &&
                        ((correctAnswer.text && optionText && correctAnswer.text.trim() === optionText.trim()) ||
                            (correctAnswer.image && optionImageUrl && correctAnswer.image === optionImageUrl))
                );

                return {
                    imageurl: optionImageUrl,  // Assign specific image URL if available
                    text: optionText,
                    correct: isCorrect ? 'true' : 'false',  // Mark the correct option
                };
            }) : [], // Default to empty array if options is not an array
        };
    });



    useEffect(() => {
        // Initialize mediaType and mediaUrl when component mounts
        setMediaType('image');
        setMediaUrl(imageUp);
    }, []);



    const handleDeleteQuestion = (question_id) => {
        console.log(question_id, "deleteedtdedt id")
        // setContainers((prev) => prev.filter((_, i) => i !== index));
        const data = { data: {}, method: "delete", apiName: `deleteQuestionById/${question_id}` };
        // console.log("Dispatching LOCATIONMOVIEDROPDOWN action:", data);
        dispatch(actions.DELETEQUESTIONBYID(data));

    };

    const handleAddContainer = () => {

        navigate("/question-editor")
    };

    const handlePreviousPageNavigate = () => {
        navigate(-1)
    }

    const hanlePublishPageNavigate = () => {
        navigate("/publish")
    }


    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                    borderRadius: 1,
                    padding: 4,
                    height: 250,
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Box sx={{ display: 'flex' }}>
                    <Box
                        sx={{
                            width: 120,
                            height: 120,
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                            backgroundColor: 'background.default',
                            borderRadius: 1,
                        }}
                    >
                        <img
                            src={GetPublishByIdData.imageUrl}
                            alt="Quiz Image"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                    <Box sx={{ flex: 1, marginLeft: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 0.5 }}>
                            <Box
                                sx={{
                                    paddingX: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: 1,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    fontSize: '0.75rem',
                                }}
                            >
                                <Typography variant="caption" color="text.secondary">
                                    quiz
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginY: 1 }}>
                            <Button sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="h6" component="span">
                                {GetPublishByIdData.name}
                                </Typography>
                                
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'start', flexWrap: 'wrap', flexDirection: "column" }}>
                            <Box sx={{ display: "flex" }}>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <HiOutlineAcademicCap sx={{ fontSize: 12 }} />
                                    {GetPublishByIdData.grade}
                                </Typography>
                                {/* <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} /> */}
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PiBooksDuotone sx={{ fontSize: 12 }} />
                                    {GetPublishByIdData.subject}
                                </Typography>
                            </Box>
                            {/* <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} /> */}
                            <Box sx={{ display: "flex" }}>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Code sx={{ fontSize: 12 }} />
                                    0% accuracy
                                </Typography>
                                {/* <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} /> */}
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Code sx={{ fontSize: 12 }} />
                                    0 plays
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            display: 'flex',
                            gap: 1,
                        }}
                    >
                        {/* <Tooltip title="Embed">
                            <IconButton size="small">
                                <Code sx={{ fontSize: 16 }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Share">
                            <IconButton size="small">
                                <Share sx={{ fontSize: 16 }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Like">
                            <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'red' } }}>
                                <Share sx={{ fontSize: 16 }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Create a copy">
                            <IconButton size="small">
                                <CopyAll sx={{ fontSize: 16 }} />
                            </IconButton>
                        </Tooltip> */}
                        <Tooltip title="Delete">
                            <IconButton size="small">
                                <Delete sx={{ fontSize: 16 }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Print">
                            <IconButton size="small">
                                <Print sx={{ fontSize: 16 }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Settings">
                            <IconButton size="small">
                                <Settings sx={{ fontSize: 16 }} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                    <Avatar
                        src="https://lh3.googleusercontent.com/a-/ALV-UjWH-pe0KYTuVxuGFop4NLtrbvB6UtxxpLx6RbXAp5285cA-Iv5quD1PnbYz5tzD9BzfSvxq5TlFuYZhN1dx5k3nnReeSqtjo9iAaAPSmzMhPm8CcoK45lxPjIP-EezJL7mpBG6Nn2jT3buEqBVZUJI0mvoJXfZA7FRmVD9NqrQcMp59N4UrlOM2zniHnM5UhGGGWd8N0b3cyf6qDtv10RW437qphO1Wpi3B-YElRuyhnyR-n7lGAvxkLBiJvOwnordU4WfTwR5XvINpU-MpisYjzXN1YAPXVMOVQrlUw4cG-kd_yc0CtSHz-MQ7RvClStT2zSnxpBk_k_-k5XElre_y1K98K6a0X1XXYDApR8iLvf4L9v-wfH0kWP-_8w6LhssO7m8W3Q6rw-63q6HjfS8x7NY58volpA1YgAW1NHEMTIEBaxuxsDOWoN-enz4Oc9YrK7pXUkhtBPvwyt_PnopMmuwBxLU3a-0Z5cJsjwlDP24AacPtsZAkJFrDTeHvbENv8g68_FkEG7lOqMclHWfUSGu9R1kt7-lUcqYbdYLjcsWd9l7pvPqQuJZuzgHdKf7-wqVGMTTwM5LO9rViuzdTg_WSzCaOW0vQ6AWoYAfx6Wk5Gj-awGLKNEjFq0yk8xjCC-KxVxMaUGlvebfIcrwva-5X9f0hGRb-5J-Fur4sxbUM2BECAiHAKnIEC6-NgTMc9iMT15zqq0KG9cobB4B6tnKaa0pwsjv_WVhOPvoDTseQ15LomLfuf2Tn0gOvdjUrv_doeWnBY2WNM2meQ8jqVUFE9v0TETnT_i9YBs0BXeoIS5lUgKkUYm95huj79n6RHPvYWnfc5jWen7exN1BujW2al9u4zWk7O_RvQZTMM--2HMoN1Biec4XzZixJOAl50P-9FUIFc2ZDRe-FOZN6HWRZ8EFpa8Zs911XkuBgaV5pMUD6iefyYCbbijcsL9nTFG1qpkjvzUWBIqgZin-suG1T=s96-c"
                        sx={{ width: 32, height: 32, marginRight: 1 }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="caption" component="a" href="/profile/66c04925271abea6d497c8a1" color="text.primary" sx={{ textDecoration: 'none' }}>
                            UserName
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            1 question
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Grid>

                {container1?.map((container, index) => (
                    <Grid container spacing={2} key={index} mt={3}>
                        <Grid item xs={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    border: 1,
                                    borderColor: 'grey.400',
                                    boxShadow: 1,
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                                    {/* Question Type */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                                        <Tooltip title="Drag to reorder">
                                            <IconButton size="small" sx={{ border: "1px solid #0909090d", borderRadius: "3px", color: "black", height: 28 }}>
                                                <PiDotsSixVerticalBold fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderColor: 'grey.400', borderRadius: 1, px: 1, height: 28 }}>
                                            <Check fontSize="small" />
                                            <Typography variant="caption" sx={{ ml: 1 }}>{container.questionType}</Typography>
                                        </Box>
                                    </Box>

                                    {/* Select Fields */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>

                                        <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderColor: 'grey.400', borderRadius: 1, px: 1, height: 28 }}>
                                            <AccessTime fontSize="small" />
                                            <Typography variant="caption" sx={{ ml: 1 }}>{container.questionPoint}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderColor: 'grey.400', borderRadius: 1, px: 1, height: 28 }}>
                                            <Check fontSize="small" />
                                            <Typography variant="caption" sx={{ ml: 1 }}>{container.questionTiming}</Typography>
                                        </Box>
                                    </Box>
                                    {/* </Box> */}

                                    {/* Actions */}
                                </Box>

                                {/* Media Section */}
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: "center" }}>
                                    {container.mediaType === 'image' && container.mediaUrl !== "null" && (
                                        <Box sx={{ textAlign: 'center' }}>
                                            <img src={container.mediaUrl} alt="Question Media" style={{ width: "100px", maxHeight: 100 }} />
                                        </Box>
                                    )}

                                    {container.mediaType === 'video' && container.mediaUrl !== "null" && (
                                        <Box sx={{ textAlign: 'center' }}>
                                            <video controls style={{ maxWidth: '100%', maxHeight: 200 }}>
                                                <source src={`${baseUrl}${container.mediaUrl}`} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </Box>
                                    )}

                                    {container.mediaType === 'audio' && container.mediaUrl !== "null" && (
                                        <Box sx={{ textAlign: 'center' }}>
                                            <audio controls>
                                                <source src={`${baseUrl}${container.mediaUrl}`} />
                                                Your browser does not support the audio element.
                                            </audio>
                                            {/* <audio
                              // ref={audioRef}
                              src={`${baseUrl}${container.mediaUrl}`}
                              style={{ display: 'none' }}
                              // onEnded={handleEnded}
                            /> */}


                                        </Box>
                                    )}

                                    <Box>{container.questionText}</Box>
                                </Box>

                                {/* Choices Section */}
                                <Box>
                                    <Typography variant="subtitle2" fontWeight="bold">Choices</Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                                        <Grid container spacing={1}>
                                            {container.choices.map((choice, index) => (
                                                <Grid item xs={6} key={index}>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            p: 1,
                                                            gap: 1,
                                                        }}
                                                    >
                                                        {choice.correct === "true" ? (
                                                            <IoMdCheckmarkCircle style={{ height: "25px", width: "30px", color: 'green' }} />
                                                        ) : (
                                                            <IoIosCloseCircle style={{ height: "25px", width: "30px", color: 'red' }} />
                                                        )}
                                                        {choice.imageurl !== null ? (
                                                            <>
                                                                <Box
                                                                    component="img"
                                                                    src={choice.imageurl}
                                                                    alt={choice.text}
                                                                    sx={{ width: 100, height: 50, borderRadius: 1 }}
                                                                />
                                                                <Typography variant="body2" sx={{ ml: 1 }}>{choice.text}</Typography>
                                                            </>
                                                        ) : (
                                                            <Box>
                                                                <Typography variant="body2" sx={{ ml: 1 }}>{choice.text}</Typography>
                                                            </Box>
                                                        )}
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PublishContent;
