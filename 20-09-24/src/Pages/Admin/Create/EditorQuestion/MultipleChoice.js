



// // // // import React, { useState, useEffect } from 'react';
// // // // import CustomInputIcon from "../../../../Components/CustomInput/CustomInputIcon";
// // // // import CustomChoiceInput from '../../../../Components/CustomInput/CustomChoiceInput';
// // // // import { Grid, Card, CardContent, IconButton, Tooltip, styled, tooltipClasses, useMediaQuery, ButtonGroup, Button } from '@mui/material';
// // // // import AddIcon from '@mui/icons-material/Add';
// // // // import DeleteIcon from '@mui/icons-material/Delete';
// // // // import { useFormik } from 'formik';
// // // // import { IoCheckmark } from "react-icons/io5";
// // // // import { FaImage } from "react-icons/fa";
// // // // import Spinner from './Spinner'; // Import the Spinner component
// // // // import "../../../../Components/CustomInput/CustomChoiceInput.css";
// // // // import ImageUpload from './Modals/ImageUpload';

// // // // const BootstrapTooltip = styled(({ className, bgColor, ...props }) => (
// // // //   <Tooltip {...props} arrow classes={{ popper: className }} />
// // // // ))(({ theme, bgColor }) => ({
// // // //   [`& .${tooltipClasses.arrow}`]: {
// // // //     color: bgColor || theme.palette.common.black,
// // // //   },
// // // //   [`& .${tooltipClasses.tooltip}`]: {
// // // //     backgroundColor: bgColor || theme.palette.common.black,
// // // //   },
// // // // }));

// // // // const CustomButton = styled(Button)(({ theme }) => ({
// // // //   height: '24px',
// // // //   fontSize: '0.75rem',
// // // //   fontWeight: 600,
// // // //   padding: '0 12px',
// // // //   backgroundColor: 'transparent',
// // // //   '&:hover': {
// // // //     backgroundColor: theme.palette.mode === 'light' ? '#E0E0E0' : '#333',
// // // //   },
// // // //   '&:active': {
// // // //     backgroundColor: theme.palette.mode === 'light' ? '#BDBDBD' : '#555',
// // // //   },
// // // //   '&.selected': {
// // // //     backgroundColor: '#E0E0E0',
// // // //     color: '#3C3C3C',
// // // //   },
// // // // }));

// // // // const MultipleChoice = ({ textColor }) => {
// // // //   const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
// // // //   const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

// // // //   const [choices, setChoices] = useState(['', '', '', '']);
// // // //   const [correctChoices, setCorrectChoices] = useState([]); // Changed to array
// // // //   const [selectedType, setSelectedType] = useState('single');
// // // //   const [isQuestionEntered, setIsQuestionEntered] = useState(false);
// // // //   const [isOptionEntered, setIsOptionEntered] = useState(false);
// // // //   const [loading, setLoading] = useState(false); // State to control spinner visibility
// // // //   const maxChoices = 5;






// // // //   const [openImageUpload, setOpenImageUpload] = useState(false);

// // // //   const handleImageUploadOpen = (index) => {
// // // //     setOpenImageUpload(true); // Open the modal
// // // //   };

// // // //   const handleIamgeUploadClose = () => {
// // // //     setOpenImageUpload(false); // Close the modal
// // // //   };

// // // //   const formik = useFormik({
// // // //     initialValues: {
// // // //       question: '',
// // // //       ...choices.reduce((acc, _, index) => ({ ...acc, [`choice_${index}`]: '' }), {})
// // // //     },
// // // //     onSubmit: (values) => {
// // // //       console.log('Form values:', values);
// // // //     },
// // // //   });

// // // //   useEffect(() => {
// // // //     setIsQuestionEntered(formik.values.question && formik.values.question.trim() !== '');
// // // //     setIsOptionEntered(choices.some((_, index) => formik.values[`choice_${index}`] && formik.values[`choice_${index}`].trim() !== ''));
// // // //   }, [formik.values, choices]);

// // // //   const backgroundColors = [
// // // //     'rgb(45, 112, 174)',
// // // //     'rgb(45, 157, 166)',
// // // //     'rgb(239, 169, 41)',
// // // //     'rgb(213, 84, 109)',
// // // //     'rgb(154, 66, 146)'
// // // //   ];

// // // //   const addChoice = () => {
// // // //     if (choices.length < maxChoices) {
// // // //       setChoices([...choices, '']);
// // // //       formik.setValues({
// // // //         ...formik.values,
// // // //         [`choice_${choices.length}`]: ''
// // // //       });
// // // //     }
// // // //   };

// // // //   const handleDeleteChoice = (index) => {
// // // //     if (choices.length > 2) {
// // // //       const newChoices = choices.filter((_, i) => i !== index);
// // // //       setChoices(newChoices);
// // // //       const updatedValues = { ...formik.values };
// // // //       delete updatedValues[`choice_${index}`];
// // // //       formik.setValues(updatedValues);
// // // //     }
// // // //   };

// // // //   const handleImageInsert = (index) => {
// // // //     const newChoices = [...choices];
// // // //     newChoices[index] += '[image-url]';
// // // //     setChoices(newChoices);
// // // //   };

// // // //   const handleSelection = (value) => {
// // // //     setSelectedType(value);
// // // //     setCorrectChoices([])

// // // //   };

// // // //   const handleMarkAsCorrect = (index) => {
// // // //     const choiceText = formik.values[`choice_${index}`]?.trim() || '';
// // // //     if (choiceText) {
// // // //       setLoading(true);
// // // //       // setTimeout(() => {
// // // //       if (selectedType === 'single') {
// // // //         setCorrectChoices([index]);
// // // //       } else {
// // // //         setCorrectChoices(prev =>
// // // //           prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
// // // //         );
// // // //       }
// // // //       setLoading(false);
// // // //       // }, 1000); // Simulate async operation
// // // //     } else {
// // // //       alert("Please enter text or image in option.");
// // // //     }
// // // //   };

// // // //   const handleSubmit = () => {
// // // //     console.log('Question:', formik.values.question);


// // // //     const correctAnswerText = correctChoices
// // // //       .map((index) => formik.values[`choice_${index}`])
// // // //       .filter((value) => value !== undefined);

// // // //     console.log('Correct Answer Index(es):', correctAnswerText);


// // // //     for (let i = 0; i < choices.length; i++) {
// // // //       console.log(`Option ${i + 1}:`, formik.values[`choice_${i}`]);
// // // //     }
// // // //   };

// // // //   const isButtonDisabled = !(isQuestionEntered && isOptionEntered);

// // // //   return (
// // // //     <div style={{ padding: "20px", color: "#FFF" }}>
// // // //       <CustomInputIcon
// // // //         name="question"
// // // //         custPlaceholder="Type question here"
// // // //         inputType="text"
// // // //         value={formik.values.question}
// // // //         onChange={formik.handleChange}
// // // //       />
// // // //       <Grid container sx={{ paddingLeft: "10px", paddingRight: "5px" }}>
// // // //         {choices.map((_, index) => {
// // // //           const choiceValue = formik.values[`choice_${index}`]?.trim();
// // // //           const hasContent = !!choiceValue;

// // // //           const tooltipStyles = {
// // // //             color: '#FFF',
// // // //             padding: '8px',
// // // //           };

// // // //           const tooltipTitle = hasContent ? "Mark as a correct answer" : "Please enter text or image in option.";

// // // //           return (
// // // //             <Grid item xs={12} lg={choices.length === 5 ? 2.4 : 3 && choices.length === 4 ? 2.84 : 3 &&
// // // //               choices.length === 3 ? 3.8 : 3 && choices.length === 2 ? 5.7 : 3} key={index} sx={{ padding: 1 }}>
// // // //               <Card style={{ backgroundColor: backgroundColors[index], borderRadius: "10px", height: 'auto', width: '100%' }}>
// // // //                 <CardContent style={{ paddingTop: "0px", position: 'relative', display: 'flex', flexDirection: 'column', paddingBottom: "15px" }}>
// // // //                   <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
// // // //                     <Grid item>
// // // //                       {choices.length > 2 && (
// // // //                         <BootstrapTooltip title="Delete" placement="top">
// // // //                           <IconButton onClick={() => handleDeleteChoice(index)} sx={{ p: 0 }}>
// // // //                             <DeleteIcon className="quizz-inputicon1" />
// // // //                           </IconButton>
// // // //                         </BootstrapTooltip>
// // // //                       )}
// // // //                       <BootstrapTooltip title="Add image" placement="top">
// // // //                       <IconButton onClick={() => handleImageUploadOpen()}>
// // // //                           <FaImage className="quizz-inputicon1" />
// // // //                         </IconButton>


// // // //                       </BootstrapTooltip>
// // // //                     </Grid>
// // // //                     <Grid item>
// // // //                       <BootstrapTooltip title={<span style={tooltipStyles}>{tooltipTitle}</span>} placement="top" bgColor={hasContent ? '#4CAF50' : '#F44336'}>
// // // //                         <span >
// // // //                           <IconButton
// // // //                             onClick={() => handleMarkAsCorrect(index)}
// // // //                             disabled={isButtonDisabled}
// // // //                             sx={{
// // // //                               color: correctChoices.includes(index) ? '#FFF' : '#000',
// // // //                               position: 'relative',
// // // //                               overflow: 'hidden'
// // // //                             }}
// // // //                           >
// // // //                             <IoCheckmark className="quizz-inputicon2" style={{ backgroundColor: correctChoices.includes(index) ? 'green' : 'transparent' }} />
// // // //                           </IconButton>
// // // //                         </span>
// // // //                       </BootstrapTooltip>
// // // //                     </Grid>
// // // //                   </Grid>
// // // //                   <CustomChoiceInput
// // // //                     name={`choice_${index}`}
// // // //                     custPlaceholder="Type answer option here"
// // // //                     inputType="text"
// // // //                     InputProps={{ style: { '--card-bg-color': backgroundColors[index], color: "#FFF", maxWidth: '100%' } }}
// // // //                     onImageInsert={() => handleImageInsert(index)}
// // // //                     value={formik.values[`choice_${index}`]}
// // // //                     onChange={formik.handleChange}
// // // //                     sx={{ width: '100%' }}
// // // //                     textColor={textColor}
// // // //                   />
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </Grid>
// // // //           );
// // // //         })}
// // // //         {choices.length < maxChoices && (
// // // //           <Grid item xs={12} lg={0.5} sx={{ textAlign: "center", padding: "0 10px" }}>
// // // //             <IconButton
// // // //               onClick={addChoice}
// // // //               style={{
// // // //                 height: '100%',
// // // //                 width: "100%",
// // // //                 color: '#FFF',
// // // //                 display: 'flex',
// // // //                 justifyContent: 'center',
// // // //                 alignItems: 'center',
// // // //                 fontSize: '1rem',
// // // //                 borderRadius: isXs ? '5px' : '0',
// // // //                 border: isXs ? '1px solid #fff3' : 'none',
// // // //                 padding: isXs ? '2px' : '0'
// // // //               }}
// // // //             >
// // // //               <BootstrapTooltip title="Add option" placement="top">
// // // //                 <AddIcon style={{
// // // //                   border: isLg ? "1px solid #fff3" : "0",
// // // //                   borderRadius: isLg ? "5px" : "0",
// // // //                   height: isLg ? "30px" : "30px",
// // // //                   width: isLg ? "30px" : "30px"
// // // //                 }} />
// // // //               </BootstrapTooltip>
// // // //             </IconButton>
// // // //           </Grid>
// // // //         )}
// // // //       </Grid>
// // // //       <ButtonGroup sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
// // // //         <CustomButton
// // // //           onClick={() => handleSelection('single')}
// // // //           className={selectedType === 'single' ? 'selected' : ''}
// // // //         >
// // // //           Single Correct
// // // //         </CustomButton>
// // // //         <CustomButton
// // // //           onClick={() => handleSelection('multiple')}
// // // //           className={selectedType === 'multiple' ? 'selected' : ''}
// // // //         >
// // // //           Multiple Correct
// // // //         </CustomButton>
// // // //       </ButtonGroup>
// // // //       <Button
// // // //         onClick={handleSubmit}
// // // //         sx={{ mt: 2, display: 'block', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#4CAF50', color: '#FFF' }}
// // // //       >
// // // //         Submit
// // // //       </Button>
// // // //       <ImageUpload open={openImageUpload} onClose={handleIamgeUploadClose} />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MultipleChoice;




// // // import React, { useState, useEffect } from 'react';
// // // import CustomInputIcon from "../../../../Components/CustomInput/CustomInputIcon";
// // // import CustomChoiceInput from '../../../../Components/CustomInput/CustomChoiceInput';
// // // import { Grid, Card, CardContent, IconButton, Tooltip, styled, tooltipClasses, useMediaQuery, ButtonGroup, Button } from '@mui/material';
// // // import AddIcon from '@mui/icons-material/Add';
// // // import DeleteIcon from '@mui/icons-material/Delete';
// // // import { useFormik } from 'formik';
// // // import { IoCheckmark } from "react-icons/io5";
// // // import { FaImage } from "react-icons/fa";
// // // import Spinner from './Spinner'; // Import the Spinner component
// // // import "../../../../Components/CustomInput/CustomChoiceInput.css";
// // // import ImageUpload from './Modals/ImageUpload';

// // // const BootstrapTooltip = styled(({ className, bgColor, ...props }) => (
// // //   <Tooltip {...props} arrow classes={{ popper: className }} />
// // // ))(({ theme, bgColor }) => ({
// // //   [`& .${tooltipClasses.arrow}`]: {
// // //     color: bgColor || theme.palette.common.black,
// // //   },
// // //   [`& .${tooltipClasses.tooltip}`]: {
// // //     backgroundColor: bgColor || theme.palette.common.black,
// // //   },
// // // }));

