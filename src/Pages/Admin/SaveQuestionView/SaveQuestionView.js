





// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   IconButton,
//   InputBase,
//   Paper,
//   Typography,
//   Tooltip,
//   MenuItem,
//   Menu,
//   useMediaQuery,
// } from '@mui/material';
// import {
//   ChevronLeft,
//   Settings,
//   Save,
//   Search,
//   Add,
//   ContentCopy,
//   Check,
//   AccessTime,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   MoreVert, // Import the MoreVert icon for the three-dot toggle button
// } from '@mui/icons-material';
// import { Formik, Form, Field } from 'formik';
// import { Select as FormikSelect } from 'formik-material-ui';
// import { PiDotsSixVerticalBold } from "react-icons/pi";
// import { Cancel as CancelIcon, Check as CheckIcon } from '@mui/icons-material';
// import imageUp from "../../../Assets/Quizz_image.png"
// import { IoMdCheckmarkCircle } from "react-icons/io";
// import { height } from '@fortawesome/free-solid-svg-icons/fa0';
// import { MdOutlineCancel } from "react-icons/md";
// import { Navigate, useNavigate } from 'react-router-dom';
// import PublishContentModal from './PublishContentModal';
// import { useDispatch, useSelector } from 'react-redux';
// import actions from "../../../ReduxStore/actions/index";
// import { IoIosCloseCircle } from "react-icons/io";
// import { adminUrl as baseUrl } from '../../../constants';




// const questionPoints = [
//   { label: "1 point", value: "1point" },
//   { label: "2 points", value: "2points" },
//   // ...other options
// ];

// const questionSeconds = [
//   { label: "5 Seconds", value: "5seconds" },
//   { label: "10 Seconds", value: "10seconds" },
//   // ...other options
// ];




// const SaveQuestionView = () => {
//   const navigate = useNavigate()
//   const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md')); // Detect medium and smaller devices
//   const [anchorEl, setAnchorEl] = useState(null); // State to manage the Menu anchor
//   const [mediaType, setMediaType] = useState(''); // State to manage the media type
//   const [mediaUrl, setMediaUrl] = useState(''); // State to manage the media URL
//   const [publishModal, setPublishModal] = useState(false)



//   const { QuestionWithAnsPost } = useSelector((state) => state?.QuestionWithAnsPost);
//   const { GetAllQuestion } = useSelector((state) => state?.GetAllQuestion);
//   console.log(GetAllQuestion,"GetAllQuestiond")




//   const dispatch = useDispatch()
//   useEffect(() => {
//     const data = { data: {}, method: "get", apiName: `getQuestionsWithoutPublishByUserId/user/${1}` };
//     // console.log("Dispatching LOCATIONMOVIEDROPDOWN action:", data);
//     dispatch(actions.GETALLQUESTION(data));

//   }, [QuestionWithAnsPost.data.question_id])


//   const choices = [
//     { imageurl: "", text: "valla", correct: "true" },
//     { imageurl: "", text: "valla" },
//     { imageurl: imageUp, text: "valla" },
//     { imageurl: imageUp, text: "valla" }
//   ];
//   useEffect(() => {
//     // Initialize mediaType and mediaUrl when component mounts
//     setMediaType("image");
//     setMediaUrl(imageUp);
//   }, []);

//   const handlePublishModalOpen = () => {
//     setPublishModal(true)
//   }

