

// import React, { useState, useEffect } from 'react';
// import CustomInputIcon from "../../../../Components/CustomInput/CustomInputIcon";
// import CustomChoiceInput from '../../../../Components/CustomInput/CustomChoiceInput';
// import {
//     Grid, Card, CardContent, IconButton, Tooltip, styled, tooltipClasses, useMediaQuery, ButtonGroup, Button, Box, InputBase, Paper, Typography, FormControl,
//     Select,
//     MenuItem,
//     TextField,
//     Menu
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useFormik, Formik, Form, Field } from 'formik';
// import { IoCheckmark } from "react-icons/io5";
// import { FaImage } from "react-icons/fa";
// import Spinner from './Spinner';
// import "../../../../Components/CustomInput/CustomChoiceInput.css";
// import ImageUpload from './Modals/ImageUpload';
// import SettingsIcon from "@mui/icons-material/Settings";
// import FillBlankModal from './Modals/FillBankModal';
// import { ExpandMore, Delete, Add } from '@mui/icons-material';

// // Define the default boxes
// const DEFAULT_BOXES = Array(6).fill('');

// const FillintheBlank = ({ textColor }) => {
//     const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
//     const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));
//     const isMd = useMediaQuery(theme => theme.breakpoints.down('md'));

//     const [choices, setChoices] = useState([{ text: '', image: '' }, { text: '', image: '' }, { text: '', image: '' }, { text: '', image: '' }]);

//     const [isQuestionEntered, setIsQuestionEntered] = useState(false);

//     const [questionImage, setQuestionImage] = useState('');
//     const [updateAudioURL, setUpdateAudioUrl] = useState("");
//     const [updateVideoURL, setUpdateVideoURL] = useState("");
//     const [settingsModal, setSettingsModal] = useState(false)
//     const [options, setOptions] = useState("separate-boxes")
//     const [alternativeAnswers, setAlternativeAnswers] = useState(false);
//     console.log(options, "option...")

//     const [rows, setRows] = useState([{ id: 1, value: '', selectedOption: 'is exactly' }]);

//     const handleAddRow = () => {
//         setRows([...rows, { id: rows.length + 1, value: '', selectedOption: 'is exactly' }]);
//     };

//     // Function to delete a specific row by its ID
//     const handleDeleteRow = (id) => {
//         setRows(rows.filter(row => row.id !== id));
//     };

//     // Function to handle input changes
//     const handleInputChange1 = (event, id) => {
//         const value = event.target.value;
//         setRows(rows.map(row => (row.id === id ? { ...row, value } : row)));
//     };

//     // Function to handle dropdown option changes
//     const handleOptionChange = (option, id) => {
//         setRows(rows.map(row => (row.id === id ? { ...row, selectedOption: option } : row)));
//     };


//     // State to manage dynamically added boxes
//     const [boxes, setBoxes] = useState(DEFAULT_BOXES);

//     const formik = useFormik({
//         initialValues: {
//             question: '',
//             questionImage: '',
//             answer: '',  // Correct answer field
//             alternate_answer: '',  // Alternate answer field
//             ...choices.reduce((acc, _, index) => ({ ...acc, [`choice_${index}_text`]: '', [`choice_${index}_image`]: '' }), {})
//         },
//         onSubmit: (values) => {
//             console.log('Form values:', values);
//         },
//     });

//     useEffect(() => {
//         setIsQuestionEntered(formik.values.question.trim() !== '' || formik.values.questionImage.trim() !== '');
//     }, [formik.values, choices]);


//     const handleInputChange = (event, setFieldValue) => {
//         const value = event.target.value;
//         setFieldValue("answer", value); // Update Formik's answer field
//         if (options === "separate-boxes" && !alternativeAnswers) {
//             if (value.length > 0) {
//                 // Add new boxes for each character in the answer
//                 setBoxes(value.split(""));
//             } else {
//                 // Restore default boxes when input is cleared
//                 setBoxes(DEFAULT_BOXES);
//             }
//         }
//     }

//     const handleInputAlternative = (event, setFieldValue) => {
//         const value = event.target.value;
//         setFieldValue("alternate_answer", value); // Update Formik's alternate_answer field
//     }

//     const handleOpenModal = () => {
//         setSettingsModal(true);
//     };