// // // const CustomButton = styled(Button)(({ theme }) => ({
// // //   height: '24px',
// // //   fontSize: '0.75rem',
// // //   fontWeight: 600,
// // //   padding: '0 12px',
// // //   backgroundColor: 'transparent',
// // //   '&:hover': {
// // //     backgroundColor: theme.palette.mode === 'light' ? '#E0E0E0' : '#333',
// // //   },
// // //   '&:active': {
// // //     backgroundColor: theme.palette.mode === 'light' ? '#BDBDBD' : '#555',
// // //   },
// // //   '&.selected': {
// // //     backgroundColor: '#E0E0E0',
// // //     color: '#3C3C3C',
// // //   },
// // // }));

// // // const MultipleChoice = ({ textColor }) => {
// // //   const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
// // //   const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

// // //   const [choices, setChoices] = useState(['', '', '', '']);
// // //   const [correctChoices, setCorrectChoices] = useState([]);
// // //   const [selectedType, setSelectedType] = useState('single');
// // //   const [isQuestionEntered, setIsQuestionEntered] = useState(false);
// // //   const [isOptionEntered, setIsOptionEntered] = useState(false);
// // //   const [loading, setLoading] = useState(false);
// // //   const maxChoices = 5;
// // //   const [openImageUpload, setOpenImageUpload] = useState(false);
// // //   const [currentChoiceIndex, setCurrentChoiceIndex] = useState(null);

// // //   const handleImageUploadOpen = (index) => {
// // //     setCurrentChoiceIndex(index);
// // //     setOpenImageUpload(true);
// // //   };

// // //   const handleImageUploadClose = () => {
// // //     setOpenImageUpload(false);
// // //   };

// // //   const formik = useFormik({
// // //     initialValues: {
// // //       question: '',
// // //       ...choices.reduce((acc, _, index) => ({ ...acc, [`choice_${index}`]: '' }), {})
// // //     },
// // //     onSubmit: (values) => {
// // //       console.log('Form values:', values);
// // //     },
// // //   });

// // //   useEffect(() => {
// // //     setIsQuestionEntered(formik.values.question.trim() !== '');
// // //     setIsOptionEntered(choices.some((_, index) => formik.values[`choice_${index}`].trim() !== ''));
// // //   }, [formik.values, choices]);

// // //   const backgroundColors = [
// // //     'rgb(45, 112, 174)',
// // //     'rgb(45, 157, 166)',
// // //     'rgb(239, 169, 41)',
// // //     'rgb(213, 84, 109)',
// // //     'rgb(154, 66, 146)'
// // //   ];

// // //   const addChoice = () => {
// // //     if (choices.length < maxChoices) {
// // //       setChoices([...choices, '']);
// // //       formik.setValues({
// // //         ...formik.values,
// // //         [`choice_${choices.length}`]: ''
// // //       });
// // //     }
// // //   };

// // //   const handleDeleteChoice = (index) => {
// // //     if (choices.length > 2) {
// // //       const newChoices = choices.filter((_, i) => i !== index);
// // //       setChoices(newChoices);
// // //       const updatedValues = { ...formik.values };
// // //       delete updatedValues[`choice_${index}`];
// // //       formik.setValues(updatedValues);
// // //     }
// // //   };



// // //   const handleImageCrop = (croppedImage) => {
// // //     if (currentChoiceIndex !== null) {
// // //       const newChoices = [...choices];
// // //       newChoices[currentChoiceIndex] = croppedImage;
// // //       setChoices(newChoices);
// // //       formik.setFieldValue(`choice_${currentChoiceIndex}`, croppedImage);
// // //     }
// // //   };

// // //   const handleImageInsert = (index) => {
// // //     const newChoices = [...choices];
// // //     newChoices[index] += '[image-url]';
// // //     setChoices(newChoices);
// // //   };

// // //   const handleSelection = (value) => {
// // //     setSelectedType(value);
// // //     setCorrectChoices([]);
// // //   };

// // //   const handleMarkAsCorrect = (index) => {
// // //     const choiceText = formik.values[`choice_${index}`]?.trim() || '';
// // //     if (choiceText) {
// // //       setLoading(true);
// // //       if (selectedType === 'single') {
// // //         setCorrectChoices([index]);
// // //       } else {
// // //         setCorrectChoices(prev =>
// // //           prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
// // //         );
// // //       }
// // //       setLoading(false);
// // //     } else {
// // //       alert("Please enter text or image in option.");
// // //     }
// // //   };

// // //   const handleSubmit = () => {
// // //     console.log('Question:', formik.values.question);
// // //     const correctAnswerText = correctChoices
// // //       .map((index) => formik.values[`choice_${index}`])
// // //       .filter((value) => value !== undefined);
// // //     console.log('Correct Answer Index(es):', correctAnswerText);
// // //     for (let i = 0; i < choices.length; i++) {
// // //       console.log(`Option ${i + 1}:`, formik.values[`choice_${i}`]);
// // //     }
// // //   };

// // //   const isButtonDisabled = !(isQuestionEntered && isOptionEntered);

// // //   return (
// // //     <div style={{ padding: "20px", color: "#FFF" }}>
// // //       <CustomInputIcon
// // //         name="question"
// // //         custPlaceholder="Type question here"
// // //         inputType="text"
// // //         value={formik.values.question}
// // //         onChange={formik.handleChange}
// // //       />
// // //       <Grid container sx={{ paddingLeft: "10px", paddingRight: "5px" }}>
// // //         {choices.map((_, index) => {
// // //           const choiceValue = formik.values[`choice_${index}`]?.trim();
// // //           const hasContent = !!choiceValue;

// // //           const tooltipStyles = {
// // //             color: '#FFF',
// // //             padding: '8px',
// // //           };

// // //           const tooltipTitle = hasContent ? "Mark as a correct answer" : "Please enter text or image in option.";

// // //           return (
// // //             <Grid item xs={12} lg={choices.length === 5 ? 2.4 : 3 && choices.length === 4 ? 2.84 : 3 &&
// // //               choices.length === 3 ? 3.8 : 3 && choices.length === 2 ? 5.7 : 3} key={index} sx={{ padding: 1 }}>
// // //               <Card style={{ backgroundColor: backgroundColors[index], borderRadius: "10px", height: 'auto', width: '100%' }}>
// // //                 <CardContent style={{ paddingTop: "0px", position: 'relative', display: 'flex', flexDirection: 'column', paddingBottom: "15px" }}>
// // //                   <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
// // //                     <Grid item>
// // //                       {choices.length > 2 && (
// // //                         <BootstrapTooltip title="Delete" placement="top">
// // //                           <IconButton onClick={() => handleDeleteChoice(index)} sx={{ p: 0 }}>
// // //                             <DeleteIcon className="quizz-inputicon1" />
// // //                           </IconButton>
// // //                         </BootstrapTooltip>
// // //                       )}
// // //                       <BootstrapTooltip title="Add image" placement="top">
// // //                         <IconButton onClick={() => handleImageUploadOpen(index)}>
// // //                           <FaImage className="quizz-inputicon1" />
// // //                         </IconButton>
// // //                       </BootstrapTooltip>
// // //                     </Grid>
// // //                     <Grid item>
// // //                       <BootstrapTooltip title={<span style={tooltipStyles}>{tooltipTitle}</span>} placement="top" bgColor={hasContent ? '#4CAF50' : '#F44336'}>
// // //                         <span>
// // //                           <IconButton
// // //                             onClick={() => handleMarkAsCorrect(index)}
// // //                             disabled={isButtonDisabled}
// // //                             sx={{
// // //                               color: correctChoices.includes(index) ? '#FFF' : '#000',
// // //                               position: 'relative',
// // //                               overflow: 'hidden'
// // //                             }}
// // //                           >
// // //                             <IoCheckmark className="quizz-inputicon2" style={{ backgroundColor: correctChoices.includes(index) ? 'green' : 'transparent' }} />
// // //                           </IconButton>
// // //                         </span>
// // //                       </BootstrapTooltip>
// // //                     </Grid>
// // //                   </Grid>
// // //                   <CustomChoiceInput
// // //                     name={`choice_${index}`}
// // //                     custPlaceholder="Type answer option here"
// // //                     inputType="text"
// // //                     InputProps={{ style: { '--card-bg-color': backgroundColors[index], color: "#FFF", maxWidth: '100%' } }}
// // //                     onImageInsert={() => handleImageInsert(index)}
// // //                     value={formik.values[`choice_${index}`]}
// // //                     onChange={formik.handleChange}
// // //                   />
// // //                 </CardContent>
// // //               </Card>
// // //             </Grid>
// // //           );
// // //         })}
// // //       </Grid>
// // //       <Grid container sx={{ paddingLeft: "10px", paddingRight: "5px" }}>
// // //         <Grid item xs={12} lg={3}>
// // //           <Button
// // //             onClick={addChoice}
// // //             disabled={choices.length >= maxChoices}
// // //             sx={{ height: "56px", borderRadius: "10px" }}
// // //           >
// // //             <AddIcon />
// // //           </Button>
// // //         </Grid>
// // //         <Grid item xs={12} lg={9}>
// // //           <ButtonGroup
// // //             orientation={isXs ? 'vertical' : 'horizontal'}
// // //             variant="contained"
// // //             color="primary"
// // //             aria-label="text button group"
// // //             fullWidth
// // //           >
// // //             <CustomButton
// // //               className={selectedType === 'single' ? 'selected' : ''}
// // //               onClick={() => handleSelection('single')}
// // //             >
// // //               Single Correct Answer
// // //             </CustomButton>
// // //             <CustomButton
// // //               className={selectedType === 'multiple' ? 'selected' : ''}
// // //               onClick={() => handleSelection('multiple')}
// // //             >
// // //               Multiple Correct Answers
// // //             </CustomButton>
// // //           </ButtonGroup>
// // //         </Grid>
// // //         <Grid item xs={12}>
// // //           {loading ? (
// // //             <Spinner />
// // //           ) : (
// // //             <Button
// // //               onClick={handleSubmit}
// // //               disabled={isButtonDisabled}
// // //               sx={{ height: '56px', borderRadius: '10px' }}
// // //             >
// // //               Submit
// // //             </Button>
// // //           )}
// // //         </Grid>
// // //       </Grid>
// // //       <ImageUpload
// // //         open={openImageUpload}
// // //         onClose={handleImageUploadClose}
// // //         onCrop={handleImageCrop}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default MultipleChoice;



// // // import React, { useState, useEffect } from 'react';
// // // import CustomInputIcon from "../../../../Components/CustomInput/CustomInputIcon";
// // // import CustomChoiceInput from '../../../../Components/CustomInput/CustomChoiceInput';
// // // import { Grid, Card, CardContent, IconButton, Tooltip, styled, tooltipClasses, useMediaQuery, ButtonGroup, Button } from '@mui/material';
// // // import AddIcon from '@mui/icons-material/Add';
// // // import DeleteIcon from '@mui/icons-material/Delete';
// // // import { useFormik } from 'formik';
// // // import { IoCheckmark } from "react-icons/io5";
// // // import { FaImage } from "react-icons/fa";
// // // import Spinner from './Spinner';
// // // import ImageUpload from './Modals/ImageUpload';

// // // const BootstrapTooltip = styled(({ className, bgColor, ...props }) => (
// // //   <Tooltip {...props} arrow classes={{ popper: className }} />
// // // ))(({ theme, bgColor }) => ({
// // //   [`& .${tooltipClasses.arrow}`]: {
// // //     color: bgColor || theme.palette.common.black,
// // //   },
// // //   [`& .${tooltipClasses.tooltip}`]: {
// // //     backgroundColor: bgColor || theme.palette.common.black,
// // //   },
// // // }));

// // // const CustomButton = styled(Button)(({ theme }) => ({
// // //   height: '24px',
// // //   fontSize: '0.75rem',
// // //   fontWeight: 600,
// // //   padding: '0 12px',
// // //   backgroundColor: 'transparent',
// // //   '&:hover': {
// // //     backgroundColor: theme.palette.mode === 'light' ? '#E0E0E0' : '#333',
// // //   },
// // //   '&:active': {
// // //     backgroundColor: theme.palette.mode === 'light' ? '#BDBDBD' : '#555',
// // //   },
// // //   '&.selected': {
// // //     backgroundColor: '#E0E0E0',
// // //     color: '#3C3C3C',
// // //   },
// // // }));

// // // const MultipleChoice = ({ textColor }) => {
// // //   const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
// // //   const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

// // //   // Adjusting state to hold both text and image for each choice
// // //   const [choices, setChoices] = useState([{ text: '', image: '' }, { text: '', image: '' }]);
// // //   const [correctChoices, setCorrectChoices] = useState([]);
// // //   const [selectedType, setSelectedType] = useState('single');
// // //   const [isQuestionEntered, setIsQuestionEntered] = useState(false);
// // //   const [isOptionEntered, setIsOptionEntered] = useState(false);
// // //   const [loading, setLoading] = useState(false);
// // //   const maxChoices = 5;
// // //   const [openImageUpload, setOpenImageUpload] = useState(false);
// // //   const [currentChoiceIndex, setCurrentChoiceIndex] = useState(null);

// // //   const handleImageUploadOpen = (index) => {
// // //     setCurrentChoiceIndex(index);
// // //     setOpenImageUpload(true);
// // //   };

// // //   const handleImageUploadClose = () => {
// // //     setOpenImageUpload(false);
// // //   };

// // //   const formik = useFormik({
// // //     initialValues: {
// // //       question: '',
// // //       ...choices.reduce((acc, _, index) => ({
// // //         ...acc,
// // //         [`choice_${index}_text`]: '',
// // //         [`choice_${index}_image`]: ''
// // //       }), {})
// // //     },
// // //     onSubmit: (values) => {
// // //       console.log('Form values:', values);
// // //     },
// // //   });