//   const handlePublishModalClose = () => {
//     setPublishModal(false)
//   }

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleEditQuestion = () => {
//     navigate("/question-editor")
//   }

//   const [containers, setContainers] = useState([{
//     mediaType: 'image',
//     mediaUrl: imageUp,
//     questionText: "",
//     choices: [
//       { imageurl: '', text: 'valla', correct: 'true' },
//       { imageurl: '', text: 'valla' },
//       { imageurl: imageUp, text: 'valla' },
//       { imageurl: imageUp, text: 'valla' }
//     ]
//   }]);

//   // const container1 = GetAllQuestion.data.map((data) => {
//   //   return {
//   //     mediaType: 'image', // Add other necessary fields if needed
//   //     mediaUrl: data.mediaUrl, // Or any other field from your data
//   //     choices: data.options.map((option) => ({
//   //       imageurl: option.optionsImageUrl,
//   //       text: option.questionText,
//   //       correct: option.correct ? 'true' : 'false', // Adjust if you have a different structure
//   //     })),
//   //   };
//   // });



//   // const container1 = GetAllQuestion.data.map((data) => {
//   //   let mediaType;
//   //   let mediaUrl;
//   //   if (data.questionImageUrl) {
//   //     mediaType = 'image';
//   //     mediaUrl = data.questionImageUrl;
//   //   } else if (data.questionVideoUrl) {
//   //     mediaType = 'video';
//   //     mediaUrl = data.questionVideoUrl;
//   //   } else if (data.questionAudioUrl) {
//   //     mediaType = 'audio';
//   //     mediaUrl = data.questionAudioUrl;
//   //   } else {
//   //     mediaType = null; // or some default value
//   //     mediaUrl = null;  // or some default value
//   //   }
//   //   return {
//   //     // mediaType: 'image', // You can adjust this to match your data or requirements

//   //     // mediaUrl: data.questionImageUrl || data.questionVideoUrl || data.questionAudioUrl, // Choose based on available media type




//   //     questionText: data.questionText,
//   //     choices: JSON.parse(data.options).map((optionText, index) => {
//   //       const correctAnswers = JSON.parse(data.correctAnswer);
//   //       const isCorrect = correctAnswers.some((correctAnswer) => correctAnswer.text === optionText);

//   //       return {
//   //         imageurl: data.optionsImageUrl, // or use data-specific logic if needed
//   //         text: optionText,
//   //         correct: isCorrect ? 'true' : 'false',
//   //       };
//   //     }),
//   //   };
//   // });



//   // const container1 = GetAllQuestion.data.map((data) => {
//   //   // Determine the media type and URL
//   //   let mediaType;
//   //   let mediaUrl;

//   //   if (data.questionImageUrl) {
//   //     mediaType = 'image';
//   //     mediaUrl = data.questionImageUrl;
//   //     console.log(mediaUrl,"questionImageUrl____image")
//   //   } else if (data.questionVideoUrl) {
//   //     mediaType = 'video';
//   //     mediaUrl = data.questionVideoUrl;
//   //     console.log(mediaUrl,"questionVideoUrl____")
//   //   } else if (data.questionAudioUrl) {
//   //     mediaType = 'audio';
//   //     mediaUrl = data.questionAudioUrl;
//   //     console.log(mediaUrl,"questionImageUrl____audio")
//   //   } else {
//   //     mediaType = null; // Default value for media type
//   //     mediaUrl = null;  // Default value for media URL
//   //   }

//   //   // Return the mapped object for each question
//   //   return {
//   //     questionText: data.questionText,
//   //     mediaType: mediaType,   // Assign media type
//   //     mediaUrl: mediaUrl,     // Assign media URL
//   //     choices: JSON.parse(data.options).map((optionText, index) => {
//   //       const correctAnswers = JSON.parse(data.correctAnswer);
//   //       const isCorrect = correctAnswers.some((correctAnswer) => correctAnswer.text === optionText);

//   //       return {
//   //         imageurl: data.optionsImageUrl ? data.optionsImageUrl[index] : null,  // Assign specific image URLs if available
//   //         text: optionText,
//   //         correct: isCorrect ? 'true' : 'false',
//   //       };
//   //     }),
//   //   };
//   // });


//   // const container1 = GetAllQuestion.data.map((data) => {
//   //   // Determine the media type and URL
//   //   let mediaType;
//   //   let mediaUrl;

//   //   if (data.questionImageUrl) {
//   //     mediaType = 'image';
//   //     mediaUrl = data.questionImageUrl;
//   //     console.log(mediaUrl, "questionImageUrl____image");
//   //   } else if (data.questionVideoUrl) {
//   //     mediaType = 'video';
//   //     mediaUrl = data.questionVideoUrl;
//   //     console.log(mediaUrl, "questionVideoUrl____");
//   //   } else if (data.questionAudioUrl) {
//   //     mediaType = 'audio';
//   //     mediaUrl = data.questionAudioUrl;
//   //     console.log(mediaUrl, "questionImageUrl____audio");
//   //   } else {
//   //     mediaType = null; // Default value for media type
//   //     mediaUrl = null;  // Default value for media URL
//   //   }

//   //   // Parse the options and correct answers
//   //   const options = JSON.parse(data.options);
//   //   const correctAnswers = JSON.parse(data.correctAnswer);
//   //   console.log(correctAnswers,"corectanswer is there")

//   //   // Return the mapped object for each question
//   //   return {
//   //     questionText: data.questionText,
//   //     mediaType: mediaType,   // Assign media type
//   //     mediaUrl: mediaUrl,     // Assign media URL
//   //     choices: options.map((optionText, index) => {
//   //       const isCorrect = correctAnswers.includes(index); // Check if the index is in the correctAnswers array
//   //       console.log(isCorrect,"isCorrect anseer inedex")
//   //       return {
//   //         imageurl: data.optionsImageUrl ? data.optionsImageUrl[index] : null,  // Assign specific image URLs if available
//   //         text: optionText,
//   //         correct: isCorrect ? 'true' : 'false',  // Mark the correct option
//   //       };
//   //     }),
//   //   };
//   // });
//   // console.log(container1,"container!!!!")

//   // const container1 = GetAllQuestion.data.map((data) => {
//   //   // Determine the media type and URL
//   //   let mediaType;
//   //   let mediaUrl;

//   //   if (data.questionImageUrl) {
//   //     mediaType = 'image';
//   //     mediaUrl = data.questionImageUrl;
//   //     console.log(mediaUrl, "questionImageUrl____image");
//   //   } else if (data.questionVideoUrl) {
//   //     mediaType = 'video';
//   //     mediaUrl = data.questionVideoUrl;
//   //     console.log(mediaUrl, "questionVideoUrl____");
//   //   } else if (data.questionAudioUrl) {
//   //     mediaType = 'audio';
//   //     mediaUrl = data.questionAudioUrl;
//   //     console.log(mediaUrl, "questionAudioUrl____audio");
//   //   } else {
//   //     mediaType = null; // Default value for media type
//   //     mediaUrl = null;  // Default value for media URL
//   //   }

//   //   // Parse the options and correct answers
//   //   const options = JSON.parse(data.options);
//   //   const correctAnswers = JSON.parse(data.correctAnswer);

//   //   // Return the mapped object for each question
//   //   return {
//   //     questionText: data.questionText,
//   //     mediaType: mediaType,   // Assign media type
//   //     mediaUrl: mediaUrl,     // Assign media URL
//   //     choices: options.map((optionText, index) => {
//   //       const isCorrect = correctAnswers.includes(optionText.trim()); 
//   //       // Ensure proper comparison by trimming



//   //       return {
//   //         imageurl: data.optionsImageUrl ? data.optionsImageUrl[index] : null,  // Assign specific image URLs if available
//   //         text: optionText,
//   //         correct: isCorrect ? 'true' : 'false',  // Mark the correct option
//   //       };
//   //     }),
//   //   };
//   // });


//   // const container1 = GetAllQuestion.data.map((data) => {
//   //   // Determine the media type and URL
//   //   let mediaType;
//   //   let mediaUrl;

//   //   if (data.questionImageUrl) {
//   //     mediaType = 'image';
//   //     mediaUrl = data.questionImageUrl;
//   //     console.log(mediaUrl, "questionImageUrl____image");
//   //   } else if (data.questionVideoUrl) {
//   //     mediaType = 'video';
//   //     mediaUrl = data.questionVideoUrl;
//   //     console.log(mediaUrl, "questionVideoUrl____");
//   //   } else if (data.questionAudioUrl) {
//   //     mediaType = 'audio';
//   //     mediaUrl = data.questionAudioUrl;
//   //     console.log(mediaUrl, "questionAudioUrl____audio");
//   //   } else {
//   //     mediaType = null; // Default value for media type
//   //     mediaUrl = null;  // Default value for media URL
//   //   }

//   //   // Parse the options and correct answers
//   //   const options = JSON.parse(data.options);
//   //   const correctAnswers = JSON.parse(data.correctAnswer);
//   //   const imageUrl=JSON.parse(data.optionsImageUrl)
//   //   console.log(imageUrl,"optionssssss")


//   //   // Check if optionsImageUrl is defined and is an array

//   //   // const optionsImageUrls = Array.isArray(data.optionsImageUrl)  ;
//   //   // console.log(data.optionsImageUrl,"optionsImageUrlssssssssss")

//   //   // Return the mapped object for each question
//   //   return {
//   //     questionText: data.questionText,
//   //     mediaType: mediaType,   // Assign media type
//   //     mediaUrl: mediaUrl,     // Assign media URL
//   //     choices: options.map((optionText, index) => {
//   //       console.log(options,"optinmdmfdmdmf")
//   //       console.log(optionText,"optionTextkakkajakdkdsdk")
//   //       const isCorrect = correctAnswers.includes(optionText.trim());
//   //       // console.log(data.optionsImageUrl.length,"indexxsss")
//   //       // console.log( typeof data.optionsImageUrl,"type")




//   //       return {
//   //         imageurl: imageUrl,  // Assign specific image URLs if available
//   //         text: optionText,
//   //         correct: isCorrect ? 'true' : 'false',  // Mark the correct option
//   //       };
//   //     }),
//   //   };
//   // });


//   // const container1 = GetAllQuestion.data.map((data) => {
//   //   // Determine the media type and URL
//   //   let mediaType;
//   //   let mediaUrl;

//   //   if (data.questionImageUrl) {
//   //     mediaType = 'image';
//   //     mediaUrl = data.questionImageUrl;
//   //     console.log(mediaUrl, "questionImageUrl____image");
//   //   } else if (data.questionVideoUrl) {
//   //     mediaType = 'video';
//   //     mediaUrl = data.questionVideoUrl;
//   //     console.log(mediaUrl, "questionVideoUrl____");
//   //   } else if (data.questionAudioUrl) {
//   //     mediaType = 'audio';
//   //     mediaUrl = data.questionAudioUrl;
//   //     console.log(mediaUrl, "questionAudioUrl____audio");
//   //   } else {
//   //     mediaType = null; // Default value for media type
//   //     mediaUrl = null;  // Default value for media URL
//   //   }

//   //   // Parse the options and correct answers
//   //   const options = JSON.parse(data.options);
//   //   const correctAnswers = JSON.parse(data.correctAnswer);
//   //   console.log(correctAnswers,"correctAnswerPravin")
//   //   console.log(correctAnswers[0],"currentanswerwihindex")
//   //   const imageUrl = JSON.parse(data.optionsImageUrl) || []; // Default to empty array if null



//   //   // Return the mapped object for each question
//   //   return {
//   //     questionText: data.questionText,
//   //     mediaType: mediaType,   // Assign media type
//   //     mediaUrl: mediaUrl,     // Assign media URL
//   //     imageUrls: imageUrl,
//   //     choices: options.map((optionText, index) => {
//   //       const isCorrect = correctAnswers.includes(optionText.trim());

//   //       // Assign specific image URL to each option if available
//   //       const optionImageUrl = imageUrl[index] || null;
//   //       // console.log(optionImageUrl, "optionsImageUrl");

//   //       return {
//   //         imageurl: optionImageUrl,  // Assign specific image URL if available
//   //         text: optionText,
//   //         correct: isCorrect ? 'true' : 'false',  // Mark the correct option
//   //       };
//   //     }),
//   //   };
//   // });

//   const container1 = GetAllQuestion?.data?.map((data) => {
//     // Determine the media type and URL
//     let mediaType;
//     let mediaUrl;

//     if (data.questionImageUrl) {
//       mediaType = 'image';
//       mediaUrl = data.questionImageUrl;
//       console.log(mediaUrl, "questionImageUrl____image");
//     } else if (data.questionVideoUrl) {
//       mediaType = 'video';
//       mediaUrl = data.questionVideoUrl;
//       console.log(mediaUrl, "questionVideoUrl____");
//     } else if (data.questionAudioUrl) {
//       mediaType = 'audio';
//       mediaUrl = data.questionAudioUrl;
//       console.log(mediaUrl, "questionAudioUrl____audio");
//     } else {
//       mediaType = null; // Default value for media type
//       mediaUrl = null;  // Default value for media URL
//     }

//     // Parse the options and correct answers
//     const options = JSON.parse(data.options);
//     const correctAnswers = JSON.parse(data.correctAnswer); // Expecting correctAnswers to be an array of objects
//     console.log(correctAnswers, "correctAnswerPravin");
//     console.log(correctAnswers[0], "currentanswerwihindex");
//     const imageUrl = JSON.parse(data.optionsImageUrl) || []; // Default to empty array if null
//     const question_id=data.question_id;
//     console.log(question_id,"question_idddddd__________")
//     // Return the mapped object for each question
//     return {
//       questionText: data.questionText,
//       mediaType: mediaType, // Assign media type
//       mediaUrl: mediaUrl,   // Assign media URL
//       imageUrls: imageUrl,
//       // question_id: 
//       questionType:JSON.parse(data.questionType),
//       questionPoint:JSON.parse(data.questionPoint),
//       questionTiming:JSON.parse(data.questionTiming),
//       choices: options.map((optionText, index) => {
//         // Get the corresponding image URL for the option
//         const optionImageUrl = imageUrl[index] || null;

//         // Check if the current option (text and image) is in the correctAnswers array
//         const isCorrect = correctAnswers.some(
//           (correctAnswer) =>
//             correctAnswer &&
//             correctAnswer.text &&
//             optionText &&
//             correctAnswer.text.trim() === optionText.trim() ||
//             correctAnswer.image === optionImageUrl
//         );

//         return {
//           imageurl: optionImageUrl,  // Assign specific image URL if available
//           text: optionText,
//           correct: isCorrect ? 'true' : 'false',  // Mark the correct option
//         };
//       }),
//     };
//   });




//   console.log(container1, "container1container1");



//   useEffect(() => {
//     // Initialize mediaType and mediaUrl when component mounts
//     setMediaType('image');
//     setMediaUrl(imageUp);
//   }, []);



//   const handleDeleteQuestion = (index) => {
//     setContainers((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleAddContainer = () => {
//     // setContainers([
//     //   ...containers,
//     //   {
//     //     mediaType: 'image',
//     //     mediaUrl: imageUp,
//     //     choices: [
//     //       { imageurl: imageUp, text: 'New Choice', correct: true }
//     //     ]
//     //   }
//     // ]);
//     navigate("/question-editor")
//   };

//   const handlePreviousPageNavigate = () => {
//     navigate(-1)
//   }

//   return (
//     <Formik
//       initialValues={{
//         points: '1point',
//         timeLimit: '5seconds',
//         mediaType: '',
//         mediaUrl: '',
//       }}
//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     >
//       {({ setFieldValue }) => (
//         <Form>
//           <Box sx={{ minHeight: '100vh', backgroundColor: 'rgb(242 242 242)' }}>
//             {/* Header */}
//             <Box
//               component="header"
//               sx={{
//                 position: 'sticky',
//                 top: 0,
//                 zIndex: 'appBar',
//                 backgroundColor: 'white',
//                 boxShadow: 1,
//                 display: 'flex',
//                 alignItems: 'center',
//                 // borderColor:"rgb(229 229 229)",
//                 // border:"1px solid",
//                 p: 2,
//               }}
//             >
//               {/* Back Button */}
//               <Box sx={{ display: 'flex' }}>
//                 <Tooltip title="Go back">
//                   <IconButton size="small" onClick={handlePreviousPageNavigate}>
//                     <ChevronLeft />
//                   </IconButton>
//                 </Tooltip>
//                 <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: isMobile ? 'center' : 'left' }}>
//                   Untitled Quiz
//                 </Typography>
//               </Box>


//               {/* Action Center */}
//               <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <Tooltip title="Quiz settings">
//                   <IconButton size="small">
//                     <Settings fontSize="small" />
//                   </IconButton>
//                 </Tooltip>

//                 <Button
//                   variant="contained"

//                   startIcon={<Save />}
//                   size="small"
//                   type="submit"
//                   sx={{
//                     background: "rgb(136 84 192)",
//                     boxShadow: "none",
//                     '&:hover': {
//                       backgroundColor: 'rgb(136 84 192)',
//                       boxShadow: "none"

//                     }
//                   }}
//                   onClick={handlePublishModalOpen}
//                 >
//                   Publish
//                 </Button>
//               </Box>
//             </Box>

//             {/* Main Content */}
//             <Container maxWidth="md" sx={{ py: 4 }}>
//               {/* Search Section */}
//               <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   Search questions from Quizizz Library
//                 </Typography>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     border: 1,
//                     borderColor: 'rgb(229 229 229)',
//                     borderRadius: 1,
//                     p: 1,
//                     flexDirection: isMobile ? 'column' : 'row', // Responsive layout
//                     gap: 1,
//                   }}
//                 >
//                   <InputBase
//                     sx={{ flex: 1, width: isMobile ? '100%' : 'auto' }}
//                     placeholder="Enter topic name"
//                     inputProps={{ 'aria-label': 'search quiz questions' }}
//                   />
//                   <Button
//                     variant="outlined"
//                     startIcon={<Search />}
//                     size="small"

//                     sx={{
//                       width: isMobile ? '100%' : 'auto',
//                       bgcolor: "#0909090d",
//                       color: "black",
//                       border: "1px solid rgb(299 299 299)",
//                       '&:hover': {
//                         backgroundColor: '#0909090d',
//                         // boxShadow: '0 4px #6c4298',
//                         border: "1px solid rgb(299 299 299)",
//                       },
//                     }}
//                   >
//                     Search questions
//                   </Button>
//                 </Box>
//               </Paper>

//               {/* Question Count and Add Button */}
//               <Box
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   py: 2,
//                   px: 1,
//                   flexDirection: isMobile ? 'column' : 'row',
//                   gap: 1,
//                 }}
//               >
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Box>
//                     <Typography variant="h6" color="black" fontWeight="700">
//                       1 question
//                     </Typography>
//                   </Box>
//                   <Box>
//                     <Typography>(1 point)</Typography>
//                   </Box>
//                 </Box>
//                 <Button
//                   // variant="outlined"
//                   startIcon={<Add />}
//                   size="small"
//                   sx={{
//                     width: isMobile ? '100%' : 'auto',
//                     borderColor: "rgb(160 118 204)",
//                     border: "1px solid rgb(160 118 204)",
//                     background: 'rgb(237 230 246)',
//                     color: "rgb(160 118 204)",
//                     fontWeight: "600",
//                     '&:hover': {
//                       backgroundColor: 'rgb(237 230 246)',
//                       // boxShadow: '0 4px #6c4298',
//                       border: "1px solid rgb(160 118 204)",

//                     },

//                   }}
//                   onClick={handleAddContainer}

//                 >
//                   Add question
//                 </Button>
//               </Box>

//               {/* Question Card */}


//               {container1?.map((container, index) => (
//                 <Grid container spacing={2} key={index} mb={3}>
//                   <Grid item xs={12}>
//                     <Paper
//                       sx={{
//                         p: 2,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         gap: 2,
//                         border: 1,
//                         borderColor: 'grey.400',
//                         boxShadow: 1,
//                       }}
//                     >
//                       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
//                         {/* Question Type */}
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
//                           <Tooltip title="Drag to reorder">
//                             <IconButton size="small" sx={{ border: "1px solid #0909090d", borderRadius: "3px", color: "black", height: 28 }}>
//                               <PiDotsSixVerticalBold fontSize="small" />
//                             </IconButton>
//                           </Tooltip>
//                           <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderColor: 'grey.400', borderRadius: 1, px: 1, height: 28 }}>
//                             <Check fontSize="small" />
//                             <Typography variant="caption" sx={{ ml: 1 }}>{container.questionType}</Typography>
//                           </Box>

//                           {/* Select Fields */}
//                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
//                             {/* <Field
//                               component={FormikSelect}
//                               name="timeLimit"
//                               variant="outlined"
//                               sx={{
//                                 height: 28,
//                                 pl: 1,
//                                 pr: 1,
//                                 color: 'black',
//                                 fontSize: '12px',
//                                 fontWeight: '500',
//                                 bgcolor: "white",
//                                 border: "1px solid #0909090d",
//                                 '& .MuiSelect-select': {
//                                   padding: 0,
//                                 },
//                               }}
//                               startAdornment={<AccessTime fontSize="8px" sx={{ mr: 1 }} />}
//                             >
//                               {questionSeconds.map((type) => (
//                                 <MenuItem key={type.value} value={type.value}>
//                                   {type.label}
//                                 </MenuItem>
//                               ))}
//                             </Field> */}
//                             <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderColor: 'grey.400', borderRadius: 1, px: 1, height: 28 }}>
//                               <AccessTime fontSize="small" />
//                               <Typography variant="caption" sx={{ ml: 1 }}>{container.questionPoint}</Typography>
//                             </Box>
//                             <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderColor: 'grey.400', borderRadius: 1, px: 1, height: 28 }}>
//                               <Check fontSize="small" />
//                               <Typography variant="caption" sx={{ ml: 1 }}>{container.questionTiming}</Typography>
//                             </Box>


//                             {/* <Field
//                               component={FormikSelect}
//                               name="points"
//                               variant="outlined"
//                               sx={{
//                                 height: 28,
//                                 pl: 1,
//                                 pr: 1,
//                                 color: 'black',
//                                 fontSize: '12px',
//                                 fontWeight: '500',
//                                 bgcolor: "white",
//                                 border: "1px solid #0909090d",
//                                 '& .MuiSelect-select': {
//                                   padding: 0,
//                                 },
//                               }}
//                               startAdornment={<Check fontSize="8px" sx={{ mr: 1 }} />}
//                             >
//                               {questionPoints.map((type) => (
//                                 <MenuItem key={type.value} value={type.value}>
//                                   {type.label}
//                                 </MenuItem>
//                               ))}
//                             </Field> */}
//                           </Box>
//                         </Box>

//                         {/* Actions */}
//                         {isMobile ? (
//                           <Box>
//                             <IconButton
//                               aria-label="more options"
//                               size="small"
//                               onClick={handleMenuClick}
//                             >
//                               <MoreVert fontSize="small" />
//                             </IconButton>
//                             <Menu
//                               anchorEl={anchorEl}
//                               open={Boolean(anchorEl)}
//                               onClose={handleMenuClose}
//                             >
//                               <MenuItem onClick={handleMenuClose} startIcon={<ContentCopy />}>Copy</MenuItem>
//                               <MenuItem onClick={handleMenuClose} startIcon={<EditIcon />}>Edit</MenuItem>
//                               <MenuItem onClick={handleMenuClose} startIcon={<DeleteIcon />}>Delete</MenuItem>
//                             </Menu>
//                           </Box>
//                         ) : (
//                           <Box sx={{ display: 'flex', gap: 1 }}>
//                             <Tooltip title="Duplicate">
//                               <IconButton size="small">
//                                 <ContentCopy fontSize="small" />
//                               </IconButton>
//                             </Tooltip>
//                             <Tooltip title="Edit">
//                               <IconButton size="small" onClick={handleEditQuestion}>
//                                 <EditIcon fontSize="small" />
//                               </IconButton>
//                             </Tooltip>
//                             <Tooltip title="Delete">
//                               <IconButton size="small" onClick={() => handleDeleteQuestion(index)}>
//                                 <DeleteIcon fontSize="small" />
//                               </IconButton>
//                             </Tooltip>
//                           </Box>
//                         )}
//                       </Box>

//                       {/* Media Section */}
//                       <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: "center" }}>
//                         {container.mediaType === 'image' && container.mediaUrl !== "null" && (
//                           <Box sx={{ textAlign: 'center' }}>
//                             <img src={container.mediaUrl} alt="Question Media" style={{ width: "100px", maxHeight: 100 }} />
//                           </Box>
//                         )}

//                         {container.mediaType === 'video' && container.mediaUrl !== "null" && (
//                           <Box sx={{ textAlign: 'center' }}>
//                             <video controls style={{ maxWidth: '100%', maxHeight: 200 }}>
//                               <source src={`${baseUrl}${container.mediaUrl}`} type="video/mp4" />
//                               Your browser does not support the video tag.
//                             </video>
//                           </Box>
//                         )}

//                         {container.mediaType === 'audio' && container.mediaUrl !== "null" && (
//                           <Box sx={{ textAlign: 'center' }}>
//                             <audio controls>
//                               <source src={`${baseUrl}${container.mediaUrl}`} />
//                               Your browser does not support the audio element.
//                             </audio>
//                             {/* <audio
//                               // ref={audioRef}
//                               src={`${baseUrl}${container.mediaUrl}`}
//                               style={{ display: 'none' }}
//                               // onEnded={handleEnded}
//                             /> */}


//                           </Box>
//                         )}

//                         <Box>{container.questionText}</Box>
//                       </Box>

//                       {/* Choices Section */}
//                       <Box>
//                         <Typography variant="subtitle2" fontWeight="bold">Choices</Typography>
//                         <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
//                           <Grid container spacing={1}>
//                             {container.choices.map((choice, index) => (
//                               <Grid item xs={6} key={index}>
//                                 <Box
//                                   sx={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     p: 1,
//                                     gap: 1,
//                                   }}
//                                 >
//                                   {choice.correct === "true" ? (
//                                     <IoMdCheckmarkCircle style={{ height: "25px", width: "30px", color: 'green' }} />
//                                   ) : (
//                                     <IoIosCloseCircle style={{ height: "25px", width: "30px", color: 'red' }} />
//                                   )}
//                                   {choice.imageurl !== null ? (
//                                     <>
//                                       <Box
//                                         component="img"
//                                         src={choice.imageurl}
//                                         alt={choice.text}
//                                         sx={{ width: 100, height: 50, borderRadius: 1 }}
//                                       />
//                                       <Typography variant="body2" sx={{ ml: 1 }}>{choice.text}</Typography>
//                                     </>
//                                   ) : (
//                                     <Box>
//                                       <Typography variant="body2" sx={{ ml: 1 }}>{choice.text}</Typography>
//                                     </Box>
//                                   )}
//                                 </Box>
//                               </Grid>
//                             ))}
//                           </Grid>
//                         </Box>
//                       </Box>
//                     </Paper>
//                   </Grid>
//                 </Grid>
//               ))}

//             </Container>
//             <PublishContentModal open={publishModal} onClose={handlePublishModalClose} />
//           </Box>
//         </Form >
//       )}

//     </Formik >
//   );
// };

// export default SaveQuestionView;











import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
  Tooltip,
  MenuItem,
  Menu,
  useMediaQuery,
} from '@mui/material';
import {
  ChevronLeft,
  Settings,
  Save,
  Search,
  Add,
  ContentCopy,
  Check,
  AccessTime,
  Edit as EditIcon,
  Delete as DeleteIcon,
  MoreVert, // Import the MoreVert icon for the three-dot toggle button
} from '@mui/icons-material';
import { Formik, Form, Field } from 'formik';
import { Select as FormikSelect } from 'formik-material-ui';
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { Cancel as CancelIcon, Check as CheckIcon } from '@mui/icons-material';
import imageUp from "../../../Assets/Quizz_image.png"
import { IoMdCheckmarkCircle } from "react-icons/io";
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { MdOutlineCancel } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';
import PublishContentModal from './PublishContentModal';
import { useDispatch, useSelector } from 'react-redux';
import actions from "../../../ReduxStore/actions/index";
import { IoIosCloseCircle } from "react-icons/io";
import { adminUrl as baseUrl } from '../../../constants';
import { toast, ToastContainer } from 'react-toastify';
import { setInitialQuestionWithAnsPost } from '../../../ReduxStore/Slices/QuestionEdit/QuestionWithAnsPost';





