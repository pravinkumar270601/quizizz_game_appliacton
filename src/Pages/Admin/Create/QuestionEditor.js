


import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  FilledInput,
  IconButton,
  MenuItem,
  styled,
  Toolbar,
  Tooltip,
  tooltipClasses,
  Typography,
} from '@mui/material';
import {
  ChevronLeft,
  CheckBoxOutlineBlank,
  Check,
  AccessTime,
  Tag,
  Save,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  StrikethroughS,
  Superscript,
  Subscript,
  Functions,
  Lightbulb,
  Videocam,
  Mic,
  Poll,
  Cloud,
  Layers,
  SignalCellularAlt,
  Draw,
  FormatAlignLeft,
} from '@mui/icons-material';
import { FaRegHandPaper, FaSuperscript } from 'react-icons/fa';
import { FaRegCaretSquareDown, FaChartLine } from 'react-icons/fa';
import { LuMousePointerClick, LuPresentation } from 'react-icons/lu';
import { BiMessageAdd } from 'react-icons/bi';
import { HiOutlineViewColumns } from 'react-icons/hi';
import { TbMathFunction } from 'react-icons/tb';
import { Formik, Form, Field } from 'formik';
import { Select as FormikSelect } from 'formik-material-ui';
import './CreateScratch.css';
import { FaRegHand } from 'react-icons/fa6';
import './QuestionEditor.css';
import { BsTags } from 'react-icons/bs';
import MultipleChoice from './EditorQuestion/MultipleChoice';
import { MdOutlineFormatColorText } from "react-icons/md";
import { MdFormatBold } from "react-icons/md";
import { MdFormatItalic } from "react-icons/md";
import { MdOutlineStrikethroughS } from "react-icons/md";
import { MdOutlineFormatUnderlined } from "react-icons/md";
import { MdOutlineSubscript } from "react-icons/md";
import { MdFunctions } from "react-icons/md";
import { MdOutlineSuperscript } from "react-icons/md";
import { Popper, ClickAwayListener, Paper } from '@mui/material';
import SymbolEmojiPicker from './EditorQuestion/FunctionModel';
import SymbolPickerEditor from './EditorQuestion/FunctionModel';
import CustomPopper from './EditorQuestion/FunctionModel';
import FillintheBlank from './EditorQuestion/FillintheBlank';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from "../../../ReduxStore/actions/index";



const questionPoints = [
  { label: "1 points", value: "1 points" },
  { label: "2 points", value: "2 points" },
  { label: "3 points", value: "3 points" },
  { label: "4 points", value: "4 points" },
  { label: "5 points", value: "5 points" },
  { label: "6 points", value: "6 points" },
  { label: "7 points", value: "7 points" },
  { label: "8 points", value: "8 points" },
  { label: "9 points", value: "9 points" },
  { label: "10 points", value: "10 points" },
  { label: "11 points", value: "11 points" },
  { label: "12 points", value: "12 points" },
  { label: "13 points", value: "13 points" },
  { label: "14 points", value: "14 points" },
  { label: "15 points", value: "15 points" },
  { label: "16 points", value: "16 points" },
  { label: "17 points", value: "17 points" },
  { label: "18 points", value: "18 points" },
  { label: "19 points", value: "19 points" },
  { label: "20 points", value: "20 points" }
]

const questionSeconds = [
  { label: "5 Seconds", value: "5 seconds" },
  { label: "10 Seconds", value: "10 seconds" },
  { label: "20 Seconds", value: "20 seconds" },
  { label: "30 Seconds", value: "30 seconds" },
  { label: "45 Seconds", value: "45 seconds" },
  { label: "1 minutes", value: "1 minute" },
  { label: "1.5 minutes", value: "1.5 minute" },
  { label: "2 minutes", value: "2 minute" },
  { label: "3 minutes", value: "3 minute" },
  { label: "5 minutes", value: "5 minute" },
  { label: "10 Seconds", value: "10 minute" },
  { label: "15 Seconds", value: "15 minute" },


]