// // //   useEffect(() => {
// // //     setIsQuestionEntered(formik.values.question.trim() !== '');
// // //     setIsOptionEntered(choices.some((choice) => choice.text.trim() !== '' || choice.image));
// // //   }, [formik.values, choices]);

// // //   const backgroundColors = [
// // //     'rgb(45, 112, 174)',
// // //     'rgb(45, 157, 166)',
// // //     'rgb(239, 169, 41)',
// // //     'rgb(213, 84, 109)',
// // //     'rgb(154, 66, 146)'
// // //   ];

// // //   const addChoice = () => {
// // //     if (choices.length < maxChoices) {
// // //       setChoices([...choices, { text: '', image: '' }]);
// // //       formik.setValues({
// // //         ...formik.values,
// // //         [`choice_${choices.length}_text`]: '',
// // //         [`choice_${choices.length}_image`]: ''
// // //       });
// // //     }
// // //   };

// // //   const handleDeleteChoice = (index) => {
// // //     if (choices.length > 2) {
// // //       const newChoices = choices.filter((_, i) => i !== index);
// // //       setChoices(newChoices);
// // //       const updatedValues = { ...formik.values };
// // //       delete updatedValues[`choice_${index}_text`];
// // //       delete updatedValues[`choice_${index}_image`];
// // //       formik.setValues(updatedValues);
// // //     }
// // //   };

// // //   const handleImageCrop = (croppedImage) => {
// // //     if (currentChoiceIndex !== null) {
// // //       const newChoices = [...choices];
// // //       newChoices[currentChoiceIndex].image = croppedImage;
// // //       setChoices(newChoices);
// // //       formik.setFieldValue(`choice_${currentChoiceIndex}_image`, croppedImage);
// // //     }
// // //   };

// // //   const handleTextChange = (index, text) => {
// // //     const newChoices = [...choices];
// // //     newChoices[index].text = text;
// // //     setChoices(newChoices);
// // //     formik.setFieldValue(`choice_${index}_text`, text);
// // //   };

// // //   const handleSelection = (value) => {
// // //     setSelectedType(value);
// // //     setCorrectChoices([]);
// // //   };

// // //   const handleMarkAsCorrect = (index) => {
// // //     const choiceText = formik.values[`choice_${index}_text`]?.trim() || '';
// // //     const choiceImage = formik.values[`choice_${index}_image`];
// // //     if (choiceText || choiceImage) {
// // //       setLoading(true);
// // //       if (selectedType === 'single') {
// // //         setCorrectChoices([index]);
// // //       } else {
// // //         setCorrectChoices(prev =>
// // //           prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
// // //         );
// // //       }
// // //       setLoading(false);
// // //     } else {
// // //       alert("Please enter text or image in option.");
// // //     }
// // //   };

// // //   const handleSubmit = () => {
// // //     console.log('Question:', formik.values.question);
// // //     const correctAnswerText = correctChoices
// // //       .map((index) => ({
// // //         text: formik.values[`choice_${index}_text`],
// // //         image: formik.values[`choice_${index}_image`]
// // //       }))
// // //       .filter((value) => value.text || value.image);
// // //     console.log('Correct Answer Index(es):', correctAnswerText);
// // //     for (let i = 0; i < choices.length; i++) {
// // //       console.log(`Option ${i + 1}:`, formik.values[`choice_${i}_text`], formik.values[`choice_${i}_image`]);
// // //     }
// // //   };

// // //   const isButtonDisabled = !(isQuestionEntered && isOptionEntered);

// // //   return (
// // //     <div style={{ padding: "20px", color: "#FFF" }}>
// // //       <CustomInputIcon
// // //         name="question"
// // //         custPlaceholder="Type question here"
// // //         inputType="text"
// // //         value={formik.values.question}
// // //         onChange={formik.handleChange}
// // //       />
// // //       <Grid container sx={{ paddingLeft: "10px", paddingRight: "5px" }}>
// // //         {choices.map((choice, index) => {
// // //           const { text, image } = choice;
// // //           const hasContent = text.trim() || image;

// // //           const tooltipStyles = {
// // //             color: '#FFF',
// // //             padding: '8px',
// // //           };

// // //           const tooltipTitle = hasContent ? "Mark as a correct answer" : "Please enter text or image in option.";

// // //           return (
// // //             <Grid item xs={12} lg={choices.length === 5 ? 2.4 : 3 && choices.length === 4 ? 2.84 : 3 &&
// // //               choices.length === 3 ? 3.8 : 3 && choices.length === 2 ? 5.7 : 3} key={index} sx={{ padding: 1 }}>
// // //               <Card style={{ backgroundColor: backgroundColors[index], borderRadius: "10px", height: 'auto', width: '100%' }}>
// // //                 <CardContent style={{ paddingTop: "0px", position: 'relative', display: 'flex', flexDirection: 'column', paddingBottom: "15px" }}>
// // //                   <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
// // //                     <Grid item>
// // //                       {choices.length > 2 && (
// // //                         <BootstrapTooltip title="Delete" placement="top">
// // //                           <IconButton onClick={() => handleDeleteChoice(index)} sx={{ p: 0 }}>
// // //                             <DeleteIcon sx={{ fontSize: 16, color: 'white' }} />
// // //                           </IconButton>
// // //                         </BootstrapTooltip>
// // //                       )}
// // //                     </Grid>
// // //                     <Grid item>
// // //                       <BootstrapTooltip title="Add Image" placement="top">
// // //                         <IconButton onClick={() => handleImageUploadOpen(index)} sx={{ p: 0 }}>
// // //                           <FaImage style={{ fontSize: '16px', color: 'white' }} />
// // //                         </IconButton>
// // //                       </BootstrapTooltip>
// // //                     </Grid>
// // //                     <Grid item>
// // //                       <BootstrapTooltip
// // //                         title={tooltipTitle}
// // //                         placement="top"
// // //                         bgColor={hasContent ? '#2B2B2B' : '#BF5B5B'}
// // //                       >
// // //                         <IconButton
// // //                           onClick={() => handleMarkAsCorrect(index)}
// // //                           sx={{
// // //                             p: 0,
// // //                             pointerEvents: hasContent ? 'auto' : 'none',
// // //                             '&:hover': {
// // //                               backgroundColor: hasContent ? '#2B2B2B' : 'transparent'
// // //                             }
// // //                           }}
// // //                         >
// // //                           <IoCheckmark
// // //                             style={{
// // //                               fontSize: '16px',
// // //                               color: correctChoices.includes(index) ? '#00FF00' : 'white',
// // //                             }}
// // //                           />
// // //                         </IconButton>
// // //                       </BootstrapTooltip>
// // //                     </Grid>
// // //                   </Grid>
// // //                   <CustomChoiceInput
// // //                     name={`choice_${index}_text`}
// // //                     inputType="text"
// // //                     textColor="white"
// // //                     custPlaceholder="Type answer option here"
// // //                     value={text}
// // //                     onChange={(e) => handleTextChange(index, e.target.value)}
// // //                     imageValue={image}
// // //                     onImageInsert={() => handleImageUploadOpen(index)}
// // //                   />
// // //                 </CardContent>
// // //               </Card>
// // //             </Grid>
// // //           );
// // //         })}
// // //         {choices.length < maxChoices && (
// // //           <Grid item xs={12} lg={choices.length === 1 ? 5.7 : 3 && choices.length === 2 ? 3.8 : 3 && choices.length === 3 ? 2.84 : 3 &&
// // //             choices.length === 4 ? 2.4 : 3} sx={{ padding: 1 }}>
// // //             <Card style={{ backgroundColor: "transparent", borderRadius: "10px", height: "200px", width: "100%", border: "1px dashed grey" }}>
// // //               <CardContent style={{ paddingTop: "0px", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "15px" }}>
// // //                 <BootstrapTooltip title="Add" placement="top">
// // //                   <IconButton onClick={addChoice} sx={{ p: 0 }}>
// // //                     <AddIcon sx={{ fontSize: 20, color: '#FFF' }} />
// // //                   </IconButton>
// // //                 </BootstrapTooltip>
// // //               </CardContent>
// // //             </Card>
// // //           </Grid>
// // //         )}
// // //       </Grid>
// // //       {/* <Grid item xs={12} sx={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
// // //         <ButtonGroup disableElevation>
// // //           <CustomButton onClick={() => handleSelection('single')} className={selectedType === 'single' ? 'selected' : ''}>Single</CustomButton>
// // //           <CustomButton onClick={() => handleSelection('multiple')} className={selectedType === 'multiple' ? 'selected' : ''}>Multiple</CustomButton>
// // //         </ButtonGroup>
// // //       </Grid>
// // //       <Grid item xs={12} sx={{ marginTop: '15px', display: 'flex', justifyContent: 'center' }}>
// // //         <Spinner loading={loading} disabled={isButtonDisabled} onClick={handleSubmit} />
// // //       </Grid>
// // //       <ImageUpload open={openImageUpload} onClose={handleImageUploadClose} onCrop={handleImageCrop} /> */}

// // //       <Grid container sx={{ paddingLeft: "10px", paddingRight: "5px" }}>
// // //         <Grid item xs={12} lg={3}>
// // //           <Button
// // //             onClick={addChoice}
// // //             disabled={choices.length >= maxChoices}
// // //             sx={{ height: "56px", borderRadius: "10px" }}
// // //           >
// // //             <AddIcon />
// // //           </Button>
// // //         </Grid>
// // //         <Grid item xs={12} lg={9}>
// // //           <ButtonGroup
// // //             orientation={isXs ? 'vertical' : 'horizontal'}
// // //             variant="contained"
// // //             color="primary"
// // //             aria-label="text button group"
// // //             fullWidth
// // //           >
// // //             <CustomButton
// // //               className={selectedType === 'single' ? 'selected' : ''}
// // //               onClick={() => handleSelection('single')}
// // //             >
// // //               Single Correct Answer
// // //             </CustomButton>
// // //             <CustomButton
// // //               className={selectedType === 'multiple' ? 'selected' : ''}
// // //               onClick={() => handleSelection('multiple')}
// // //             >
// // //               Multiple Correct Answers
// // //             </CustomButton>
// // //           </ButtonGroup>
// // //         </Grid>
// // //         <Grid item xs={12}>
// // //           {loading ? (
// // //             <Spinner />
// // //           ) : (
// // //             <Button
// // //               onClick={handleSubmit}
// // //               disabled={isButtonDisabled}
// // //               sx={{ height: '56px', borderRadius: '10px' }}
// // //             >
// // //               Submit
// // //             </Button>
// // //           )}
// // //         </Grid>
// // //       </Grid>
// // //       <ImageUpload
// // //         open={openImageUpload}
// // //         onClose={handleImageUploadClose}
// // //         onCrop={handleImageCrop}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default MultipleChoice;





// // import React, { useState, useEffect } from 'react';
// // import CustomInputIcon from "../../../../Components/CustomInput/CustomInputIcon";
// // import CustomChoiceInput from '../../../../Components/CustomInput/CustomChoiceInput';
// // import { Grid, Card, CardContent, IconButton, Tooltip, styled, tooltipClasses, useMediaQuery, ButtonGroup, Button } from '@mui/material';
// // import AddIcon from '@mui/icons-material/Add';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import { useFormik } from 'formik';
// // import { IoCheckmark } from "react-icons/io5";
// // import { FaImage } from "react-icons/fa";
// // import Spinner from './Spinner'; // Import the Spinner component
// // import "../../../../Components/CustomInput/CustomChoiceInput.css";
// // import ImageUpload from './Modals/ImageUpload';

// // const BootstrapTooltip = styled(({ className, bgColor, ...props }) => (
// //   <Tooltip {...props} arrow classes={{ popper: className }} />
// // ))(({ theme, bgColor }) => ({
// //   [`& .${tooltipClasses.arrow}`]: {
// //     color: bgColor || theme.palette.common.black,
// //   },
// //   [`& .${tooltipClasses.tooltip}`]: {
// //     backgroundColor: bgColor || theme.palette.common.black,
// //   },
// // }));

// // const CustomButton = styled(Button)(({ theme }) => ({
// //   height: '24px',
// //   fontSize: '0.75rem',
// //   fontWeight: 600,
// //   padding: '0 12px',
// //   backgroundColor: 'transparent',
// //   '&:hover': {
// //     backgroundColor: theme.palette.mode === 'light' ? '#E0E0E0' : '#333',
// //   },
// //   '&:active': {
// //     backgroundColor: theme.palette.mode === 'light' ? '#BDBDBD' : '#555',
// //   },
// //   '&.selected': {
// //     backgroundColor: '#E0E0E0',
// //     color: '#3C3C3C',
// //   },
// // }));

// // const MultipleChoice = ({ textColor }) => {
// //   const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
// //   const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

// //   const [choices, setChoices] = useState([{ text: '', image: '' }, { text: '', image: '' }, { text: '', image: '' }, { text: '', image: '' }]);
// //   const [correctChoices, setCorrectChoices] = useState([]);
// //   const [selectedType, setSelectedType] = useState('single');
// //   const [isQuestionEntered, setIsQuestionEntered] = useState(false);
// //   const [isOptionEntered, setIsOptionEntered] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const maxChoices = 5;
// //   const [openImageUpload, setOpenImageUpload] = useState(false);
// //   const [currentChoiceIndex, setCurrentChoiceIndex] = useState(null);

// //   const handleImageUploadOpen = (index) => {
// //     setCurrentChoiceIndex(index);
// //     setOpenImageUpload(true);
// //   };

// //   const handleImageUploadClose = () => {
// //     setOpenImageUpload(false);
// //   };

// //   const formik = useFormik({
// //     initialValues: {
// //       question: '',
// //       ...choices.reduce((acc, _, index) => ({ ...acc, [`choice_${index}_text`]: '', [`choice_${index}_image`]: '' }), {})
// //     },
// //     onSubmit: (values) => {
// //       console.log('Form values:', values);
// //     },
// //   });