const questionPoints = [
  { label: "1 point", value: "1point" },
  { label: "2 points", value: "2points" },
  // ...other options
];

const questionSeconds = [
  { label: "5 Seconds", value: "5seconds" },
  { label: "10 Seconds", value: "10seconds" },
  // ...other options
];




const SaveQuestionView = () => {
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
  console.log(GetQuestionById,"getquetiobyid__________--")
  
  console.log(GetAllQuestion, "GetAllQuestiond")




  const dispatch = useDispatch()
  const { PublishPost } = useSelector((state) => state?.PublishPost);

  useEffect(() => {
    const data = { data: {}, method: "get", apiName: `getQuestionsWithoutPublishByStaffId/staff/${1}` };
    // console.log("Dispatching LOCATIONMOVIEDROPDOWN action:", data);
    dispatch(actions.GETALLQUESTION(data));

  }, [QuestionWithAnsPost.data.question_id,DeleteQuestionById,PublishPost])


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
    console.log(question_id,"questionId----edit")
    navigate("/admin/question-editor")
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





  const container1 = GetAllQuestion?.data?.map((data) => {
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

    navigate("/admin/question-editor")
  };

  const handlePreviousPageNavigate = () => {
    navigate(-1)
  }

  const hanlePublishPageNavigate=()=>{
    navigate("/publish")
  }
  // const { QuestionWithAnsPost } = useSelector((state) => state?.QuestionWithAnsPost);

  useEffect(() => {
    console.log(QuestionWithAnsPost.message, "QuestionWithAnsPost.Message");
    if (QuestionWithAnsPost.message==="SUCCESS"){

      toast.success("Question Savesd Successfully")
      dispatch(setInitialQuestionWithAnsPost())
      
    }
  }, [QuestionWithAnsPost]);


  return (
    <Formik
      initialValues={{
        points: '1point',
        timeLimit: '5seconds',
        mediaType: '',
        mediaUrl: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <Box sx={{ minHeight: '100vh', backgroundColor: 'rgb(242 242 242)' }}>
            {/* Header */}
            <Box
              component="header"
              sx={{
                position: 'sticky',
                top: 0,
                zIndex: 'appBar',
                backgroundColor: 'white',
                boxShadow: 1,
                display: 'flex',
                alignItems: 'center',
                // borderColor:"rgb(229 229 229)",
                // border:"1px solid",
                p: 2,
              }}
            >
              {/* Back Button */}
              <Box sx={{ display: 'flex' }}>
                <Tooltip title="Go back">
                  <IconButton size="small" onClick={handlePreviousPageNavigate}>
                    <ChevronLeft />
                  </IconButton>
                </Tooltip>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: isMobile ? 'center' : 'left' }}>
                  Untitled Quiz
                </Typography>
              </Box>


              {/* Action Center */}
              <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
                <Tooltip title="Quiz settings">
                  <IconButton size="small" onClick={hanlePublishPageNavigate}>
                    <Settings fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Button
                  variant="contained"

                  startIcon={<Save />}
                  size="small"
                  type="submit"
                  sx={{
                    background: "rgb(136 84 192)",
                    boxShadow: "none",
                    '&:hover': {
                      backgroundColor: 'rgb(136 84 192)',
                      boxShadow: "none"

                    }
                  }}
                  onClick={handlePublishModalOpen}
                >
                  Publish
                </Button>
              </Box>
            </Box>

            {/* Main Content */}
            <Container maxWidth="md" sx={{ py: 4 }}>
              {/* Search Section */}
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Search questions from Quizizz Library
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: 1,
                    borderColor: 'rgb(229 229 229)',
                    borderRadius: 1,
                    p: 1,
                    flexDirection: isMobile ? 'column' : 'row', // Responsive layout
                    gap: 1,
                  }}
                >
                  <InputBase
                    sx={{ flex: 1, width: isMobile ? '100%' : 'auto' }}
                    placeholder="Enter topic name"
                    inputProps={{ 'aria-label': 'search quiz questions' }}
                  />
                  <Button
                    variant="outlined"
                    startIcon={<Search />}
                    size="small"

                    sx={{
                      width: isMobile ? '100%' : 'auto',
                      bgcolor: "#0909090d",
                      color: "black",
                      border: "1px solid rgb(299 299 299)",
                      '&:hover': {
                        backgroundColor: '#0909090d',
                        // boxShadow: '0 4px #6c4298',
                        border: "1px solid rgb(299 299 299)",
                      },
                    }}
                  >
                    Search questions
                  </Button>
                </Box>
              </Paper>

              {/* Question Count and Add Button */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 2,
                  px: 1,
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box>
                    <Typography variant="h6" color="black" fontWeight="700">
                      1 question
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>(1 point)</Typography>
                  </Box>
                </Box>
                <Button
                  // variant="outlined"
                  startIcon={<Add />}
                  size="small"
                  sx={{
                    width: isMobile ? '100%' : 'auto',
                    borderColor: "rgb(160 118 204)",
                    border: "1px solid rgb(160 118 204)",
                    background: 'rgb(237 230 246)',
                    color: "rgb(160 118 204)",
                    fontWeight: "600",
                    '&:hover': {
                      backgroundColor: 'rgb(237 230 246)',
                      // boxShadow: '0 4px #6c4298',
                      border: "1px solid rgb(160 118 204)",

                    },

                  }}
                  onClick={handleAddContainer}

                >
                  Add question
                </Button>
              </Box>

              {/* Question Card */}


              {container1?.map((container, index) => (
                <Grid container spacing={2} key={index} mb={3}>
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
                        </Box>

                        {/* Actions */}
                        {isMobile ? (
                          <Box>
                            <IconButton
                              aria-label="more options"
                              size="small"
                              onClick={handleMenuClick}
                            >
                              <MoreVert fontSize="small" />
                            </IconButton>
                            <Menu
                              anchorEl={anchorEl}
                              open={Boolean(anchorEl)}
                              onClose={handleMenuClose}
                            >
                              <MenuItem onClick={handleMenuClose} startIcon={<ContentCopy />}>Copy</MenuItem>
                              <MenuItem  onClick={()=>{
                                handleEditQuestion(container.question_id)
                                

                              }
                                } startIcon={<EditIcon />}>Edit</MenuItem>
                              <MenuItem onClick={() => {
                                handleDeleteQuestion(container.question_id);
                                console.log(container.question_id, "container.question_id111111111111111111111111111111111")

                              }} startIcon={<DeleteIcon />}>Delete</MenuItem>
                            </Menu>
                          </Box>
                        ) : (
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <Tooltip title="Duplicate">
                              <IconButton size="small">
                                <ContentCopy fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Edit">
                              <IconButton size="small" onClick={()=>{handleEditQuestion(container.question_id)}}>
                                <EditIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton size="small" onClick={() => {
                                handleDeleteQuestion(container.question_id);
                                console.log(container.question_id, "container.question_idzv")

                              }}>
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        )}
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

            </Container>
            <PublishContentModal open={publishModal} onClose={handlePublishModalClose} />
            <ToastContainer
                  position="top-right" // or "top-center", "bottom-left", etc.
                  autoClose={5000} // Auto close duration in ms
                  hideProgressBar={false} // Hide or show progress bar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark" 
            />
          </Box>
        </Form >
      )}
     
    </Formik >
    
  );
};

export default SaveQuestionView;