//     const handleCloseModal = () => {
//         setSettingsModal(false);
//     };
//     ///////////////////////
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [inputValue, setInputValue] = React.useState('');
//     const [error, setError] = React.useState('');



//     const [selectedOption, setSelectedOption] = useState('is exactly');


//     const handleMenuClose = (option) => {
//         if (option) {
//             setSelectedOption(option);
//         }
//         setAnchorEl(null);
//     };


//     const handleMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };



//     const handleDelete = () => {
//         // Handle delete logic
//     };

//     const handleAdd = () => {
//         // Handle add logic
//     };


//     return (
//         <div style={{ padding: "20px", color: "#FFF" }}>
//             <CustomInputIcon
//                 name="question"
//                 custPlaceholder="Type question here"
//                 inputType="text"
//                 value={formik.values.question}
//                 setUpdateVideoURL={setUpdateVideoURL}
//                 updateVideoURL={updateVideoURL}
//                 setUpdateAudioUrl={setUpdateAudioUrl}
//                 updateAudioURL={updateAudioURL}
//                 onChange={(e) => formik.setFieldValue('question', e.target.value)}
//                 questionImage={questionImage}
//                 setQuestionImage={setQuestionImage}
//             />

//             <Formik
//                 initialValues={{ answer: "", alternate_answer: "" }}
//                 onSubmit={(values) => console.log("Submitted Answer:", values.answer, values.alternate_answer)}
//             >
//                 {({ values, setFieldValue }) => (
//                     <Form>
//                         <Box className="options-container" sx={{ display: "flex", gap: 2, padding: "0px 20px" }}>
//                             <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
//                                 {/* Answer Container */}
//                                 <Paper
//                                     elevation={0}
//                                     className="answer-container"
//                                     sx={{
//                                         py: 3,
//                                         display: "flex",
//                                         flexDirection: "column",
//                                         gap: 2,
//                                         alignItems: "center",
//                                         justifyContent: "center",
//                                         width: "100%",
//                                         height: "7rem",
//                                         background: "#09090933",
//                                         position: "relative",
//                                         borderRadius: 2,
//                                     }}
//                                 >
//                                     {/* Input Section */}
//                                     <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%", maxHeight: 350, px: 2 }}>
//                                         <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}>
//                                             <Paper
//                                                 className="correct-answer"
//                                                 sx={{
//                                                     flex: 1,
//                                                     bgcolor: "#ffffff1a",
//                                                     height: 40,
//                                                     display: "flex",
//                                                     alignItems: "center",
//                                                     borderRadius: "4px 4px 0 0",
//                                                     borderBottom: "2px solid",
//                                                     borderBottomColor: "grey.400",
//                                                     position: "relative",
//                                                     width: "80%",
//                                                     justifyContent: "center",
//                                                     margin: "0 auto"

//                                                 }}
//                                             >
//                                                 <InputBase
//                                                     id="correct-answer"
//                                                     name="answer"
//                                                     placeholder="Type answer here"
//                                                     sx={{
//                                                         pl: 2,
//                                                         pr: 3,
//                                                         width: "100%",
//                                                         height: "100%",
//                                                         fontSize: "1rem",
//                                                         color: "white"
//                                                     }}
//                                                     inputProps={{
//                                                         "data-testid": "fib-correct-answer",
//                                                         maxLength: 999,
//                                                         autoComplete: "off",
//                                                         autoCorrect: "off",
//                                                         "aria-label": "Type answer here",
//                                                         "aria-required": "true",
//                                                     }}
//                                                     value={values.answer}
//                                                     onChange={(event) => handleInputChange(event, setFieldValue)}
//                                                 />
//                                             </Paper>
//                                             {/* Settings Button */}
//                                             <IconButton
//                                                 className="fib-answer-settings-button"
//                                                 sx={{
//                                                     bgcolor: "#ffffff1a",
//                                                     color: "white",
//                                                     "&:hover": { bgcolor: "#ffffff1a" },
//                                                     "&:active": { bgcolor: "##ffffff1a" },
//                                                     borderRadius: "8px",
//                                                 }}
//                                                 aria-label="Settings"
//                                                 data-testid="fib-answer-settings-button"
//                                             >
//                                                 <SettingsIcon onClick={handleOpenModal} />
//                                             </IconButton>
//                                         </Box>
//                                     </Box>
//                                 </Paper>