// //   useEffect(() => {
// //     setIsQuestionEntered(formik.values.question.trim() !== '');
// //     setIsOptionEntered(choices.some((choice, index) => formik.values[`choice_${index}_text`].trim() !== ''));
// //   }, [formik.values, choices]);

// //   const backgroundColors = [
// //     'rgb(45, 112, 174)',
// //     'rgb(45, 157, 166)',
// //     'rgb(239, 169, 41)',
// //     'rgb(213, 84, 109)',
// //     'rgb(154, 66, 146)'
// //   ];

// //   const addChoice = () => {
// //     if (choices.length < maxChoices) {
// //       setChoices([...choices, { text: '', image: '' }]);
// //       formik.setValues({
// //         ...formik.values,
// //         [`choice_${choices.length}_text`]: '',
// //         [`choice_${choices.length}_image`]: ''
// //       });
// //     }
// //   };

// //   const handleDeleteChoice = (index) => {
// //     if (choices.length > 2) {
// //       const newChoices = choices.filter((_, i) => i !== index);
// //       setChoices(newChoices);
// //       const updatedValues = { ...formik.values };
// //       for (let i = index; i < newChoices.length; i++) {
// //         delete updatedValues[`choice_${i}_text`];
// //         delete updatedValues[`choice_${i}_image`];
// //       }
// //       formik.setValues(updatedValues);
// //     }
// //   };

// //   const handleImageCrop = (croppedImage) => {
// //     if (currentChoiceIndex !== null) {
// //       const newChoices = [...choices];
// //       newChoices[currentChoiceIndex] = { ...newChoices[currentChoiceIndex], image: croppedImage };
// //       setChoices(newChoices);
// //       formik.setFieldValue(`choice_${currentChoiceIndex}_image`, croppedImage);
// //     }
// //   };

// //   const handleTextChange = (index, text) => {
// //     const newChoices = [...choices];
// //     newChoices[index] = { ...newChoices[index], text };
// //     setChoices(newChoices);
// //     formik.setFieldValue(`choice_${index}_text`, text);
// //   };

// //   const handleSelection = (value) => {
// //     setSelectedType(value);
// //     setCorrectChoices([]);
// //   };

// //   const handleMarkAsCorrect = (index) => {
// //     const choiceText = formik.values[`choice_${index}_text`]?.trim() || '';
// //     const choiceImage = formik.values[`choice_${index}_image`];
// //     if (choiceText || choiceImage) {
// //       setLoading(true);
// //       if (selectedType === 'single') {
// //         setCorrectChoices([index]);
// //       } else {
// //         setCorrectChoices(prev =>
// //           prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
// //         );
// //       }
// //       setLoading(false);
// //     } else {
// //       alert("Please enter text or image in option.");
// //     }
// //   };

// //   const handleSubmit = () => {
// //     console.log('Question:', formik.values.question);
// //     const correctAnswerText = correctChoices
// //       .map((index) => ({
// //         text: formik.values[`choice_${index}_text`],
// //         image: formik.values[`choice_${index}_image`]
// //       }))
// //       .filter((value) => value.text || value.image);
// //     console.log('Correct Answer Index(es):', correctAnswerText);
// //     for (let i = 0; i < choices.length; i++) {
// //       console.log(`Option ${i + 1}:`, formik.values[`choice_${i}_text`], formik.values[`choice_${i}_image`]);
// //     }
// //   };

// //   const isButtonDisabled = !(isQuestionEntered && isOptionEntered);

// //   return (
// //     <div style={{ padding: "20px", color: "#FFF" }}>
// //       <CustomInputIcon
// //         name="question"
// //         custPlaceholder="Type question here"
// //         inputType="text"
// //         value={formik.values.question}
// //         onChange={formik.handleChange}
// //       />
// //       <Grid container sx={{ paddingLeft: "10px", paddingRight: "5px" }}>
// //         {choices.map((choice, index) => {
// //           const choiceValue = formik.values[`choice_${index}_text`]?.trim();
// //           const hasContent = !!choiceValue;

// //           const tooltipStyles = {
// //             color: '#FFF',
// //             padding: '8px',
// //           };

// //           const tooltipTitle = hasContent ? "Mark as a correct answer" : "Please enter text or image in option.";

// //           return (
// //             <Grid item xs={12} lg={choices.length === 5 ? 2.4 : 3 && choices.length === 4 ? 2.84 : 3 &&
// //               choices.length === 3 ? 3.8 : 3 && choices.length === 2 ? 5.7 : 3} key={index} sx={{ padding: 1 }}>
// //               <Card style={{ backgroundColor: backgroundColors[index], borderRadius: "10px", height: 'auto', width: '100%' }}>
// //                 <CardContent style={{ paddingTop: "0px", position: 'relative', display: 'flex', flexDirection: 'column', paddingBottom: "15px" }}>
// //                   <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
// //                     <Grid item>
// //                       {choices.length > 2 && (
// //                         <BootstrapTooltip title="Delete" placement="top">
// //                           <IconButton onClick={() => handleDeleteChoice(index)} sx={{ p: 0 }}>
// //                             <DeleteIcon className="quizz-inputicon1" />
// //                           </IconButton>
// //                         </BootstrapTooltip>
// //                       )}
// //                       <BootstrapTooltip title="Add image" placement="top">
// //                         <IconButton onClick={() => handleImageUploadOpen(index)}>
// //                           <FaImage className="quizz-inputicon1" />
// //                         </IconButton>
// //                       </BootstrapTooltip>
// //                     </Grid>
// //                     <Grid item>
// //                       <BootstrapTooltip title={<span style={tooltipStyles}>{tooltipTitle}</span>} placement="top" bgColor={hasContent ? '#4CAF50' : '#F44336'}>
// //                         <span>
// //                           <IconButton
// //                             onClick={() => handleMarkAsCorrect(index)}
// //                             disabled={isButtonDisabled}
// //                             sx={{
// //                               color: correctChoices.includes(index) ? '#FFF' : '#000',
// //                               position: 'relative',
// //                               overflow: 'hidden'
// //                             }}
// //                           >
// //                             <IoCheckmark className="quizz-inputicon2" style={{ backgroundColor: correctChoices.includes(index) ? 'green' : 'transparent' }} />
// //                           </IconButton>
// //                         </span>
// //                       </BootstrapTooltip>
// //                     </Grid>
// //                   </Grid>
// //                   <CustomChoiceInput
// //                     name={`choice_${index}`}
// //                     custPlaceholder="Type answer option here"
// //                     inputType="text"
// //                     InputProps={{ style: { '--card-bg-color': backgroundColors[index], color: "#FFF", maxWidth: '100%' } }}
// //                     value={choice.text}
// //                     onChange={(e) => handleTextChange(index, e.target.value)}
// //                     imageValue={choice.image}
// //                     onImageInsert={() => handleImageUploadOpen(index)}
// //                   />
// //                 </CardContent>
// //               </Card>
// //             </Grid>
// //           );
// //         })}
// //         <Grid item xs={12} lg={choices.length === 5 ? 2.4 : 3 && choices.length === 4 ? 2.84 : 3 &&
// //           choices.length === 3 ? 3.8 : 3 && choices.length === 2 ? 5.7 : 3} key="add">
// //           <Card style={{ backgroundColor: '#F2F2F2', borderRadius: "10px", height: 'auto', width: '100%' }}>
// //             <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '10px' }}>
// //               <IconButton onClick={addChoice} sx={{ p: 0 }}>
// //                 <AddIcon className="quizz-inputicon1" />
// //               </IconButton>
// //             </CardContent>
// //           </Card>
// //         </Grid>
// //       </Grid>
// //       <ButtonGroup variant="contained" aria-label="text button group">
// //         <CustomButton
// //           onClick={() => handleSelection('single')}
// //           className={selectedType === 'single' ? 'selected' : ''}
// //         >
// //           Single
// //         </CustomButton>
// //         <CustomButton
// //           onClick={() => handleSelection('multiple')}
// //           className={selectedType === 'multiple' ? 'selected' : ''}
// //         >
// //           Multiple
// //         </CustomButton>
// //       </ButtonGroup>
// //       <Button onClick={handleSubmit} disabled={loading} variant="contained" color="primary">
// //         {loading ? <Spinner /> : 'Submit'}
// //       </Button>
// //       <ImageUpload open={openImageUpload} onClose={handleImageUploadClose} onCrop={handleImageCrop} />
// //     </div>
// //   );
// // };

// // export default MultipleChoice;




// // correct code-------------------------------------------

// import React, { useState, useEffect } from 'react';
// import CustomInputIcon from "../../../../Components/CustomInput/CustomInputIcon";
// import CustomChoiceInput from '../../../../Components/CustomInput/CustomChoiceInput';
// import { Grid, Card, CardContent, IconButton, Tooltip, styled, tooltipClasses, useMediaQuery, ButtonGroup, Button } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useFormik } from 'formik';
// import { IoCheckmark } from "react-icons/io5";
// import { FaImage } from "react-icons/fa";
// import Spinner from './Spinner'; // Import the Spinner component
// import "../../../../Components/CustomInput/CustomChoiceInput.css";
// import ImageUpload from './Modals/ImageUpload';

// const BootstrapTooltip = styled(({ className, bgColor, ...props }) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme, bgColor }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: bgColor || theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: bgColor || theme.palette.common.black,
//   },
// }));

// const CustomButton = styled(Button)(({ theme }) => ({
//   height: '24px',
//   fontSize: '0.75rem',
//   fontWeight: 600,
//   padding: '0 12px',
//   backgroundColor: 'transparent',
//   '&:hover': {
//     backgroundColor: theme.palette.mode === 'light' ? '#E0E0E0' : '#333',
//   },
//   '&:active': {
//     backgroundColor: theme.palette.mode === 'light' ? '#BDBDBD' : '#555',
//   },
//   '&.selected': {
//     backgroundColor: '#E0E0E0',
//     color: '#3C3C3C',
//   },
// }));

// const MultipleChoice = ({ textColor }) => {
//   const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
//   const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

//   // const [choices, setChoices] = useState(['', '', '', '']);
//   const [choices, setChoices] = useState([{ text: '', image: '' }, { text: '', image: '' }, { text: '', image: '' }, { text: '', image: '' }]);
//   // Other state variables...

//   const [correctChoices, setCorrectChoices] = useState([]);
//   const [selectedType, setSelectedType] = useState('single');
//   const [isQuestionEntered, setIsQuestionEntered] = useState(false);
//   const [isOptionEntered, setIsOptionEntered] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const maxChoices = 5;
//   const [openImageUpload, setOpenImageUpload] = useState(false);
//   const [currentChoiceIndex, setCurrentChoiceIndex] = useState(null);
//   const [questionImage, setQuestionImage] = useState('');
//   const [updateAudioURL, setUpdateAudioUrl] = useState("");
//   const [updateVideoURL, setUpdateVideoURL] = useState("")

//   const handleImageUploadOpen = (index) => {
//     // setCurrentChoiceIndex(index);
//     // setOpenImageUpload(true);
//     updateChoiceImage(index, '');
//     setCurrentChoiceIndex(index);
//     setOpenImageUpload(true);
//   };

//   const handleImageUploadClose = () => {
//     setOpenImageUpload(false);
//   };


//   const formik = useFormik({
//     // initialValues: {
//     //   question: '',
//     //   ...choices.reduce((acc, _, index) => ({ ...acc, [`choice_${index}`]: '' }), {})
//     // },
//     // onSubmit: (values) => {
//     //   console.log('Form values:', values);
//     // },
//     initialValues: {
//       question: '',
//       questionImage: '',
//       ...choices.reduce((acc, _, index) => ({ ...acc, [`choice_${index}_text`]: '', [`choice_${index}_image`]: '' }), {})
//     },
//     onSubmit: (values) => {
//       console.log('Form values:', values);
//     },
//   });

//   // useEffect(() => {
//   //   setIsQuestionEntered(formik.values.question.trim() !== '');
//   //   setIsOptionEntered(choices.some((_, index) => formik.values[`choice_${index}`].trim() !== ''));
//   // }, [formik.values, choices]);

//   useEffect(() => {
//     // setIsQuestionEntered(formik.values.question.trim() !== '');
//     setIsQuestionEntered(formik.values.question.trim() !== '' || formik.values.questionImage.trim() !== '');
//     setIsOptionEntered(choices.some((choice, index) => formik.values[`choice_${index}_text`].trim() !== ''));
//   }, [formik.values, choices]);

//   const backgroundColors = [
//     'rgb(45, 112, 174)',
//     'rgb(45, 157, 166)',
//     'rgb(239, 169, 41)',
//     'rgb(213, 84, 109)',
//     'rgb(154, 66, 146)'
//   ];

//   const addChoice = (index) => {
//     // if (choices.length < maxChoices) {
//     //   setChoices([...choices, '']);
//     //   formik.setValues({
//     //     ...formik.values,
//     //     [`choice_${choices.length}`]: ''
//     //   });
//     // }

//     // if (choices.length > 2) {
//     //   const newChoices = choices.filter((_, i) => i !== index);
//     //   setChoices(newChoices);
//     //   const updatedValues = { ...formik.values };
//     //   delete updatedValues[`choice_${index}_text`];
//     //   delete updatedValues[`choice_${index}_image`];
//     //   formik.setValues(updatedValues);
//     // }
//     if (choices.length < maxChoices) {
//       const newChoices = [...choices, { text: '', image: '' }];
//       setChoices(newChoices);
//       const newChoiceIndex = newChoices.length - 1;
//       formik.setValues({
//         ...formik.values,
//         [`choice_${newChoiceIndex}_text`]: '',
//         [`choice_${newChoiceIndex}_image`]: ''
//       });
//     }
//   };

//   const handleChoiceChange = (index, newText) => {
//     const updatedChoices = choices.map((choice, i) =>
//       i === index ? { ...choice, text: newText } : choice
//     );
//     setChoices(updatedChoices);
//   };