const BootstrapTooltip = styled(({ className, bgColor, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme, bgColor }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: bgColor || theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: bgColor || theme.palette.common.black,
  },
}));

const QuestionEditor = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [apiPostData, setApiPostData] = useState("")
  console.log(apiPostData, "apiiiiiiiiiiiiiiiiiiiiiasaldsdll")
  const [questionType,setQuestionType]=useState("multipleChoice")
  const [questionPoint,setQuestionPoint]=useState("1points")
  const [questionTiming,setQuestionTiming]=useState("5seconds")
  const [questionFeild,setQuestionFeild]=useState(null)

  const { QuestionWithAnsPost } = useSelector((state) => state?.QuestionWithAnsPost);
  // console.log(QuestionWithAnsPost, "QuestionWithAnsPost,...,.,.,.,.,."
  const [questionImage,setQuestionImage]=useState(null)
  console.log(questionImage,"questionImagemmm")


  const handleSubmitapicheck = (apidata) => {
   
    const data3 = {
      data: 
      { 
        "staff_id":apiPostData.staff_id,
        "question_id": apiPostData.question_id,
        "questionText":apiPostData.questionText,
        "options": apiPostData.optionTexts,
        "questionAudioUrl":apiPostData.questionAudioUrl,
        "questionVideoUrl":apiPostData.questionVideoUrl,
        "questionImageUrl":apiPostData.questionImage,
        "optionsImageUrl":apiPostData.optionImages,
        "correctAnswer":apiPostData.correctAnswer,
        "questionType": questionType,
        "questionPoint": questionPoint,
        "questionTiming": questionTiming



      },
    method: "post",
    apiName: "questionAnswersCreate",
};
dispatch(actions.QUESTIONWITHANSPOST(data3));
setApiPostData("")
setQuestionImage("");


  }
  useEffect(() => {
    console.log(questionImage, "Updated questionImage");
  }, [questionImage]);
  

 
const questionTypes = [
  { label: "Multiple Choice", value: "multipleChoice", icon: <Check className='icons_button' />, components: <MultipleChoice handleSubmitapicheck={handleSubmitapicheck} setApiPostData={setApiPostData} setQuestionFeild={setQuestionFeild} questionImage={questionImage} setQuestionImage={setQuestionImage}/> },
  { label: "Fill in the Blank", value: "fillInTheBlank", icon: <CheckBoxOutlineBlank className='icons_button' />, components: <FillintheBlank  handleSubmitapicheck={handleSubmitapicheck} setApiPostData={setApiPostData} setQuestionFeild={setQuestionFeild}/> },
  { label: "Draw", value: "draw", icon: <Draw className='icons_button1' /> },
  { label: "Open Ended", value: "openEnded", icon: <FormatAlignLeft className='icons_button1' /> },
  { label: "Video Response", value: "videoResponse", icon: <Videocam className='icons_button1' /> },
  { label: "Audio Response", value: "audioResponse", icon: <Mic className='icons_button1' /> },
  { label: "Poll", value: "poll", icon: <Poll className='icons_button1' /> },
  { label: "Word Cloud", value: "wordCloud", icon: <Cloud className='icons_button1' /> },
  { label: "Match", value: "match", icon: <Layers className='icons_button2' /> },
  { label: "Recorder", value: "recorder", icon: <SignalCellularAlt className='icons_button2' /> },
  { label: "Drag & Drop", value: "dragDrop", icon: <FaRegHand className='icons_button2' /> },
  { label: "Drop Down", value: "dropDown", icon: <FaRegCaretSquareDown className='icons_button2' /> },
  { label: "Hotspots", value: "hotspots", icon: <LuMousePointerClick className='icons_button2' /> },
  { label: "Labelling", value: "labelling", icon: <BiMessageAdd className='icons_button2' /> },
  { label: "Categorize", value: "categorize", icon: <BiMessageAdd className='icons_button2' /> },
  { label: "Math Response", value: "mathResponse", icon: <TbMathFunction className='icons_button3' /> },
  { label: "Graphing", value: "graphing", icon: <FaChartLine className='icons_button3' /> },
  { label: "Slide", value: "slide", icon: <LuPresentation className='icons_button4' /> },
]