//                                 {/* Preview Options Container */}
//                                 <Paper
//                                     className="preview-options-container"
//                                     sx={{
//                                         display: "flex",
//                                         flexDirection: "column",
//                                         gap: 2,
//                                         alignItems: "left",
//                                         width: "100%",
//                                         minHeight: "7rem",
//                                         height: "100%",
//                                         mt: 4,
//                                         padding: 0,
//                                         background: "#09090933",
//                                         position: "relative",
//                                         left: 0,
//                                         borderRadius: 2,
//                                     }}
//                                 >
//                                     <Typography sx={{ color: "grey.500", fontWeight: "bold", fontSize: "0.875rem" }}>
//                                         Student view
//                                     </Typography>
//                                     {/* Dynamic Boxes Preview */}
//                                     {options === "single-input-field" && !alternativeAnswers && (
//                                         <Paper
//                                             className="correct-answer"
//                                             sx={{
//                                                 flex: 1,
//                                                 bgcolor: "#ffffff1a",
//                                                 height: "40px !important",
//                                                 display: "flex",
//                                                 alignItems: "center",
//                                                 borderRadius: "4px 4px 0 0",
//                                                 borderBottom: "2px solid",
//                                                 borderBottomColor: "grey.400",
//                                                 width: "90%",
//                                                 margin: "0 auto",
//                                                 justifyContent: "center",
//                                                 maxHeight: "40px"
//                                             }}
//                                         >
//                                             <InputBase
//                                                 id="alternate-answer"
//                                                 name="alternate_answer"
//                                                 placeholder="Type answer here"
//                                                 sx={{
//                                                     pl: 2,
//                                                     pr: 3,
//                                                     width: "100%",
//                                                     height: "100%",
//                                                     fontSize: "1rem",
//                                                     color: "white"
//                                                 }}
//                                                 inputProps={{
//                                                     "data-testid": "fib-alternate-answer",
//                                                     maxLength: 999,
//                                                     autoComplete: "off",
//                                                     autoCorrect: "off",
//                                                     "aria-label": "Type alternative answer here",
//                                                     "aria-required": "true",
//                                                 }}
//                                                 value={values.alternate_answer}
//                                                 onChange={(event) => handleInputAlternative(event, setFieldValue)}
//                                             />
//                                         </Paper>
//                                     )}
//                                     {options === "separate-boxes" && !alternativeAnswers && (
//                                         <Box sx={{
//                                             height: 100,
//                                             width: "100%",
//                                             textAlign: "center",
//                                             overflowY: "auto",
//                                             justifyContent: "center",
//                                             display: "flex",
//                                             alignItems: "center"
//                                         }}>
//                                             <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center" }}>
//                                                 {boxes.map((box, index) => (
//                                                     <Box
//                                                         key={index}
//                                                         sx={{
//                                                             bgcolor: "black",
//                                                             width: 32,
//                                                             height: 32,
//                                                             fontWeight: "800",
//                                                             borderRadius: "4px",
//                                                             display: "flex",
//                                                             alignItems: "center",
//                                                             justifyContent: "center",
//                                                             color: "white",
//                                                             fontSize: "1rem",
//                                                         }}
//                                                     >
//                                                         {box}
//                                                     </Box>
//                                                 ))}
//                                             </Box>
//                                         </Box>)}
//                                     {alternativeAnswers && options === "single-input-field" && (
//                                         <Box>
//                                             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxHeight: "100%", overflowY: 'auto', py: 2, width: "80%", margin: "0 auto" }}>
//                                                 <Box sx={{ display: 'flex', gap: 2 }}>
//                                                     <Box sx={{ flex: 1, display: 'flex', gap: 2 }}>
//                                                         <Box sx={{ position: 'relative', borderRadius: 1, bgcolor: '#ffffff1a', color: 'text.secondary', height: '40px' }}>
//                                                             <Button
//                                                                 aria-haspopup="listbox"
//                                                                 aria-expanded={Boolean(anchorEl)}
//                                                                 onClick={handleMenuOpen}
//                                                                 sx={{ width: '100%', display: 'flex', height: "40px", alignItems: 'center', justifyContent: 'space-between', py: 1.5, px: 2, textAlign: 'left', textTransform: 'none', fontWeight: 'bold', borderRadius: 1, background: "#ffffff1a" }}
//                                                                 endIcon={<ExpandMore style={{ color: "white" }} />}
//                                                             >
//                                                                 <Typography variant="body1" sx={{ color: "white" }}>{selectedOption}</Typography>
//                                                             </Button>
//                                                             <Menu
//                                                                 anchorEl={anchorEl}
//                                                                 open={Boolean(anchorEl)}
//                                                                 onClose={() => handleMenuClose()}
//                                                             >
//                                                                 <MenuItem onClick={() => handleMenuClose('is exactly')}>is exactly</MenuItem>
//                                                                 <MenuItem onClick={() => handleMenuClose('Contains')}>Contains</MenuItem>
//                                                             </Menu>
//                                                         </Box>
//                                                         <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: "space-between", width: "100%" }}>
//                                                             {/* <TextField
//                                                                 id="input"
//                                                                 value={inputValue}
//                                                                 onChange={(e) => setInputValue(e.target.value)}
//                                                                 placeholder="Type an answer here"
//                                                                 variant="outlined"
//                                                                 fullWidth
//                                                                 size="small"
//                                                                 bgcolor="#ffffff1a"
//                                                                 sx={{bgcolor:"#ffffff1a",color:"white"}}
//                                                                 error={!!error}
//                                                                 helperText={error}
//                                                                 InputProps={{
//                                                                     endAdornment: (
//                                                                         <IconButton onClick={handleDelete}>
//                                                                             <Delete />
//                                                                         </IconButton>
//                                                                     ),
//                                                                 }}
//                                                             /> */}
//                                                             <TextField
//                                                                 id="input"
//                                                                 value={inputValue}
//                                                                 onChange={(e) => setInputValue(e.target.value)}
//                                                                 placeholder="Type an answer here"
//                                                                 variant="outlined"
//                                                                 fullWidth
//                                                                 size="small"
//                                                                 sx={{
//                                                                     bgcolor: "#ffffff1a",
//                                                                     color: "white",
//                                                                     "& .MuiOutlinedInput-root": {
//                                                                         "& fieldset": {
//                                                                             borderColor: "#ffffff1a", // Border color of the input
//                                                                         },
//                                                                         "&:hover fieldset": {
//                                                                             borderColor: "white", // Border color when hovering
//                                                                         },
//                                                                         "&.Mui-focused fieldset": {
//                                                                             borderColor: "white !important", // Border color when focused
//                                                                         },
//                                                                     },
//                                                                     "& .MuiInputBase-input": {
//                                                                         color: "white", // Text color inside the input
//                                                                     },
//                                                                     "& .MuiFormHelperText-root": {
//                                                                         color: "red", // Color of the error text
//                                                                     },
//                                                                 }}
//                                                                 error={!!error}
//                                                                 helperText={error}
//                                                             // InputProps={{
//                                                             //     endAdornment: (
//                                                             //         <IconButton onClick={handleDelete}>
//                                                             //             <Delete />
//                                                             //         </IconButton>
//                                                             //     ),
//                                                             // }} 
//                                                             />