//   const updateChoiceImage = (index, newImage) => {
//     const updatedChoices = choices.map((choice, i) =>
//       i === index ? { ...choice, image: newImage } : choice
//     );
//     setChoices(updatedChoices);
//   };


//   const handleDeleteChoice = (index) => {
//     // if (choices.length > 2) {
//     //   const newChoices = choices.filter((_, i) => i !== index);
//     //   setChoices(newChoices);
//     //   const updatedValues = { ...formik.values };
//     //   delete updatedValues[`choice_${index}`];
//     //   formik.setValues(updatedValues);
//     // }
//     // if (choices.length > 2) {
//     //   const newChoices = choices.filter((_, i) => i !== index);
//     //   setChoices(newChoices);
//     //   const updatedValues = { ...formik.values };
//     //   delete updatedValues[`choice_${index}_text`];
//     //   delete updatedValues[`choice_${index}_image`];
//     //   formik.setValues(updatedValues);
//     // }
//     if (choices.length > 2) {
//       const newChoices = choices.filter((_, i) => i !== index);
//       setChoices(newChoices);
//       const updatedValues = { ...formik.values };
//       for (let i = index; i < newChoices.length; i++) {
//         delete updatedValues[`choice_${i}_text`];
//         delete updatedValues[`choice_${i}_image`];
//         updatedValues[`choice_${i}_text`] = formik.values[`choice_${i + 1}_text`];
//         updatedValues[`choice_${i}_image`] = formik.values[`choice_${i + 1}_image`];
//       }
//       delete updatedValues[`choice_${newChoices.length}_text`];
//       delete updatedValues[`choice_${newChoices.length}_image`];
//       formik.setValues(updatedValues);
//     }
//   };


//   // const [croppedImageUrl, setCroppedImageUrl] = useState("")
//   // console.log(croppedImageUrl, "croppedImageUrl")


//   const handleImageCrop = (croppedImage) => {
//     // if (currentChoiceIndex !== null) {
//     //   const newChoices = [...choices];
//     //   newChoices[currentChoiceIndex] = croppedImage;
//     //   setChoices(newChoices);
//     //   formik.setFieldValue(`choice_${currentChoiceIndex}`, croppedImage);

//     // }
//     // setCroppedImageUrl(croppedImage)
//     if (currentChoiceIndex !== null) {
//       const newChoices = [...choices];
//       newChoices[currentChoiceIndex].image = croppedImage;
//       setChoices(newChoices);
//       console.log(currentChoiceIndex, "vallamuni")
//       formik.setFieldValue(`choice_${currentChoiceIndex}_image`, croppedImage);
//     }
//     // setCroppedImageUrl("")
//   };

//   const handleTextChange = (index, text) => {
//     const newChoices = [...choices];
//     newChoices[index].text = text;
//     setChoices(newChoices);
//     formik.setFieldValue(`choice_${index}_text`, text);
//   };

//   // const handleImageInsert = (index) => {
//   //   const newChoices = [...choices];
//   //   newChoices[index] += '[image-url]';
//   //   setChoices(newChoices);
//   // };

//   const handleSelection = (value) => {
//     setSelectedType(value);
//     setCorrectChoices([]);
//   };

//   // const handleMarkAsCorrect = (index) => {
//   //   // const choiceText = formik.values[`choice_${index}`]?.trim() || '';
//   //   // if (choiceText) {
//   //   //   setLoading(true);
//   //   //   if (selectedType === 'single') {
//   //   //     setCorrectChoices([index]);
//   //   //   } else {
//   //   //     setCorrectChoices(prev =>
//   //   //       prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
//   //   //     );
//   //   //   }
//   //   //   setLoading(false);
//   //   // } else {
//   //   //   alert("Please enter text or image in option.");
//   //   // }

//   //   const choiceText = formik.values[`choice_${index}_text`]?.trim() || '';
//   //   const choiceImage = formik.values[`choice_${index}_image`];

//   //   if (choiceText || choiceImage) {
//   //     setLoading(true);
//   //     if (selectedType === 'single') {
//   //       setCorrectChoices([index]);
//   //     } else {
//   //       setCorrectChoices(prev =>
//   //         prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
//   //       );
//   //     }
//   //     setLoading(false);
//   //   } else {
//   //     alert("Please enter text or image in option.");
//   //   }
//   // };

//   const handleMarkAsCorrect = (index) => {
//     const choiceText = formik.values[`choice_${index}_text`]?.trim() || '';
//     const choiceImage = formik.values[`choice_${index}_image`];

//     if (choiceText || choiceImage) {
//       setLoading(true);
//       if (selectedType === 'single') {
//         setCorrectChoices([index]);
//       } else {
//         setCorrectChoices(prev =>
//           prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
//         );
//       }
//       setLoading(false);
//     } else {
//       alert("Please enter text or image in option.");
//     }
//   };

//   const isButtonDisabled1 = (index) => {
//     const choiceText = formik.values[`choice_${index}_text`]?.trim();
//     const choiceImage = formik.values[`choice_${index}_image`];
//     return !(choiceText || choiceImage);
//   };

//   const handleSubmit = (text) => {
//     // console.log('Question:', formik.values.question);
//     // const correctAnswerText = correctChoices
//     //   .map((index) => formik.values[`choice_${index}`])
//     //   .filter((value) => value !== undefined);
//     // console.log('Correct Answer Index(es):', correctAnswerText);
//     // for (let i = 0; i < choices.length; i++) {
//     //   console.log(`Option ${i + 1}:`, formik.values[`choice_${i}`]);
//     // }
//     // console.log('Question:', formik.values.question);
//     console.log('Question:', formik.values.question, questionImage);
//     console.log(updateAudioURL, "kkkkkkkkkkkkkkkkkk")
//     console.log(updateVideoURL, "?/////////////////////")
//     // console.log('Question Image:', questionImage); 
//     const correctAnswerText = correctChoices
//       .map((index) => ({
//         text: formik.values[`choice_${index}_text`],
//         image: formik.values[`choice_${index}_image`]
//       }))
//       .filter((value) => value.text || value.image);
//     console.log('Correct Answer Index(es):', correctAnswerText);
//     for (let i = 0; i < choices.length; i++) {
//       console.log(`Option ${i + 1}:`, formik.values[`choice_${i}_text`], formik.values[`choice_${i}_image`]);
//     }
//   };

//   const isButtonDisabled = !(isQuestionEntered && isOptionEntered);

//   return (
//     <div style={{ padding: "20px", color: "#FFF" }}>
//       <CustomInputIcon
//         name="question"
//         custPlaceholder="Type question here"
//         inputType="text"
//         value={formik.values.question}
//         setUpdateVideoURL={setUpdateVideoURL}
//         updateVideoURL={updateVideoURL}
//         setUpdateAudioUrl={setUpdateAudioUrl}
//         updateAudioURL={updateAudioURL}
//         // onChange={formik.handleChange}
//         onChange={(e) => formik.setFieldValue('question', e.target.value)}
//         // imgValue={formik.values.questionImage}
//         // onImageUpload={(image) => formik.setFieldValue('questionImage', image)}
//         questionImage={questionImage}
//         setQuestionImage={setQuestionImage}
//       />
//       <Grid container sx={{ paddingLeft: "10px", paddingRight: "5px" }}>
//         {choices.map((choice, index) => {
//           // const choiceValue = formik.values[`choice_${index}`]?.trim();
//           // const { text, image } = choices;
//           const choiceValue = formik.values[`choice_${index}_text`]?.trim();
//           // const hasContent = !!choiceValue;
//           const choiceImage = formik.values[`choice_${index}_image`];
//           const hasContent = !!choiceValue || !!choiceImage;

//           const tooltipStyles = {
//             color: '#FFF',
//             padding: '8px',
//           };

//           const tooltipTitle = hasContent ? "Mark as a correct answer" : "Please enter text or image in option.";

//           return (
//             <Grid item xs={12} lg={choices.length === 5 ? 2.4 : 3 && choices.length === 4 ? 2.84 : 3 &&
//               choices.length === 3 ? 3.8 : 3 && choices.length === 2 ? 5.7 : 3} key={index} sx={{ padding: 1 }}>
//               <Card style={{ backgroundColor: backgroundColors[index], borderRadius: "10px", height: 'auto', width: '100%' }}>
//                 <CardContent style={{ paddingTop: "0px", position: 'relative', display: 'flex', flexDirection: 'column', paddingBottom: "15px" }}>
//                   <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
//                     <Grid item>
//                       {choices.length > 2 && (
//                         <BootstrapTooltip title="Delete" placement="top">
//                           <IconButton onClick={() => handleDeleteChoice(index)} sx={{ p: 0 }}>
//                             <DeleteIcon className="quizz-inputicon1" />
//                           </IconButton>
//                         </BootstrapTooltip>
//                       )}
//                       <BootstrapTooltip title="Add image" placement="top">
//                         <IconButton onClick={() => handleImageUploadOpen(index)}>
//                           <FaImage className="quizz-inputicon1" />
//                         </IconButton>
//                       </BootstrapTooltip>
//                     </Grid>
//                     <Grid item>
//                       <BootstrapTooltip title={<span style={tooltipStyles}>{tooltipTitle}</span>} placement="top" bgColor={hasContent ? '#4CAF50' : '#F44336'}>
//                         <span>
//                           <IconButton
//                             onClick={() => handleMarkAsCorrect(index)}
//                             // disabled={isButtonDisabled}
//                             disabled={isButtonDisabled1(index)}

//                             // disabled={!hasContent}


//                             // disabled={isButtonDisabled || !hasContent}
//                             sx={{
//                               color: correctChoices.includes(index) ? '#FFF' : '#000',
//                               position: 'relative',
//                               overflow: 'hidden'
//                             }}
//                           >
//                             <IoCheckmark className="quizz-inputicon2" style={{ backgroundColor: correctChoices.includes(index) ? 'green' : 'transparent' }} />
//                           </IconButton>
//                         </span>
//                       </BootstrapTooltip>
//                     </Grid>
//                   </Grid>
//                   <CustomChoiceInput
//                     name={`choice_${index}`}
//                     custPlaceholder="Type answer option here"
//                     inputType="text"
//                     InputProps={{ style: { '--card-bg-color': backgroundColors[index], color: "#FFF", maxWidth: '100%' } }}

//                     value={choice.text}
//                     onChange={(e) => handleTextChange(index, e.target.value)}
//                     imageValue={choice.image}
//                     onImageInsert={() => handleImageUploadOpen(index)}
//                     choices={choices}

//                     updateChoiceImage={updateChoiceImage}
//                     handleImageUploadOpen={() => handleImageUploadOpen(index)}
//                     handleImageUploadClose={handleImageUploadClose}
//                     handleImageCrop={handleImageCrop}
//                     currentChoiceIndex={index}


//                   />
//                 </CardContent>
//               </Card>

//             </Grid>


//           );
//         })}
//         <Grid item xs={12} lg={1}>
//           <Button
//             onClick={addChoice}
//             disabled={choices.length >= maxChoices}
//             sx={{ height: "56px", borderRadius: "10px" }}
//           >
//             <AddIcon />
//           </Button>
//         </Grid>

//         <Grid container sx={{ paddingLeft: "10px", paddingRight: "5px" }}>

//         </Grid>
//         <Grid item xs={12} lg={9}>
//           <ButtonGroup
//             orientation={isXs ? 'vertical' : 'horizontal'}
//             variant="contained"
//             color="primary"
//             aria-label="text button group"
//             fullWidth
//           >
//             <CustomButton
//               className={selectedType === 'single' ? 'selected' : ''}
//               onClick={() => handleSelection('single')}
//             >
//               Single Correct Answer
//             </CustomButton>
//             <CustomButton
//               className={selectedType === 'multiple' ? 'selected' : ''}
//               onClick={() => handleSelection('multiple')}
//             >
//               Multiple Correct Answers
//             </CustomButton>
//           </ButtonGroup>
//         </Grid>
//         <Grid item xs={12}>
//           {loading ? (
//             <Spinner />
//           ) : (
//             <Button
//               onClick={handleSubmit}
//               disabled={isButtonDisabled}
//               sx={{ height: '56px', borderRadius: '10px' }}
//             >
//               Submit
//             </Button>
//           )}
//         </Grid>
//       </Grid>
//       {/* <ImageUpload
//         open={openImageUpload}
//         onClose={handleImageUploadClose}
//         onCrop={handleImageCrop}
//       /> */}
//       <ImageUpload
//         open={openImageUpload}
//         onClose={handleImageUploadClose}
//         onCrop={handleImageCrop} // Handle the cropped image
//         initialImage={choices[currentChoiceIndex]?.image || ''} // Pass current image if available
//       />
//     </div>
//   );
// };

// export default MultipleChoice;

// // -----------------------------------------------------




// import React, { useState, useEffect } from 'react';
// import CustomInputIcon from "../../../../Components/CustomInput/CustomInputIcon";
// import CustomChoiceInput from '../../../../Components/CustomInput/CustomChoiceInput';
// import { Grid, Card, CardContent, IconButton, Tooltip, styled, tooltipClasses, useMediaQuery, ButtonGroup, Button } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useFormik } from 'formik';
// import { IoCheckmark } from "react-icons/io5";
// import { FaImage } from "react-icons/fa";
// import Spinner from './Spinner'; // Import the Spinner component
// import "../../../../Components/CustomInput/CustomChoiceInput.css";
// import ImageUpload from './Modals/ImageUpload';
// import { BorderColor } from '@mui/icons-material';
// import { useSelector } from 'react-redux';
// import { adminUrl as baseUrl } from "../../../../constants";

// const BootstrapTooltip = styled(({ className, bgColor, ...props }) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme, bgColor }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: bgColor || theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: bgColor || theme.palette.common.black,
//   },
// }));
// // const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
// // const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