const [anchorElCustomPopper, setAnchorElCustomPopper] = useState(null);
console.log(anchorElCustomPopper, "anchorElCustomPopper")
const [openCustomPopper, setOpenCustomPopper] = useState(false);


const handleCustomPopperClick = (event) => {
  setAnchorElCustomPopper(event.currentTarget);
  setOpenCustomPopper((prev) => !prev);
};

const handleCloseCustomPopper = () => {
  setOpenCustomPopper(false);
};


const initialValues = {
  questionType: questionTypes[0].value,
  points: questionPoints[0].value,
  timeLimit: questionSeconds[0].value,
};

const handleSubmit = (values) => {
  console.log(values,"ennanban...............");
};

const renderQuestionComponent = (questionType) => {
  const selectedType = questionTypes.find((type) => type.value === questionType);
  return selectedType ? selectedType.components : null;
};

const [selectedButton, setSelectedButton] = useState(null);
console.log(selectedButton, "selected")

const handleButtonClick = (button) => {
  setSelectedButton(button);
};

const isSelected = (button) => selectedButton === button;

const [anchorEl, setAnchorEl] = useState(null);
console.log(anchorEl, "anchorE1111111111111111111111111111111111111111111111111111111111111")
const [open, setOpen] = useState(false);

const handleClick = (event) => {
  setAnchorEl(anchorEl ? null : event.currentTarget);
  // setOpen(!open);
  setOpen((prev) => !prev);
};
const handleFunctionModel = () => {
  console.log("valllllllaaaaaalllalaal")

  return <SymbolEmojiPicker />
}

const handleClose = () => {
  setOpen(false);
};


const [textColor, setTextColor] = useState("white")

console.log("textColor", textColor)

const handleColorSelect = (color) => {
  console.log(`Selected color: ${color}`);
  setTextColor(color)


  handleClose(); // Close the tooltip after selecting a color
};
const handleNavigateClick = () => {
  navigate("/admin/savequetion");  // Navigate to the QuestionEditor component
  setQuestionImage("")
};

const handlePreviousPageNavigate=()=>{
  navigate(-1)
}