//                                                             <IconButton onClick={handleDelete} sx={{ border: "1px solid #ffffff1a", background: "#ffffff1a", borderRadius: "4px", color: "white", marginLeft: "5px" }}>
//                                                                 <Delete />
//                                                             </IconButton>


//                                                         </Box>


//                                                     </Box>
//                                                 </Box>
//                                                 <Button
//                                                     aria-label="Add alternative answer"
//                                                     size="small"
//                                                     sx={{
//                                                         marginRight: 1,
//                                                         border: "1px solid #ffffff1a",
//                                                         width: "30%",
//                                                         borderRadius: "5px",
//                                                         fontSize:"15px",
//                                                         backgroundColor: "#ffffff1a",
//                                                         color: "white",
//                                                         textTransform: "none", // Prevents the text from becoming uppercase
//                                                         fontWeight:"600",
//                                                         marginTop:"10px"
//                                                     }}
//                                                     startIcon={<AddIcon style={{ fontSize: '14px' }} />} // Adding the icon at the start
//                                                 >
//                                                     Add Alternative Answer
//                                                 </Button>
//                                             </Box>
//                                         </Box>
//                                     )}
//                                 </Paper>
//                             </Box>
//                         </Box>
//                     </Form>
//                 )}
//             </Formik>
//             <FillBlankModal
//                 open={settingsModal}
//                 onClose={handleCloseModal}
//                 options={options}
//                 setOptions={setOptions}
//                 alternativeAnswers={alternativeAnswers}
//                 setAlternativeAnswers={setAlternativeAnswers}
//             />
//         </div>
//     );
// };