// const CustomButton = styled(Button)(({ theme, isLg, isMd }) => ({

//   height: isLg || isMd ? "24px" : '50px',
//   fontSize: '0.75rem',
//   borderColor: "black",
//   fontWeight: 600,
//   padding: '0 12px',
//   backgroundColor: 'black',
//   '&:hover': {
//     backgroundColor: theme.palette.mode === 'light' ? '#ffffff33' : '#333',
//   },
//   '&:active': {
//     backgroundColor: theme.palette.mode === 'light' ? '#ffffff33' : '#555',
//   },
//   '&.selected': {
//     backgroundColor: '#ffffff33',
//     color: 'white',
//   },
// }));

// const MultipleChoice = ({ textColor, handleSubmitapicheck, setApiPostData }) => {
//   const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
//   const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));
//   const isMd = useMediaQuery(theme => theme.breakpoints.down('md'));

//   // const [choices, setChoices] = useState(['', '', '', '']);
//   const [choices, setChoices] = useState([{ text: '', image: '' }, { text: '', image: '' }, { text: '', image: '' }, { text: '', image: '' }]);
//   // Other state variables...

//   const [correctChoices, setCorrectChoices] = useState([]);
//   const [selectedType, setSelectedType] = useState('single');
//   const [isQuestionEntered, setIsQuestionEntered] = useState(false);
//   const [isOptionEntered, setIsOptionEntered] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const maxChoices = 5;
//   const [openImageUpload, setOpenImageUpload] = useState(false);
//   const [currentChoiceIndex, setCurrentChoiceIndex] = useState(null);
//   const [questionImage, setQuestionImage] = useState('');
//   const [updateAudioURL, setUpdateAudioUrl] = useState("");
//   const [updateVideoURL, setUpdateVideoURL] = useState("")
//   console.log(updateVideoURL,"updatevideourllsllslsllslslslllllllllllllll")
//   console.log(questionImage,"questionImagebbnbbbbbbbbbbbbbb")

//   const handleImageUploadOpen = (index) => {
//     // setCurrentChoiceIndex(index);
//     // setOpenImageUpload(true);
//     updateChoiceImage(index, '');
//     setCurrentChoiceIndex(index);
//     setOpenImageUpload(true);
//   };

//   const handleImageUploadClose = () => {
//     setOpenImageUpload(false);
//   };


//   const formik = useFormik({
//     // initialValues: {
//     //   question: '',
//     //   ...choices.reduce((acc, _, index) => ({ ...acc, [`choice_${index}`]: '' }), {})
//     // },
//     // onSubmit: (values) => {
//     //   console.log('Form values:', values);
//     // },
//     initialValues: {
//       question: '',
//       questionImage: '',
//       ...choices.reduce((acc, _, index) => ({ ...acc, [`choice_${index}_text`]: '', [`choice_${index}_image`]: '' }), {})
//     },
//     onSubmit: (values) => {
//       console.log('Form values:', values);
//     },
//   });

//   // useEffect(() => {
//   //   setIsQuestionEntered(formik.values.question.trim() !== '');
//   //   setIsOptionEntered(choices.some((_, index) => formik.values[`choice_${index}`].trim() !== ''));
//   // }, [formik.values, choices]);

//   const { QuestionVideoPost } = useSelector((state) => state?.QuestionVideoPost);

//   const { QuestionAudioPost } = useSelector((state) => state?.QuestionAudioPost);
//   console.log(QuestionAudioPost,"QuestionAudioPost.data.audioUrl");

//   useEffect(() => {
//     // setIsQuestionEntered(formik.values.question.trim() !== '');
//     setIsQuestionEntered(formik.values.question.trim() !== '' || formik.values.questionImage.trim() !== '');
//     setIsOptionEntered(choices.some((choice, index) => formik.values[`choice_${index}_text`].trim() !== ''));

//     // setApiPostData( {
//     //   "user_id": "1",
//     //   "questionText": formik.values.question,
//     //   "options": choices.map((_, index) => ({
//     //     text: formik.values[`choice_${index}_text`],
//     //     image: formik.values[`choice_${index}_image`]
//     //   })).filter(option => option.text || option.image),
//     //   "correctAnswer": correctChoices.map((index) => ({
//     //     text: formik.values[`choice_${index}_text`],
//     //     image: formik.values[`choice_${index}_image`]
//     //   })).filter((value) => value.text || value.image),
//     //   "questionType": "multichose",
//     //   "questionPoint": "5 point",
//     //   "questionTiming": "5 seconde"
//     // })

//     setApiPostData({
//       user_id: "1",
//       questionText: formik.values.question,
//       questionImage: questionImage,
//       questionAudioUrl:QuestionAudioPost.data.audioUrl,
//       questionVideoUrl: QuestionVideoPost.data.videoUrl,
//       optionTexts: choices
//         .map((_, index) => formik.values[`choice_${index}_text`])
//         .filter(text => text),  // Filters out empty texts
//       optionImages: choices
//         .map((_, index) => formik.values[`choice_${index}_image`])
//         .filter(image => image),  // Filters out empty images
//       // correctAnswer: correctChoices
//       //   .map((index) => ([
//       //     formik.values[`choice_${index}_text`]]
//       //     // image: formik.values[`choice_${index}_image`],
//       //   ))
//       //   .filter(value => value.text || value.image),
//       correctAnswer: correctChoices
//         .map((index) => ({
//           text: formik.values[`choice_${index}_text`],
//           image: formik.values[`choice_${index}_image`]
//         }))
//         .filter(value => value.text || value.image),
//       questionType: "multichose",
//       questionPoint: "5 point",
//       questionTiming: "5 seconde"
//     });

//   }, [formik.values, choices,correctChoices]);

//   const backgroundColors = [
//     'rgb(45, 112, 174)',
//     'rgb(45, 157, 166)',
//     'rgb(239, 169, 41)',
//     'rgb(213, 84, 109)',
//     'rgb(154, 66, 146)'
//   ];

//   const addChoice = (index) => {

//     if (choices.length < maxChoices) {
//       const newChoices = [...choices, { text: '', image: '' }];
//       setChoices(newChoices);
//       const newChoiceIndex = newChoices.length - 1;
//       formik.setValues({
//         ...formik.values,
//         [`choice_${newChoiceIndex}_text`]: '',
//         [`choice_${newChoiceIndex}_image`]: ''
//       });
//     }
//   };

//   const handleChoiceChange = (index, newText) => {
//     const updatedChoices = choices.map((choice, i) =>
//       i === index ? { ...choice, text: newText } : choice
//     );
//     setChoices(updatedChoices);
//   };

//   const updateChoiceImage = (index, newImage) => {
//     const updatedChoices = choices.map((choice, i) =>
//       i === index ? { ...choice, image: newImage } : choice
//     );
//     setChoices(updatedChoices);
//   };

//   const handleDeleteChoice = (index) => {
//     if (choices.length > 2) {
//       const newChoices = choices.filter((_, i) => i !== index);
//       setChoices(newChoices);

//       const updatedValues = { ...formik.values };
//       for (let i = index; i < newChoices.length; i++) {
//         updatedValues[`choice_${i}_text`] = formik.values[`choice_${i + 1}_text`];
//         updatedValues[`choice_${i}_image`] = formik.values[`choice_${i + 1}_image`];
//       }
//       delete updatedValues[`choice_${newChoices.length}_text`];
//       delete updatedValues[`choice_${newChoices.length}_image`];
//       formik.setValues(updatedValues);
//     }
//   };



//   // const handleDeleteChoice = (index) => {
//   //   // if (choices.length > 2) {
//   //   //   const newChoices = choices.filter((_, i) => i !== index);
//   //   //   setChoices(newChoices);
//   //   //   const updatedValues = { ...formik.values };
//   //   //   delete updatedValues[`choice_${index}`];
//   //   //   formik.setValues(updatedValues);
//   //   // }
//   //   // if (choices.length > 2) {
//   //   //   const newChoices = choices.filter((_, i) => i !== index);
//   //   //   setChoices(newChoices);
//   //   //   const updatedValues = { ...formik.values };
//   //   //   delete updatedValues[`choice_${index}_text`];
//   //   //   delete updatedValues[`choice_${index}_image`];
//   //   //   formik.setValues(updatedValues);
//   //   // }
//   //   if (choices.length > 2) {
//   //     const newChoices = choices.filter((_, i) => i !== index);
//   //     setChoices(newChoices);
//   //     const updatedValues = { ...formik.values };
//   //     for (let i = index; i < newChoices.length; i++) {
//   //       delete updatedValues[`choice_${i}_text`];
//   //       delete updatedValues[`choice_${i}_image`];
//   //       updatedValues[`choice_${i}_text`] = formik.values[`choice_${i + 1}_text`];
//   //       updatedValues[`choice_${i}_image`] = formik.values[`choice_${i + 1}_image`];
//   //     }
//   //     delete updatedValues[`choice_${newChoices.length}_text`];
//   //     delete updatedValues[`choice_${newChoices.length}_image`];
//   //     formik.setValues(updatedValues);
//   //   }
//   // };


//   // const [croppedImageUrl, setCroppedImageUrl] = useState("")
//   // console.log(croppedImageUrl, "croppedImageUrl")

//   const { ImageUploadPost } = useSelector((state) => state?.ImageUploadPost);
//   const handleImageCrop = (croppedImage) => {
//     // if (currentChoiceIndex !== null) {
//     //   const newChoices = [...choices];
//     //   newChoices[currentChoiceIndex] = croppedImage;
//     //   setChoices(newChoices);
//     //   formik.setFieldValue(`choice_${currentChoiceIndex}`, croppedImage);

//     // }
//     // setCroppedImageUrl(croppedImage)

// console.log("the choice image should be handke image crop function work")

//     if (currentChoiceIndex !== null) {
//       const imageUrl = ImageUploadPost.data.imageUrl;
//       const newChoices = [...choices];
//       newChoices[currentChoiceIndex].image = `${baseUrl}${imageUrl}`;
//       setChoices(newChoices);
//       console.log(currentChoiceIndex, "vallamuni")
//       formik.setFieldValue(`choice_${currentChoiceIndex}_image`, `${baseUrl}${imageUrl}`);
//     }
//     // setCroppedImageUrl("")
//   };

//   const handleTextChange = (index, text) => {
//     const newChoices = [...choices];
//     newChoices[index].text = text;
//     setChoices(newChoices);
//     formik.setFieldValue(`choice_${index}_text`, text);
//   };

//   // const handleImageInsert = (index) => {
//   //   const newChoices = [...choices];
//   //   newChoices[index] += '[image-url]';
//   //   setChoices(newChoices);
//   // };

//   const handleSelection = (value) => {
//     setSelectedType(value);
//     setCorrectChoices([]);
//   };

//   // const handleMarkAsCorrect = (index) => {
//   //   // const choiceText = formik.values[`choice_${index}`]?.trim() || '';
//   //   // if (choiceText) {
//   //   //   setLoading(true);
//   //   //   if (selectedType === 'single') {
//   //   //     setCorrectChoices([index]);
//   //   //   } else {
//   //   //     setCorrectChoices(prev =>
//   //   //       prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
//   //   //     );
//   //   //   }
//   //   //   setLoading(false);
//   //   // } else {
//   //   //   alert("Please enter text or image in option.");
//   //   // }

//   //   const choiceText = formik.values[`choice_${index}_text`]?.trim() || '';
//   //   const choiceImage = formik.values[`choice_${index}_image`];

//   //   if (choiceText || choiceImage) {
//   //     setLoading(true);
//   //     if (selectedType === 'single') {
//   //       setCorrectChoices([index]);
//   //     } else {
//   //       setCorrectChoices(prev =>
//   //         prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
//   //       );
//   //     }
//   //     setLoading(false);
//   //   } else {
//   //     alert("Please enter text or image in option.");
//   //   }
//   // };

//   const handleMarkAsCorrect = (index) => {
//     const choiceText = formik.values[`choice_${index}_text`]?.trim() || '';
//     const choiceImage = formik.values[`choice_${index}_image`];

//     if (choiceText || choiceImage) {
//       setLoading(true);
//       if (selectedType === 'single') {
//         setCorrectChoices([index]);
//       } else {
//         setCorrectChoices(prev =>
//           prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
//         );
//       }
//       setLoading(false);
//     } else {
//       alert("Please enter text or image in option.");
//     }
//   };

//   const isButtonDisabled1 = (index) => {
//     const choiceText = formik.values[`choice_${index}_text`]?.trim();
//     const choiceImage = formik.values[`choice_${index}_image`];
//     return !(choiceText || choiceImage);
//   };




//   const apidata = {
//     "user_id": "1",
//     "questionText": formik.values.question,
//     "options": choices.map((_, index) => ([
//       formik.values[`choice_${index}_text`]]
//       // image: formik.values[`choice_${index}_image`]

//     )).filter(option => option.text || option.image),
//     "correctAnswer": correctChoices.map((index) => ({
//       text: formik.values[`choice_${index}_text`],
//       image: formik.values[`choice_${index}_image`]
//     })).filter((value) => value.text || value.image),


//   };



//   const handleSubmit = (text) => {
//     // console.log('Question:', formik.values.question);
//     // const correctAnswerText = correctChoices
//     //   .map((index) => formik.values[`choice_${index}`])
//     //   .filter((value) => value !== undefined);
//     // console.log('Correct Answer Index(es):', correctAnswerText);
//     // for (let i = 0; i < choices.length; i++) {
//     //   console.log(`Option ${i + 1}:`, formik.values[`choice_${i}`]);
//     // }
//     // console.log('Question:', formik.values.question);
//     const apidata = {
//       "user_id": "1",
//       "questionText": formik.values.question,

//       "options": ["Berlin", "Madrid", "Paris", "Rome"],
//       "correctAnswer": ["Paris", "guindy"],
//       "questionType": ["multichose"],
//       "questionPoint": ["5 point"],
//       "questionTiming": ["5 seconde"]
//     }