return (
  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    {({ values, handleChange,setFieldValue }) => (
      <Form>
        <Box sx={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column' }}>
          {/* First AppBar (Fixed) */}
          <AppBar position="fixed" color="inherit" sx={{ bgcolor: 'light.300' }}>
            <Toolbar variant="dense" sx={{ gap: 1 }}>
              <IconButton edge="start" color="inherit" aria-label="back" onClick={handlePreviousPageNavigate}>
                <ChevronLeft fontSize="small" />
              </IconButton>
              <Box sx={{ flexGrow: 1, maxWidth: '55%' }}>
                <Field
                  component={FormikSelect}
                  name="questionType"
                  border="none"
                  size="small"
                  onChange={(event)=>{
                    setFieldValue('questionType',event.target.value)
                    console.log("eventttttttttttttttt",event.target.value)
                    setQuestionType(event.target.value)}
                    
                 
                  }
              
                  sx={{
                    fontWeight: 'bold',
                    height: 32,
                    width: '100%',
                    pr: 1,
                    pl: 1,
                    color: 'dark.700',
                    bgcolor: '#0909090d',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none !important',
                    },
                    '& .MuiSelect-select': {
                      padding: 0,
                    },
                  }}
                >
                  {questionTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value} onChange={(event)=>console.log(event,"mkmkkmkmkkmkmkmkmkmkmkmkkmkmkmkkkmkmkmkmkmkmkmk")}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {type.icon}
                        <Typography variant="body2">{type.label}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Field>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Field
                  component={FormikSelect}
                  name="points"
                  variant="outlined"
                  onChange={(event)=>{
                    setFieldValue('points',event.target.value)
                    // console.log("eventttttttttttttttt",event.target.value)
                    setQuestionPoint(event.target.value)
                    }
                  }

                  sx={{
                    height: 32,
                    pl: 1,
                    pr: 1,
                    color: 'dark.700',
                    fontSize: '13px',
                    fontWeight: '600',
                    bgcolor: '#0909090d',

                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none !important',
                    },
                    '& .MuiSelect-select': {
                      padding: 0,
                    },
                  }}
                  startAdornment={<Check fontSize="8px" sx={{ mr: 1 }} />}
                >
                  {/* <MenuItem value="1 points">1 points</MenuItem> */}
                  {questionPoints.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}

                    </MenuItem>
                  ))}
                </Field>
                <Field
                  component={FormikSelect}
                  name="timeLimit"
                  variant="outlined"
                  onChange={(event)=>{
                    setFieldValue('timeLimit',event.target.value)
                    setQuestionTiming(event.target.value)
                    // console.log("eventttttttttttttttt",event.target.value)
                    }
                  }
                  

                  sx={{
                    height: 32,
                    pl: 1,
                    pr: 1,
                    color: 'dark.700',
                    fontSize: '13px',
                    fontWeight: '600',
                    bgcolor: '#0909090d',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none !important',
                    },
                    '& .MuiSelect-select': {
                      padding: 0,
                    },
                  }}
                  startAdornment={<AccessTime fontSize="8px" sx={{ mr: 1 }} />}
                >
                  {questionSeconds.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}

                    </MenuItem>
                  ))}
                </Field>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="small"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    height: 32,
                    bgcolor: '#0909090d',
                    border: 'none',
                  }}
                  startIcon={<BsTags fontSize="small" />}
                >
                  Tag standards
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                  // sx={{
                  //   textTransform: 'none',
                  //   fontWeight: 'bold',
                  //   height: 32,
                  //   bgcolor: 'violet',
                  // }}
                  sx={{
                    background: "rgb(136 84 192)",
                    boxShadow: "none",
                    fontWeight: "600",
                    '&:hover': {
                      backgroundColor: 'rgb(136 84 192)',
                      boxShadow: "none",
                      fontWeight: "600"

                    }
                  }}
                  startIcon={<Save fontSize="small" />}
                  onClick={()=>{
                  
                    handleSubmitapicheck()
                    handleNavigateClick()
                    // questionFeild()

                  }
                  }


                >
                  Save question
                </Button>
              </Box>
            </Toolbar>
          </AppBar>



          <AppBar
            position="fixed"
            color="inherit"
            sx={{ top: 48, height: 48, boxShadow: 'none', bgcolor: 'rgb(249 249 249)' }}
          >
            <Toolbar variant="dense" sx={{ gap: 0.5 }}>

              <BootstrapTooltip title="color" placement="top">
                <IconButton
                  onClick={handleClick}
                  sx={{
                    borderRadius: '2px',
                    bgcolor: 'rgb(237 230 246)',
                    '&:hover': {
                      bgcolor: 'rgb(237 230 246)',
                      borderRadius: '2px',
                    },
                  }}
                >
                  <MdOutlineFormatColorText className="text_format" />
                </IconButton>

                <Popper
                  open={open}
                  anchorEl={anchorEl}
                  placement="bottom"
                  disablePortal // Ensure Popper is contained within the parent
                  style={{ zIndex: 1300 }} // Adjust zIndex if necessary
                >
                  <ClickAwayListener onClickAway={handleClose}>
                    <Paper
                      elevation={3}
                      style={{
                        padding: '10px',
                        display: 'flex',
                        justifyContent: "space-between",
                        flexWrap: 'wrap', // Allow color boxes to wrap
                        gap: '5px',
                        backgroundColor: '#fff', // Set background color for Paper
                        borderRadius: '4px', // Add border-radius to Paper
                        minWidth: '300px', // Ensure a minimum width
                      }}
                    >
                      {['#e0525e', '#cc7700', '#cc7700', '#2d9da6', '#5c9ad6', '#9a4292', '#d5546d', '#FFFFFF'].map((color) => (
                        <div
                          key={color}
                          onClick={() => handleColorSelect(color)}
                          style={{
                            width: '30px',
                            height: '30px',
                            backgroundColor: color,
                            borderRadius: '4px',
                            cursor: 'pointer',
                            border: '1px solid #ccc', // Add a border to color boxes
                          }}
                        />
                      ))}
                    </Paper>
                  </ClickAwayListener>
                </Popper>
              </BootstrapTooltip>

              <BootstrapTooltip title="Bold" placement="bottom">
                <IconButton
                  onClick={() => handleButtonClick('bold')}
                  sx={{
                    // border: isSelected('bold') ? '2px solid blue' : 'none',
                    // bgcolor: isSelected('bold') ? 'lightblue' : 'transparent',
                    borderRadius: "2px",
                    bgcolor: isSelected('bold') ? 'rgb(237 230 246)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgb(237 230 246)',
                      borderRadius: "2px" // Customize the hover background
                    },

                  }}
                >
                  <MdFormatBold className="text_format" />
                </IconButton>
              </BootstrapTooltip>
              <BootstrapTooltip title="Italic" placement="bottom">
                <IconButton
                  onClick={() => handleButtonClick('italic')}
                  sx={{
                    // border: isSelected('italic') ? '2px solid blue' : 'none',
                    // bgcolor: isSelected('italic') ? 'lightblue' : 'transparent',
                    borderRadius: "2px",
                    bgcolor: isSelected('italic') ? 'rgb(237 230 246)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgb(237 230 246)',
                      borderRadius: "2px" // Customize the hover background
                    },

                  }}
                >
                  <MdFormatItalic className="text_format" />
                </IconButton>
              </BootstrapTooltip>
              <BootstrapTooltip title="Underline" placement="bottom">
                <IconButton
                  onClick={() => handleButtonClick('underline')}
                  sx={{
                    // border: isSelected('underline') ? '2px solid blue' : 'none',
                    // bgcolor: isSelected('underline') ? 'lightblue' : 'transparent',
                    borderRadius: "2px",
                    bgcolor: isSelected('underline') ? 'rgb(237 230 246)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgb(237 230 246)',
                      borderRadius: "2px" // Customize the hover background
                    },

                  }}
                >
                  <MdOutlineFormatUnderlined className="text_format" />
                </IconButton>
              </BootstrapTooltip>
              <BootstrapTooltip title="Strikethrough" placement="bottom">
                <IconButton
                  onClick={() => handleButtonClick('strikethrough')}
                  sx={{
                    // border: isSelected('strikethrough') ? '2px solid blue' : 'none',
                    // bgcolor: isSelected('strikethrough') ? 'lightblue' : 'transparent',
                    borderRadius: "2px",
                    bgcolor: isSelected('strikethrough') ? 'rgb(237 230 246)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgb(237 230 246)',
                      borderRadius: "2px" // Customize the hover background
                    },
                  }}
                >
                  <MdOutlineStrikethroughS className="text_format" />
                </IconButton>
              </BootstrapTooltip>
              <BootstrapTooltip title="superscript" placement="bottom">
                <IconButton
                  onClick={() => handleButtonClick('superscript')}
                  sx={{
                    // border: isSelected('superscript') ? '2px solid blue' : 'none',
                    // bgcolor: isSelected('superscript') ? 'lightblue' : 'transparent',
                    borderRadius: "2px",
                    bgcolor: isSelected('superscript') ? 'rgb(237 230 246)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgb(237 230 246)',
                      borderRadius: "2px" // Customize the hover background
                    },
                  }}
                >
                  <MdOutlineSuperscript className="text_format" />
                </IconButton>
              </BootstrapTooltip>
              <BootstrapTooltip title="SubrScript" placement="bottom">
                <IconButton
                  onClick={() => handleButtonClick('subscript')}
                  sx={{
                    // border: isSelected('subscript') ? '2px solid blue' : 'none',
                    // bgcolor: isSelected('subscript') ? 'lightblue' : 'transparent',
                    borderRadius: "2px",
                    bgcolor: isSelected('subscript') ? 'rgb(237 230 246)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgb(237 230 246)',
                      borderRadius: "2px" // Customize the hover background
                    },
                  }}
                >
                  <MdOutlineSubscript className="text_format" />
                </IconButton>
              </BootstrapTooltip>
              <BootstrapTooltip title="Insert Symbol" placement="bottom">
                <IconButton
                  onClick={(event) => {
                    handleButtonClick('functions')
                    handleCustomPopperClick(event)

                  }}
                  sx={{
                    // border: isSelected('functions') ? '2px solid blue' : 'none',
                    // bgcolor: isSelected('functions') ? 'lightblue' : 'transparent',
                    borderRadius: "2px",
                    bgcolor: isSelected('functions') ? 'rgb(237 230 246)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgb(237 230 246)',
                      borderRadius: "2px" // Customize the hover background
                    },
                  }}
                >
                  <MdFunctions className="text_format" />

                </IconButton>
              </BootstrapTooltip>
              <CustomPopper
                open={openCustomPopper}
                anchorEl={anchorElCustomPopper}
                onClose={handleCloseCustomPopper}
              />
              <BootstrapTooltip title="Insert equation" placement="bottom">
                <IconButton
                  onClick={() => handleButtonClick('mathFunction')}
                  sx={{
                    // border: isSelected('mathFunction') ? '2px solid blue' : 'none',
                    // bgcolor: isSelected('mathFunction') ? 'lightblue' : 'transparent',
                    borderRadius: "2px",
                    bgcolor: isSelected('mathFunction') ? 'rgb(237 230 246)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgb(237 230 246)',
                      borderRadius: "2px" // Customize the hover background
                    },
                  }}
                >
                  <TbMathFunction className="text_format" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    Insert equation
                  </Typography>
                </IconButton>
              </BootstrapTooltip>
              <Tooltip title="Add answer explanation" placement="bottom" bgColor="red">
                <IconButton
                  onClick={() => {
                    handleButtonClick('explanation')
                    
                  }
                  }
                  sx={{
                    ml: 'auto',
                    // border: isSelected('explanation') ? '2px solid blue' : 'none',
                    // bgcolor: isSelected('explanation') ? 'lightblue' : 'transperant',
                    borderRadius: "2px",
                    bgcolor: isSelected('explanation') ? 'rgb(237 230 246)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgb(237 230 246)',
                      borderRadius: "2px" // Customize the hover background
                    },
                  }}
                >
                  <Lightbulb className="text_format" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    Add answer explanation
                  </Typography>
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
          {/* Main Content (Scrollable) */}

        </Box>
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            position: "relative",
            top: 90,
            width: "100%",
            height: "84.7vh",
            bgcolor: "rgb(229 229 229)"
            // pt: '96px', // Padding to account for both AppBars (48px each)
          }}
        >
       
          <Container maxWidth="md" sx={{ py: 4, minWidth: "85%" }}>
            <Box sx={{ aspectRatio: '16/9', bgcolor: 'rgb(70 26 66)', borderRadius: 2 }}>
              {/* Your question editor content here */}
              {/* <MultipleChoice textColor={textColor}/> */}
              {/* <FillintheBlank /> */}
              {renderQuestionComponent(values.questionType)}


            </Box>
          </Container>
        </Box>
      </Form>
    )}
  </Formik>
);
};

export default QuestionEditor;