// export default FillintheBlank;



import React, { useState, useEffect } from 'react';
import CustomInputIcon from "../../../../Components/CustomInput/CustomInputIcon";
import CustomChoiceInput from '../../../../Components/CustomInput/CustomChoiceInput';
import {
    Grid, Card, CardContent, IconButton, Tooltip, styled, tooltipClasses, useMediaQuery, ButtonGroup, Button, Box, InputBase, Paper, Typography, FormControl,
    Select,
    MenuItem,
    TextField,
    Menu
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFormik, Formik, Form, Field } from 'formik';
import { IoCheckmark } from "react-icons/io5";
import { FaImage } from "react-icons/fa";
import Spinner from './Spinner';
import "../../../../Components/CustomInput/CustomChoiceInput.css";
import ImageUpload from './Modals/ImageUpload';
import SettingsIcon from "@mui/icons-material/Settings";
import FillBlankModal from './Modals/FillBankModal';
import { ExpandMore, Delete, Add } from '@mui/icons-material';
import { useSelector } from 'react-redux';

// Define the default boxes
const DEFAULT_BOXES = Array(6).fill('');

const FillintheBlank = ({ textColor ,setApiPostData}) => {
    const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
    const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme => theme.breakpoints.down('md'));

    const [choices, setChoices] = useState([{ text: '', image: '' }, { text: '', image: '' }, { text: '', image: '' }, { text: '', image: '' }]);

    const [isQuestionEntered, setIsQuestionEntered] = useState(false);

    const [questionImage, setQuestionImage] = useState('');
    const [updateAudioURL, setUpdateAudioUrl] = useState("");
    const [updateVideoURL, setUpdateVideoURL] = useState("");
    const [settingsModal, setSettingsModal] = useState(false)
    const [options, setOptions] = useState("separate-boxes")
    const [alternativeAnswers, setAlternativeAnswers] = useState(false);
    console.log(options, "option...")


    const [rows, setRows] = useState([]);
    console.log(rows, "rows/////////////////////")
    const [currentRowId, setCurrentRowId] = useState(null);
    const handleAddRow = () => {
        setRows([...rows, { id: rows.length + 1, value: '', selectedOption: 'is exactly' }]);
    };

    const handleDeleteRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    const handleInputChange1 = (event, id) => {
        const value = event.target.value;
        setRows(rows.map(row => (row.id === id ? { ...row, value } : row)));
    };

    const handleOptionChange = (option, id) => {
        setRows(rows.map(row => (row.id === id ? { ...row, selectedOption: option } : row)));
    };

    const handleMenuOpen1 = (event, id) => {
        setAnchorEl(event.currentTarget);
        setCurrentRowId(id);
    };

    const handleMenuClose1 = (option) => {
        if (option) {
            handleOptionChange(option, currentRowId);
            setSelectedOption(option);
        }
        setAnchorEl(null);
    };

    // State to manage dynamically added boxes
    const [boxes, setBoxes] = useState(DEFAULT_BOXES);
  const sessionStaffId = parseInt(sessionStorage.getItem('sessionStaffId'));


    const formik = useFormik({
        initialValues: {
            question: '',
            questionImage: '',
            answer: '',  // Correct answer field
            alternate_answer: '',  // Alternate answer field
            
        },
        onSubmit: (values) => {
            console.log('Form values:', values);
        },
    });

    // useEffect(() => {
    //     setIsQuestionEntered(formik.values.question.trim() !== '' || formik.values.questionImage.trim() !== '');
    // }, [formik.values, choices]);

    const { QuestionAudioPost } = useSelector((state) => state?.QuestionAudioPost);
    const { QuestionVideoPost } = useSelector((state) => state?.QuestionVideoPost);

    const [answerWith,setAnswerWith]=useState([])
    console.log(answerWith,"answerWithanswerWithanswerWithanswerWith")
    
  useEffect(() => {
    // setIsQuestionEntered(formik.values.question.trim() !== '');
    // setIsQuestionEntered(formik.values.question || formik.values.questionImage.trim() !== '');
    // setIsOptionEntered(choices.some((choice, index) => formik.values[`choice_${index}_text`].trim() !== ''));



    setApiPostData({
      staff_id: sessionStaffId,
      questionText: formik.values.question,
      questionImage: questionImage,
      questionAudioUrl: QuestionAudioPost.data.audioUrl,
      questionVideoUrl: QuestionVideoPost.data.videoUrl,
    //   correctAnswer: [answerWith],
    correctAnswer: [{text:answerWith,image:""}],

    //   optionTexts: [answerWith],
    optionTexts: [{text:answerWith,image:""}],
      
    });

    console.log(answerWith,"formik.values.answer----------------")
    
  }, [formik.values,answerWith]);