//     handleSubmitapicheck(apidata)


//     console.log('Question:', formik.values.question, questionImage);
//     console.log(updateAudioURL, "kkkkkkkkkkkkkkkkkk")
//     console.log(updateVideoURL, "?/////////////////////")
//     // console.log('Question Image:', questionImage); 
//     const correctAnswerText = correctChoices
//       .map((index) => ({
//         text: formik.values[`choice_${index}_text`],
//         image: formik.values[`choice_${index}_image`]
//       }))
//       .filter((value) => value.text || value.image);
//     console.log('Correct Answer Index(es):', correctAnswerText);
//     for (let i = 0; i < choices.length; i++) {
//       console.log(`Option ${i + 1}:`, formik.values[`choice_${i}_text`], formik.values[`choice_${i}_image`]);
//     }
//   };

//   const isButtonDisabled = !(isQuestionEntered && isOptionEntered);

//   return (
//     <div style={{ padding: "20px", color: "#FFF" }}>
//       <CustomInputIcon
//         name="question"
//         custPlaceholder="Type question here"
//         inputType="text"
//         value={formik.values.question}
//         setUpdateVideoURL={setUpdateVideoURL}
//         updateVideoURL={updateVideoURL}
//         setUpdateAudioUrl={setUpdateAudioUrl}
//         updateAudioURL={updateAudioURL}
//         // onChange={formik.handleChange}
//         onChange={(e) => formik.setFieldValue('question', e.target.value)}
//         // imgValue={formik.values.questionImage}
//         // onImageUpload={(image) => formik.setFieldValue('questionImage', image)}
//         questionImage={questionImage}
//         setQuestionImage={setQuestionImage}
//       />
//       <Grid container sx={{ paddingLeft: "10px", paddingRight: "5px" }}>
//         {choices.map((choice, index) => {
//           // const choiceValue = formik.values[`choice_${index}`]?.trim();
//           // const { text, image } = choices;
//           const choiceValue = formik.values[`choice_${index}_text`]?.trim();
//           // const hasContent = !!choiceValue;
//           const choiceImage = formik.values[`choice_${index}_image`];
//           const hasContent = !!choiceValue || !!choiceImage;

//           const tooltipStyles = {
//             color: '#FFF',
//             padding: '8px',
//           };

//           const tooltipTitle = hasContent ? "Mark as a correct answer" : "Please enter text or image in option.";

//           return (
//             <Grid item xs={12} lg={choices.length === 5 ? 2.4 : 3 && choices.length === 4 ? 2.84 : 3 &&
//               choices.length === 3 ? 3.8 : 3 && choices.length === 2 ? 5.7 : 3} key={index} sx={{ padding: 1 }}>
//               <Card style={{ backgroundColor: backgroundColors[index], borderRadius: "10px", height: 'auto', width: '100%' }}>
//                 <CardContent style={{ paddingTop: "0px", position: 'relative', display: 'flex', flexDirection: 'column', paddingBottom: "15px" }}>
//                   <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
//                     <Grid item>
//                       {choices.length > 2 && (
//                         <BootstrapTooltip title="Delete" placement="top">
//                           <IconButton onClick={() => handleDeleteChoice(index)} sx={{ p: 0 }}>
//                             <DeleteIcon className="quizz-inputicon1" />
//                           </IconButton>
//                         </BootstrapTooltip>
//                       )}
//                       <BootstrapTooltip title="Add image" placement="top">
//                         <IconButton onClick={() => handleImageUploadOpen(index)}>
//                           <FaImage className="quizz-inputicon1" />
//                         </IconButton>
//                       </BootstrapTooltip>
//                     </Grid>
//                     <Grid item>
//                       <BootstrapTooltip title={<span style={tooltipStyles}>{tooltipTitle}</span>} placement="top" bgColor={hasContent ? '#4CAF50' : '#F44336'}>
//                         <span>
//                           <IconButton
//                             onClick={() => handleMarkAsCorrect(index)}
//                             // disabled={isButtonDisabled}
//                             disabled={isButtonDisabled1(index)}

//                             // disabled={!hasContent}


//                             // disabled={isButtonDisabled || !hasContent}
//                             sx={{
//                               color: correctChoices.includes(index) ? '#FFF' : '#000',
//                               position: 'relative',
//                               overflow: 'hidden'
//                             }}
//                           >
//                             <IoCheckmark className="quizz-inputicon2" style={{ backgroundColor: correctChoices.includes(index) ? 'green' : 'transparent' }} />
//                           </IconButton>
//                         </span>
//                       </BootstrapTooltip>
//                     </Grid>
//                   </Grid>
//                   <CustomChoiceInput
//                     name={`choice_${index}`}
//                     custPlaceholder="Type answer option here"
//                     inputType="text"
//                     InputProps={{ style: { '--card-bg-color': backgroundColors[index], color: "#FFF", maxWidth: '100%' } }}

//                     value={choice.text}
//                     onChange={(e) => handleTextChange(index, e.target.value)}
//                     imageValue={choice.image}
//                     onImageInsert={() => handleImageUploadOpen(index)}
//                     choices={choices}

//                     updateChoiceImage={updateChoiceImage}
//                     handleImageUploadOpen={() => {
//                       handleImageUploadOpen(index)

//                     }
//                     }
//                     handleImageUploadClose={handleImageUploadClose}
//                     handleImageCrop={handleImageCrop}
//                     currentChoiceIndex={index}


//                   />
//                 </CardContent>
//               </Card>

//             </Grid>


//           );
//         })}
//         <>
//           {choices.length < maxChoices && (
//             <Grid item xs={12} lg={0.5} sx={{ textAlign: "center", padding: "0 10px" }}>
//               <IconButton
//                 onClick={addChoice}
//                 style={{
//                   height: '100%',
//                   width: "100%",
//                   color: '#FFF',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   fontSize: '1rem',
//                   borderRadius: isXs ? '5px' : '0',
//                   border: isXs ? '1px solid #fff3' : 'none',
//                   padding: isXs ? '2px' : '0'
//                 }}
//               >
//                 <BootstrapTooltip title="Add option" placement="top">
//                   <AddIcon style={{
//                     border: isLg ? "1px solid #fff3" : "1px solid #ffffff33",
//                     borderRadius: isLg ? "5px" : "0",
//                     height: isLg ? "30px" : "30px",
//                     width: isLg ? "30px" : "100%",
//                     background: "#ffffff33"
//                   }} />
//                 </BootstrapTooltip>
//               </IconButton>
//             </Grid>
//           )}
//         </>

//         {/* <Grid item xs={12} lg={0.5}>
//         <Button
//           onClick={addChoice}
//           disabled={choices.length >= maxChoices}
//           sx={{ height: "56px", borderRadius: "10px" }}
//         >
//           <AddIcon />
//         </Button>
//       </Grid> */}
//         <Grid item xs={12} lg={6} sx={{ padding: "10px" }}>
//           <ButtonGroup
//             orientation={isXs ? 'vertical' : 'horizontal'}
//             variant="contained"
//             // color="primary"
//             aria-label="text button group"
//             fullWidth
//             sx={{
//               padding: "1px",
//               background: "black",
//               '& .MuiButtonGroup-firstButton': {
//                 borderColor: 'black',
//               },
//               '& .MuiButtonGroup-middleButton': {
//                 borderColor: 'green',
//               },
//               '& .MuiButtonGroup-lastButton': {
//                 borderColor: 'red',
//               },
//             }}
//           >
//             <CustomButton
//               isLg={isLg}
//               isMd={isMd}
//               className={selectedType === 'single' ? 'selected' : ''}
//               onClick={() => handleSelection('single')}
//             >
//               Single Correct Answer
//             </CustomButton>
//             <CustomButton
//               isLg={isLg}
//               isMd={isMd}
//               className={selectedType === 'multiple' ? 'selected' : ''}
//               onClick={() => handleSelection('multiple')}
//             >
//               Multiple Correct Answers
//             </CustomButton>
//           </ButtonGroup>
//         </Grid>
//         <Grid item xs={12}>
//           {loading ? (
//             <Spinner />
//           ) : (
//             <Button
//               onClick={handleSubmit}
//               disabled={isButtonDisabled}
//               sx={{ height: '56px', borderRadius: '10px' }}
//             >
//               Submit
//             </Button>
//           )}
//         </Grid>
//       </Grid>
//       {/* <ImageUpload
//         open={openImageUpload}
//         onClose={handleImageUploadClose}
//         onCrop={handleImageCrop}
//       /> */}
//       <ImageUpload
//         open={openImageUpload}
//         onClose={handleImageUploadClose}
//         onCrop={handleImageCrop} // Handle the cropped image
//         initialImage={choices[currentChoiceIndex]?.image || ''} // Pass current image if available
//       />
//     </div >
//   );
// };

// export default MultipleChoice;

////////correct answer End////////////////////////





import React, { useState, useEffect, useRef } from 'react';
import CustomInputIcon from "../../../../Components/CustomInput/CustomInputIcon";
import CustomChoiceInput from '../../../../Components/CustomInput/CustomChoiceInput';
import { Grid, Card, CardContent, IconButton, Tooltip, styled, tooltipClasses, useMediaQuery, ButtonGroup, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFormik } from 'formik';
import { IoCheckmark } from "react-icons/io5";
import { FaImage } from "react-icons/fa";
import Spinner from './Spinner'; // Import the Spinner component
import "../../../../Components/CustomInput/CustomChoiceInput.css";
import ImageUpload from './Modals/ImageUpload';
import { BorderColor } from '@mui/icons-material';
import { useSelector,useDispatch } from 'react-redux';
import { adminUrl as baseUrl } from "../../../../constants";
import actions from "../../../../ReduxStore/actions/index";


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
// const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
// const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

const CustomButton = styled(Button)(({ theme, isLg, isMd }) => ({

  height: isLg || isMd ? "24px" : '50px',
  fontSize: '0.75rem',
  borderColor: "black",
  fontWeight: 600,
  padding: '0 12px',
  backgroundColor: 'black',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff33' : '#333',
  },
  '&:active': {
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff33' : '#555',
  },
  '&.selected': {
    backgroundColor: '#ffffff33',
    color: 'white',
  },
}));