console.log(answerWith,"answerWitha11111")

    const handleInputChange = (event, setFieldValue) => {
        const value = event.target.value;

        console.log(value,"value-----------")
        setAnswerWith(value)
        setFieldValue("answer", value); // Update Formik's answer field
        if (options === "separate-boxes" && !alternativeAnswers) {
            if (value.length > 0) {
                // Add new boxes for each character in the answer
                setBoxes(value.split(""));
            } else {
                // Restore default boxes when input is cleared
                setBoxes(DEFAULT_BOXES);
            }
        }
    }

    const handleInputAlternative = (event, setFieldValue) => {
        const value = event.target.value;
        setFieldValue("alternate_answer", value); // Update Formik's alternate_answer field
    }

    const handleOpenModal = () => {
        setSettingsModal(true);
    };

    const handleCloseModal = () => {
        setSettingsModal(false);
    };
    ///////////////////////
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [error, setError] = React.useState('');



    const [selectedOption, setSelectedOption] = useState('is exactly');


    const handleMenuClose = (option) => {
        if (option) {
            setSelectedOption(option);
        }
        setAnchorEl(null);
    };


    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSubmit = (event) => {
      
        event.preventDefault();
        console.log(answerWith,"answerwithhhhhhhhhhhhhhhhh")
        console.log(rows,"altrnateoption")
        console.log('Question:', formik.values.question);
        console.log('Question Image:', formik.values.questionImage);
     

    };



    const handleDelete = () => {
        // Handle delete logic
    };

    const handleAdd = () => {
        // Handle add logic
    };


    return (
        <div style={{ padding: "20px", color: "#FFF" }}>
            <CustomInputIcon
                name="question"
                custPlaceholder="Type question here"
                inputType="text"
                value={formik.values.question}
                setUpdateVideoURL={setUpdateVideoURL}
                updateVideoURL={updateVideoURL}
                setUpdateAudioUrl={setUpdateAudioUrl}
                updateAudioURL={updateAudioURL}
                onChange={(e) => formik.setFieldValue('question', e.target.value)}
                questionImage={questionImage}
                setQuestionImage={setQuestionImage}
            />

            <Formik
                initialValues={{ answer: "", alternate_answer: "" }}
                onSubmit={(values) => console.log("Submitted Answer:", values.answer, values.alternate_answer)}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <Box className="options-container" sx={{ display: "flex", gap: 2, padding: "0px 20px" }}>
                            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                                {/* Answer Container */}
                                <Paper
                                    elevation={0}
                                    className="answer-container"
                                    sx={{
                                        py: 3,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        height: "7rem",
                                        background: "#09090933",
                                        position: "relative",
                                        borderRadius: 2,
                                    }}
                                >
                                    {/* Input Section */}
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%", maxHeight: 350, px: 2 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}>
                                            <Paper
                                                className="correct-answer"
                                                sx={{
                                                    flex: 1,
                                                    bgcolor: "#ffffff1a",
                                                    height: 40,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    borderRadius: "4px 4px 0 0",
                                                    borderBottom: "2px solid",
                                                    borderBottomColor: "grey.400",
                                                    position: "relative",
                                                    width: "80%",
                                                    justifyContent: "center",
                                                    margin: "0 auto"

                                                }}
                                            >
                                                <InputBase
                                                    id="correct-answer"
                                                    name="answer"
                                                    placeholder="Type answer here"
                                                    sx={{
                                                        pl: 2,
                                                        pr: 3,
                                                        width: "100%",
                                                        height: "100%",
                                                        fontSize: "1rem",
                                                        color: "white"
                                                    }}
                                                    inputProps={{
                                                        "data-testid": "fib-correct-answer",
                                                        maxLength: 999,
                                                        autoComplete: "off",
                                                        autoCorrect: "off",
                                                        "aria-label": "Type answer here",
                                                        "aria-required": "true",
                                                    }}
                                                    value={values.answer}
                                                    onChange={(event) => handleInputChange(event, setFieldValue)}
                                                />
                                            </Paper>
                                            {/* Settings Button */}
                                            <IconButton
                                                className="fib-answer-settings-button"
                                                sx={{
                                                    bgcolor: "#ffffff1a",
                                                    color: "white",
                                                    "&:hover": { bgcolor: "#ffffff1a" },
                                                    "&:active": { bgcolor: "##ffffff1a" },
                                                    borderRadius: "8px",
                                                }}
                                                aria-label="Settings"
                                                data-testid="fib-answer-settings-button"
                                            >
                                                <SettingsIcon onClick={handleOpenModal} />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Paper>

                                {/* Preview Options Container */}
                                <Paper
                                    className="preview-options-container"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                        alignItems: "left",
                                        width: "100%",
                                        minHeight: "7rem",
                                        height: "100%",
                                        mt: 4,
                                        padding: 0,
                                        background: "#09090933",
                                        position: "relative",
                                        left: 0,
                                        borderRadius: 2,
                                    }}
                                >
                                    {alternativeAnswers && options === "single-input-field" ? (
                                        <Typography sx={{ color: "grey.500", fontWeight: "bold", fontSize: "0.875rem" }}>
                                          Alternative Answer
                                        </Typography>) : (
                                        <Typography sx={{ color: "grey.500", fontWeight: "bold", fontSize: "0.875rem" }}>
                                            Student view
                                        </Typography>
                                    )}

                                    {/* Dynamic Boxes Preview */}
                                    {options === "single-input-field" && !alternativeAnswers && (
                                        <Paper
                                            className="correct-answer"
                                            sx={{
                                                flex: 1,
                                                bgcolor: "#ffffff1a",
                                                height: "40px !important",
                                                display: "flex",
                                                alignItems: "center",
                                                borderRadius: "4px 4px 0 0",
                                                borderBottom: "2px solid",
                                                borderBottomColor: "grey.400",
                                                width: "90%",
                                                margin: "0 auto",
                                                justifyContent: "center",
                                                maxHeight: "40px"
                                            }}
                                        >
                                            <InputBase
                                                id="alternate-answer"
                                                name="alternate_answer"
                                                placeholder="Type answer here"
                                                sx={{
                                                    pl: 2,
                                                    pr: 3,
                                                    width: "100%",
                                                    height: "100%",
                                                    fontSize: "1rem",
                                                    color: "white"
                                                }}
                                                inputProps={{
                                                    "data-testid": "fib-alternate-answer",
                                                    maxLength: 999,
                                                    autoComplete: "off",
                                                    autoCorrect: "off",
                                                    "aria-label": "Type alternative answer here",
                                                    "aria-required": "true",
                                                }}
                                                value={values.alternate_answer}
                                                onChange={(event) => handleInputAlternative(event, setFieldValue)}
                                            />
                                        </Paper>
                                    )}
                                    {options === "separate-boxes" && !alternativeAnswers && (
                                        <Box sx={{
                                            height: 100,
                                            width: "100%",
                                            textAlign: "center",
                                            overflowY: "auto",
                                            justifyContent: "center",
                                            display: "flex",
                                            alignItems: "center"
                                        }}>
                                            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center" }}>
                                                {boxes.map((box, index) => (
                                                    <Box
                                                        key={index}
                                                        sx={{
                                                            bgcolor: "black",
                                                            width: 32,
                                                            height: 32,
                                                            fontWeight: "800",
                                                            borderRadius: "4px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "white",
                                                            fontSize: "1rem",
                                                        }}
                                                    >
                                                        {box}
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>)}
                                    {alternativeAnswers && options === "single-input-field" && (
                                        <Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxHeight: "100px", overflowY: 'auto', py: 2, width: "80%", margin: "0 auto" }}>

                                                {rows.map(row => (
                                                    <Box key={row.id} sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                                        <Box sx={{ flex: 1, display: 'flex', gap: 2 }}>
                                                            <Box sx={{ position: 'relative', borderRadius: 1, bgcolor: '#ffffff1a', color: 'text.secondary', height: '40px' }}>
                                                                <Button
                                                                    aria-haspopup="listbox"
                                                                    aria-expanded={Boolean(anchorEl)}
                                                                    onClick={(e) => handleMenuOpen1(e, row.id)}
                                                                    sx={{ width: '100%', display: 'flex', height: "40px", alignItems: 'center', justifyContent: 'space-between', py: 1.5, px: 2, textAlign: 'left', textTransform: 'none', fontWeight: 'bold', borderRadius: 1, background: "#ffffff1a" }}
                                                                    endIcon={<ExpandMore style={{ color: "white" }} />}
                                                                >
                                                                    <Typography variant="body1" sx={{ color: "white" }}>{row.selectedOption}</Typography>
                                                                </Button>
                                                                <Menu
                                                                    anchorEl={anchorEl}
                                                                    open={Boolean(anchorEl)}
                                                                    onClose={() => handleMenuClose1()}
                                                                >
                                                                    <MenuItem onClick={() => handleMenuClose1('is exactly')}>is exactly</MenuItem>
                                                                    <MenuItem onClick={() => handleMenuClose1('Contains')}>Contains</MenuItem>
                                                                </Menu>
                                                            </Box>
                                                            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: "space-between", width: "100%" }}>
                                                                <TextField
                                                                    id={`input-${row.id}`}
                                                                    value={row.value}
                                                                    onChange={(e) => handleInputChange1(e, row.id)}
                                                                    placeholder="Type an answer here"
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    size="small"
                                                                    sx={{
                                                                        bgcolor: "#ffffff1a",
                                                                        color: "white",
                                                                        "& .MuiOutlinedInput-root": {
                                                                            "& fieldset": {
                                                                                borderColor: "#ffffff1a", // Border color of the input
                                                                            },
                                                                            "&:hover fieldset": {
                                                                                borderColor: "white", // Border color when hovering
                                                                            },
                                                                            "&.Mui-focused fieldset": {
                                                                                borderColor: "white !important", // Border color when focused
                                                                            },
                                                                        },
                                                                        "& .MuiInputBase-input": {
                                                                            color: "white", // Text color inside the input
                                                                        },
                                                                    }}
                                                                />
                                                                <IconButton onClick={() => handleDeleteRow(row.id)} sx={{ border: "1px solid #ffffff1a", background: "#ffffff1a", borderRadius: "4px", color: "white", marginLeft: "5px" }}>
                                                                    <Delete />
                                                                </IconButton>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                ))}
                                                <Button
                                                    aria-label="Add alternative answer"
                                                    size="small"
                                                    onClick={handleAddRow}

                                                    sx={{
                                                        marginRight: 1,
                                                        border: "1px solid #ffffff1a",
                                                        width: "30%",
                                                        borderRadius: "5px",
                                                        fontSize: "15px",
                                                        backgroundColor: "#ffffff1a",
                                                        color: "white",
                                                        textTransform: "none", // Prevents the text from becoming uppercase
                                                        fontWeight: "600",
                                                        marginTop: "10px"
                                                    }}
                                                    startIcon={<AddIcon style={{ fontSize: '14px' }} />} // Adding the icon at the start
                                                >
                                                    Add Alternative Answer
                                                </Button>
                                            </Box>
                                        </Box>
                                    )}
                                </Paper>
                            </Box>
                        </Box>
                        <Button onClick={handleSubmit} type='submit'>submit</Button>
                    </Form>
                )}
            </Formik>
            <FillBlankModal
                open={settingsModal}
                onClose={handleCloseModal}
                options={options}
                setOptions={setOptions}
                alternativeAnswers={alternativeAnswers}
                setAlternativeAnswers={setAlternativeAnswers}
            />
        </div>
    );
};

export default FillintheBlank;