const MultipleChoice = ({ textColor, handleSubmitapicheck, setApiPostData, setQuestionFeild,setQuestionImage,questionImage }) => {
  const dispatch = useDispatch();
  const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  const isMd = useMediaQuery(theme => theme.breakpoints.down('md'));

  // const [choices, setChoices] = useState(['', '', '', '']);
  const [choices, setChoices] = useState([{ text: '', image: '' }, { text: '', image: '' }, { text: '', image: '' }, { text: '', image: '' }]);
  // Other state variables...


  const [correctChoices, setCorrectChoices] = useState([]);
  const [selectedType, setSelectedType] = useState('single');
  const [isQuestionEntered, setIsQuestionEntered] = useState(false);
  const [isOptionEntered, setIsOptionEntered] = useState(false);
  console.log(isQuestionEntered, "isOptionEntered,,,,,,,,")
  const [loading, setLoading] = useState(false);
  const maxChoices = 5;
  const [openImageUpload, setOpenImageUpload] = useState(false);
  const [currentChoiceIndex, setCurrentChoiceIndex] = useState(null);
  // const [questionImage, setQuestionImage] = useState('');
  const [updateAudioURL, setUpdateAudioUrl] = useState("");
  const [updateVideoURL, setUpdateVideoURL] = useState("")
  console.log(updateVideoURL, "updatevideourllsllslsllslslslllllllllllllll")
  console.log(questionImage, "questionImagebbnbbbbbbbbbbbbbb")
  const questionRef = useRef(null)

  const handleImageUploadOpen = (index) => {
    // setCurrentChoiceIndex(index);
    // setOpenImageUpload(true);
    updateChoiceImage(index, '');
    setCurrentChoiceIndex(index);
    setOpenImageUpload(true);
  };

  const quizzCall = () => {
    // Now you need to update the Formik `question` field with this value

  }

  const { GetQuestionById } = useSelector((state) => state?.GetQuestionById);
  const { QuestionVideoPost } = useSelector((state) => state?.QuestionVideoPost);

  console.log(GetQuestionById, "GetQuestionById...............")
  useEffect(() => {
    if (GetQuestionById?.data) {

      formik.setFieldValue('question', GetQuestionById.data.questionText)

    }

  }, [GetQuestionById])

  const handleImageUploadClose = () => {
    setOpenImageUpload(false);
  };


  const formik = useFormik({

    initialValues: {
      question: '',
      questionImage: '',
      ...choices.reduce((acc, _, index) => ({ ...acc, [`choice_${index}_text`]: '', [`choice_${index}_image`]: '' }), {})
    },
    onSubmit: (values) => {
      console.log('Form values:', values);
    },
  });





  const { QuestionAudioPost } = useSelector((state) => state?.QuestionAudioPost);
  console.log(QuestionAudioPost, "QuestionAudioPost.data.audioUrl");

  useEffect(() => {
    // setIsQuestionEntered(formik.values.question.trim() !== '');
    setIsQuestionEntered(formik.values.question || formik.values.questionImage.trim() !== '');
    setIsOptionEntered(choices.some((choice, index) => formik.values[`choice_${index}_text`].trim() !== ''));



    setApiPostData({
      user_id: "1",
      questionText: formik.values.question,
      questionImage: questionImage,
      questionAudioUrl: QuestionAudioPost.data.audioUrl,
      questionVideoUrl: QuestionVideoPost.data.videoUrl,
      optionTexts: choices
        .map((_, index) => formik.values[`choice_${index}_text`])
        .filter(text => text),  // Filters out empty texts
      optionImages: choices
        .map((_, index) => formik.values[`choice_${index}_image`])
        .filter(image => image),  // Filters out empty images

      correctAnswer: correctChoices
        .map((index) => ({
          text: formik.values[`choice_${index}_text`],
          image: formik.values[`choice_${index}_image`]
        }))
        .filter(value => value.text || value.image),
      questionType: "multichose",
      questionPoint: "5 point",
      questionTiming: "5 seconde"
    });

  }, [formik.values, choices, correctChoices]);

  const backgroundColors = [
    'rgb(45, 112, 174)',
    'rgb(45, 157, 166)',
    'rgb(239, 169, 41)',
    'rgb(213, 84, 109)',
    'rgb(154, 66, 146)'
  ];

  const addChoice = (index) => {

    if (choices.length < maxChoices) {
      const newChoices = [...choices, { text: '', image: '' }];
      setChoices(newChoices);
      const newChoiceIndex = newChoices.length - 1;
      formik.setValues({
        ...formik.values,
        [`choice_${newChoiceIndex}_text`]: '',
        [`choice_${newChoiceIndex}_image`]: ''
      });
    }
  };

  const handleChoiceChange = (index, newText) => {
    const updatedChoices = choices.map((choice, i) =>
      i === index ? { ...choice, text: newText } : choice
    );
    setChoices(updatedChoices);
  };

  const updateChoiceImage = (index, newImage) => {
    const updatedChoices = choices.map((choice, i) =>
      i === index ? { ...choice, image: newImage } : choice
    );
    setChoices(updatedChoices);
  };

  const handleDeleteChoice = (index) => {
    if (choices.length > 2) {
      const newChoices = choices.filter((_, i) => i !== index);
      setChoices(newChoices);

      const updatedValues = { ...formik.values };
      for (let i = index; i < newChoices.length; i++) {
        updatedValues[`choice_${i}_text`] = formik.values[`choice_${i + 1}_text`];
        updatedValues[`choice_${i}_image`] = formik.values[`choice_${i + 1}_image`];
      }
      delete updatedValues[`choice_${newChoices.length}_text`];
      delete updatedValues[`choice_${newChoices.length}_image`];
      formik.setValues(updatedValues);
    }
  };



  // const { ImageUploadPost } = useSelector((state) => state?.ImageUploadPost);
  // const { QuestionImageUpload } = useSelector((state) => state?.QuestionImageUpload);

  
 

  // const handleImageCrop = (formData) => {


  //   console.log("the choice image should be handke image crop function work")
  //   const data3 = {
  //     data: formData, // Pass FormData object here
  //     method: "post",
  //     apiName: "uploadImage",
  //   };

  //   dispatch(actions.IMAGEUPLOADPOST(data3));

  //   if (currentChoiceIndex !== null) {
  //     if(ImageUploadPost?.data?.imageUrl){
  //     const imageUrl = ImageUploadPost.data.imageUrl;
  //     const newChoices = [...choices];
  //     newChoices[currentChoiceIndex].image = `${baseUrl}${imageUrl}`;
  //     setChoices(newChoices);
  //     console.log(currentChoiceIndex, "vallamuni")
  //     formik.setFieldValue(`choice_${currentChoiceIndex}_image`, `${baseUrl}${imageUrl}`);
  //   }}
  //   // setCroppedImageUrl("")


  // };

  const { ImageUploadPost } = useSelector((state) => state?.ImageUploadPost);
const { QuestionImageUpload } = useSelector((state) => state?.QuestionImageUpload);

// Function to handle image cropping
const handleImageCrop = (formData) => {
  console.log("The choice image crop function is working");

  const data3 = {
    data: formData, // Pass FormData object here
    method: "post",
    apiName: "uploadImage",
  };

  // Dispatch the image upload action
  dispatch(actions.IMAGEUPLOADPOST(data3));
};

// Use useEffect to monitor changes in ImageUploadPost and update the image URL
useEffect(() => {
  if (currentChoiceIndex !== null && ImageUploadPost?.data?.imageUrl) {
    const imageUrl = ImageUploadPost.data.imageUrl;
    const newChoices = [...choices];
    newChoices[currentChoiceIndex].image = `${baseUrl}${imageUrl}`;
    setChoices(newChoices);

    console.log(currentChoiceIndex, "Image crop success");
    formik.setFieldValue(`choice_${currentChoiceIndex}_image`, `${baseUrl}${imageUrl}`);
  }
}, [ImageUploadPost, currentChoiceIndex]);

  const handleTextChange = (index, text) => {
    const newChoices = [...choices];
    newChoices[index].text = text;
    setChoices(newChoices);
    formik.setFieldValue(`choice_${index}_text`, text);
  };


  const handleSelection = (value) => {
    setSelectedType(value);
    setCorrectChoices([]);
  };



  const handleMarkAsCorrect = (index) => {
    const choiceText = formik.values[`choice_${index}_text`]?.trim() || '';
    const choiceImage = formik.values[`choice_${index}_image`];

    if (choiceText || choiceImage) {
      setLoading(true);
      if (selectedType === 'single') {
        setCorrectChoices([index]);
      } else {
        setCorrectChoices(prev =>
          prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
      }
      setLoading(false);
    } else {
      alert("Please enter text or image in option.");
    }
  };

  const isButtonDisabled1 = (index) => {
    const choiceText = formik.values[`choice_${index}_text`]?.trim();
    const choiceImage = formik.values[`choice_${index}_image`];
    return !(choiceText || choiceImage);
  };




  const apidata = {
    "user_id": "1",
    "questionText": formik.values.question,
    "options": choices.map((_, index) => ([
      formik.values[`choice_${index}_text`]]
      // image: formik.values[`choice_${index}_image`]

    )).filter(option => option.text || option.image),
    "correctAnswer": correctChoices.map((index) => ({
      text: formik.values[`choice_${index}_text`],
      image: formik.values[`choice_${index}_image`]
    })).filter((value) => value.text || value.image),


  };



  const handleSubmit = (text) => {

    const apidata = {
      "user_id": "1",
      "questionText": formik.values.question,

      "options": ["Berlin", "Madrid", "Paris", "Rome"],
      "correctAnswer": ["Paris", "guindy"],
      "questionType": ["multichose"],
      "questionPoint": ["5 point"],
      "questionTiming": ["5 seconde"]
    }



    handleSubmitapicheck(apidata)


    console.log('Question:', formik.values.question, questionImage);
    console.log(updateAudioURL, "kkkkkkkkkkkkkkkkkk")
    console.log(updateVideoURL, "?/////////////////////")
    // console.log('Question Image:', questionImage); 
    const correctAnswerText = correctChoices
      .map((index) => ({
        text: formik.values[`choice_${index}_text`],
        image: formik.values[`choice_${index}_image`]
      }))
      .filter((value) => value.text || value.image);
    console.log('Correct Answer Index(es):', correctAnswerText);
    for (let i = 0; i < choices.length; i++) {
      console.log(`Option ${i + 1}:`, formik.values[`choice_${i}_text`], formik.values[`choice_${i}_image`]);
    }
  };

  const isButtonDisabled = !(isQuestionEntered && isOptionEntered);

  return (
    <div style={{ padding: "20px", color: "#FFF" }}>
      {/* <button onClick={quizzCall}>KHHHHHHHHHHHHHHHHHHHHHHH</button> */}
      <CustomInputIcon
        name="question"
        custPlaceholder="Type question here"
        inputType="text"
        questionRef={questionRef}
        value={formik.values.question}
        setUpdateVideoURL={setUpdateVideoURL}
        updateVideoURL={updateVideoURL}
        setUpdateAudioUrl={setUpdateAudioUrl}
        updateAudioURL={updateAudioURL}
        // onChange={formik.handleChange}
        onChange={(e) => formik.setFieldValue('question', e.target.value)}
        // imgValue={formik.values.questionImage}
        // onImageUpload={(image) => formik.setFieldValue('questionImage', image)}
        questionImage={questionImage}
        setQuestionImage={setQuestionImage}
      />
      <Grid container sx={{ paddingLeft: "10px", paddingRight: "5px" }}>
        {choices.map((choice, index) => {
          // const choiceValue = formik.values[`choice_${index}`]?.trim();
          // const { text, image } = choices;
          const choiceValue = formik.values[`choice_${index}_text`]?.trim();
          // const hasContent = !!choiceValue;
          const choiceImage = formik.values[`choice_${index}_image`];
          const hasContent = !!choiceValue || !!choiceImage;

          const tooltipStyles = {
            color: '#FFF',
            padding: '8px',
          };

          const tooltipTitle = hasContent ? "Mark as a correct answer" : "Please enter text or image in option.";

          return (
            <Grid item xs={12} lg={choices.length === 5 ? 2.4 : 3 && choices.length === 4 ? 2.84 : 3 &&
              choices.length === 3 ? 3.8 : 3 && choices.length === 2 ? 5.7 : 3} key={index} sx={{ padding: 1 }}>
              <Card style={{ backgroundColor: backgroundColors[index], borderRadius: "10px", height: 'auto', width: '100%' }}>
                <CardContent style={{ paddingTop: "0px", position: 'relative', display: 'flex', flexDirection: 'column', paddingBottom: "15px" }}>
                  <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Grid item>
                      {choices.length > 2 && (
                        <BootstrapTooltip title="Delete" placement="top">
                          <IconButton onClick={() => handleDeleteChoice(index)} sx={{ p: 0 }}>
                            <DeleteIcon className="quizz-inputicon1" />
                          </IconButton>
                        </BootstrapTooltip>
                      )}
                      <BootstrapTooltip title="Add image" placement="top">
                        <IconButton onClick={() => handleImageUploadOpen(index)}>
                          <FaImage className="quizz-inputicon1" />
                        </IconButton>
                      </BootstrapTooltip>
                    </Grid>
                    <Grid item>
                      <BootstrapTooltip title={<span style={tooltipStyles}>{tooltipTitle}</span>} placement="top" bgColor={hasContent ? '#4CAF50' : '#F44336'}>
                        <span>
                          <IconButton
                            onClick={() => handleMarkAsCorrect(index)}
                            // disabled={isButtonDisabled}
                            disabled={isButtonDisabled1(index)}

                            // disabled={!hasContent}


                            // disabled={isButtonDisabled || !hasContent}
                            sx={{
                              color: correctChoices.includes(index) ? '#FFF' : '#000',
                              position: 'relative',
                              overflow: 'hidden'
                            }}
                          >
                            <IoCheckmark className="quizz-inputicon2" style={{ backgroundColor: correctChoices.includes(index) ? 'green' : 'transparent' }} />
                          </IconButton>
                        </span>
                      </BootstrapTooltip>
                    </Grid>
                  </Grid>
                  <CustomChoiceInput
                    name={`choice_${index}`}
                    custPlaceholder="Type answer option here"
                    inputType="text"
                    InputProps={{ style: { '--card-bg-color': backgroundColors[index], color: "#FFF", maxWidth: '100%' } }}

                    value={choice.text}
                    onChange={(e) => handleTextChange(index, e.target.value)}
                    imageValue={choice.image}
                    onImageInsert={() => handleImageUploadOpen(index)}
                    choices={choices}

                    updateChoiceImage={updateChoiceImage}
                    handleImageUploadOpen={() => {
                      handleImageUploadOpen(index)

                    }
                    }
                    handleImageUploadClose={handleImageUploadClose}
                    handleImageCrop={handleImageCrop}
                    currentChoiceIndex={index}


                  />
                </CardContent>
              </Card>

            </Grid>


          );
        })}
        <>
          {choices.length < maxChoices && (
            <Grid item xs={12} lg={0.5} sx={{ textAlign: "center", padding: "0 10px" }}>
              <IconButton
                onClick={addChoice}
                style={{
                  height: '100%',
                  width: "100%",
                  color: '#FFF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1rem',
                  borderRadius: isXs ? '5px' : '0',
                  border: isXs ? '1px solid #fff3' : 'none',
                  padding: isXs ? '2px' : '0'
                }}
              >
                <BootstrapTooltip title="Add option" placement="top">
                  <AddIcon style={{
                    border: isLg ? "1px solid #fff3" : "1px solid #ffffff33",
                    borderRadius: isLg ? "5px" : "0",
                    height: isLg ? "30px" : "30px",
                    width: isLg ? "30px" : "100%",
                    background: "#ffffff33"
                  }} />
                </BootstrapTooltip>
              </IconButton>
            </Grid>
          )}
        </>
        <Grid item xs={12} lg={6} sx={{ padding: "10px" }}>
          <ButtonGroup
            orientation={isXs ? 'vertical' : 'horizontal'}
            variant="contained"
            // color="primary"
            aria-label="text button group"
            fullWidth
            sx={{
              padding: "1px",
              background: "black",
              '& .MuiButtonGroup-firstButton': {
                borderColor: 'black',
              },
              '& .MuiButtonGroup-middleButton': {
                borderColor: 'green',
              },
              '& .MuiButtonGroup-lastButton': {
                borderColor: 'red',
              },
            }}
          >
            <CustomButton
              isLg={isLg}
              isMd={isMd}
              className={selectedType === 'single' ? 'selected' : ''}
              onClick={() => handleSelection('single')}
            >
              Single Correct Answer
            </CustomButton>
            <CustomButton
              isLg={isLg}
              isMd={isMd}
              className={selectedType === 'multiple' ? 'selected' : ''}
              onClick={() => handleSelection('multiple')}
            >
              Multiple Correct Answers
            </CustomButton>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12}>
          {loading ? (
            <Spinner />
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isButtonDisabled}
              sx={{ height: '56px', borderRadius: '10px' }}
            >
              Submit
            </Button>
          )}
        </Grid>
      </Grid>

      <ImageUpload

        open={openImageUpload}
        onClose={handleImageUploadClose}
        onCrop={handleImageCrop} // Handle the cropped image
        initialImage={choices[currentChoiceIndex]?.image || ''} // Pass current image if available
      />
    </div >
  );
};

export default MultipleChoice;

