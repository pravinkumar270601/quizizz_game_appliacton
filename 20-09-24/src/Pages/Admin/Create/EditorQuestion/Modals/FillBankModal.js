

// // // // // import React, { useState } from 'react';
// // // // // import {
// // // // //   Dialog,
// // // // //   DialogTitle,
// // // // //   DialogContent,
// // // // //   DialogActions,
// // // // //   IconButton,
// // // // //   Button,
// // // // //   Typography,
// // // // //   Switch,
// // // // //   FormControl,
// // // // //   RadioGroup,
// // // // //   FormControlLabel,
// // // // //   Radio,
// // // // //   TextField,
// // // // //   Grid,
// // // // //   CssBaseline,
// // // // // } from '@mui/material';
// // // // // import {
// // // // //   Close as CloseIcon,
// // // // // } from '@mui/icons-material';
// // // // // import { LuRectangleHorizontal } from "react-icons/lu";
// // // // // import { Formik, Form, Field } from 'formik';

// // // // // import seperate_quizz from "../../../././../../Assets/Quizz_image.png";
// // // // // import single_quizz from "../../../././../../Assets/Quizz_image1.png";

// // // // // const FillBlankModal = ({ open, onClose }) => {
// // // // //   const [alternativeAnswers, setAlternativeAnswers] = useState(false);
// // // // //   const [ignoreAccentMarks, setIgnoreAccentMarks] = useState(false);
// // // // //   const [submitCustomResponse, setSubmitCustomResponse] = useState(false);

// // // // //   const initialValues = {
// // // // //     selectedOption: 'single-input-field',
// // // // //     hint: '',
// // // // //   };

// // // // //   const handleSubmit = (values) => {
// // // // //     console.log('Form values:', values);
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <Dialog
// // // // //         open={open}
// // // // //         onClose={onClose}
// // // // //         fullWidth
// // // // //         maxWidth="md"
// // // // //         sx={{
// // // // //           overflowX: 'auto',
// // // // //           // background:"white",
// // // // //           width: "100%",
// // // // //           '& .MuiPaper-root': {
// // // // //             maxWidth: "650px",
// // // // //             '& .MuiDialog-paper': {
// // // // //               overflowY: 'visible',
// // // // //               width: '70%',
// // // // //               maxWidth: "300px",
// // // // //               margin: 'auto',
// // // // //               borderRadius: 2,
// // // // //               background:"white",

// // // // //             }
// // // // //           },
// // // // //           '& .MuiDialog-container': {
// // // // //             height: 'auto',
// // // // //           }, '& .MuiDialog-paper': { borderRadius: 2 }
// // // // //         }}
// // // // //       >
// // // // //         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
// // // // //           {({ values, handleChange }) => (
// // // // //             <Form>
// // // // //               {/* <Grid container sx={{ position: 'relative', padding: 2 }}> */}
// // // // //                 <IconButton
// // // // //                   aria-label="Close"
// // // // //                   onClick={onClose}
// // // // //                   sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
// // // // //                 >
// // // // //                   <CloseIcon />
// // // // //                 </IconButton>
// // // // //                 <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
// // // // //                   <Grid
// // // // //                     item
// // // // //                     sx={{
// // // // //                       display: 'flex',
// // // // //                       alignItems: 'center',
// // // // //                       justifyContent: 'center',
// // // // //                       width: 40,
// // // // //                       height: 40,
// // // // //                       borderRadius: '50%',
// // // // //                       backgroundColor: 'rgb(237 230 246)',
// // // // //                       color: 'rgb(136 84 192)',
// // // // //                       marginRight: 1,
// // // // //                     }}
// // // // //                   >
// // // // //                     <LuRectangleHorizontal />
// // // // //                   </Grid>
// // // // //                   <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
// // // // //                     Fill in the Blank Settings
// // // // //                   </Typography>
// // // // //                 </DialogTitle>
// // // // //                 <DialogContent dividers sx={{ padding: 4 }}>
// // // // //                   <Grid container spacing={4} >
// // // // //                     {/* Radio Buttons for Input Selection */}
// // // // //                     <Grid item alignItems="center" style={{  width: "100%" }}>

// // // // //                       <FormControl component="fieldset" fullWidth >
// // // // //                         <RadioGroup
// // // // //                           name="selectedOption"
// // // // //                           value={values.selectedOption}
// // // // //                           onChange={handleChange}

// // // // //                         >
// // // // //                           {/* Separate Boxes Option */}
// // // // //                           {/* Separate Boxes Option */}
// // // // //                           <Grid item alignItems="center" style={{ width: "100%", display: 'flex', flexDirection: "row",justifyContent:"space-between" }}>
// // // // //                             <Grid item xs={6}>
// // // // //                               <img
// // // // //                                 src={seperate_quizz}
// // // // //                                 alt="Separate boxes"
// // // // //                                 // className="flex-1 object-contain rounded cursor-pointer border border-dark-6"
// // // // //                                 data-testid="box-variant-image"
// // // // //                                 style={{ height: "100px", width: "90%" }}
// // // // //                               />
// // // // //                               <FormControlLabel
// // // // //                                 value="separate-boxes"
// // // // //                                 control={<Radio />}
// // // // //                                 label={
// // // // //                                   <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // // // //                                     Separate boxes
// // // // //                                   </Typography>
// // // // //                                 }
// // // // //                               />
// // // // //                             </Grid>
// // // // //                             {/* Single Input Field Option */}
// // // // //                             <Grid item xs={6}>
// // // // //                               <img
// // // // //                                 src={single_quizz}
// // // // //                                 alt="Single input field"
// // // // //                                 // className="flex-1 object-contain rounded cursor-pointer border border-dark-6 border-lilac border-2"
// // // // //                                 data-testid="single-blank-variant-image"
// // // // //                                 style={{ height: "100px", width: "90%" }}
// // // // //                               />
// // // // //                               <FormControlLabel
// // // // //                                 value="single-input-field"
// // // // //                                 control={<Radio />}
// // // // //                                 label={
// // // // //                                   <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // // // //                                     Single input field
// // // // //                                   </Typography>
// // // // //                                 }
// // // // //                               />
// // // // //                             </Grid>
// // // // //                           </Grid>


// // // // //                         </RadioGroup>
// // // // //                       </FormControl>
// // // // //                     </Grid>

// // // // //                     {/* Alternative Answers Switch */}
// // // // //                     <CssBaseline />
// // // // //                     <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
// // // // //                       <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // // // //                         Alternative answers
// // // // //                       </Typography>
// // // // //                       <Switch
// // // // //                         checked={alternativeAnswers}
// // // // //                         onChange={(e) => setAlternativeAnswers(e.target.checked)}
// // // // //                         name="alternative-answers"
// // // // //                       />
// // // // //                     </Grid>

// // // // //                     {/* Answer Hints Input */}
// // // // //                     <Grid item xs={12} style={{paddingTop:"10px"}}>
// // // // //                       <Grid container direction="column" spacing={2}>
// // // // //                         <Grid item>
// // // // //                           <Typography variant="body2" >
// // // // //                             Answer Hints
// // // // //                           </Typography>
// // // // //                           <Typography variant="body2" style={{fontSize:"12px",marginTop:"10px"}}>
// // // // //                             Write a custom hint to show the students if they're struggling with the answer
// // // // //                           </Typography>
// // // // //                         </Grid>
// // // // //                         <Grid item>
// // // // //                           <Field
// // // // //                             as={TextField}
// // // // //                             fullWidth
// // // // //                             variant="outlined"
// // // // //                             size="small"
// // // // //                             placeholder="Enter your hint here..."
// // // // //                             name="hint"
// // // // //                             value={values.hint}
// // // // //                             onChange={handleChange}
// // // // //                           />
// // // // //                         </Grid>
// // // // //                       </Grid>
// // // // //                     </Grid>

// // // // //                     {/* Ignore Accent Marks Switch */}
// // // // //                     {/* <Grid item xs={12} className="flex justify-between p-3 border-t-1 border-dark-6">
// // // // //                       <Grid container direction="column" spacing={1}>
// // // // //                         <Grid item>
// // // // //                           <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // // // //                             Ignore accent marks like à, á, â
// // // // //                           </Typography>
// // // // //                           <Typography variant="body2" className="text-xs text-dark-4">
// // // // //                             Both “café” and “cafe” will be considered correct
// // // // //                           </Typography>
// // // // //                         </Grid>
// // // // //                         <Grid item>
// // // // //                           <Switch
// // // // //                             checked={ignoreAccentMarks}
// // // // //                             onChange={(e) => setIgnoreAccentMarks(e.target.checked)}
// // // // //                             name="ignore-accent-marks"
// // // // //                           />
// // // // //                         </Grid>
// // // // //                       </Grid>
// // // // //                     </Grid> */}

// // // // //                     {/* Show Your Work Switch */}
// // // // //                     <Grid item xs={12}  >
// // // // //                       <Grid container direction="column" spacing={1} sx={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
// // // // //                         <Grid item>
// // // // //                           <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // // // //                             Show your work
// // // // //                           </Typography>
// // // // //                           <Typography variant="body2" className="text-xs text-dark-4">
// // // // //                             Students can upload images alongside their answer
// // // // //                           </Typography>
// // // // //                         </Grid>
// // // // //                         <Grid item>
// // // // //                           <Switch
// // // // //                             checked={submitCustomResponse}
// // // // //                             onChange={(e) => setSubmitCustomResponse(e.target.checked)}
// // // // //                             name="submit-custom-response"
// // // // //                           />
// // // // //                         </Grid>
// // // // //                       </Grid>
// // // // //                     </Grid>
// // // // //                   </Grid>
// // // // //                 </DialogContent>
// // // // //                 <DialogActions sx={{ padding: 2, paddingRight: 4}}>
// // // // //                 {/* <DialogActions sx={{ backgroundColor: 'red', display: 'flex', justifyContent: 'flex-end' }}> */}

// // // // //                   <Button
// // // // //                     onClick={onClose}
// // // // //                     variant="text"
// // // // //                     sx={{
// // // // //                       background: "rgb(249 249 249)",
// // // // //                       color: "black",
// // // // //                       '&:hover': {
// // // // //                         backgroundColor: 'rgb(249 249 249)',
// // // // //                         color: "black",
// // // // //                       },
// // // // //                     }}
// // // // //                   >
// // // // //                     Cancel
// // // // //                   </Button>
// // // // //                   <Button type="submit" variant="contained">
// // // // //                     Insert
// // // // //                   </Button>
// // // // //                 </DialogActions>
// // // // //               {/* </Grid> */}
// // // // //             </Form>
// // // // //           )}
// // // // //         </Formik>
// // // // //       </Dialog>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default FillBlankModal;


// // // // // import React, { useState } from 'react';
// // // // // import {
// // // // //   Dialog,
// // // // //   DialogTitle,
// // // // //   DialogContent,
// // // // //   DialogActions,
// // // // //   IconButton,
// // // // //   Button,
// // // // //   Typography,
// // // // //   Switch,
// // // // //   FormControl,
// // // // //   RadioGroup,
// // // // //   FormControlLabel,
// // // // //   Radio,
// // // // //   TextField,
// // // // //   Grid,
// // // // //   CssBaseline,
// // // // // } from '@mui/material';
// // // // // import { Close as CloseIcon } from '@mui/icons-material';
// // // // // import { LuRectangleHorizontal } from "react-icons/lu";
// // // // // import { Formik, Form, Field } from 'formik';

// // // // // import separate_quizz from "../../../././../../Assets/Quizz_image.png";
// // // // // import single_quizz from "../../../././../../Assets/Quizz_image1.png";

// // // // // const FillBlankModal = ({ open, onClose }) => {
// // // // //   const [alternativeAnswers, setAlternativeAnswers] = useState(false);
// // // // //   const [ignoreAccentMarks, setIgnoreAccentMarks] = useState(false);
// // // // //   const [submitCustomResponse, setSubmitCustomResponse] = useState(false);

// // // // //   const initialValues = {
// // // // //     selectedOption: 'single-input-field',
// // // // //     hint: '',
// // // // //   };

// // // // //   const handleSubmit = (values) => {
// // // // //     console.log('Form values:', values);
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <Dialog
// // // // //         open={open}
// // // // //         onClose={onClose}
// // // // //         fullWidth
// // // // //         maxWidth="md"
// // // // //         sx={{
// // // // //           overflowX: 'auto',
// // // // //           width: "100%",
// // // // //           '& .MuiPaper-root': {
// // // // //             maxWidth: "650px",
// // // // //             '& .MuiDialog-paper': {
// // // // //               overflowY: 'visible',
// // // // //               width: '70%',
// // // // //               maxWidth: "300px",
// // // // //               margin: 'auto',
// // // // //               borderRadius: 2,
// // // // //               background: "white",
// // // // //             }
// // // // //           },
// // // // //           '& .MuiDialog-container': {
// // // // //             height: 'auto',
// // // // //           }, '& .MuiDialog-paper': { borderRadius: 2 }
// // // // //         }}
// // // // //       >
// // // // //         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
// // // // //           {({ values, handleChange }) => (
// // // // //             <Form>
// // // // //               <IconButton
// // // // //                 aria-label="Close"
// // // // //                 onClick={onClose}
// // // // //                 sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
// // // // //               >
// // // // //                 <CloseIcon />
// // // // //               </IconButton>
// // // // //               <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
// // // // //                 <Grid
// // // // //                   item
// // // // //                   sx={{
// // // // //                     display: 'flex',
// // // // //                     alignItems: 'center',
// // // // //                     justifyContent: 'center',
// // // // //                     width: 40,
// // // // //                     height: 40,
// // // // //                     borderRadius: '50%',
// // // // //                     backgroundColor: 'rgb(237 230 246)',
// // // // //                     color: 'rgb(136 84 192)',
// // // // //                     marginRight: 1,
// // // // //                   }}
// // // // //                 >
// // // // //                   <LuRectangleHorizontal />
// // // // //                 </Grid>
// // // // //                 <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
// // // // //                   Fill in the Blank Settings
// // // // //                 </Typography>
// // // // //               </DialogTitle>
// // // // //               <DialogContent dividers sx={{ padding: 4 }}>
// // // // //                 <Grid container spacing={4}>
// // // // //                   <Grid item alignItems="center" style={{ width: "100%" }}>
// // // // //                     <FormControl component="fieldset" fullWidth>
// // // // //                       <RadioGroup
// // // // //                         name="selectedOption"
// // // // //                         value={values.selectedOption}
// // // // //                         onChange={handleChange}
// // // // //                       >
// // // // //                         {/* Separate Boxes Option */}
// // // // //                         <Grid
// // // // //                           item
// // // // //                           alignItems="center"
// // // // //                           style={{
// // // // //                             width: "100%",
// // // // //                             display: 'flex',
// // // // //                             flexDirection: "row",
// // // // //                             justifyContent: "space-between",
// // // // //                           }}
// // // // //                         >
// // // // //                           {/* Separate Boxes Option */}
// // // // //                           <Grid
// // // // //                             item
// // // // //                             xs={6}

// // // // //                           >
// // // // //                             <img
// // // // //                               src={separate_quizz}
// // // // //                               alt="Separate boxes"
// // // // //                               data-testid="box-variant-image"
// // // // //                               style={{ height: "100px", width: "90%",border: values.selectedOption === 'separate-boxes' ? '2px solid #8854C0' : '2px solid transparent',
// // // // //                               borderRadius: 2, padding:1}}
// // // // //                             />
// // // // //                             <FormControlLabel
// // // // //                               value="separate-boxes"
// // // // //                               control={<Radio />}
// // // // //                               label={
// // // // //                                 <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // // // //                                   Separate boxes
// // // // //                                 </Typography>
// // // // //                               }
// // // // //                             />
// // // // //                           </Grid>
// // // // //                           {/* Single Input Field Option */}
// // // // //                           <Grid
// // // // //                             item
// // // // //                             xs={6}

// // // // //                           >
// // // // //                             <img
// // // // //                               src={single_quizz}
// // // // //                               alt="Single input field"
// // // // //                               data-testid="single-blank-variant-image"
// // // // //                               style={{ height: "100px", width: "90%",border: values.selectedOption === 'single-input-field' ? '2px solid #8854C0' : '2px solid transparent',
// // // // //                                 borderRadius: 2,padding:1 }}
// // // // //                             />
// // // // //                             <FormControlLabel
// // // // //                               value="single-input-field"
// // // // //                               control={<Radio />}
// // // // //                               label={
// // // // //                                 <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // // // //                                   Single input field
// // // // //                                 </Typography>
// // // // //                               }
// // // // //                             />
// // // // //                           </Grid>
// // // // //                         </Grid>
// // // // //                       </RadioGroup>
// // // // //                     </FormControl>
// // // // //                   </Grid>

// // // // //                   {/* Alternative Answers Switch */}
// // // // //                   <CssBaseline />
// // // // //                   <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
// // // // //                     <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // // // //                       Alternative answers
// // // // //                     </Typography>
// // // // //                     <Switch
// // // // //                       checked={alternativeAnswers}
// // // // //                       onChange={(e) => setAlternativeAnswers(e.target.checked)}
// // // // //                       name="alternative-answers"
// // // // //                     />
// // // // //                   </Grid>

// // // // //                   {/* Answer Hints Input */}
// // // // //                   <Grid item xs={12} style={{ paddingTop: "10px" }}>
// // // // //                     <Grid container direction="column" spacing={2}>
// // // // //                       <Grid item>
// // // // //                         <Typography variant="body2">
// // // // //                           Answer Hints
// // // // //                         </Typography>
// // // // //                         <Typography variant="body2" style={{ fontSize: "12px", marginTop: "10px" }}>
// // // // //                           Write a custom hint to show the students if they're struggling with the answer
// // // // //                         </Typography>
// // // // //                       </Grid>
// // // // //                       <Grid item>
// // // // //                         <Field
// // // // //                           as={TextField}
// // // // //                           fullWidth
// // // // //                           variant="outlined"
// // // // //                           size="small"
// // // // //                           placeholder="Enter your hint here..."
// // // // //                           name="hint"
// // // // //                           value={values.hint}
// // // // //                           onChange={handleChange}
// // // // //                         />
// // // // //                       </Grid>
// // // // //                     </Grid>
// // // // //                   </Grid>

// // // // //                   {/* Show Your Work Switch */}
// // // // //                   <Grid item xs={12}>
// // // // //                     <Grid container direction="column" spacing={1} sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
// // // // //                       <Grid item>
// // // // //                         <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // // // //                           Show your work
// // // // //                         </Typography>
// // // // //                         <Typography variant="body2" className="text-xs text-dark-4">
// // // // //                           Students can upload images alongside their answer
// // // // //                         </Typography>
// // // // //                       </Grid>
// // // // //                       <Grid item>
// // // // //                         <Switch
// // // // //                           checked={submitCustomResponse}
// // // // //                           onChange={(e) => setSubmitCustomResponse(e.target.checked)}
// // // // //                           name="submit-custom-response"
// // // // //                         />
// // // // //                       </Grid>
// // // // //                     </Grid>
// // // // //                   </Grid>
// // // // //                 </Grid>
// // // // //               </DialogContent>
// // // // //               <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
// // // // //                 <Button
// // // // //                   onClick={onClose}
// // // // //                   variant="text"
// // // // //                   sx={{
// // // // //                     background: "rgb(249 249 249)",
// // // // //                     color: "black",
// // // // //                     '&:hover': {
// // // // //                       backgroundColor: 'rgb(249 249 249)',
// // // // //                       color: "black",
// // // // //                     },
// // // // //                   }}
// // // // //                 >
// // // // //                   Cancel
// // // // //                 </Button>
// // // // //                 <Button type="submit" variant="contained">
// // // // //                   Insert
// // // // //                 </Button>
// // // // //               </DialogActions>
// // // // //             </Form>
// // // // //           )}
// // // // //         </Formik>
// // // // //       </Dialog>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default FillBlankModal;



// // // // // import React, { useState } from 'react';
// // // // // import {
// // // // //   Dialog,
// // // // //   DialogTitle,
// // // // //   DialogContent,
// // // // //   DialogActions,
// // // // //   IconButton,
// // // // //   Button,
// // // // //   Typography,
// // // // //   Switch,
// // // // //   FormControl,
// // // // //   RadioGroup,
// // // // //   FormControlLabel,
// // // // //   Radio,
// // // // //   TextField,
// // // // //   Grid,
// // // // //   CssBaseline,
// // // // //   colors,
// // // // // } from '@mui/material';
// // // // // import { Close as CloseIcon } from '@mui/icons-material';
// // // // // import { LuRectangleHorizontal } from "react-icons/lu";
// // // // // import { Formik, Form, Field } from 'formik';

// // // // // import separate_quizz from "../../../././../../Assets/Quizz_image.png";
// // // // // import single_quizz from "../../../././../../Assets/Quizz_image1.png";

// // // // // const FillBlankModal = ({ open, onClose }) => {
// // // // //   const [alternativeAnswers, setAlternativeAnswers] = useState(false);
// // // // //   const [ignoreAccentMarks, setIgnoreAccentMarks] = useState(false);
// // // // //   const [submitCustomResponse, setSubmitCustomResponse] = useState(false);

// // // // //   const initialValues = {
// // // // //     selectedOption: 'single-input-field',
// // // // //     hint: '',
// // // // //   };

// // // // //   const handleSubmit = (values) => {
// // // // //     console.log('Form values:', values);
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <Dialog
// // // // //         open={open}
// // // // //         onClose={onClose}
// // // // //         fullWidth
// // // // //         maxWidth="md"
// // // // //         sx={{
// // // // //           overflowX: 'auto',
// // // // //           width: "100%",
// // // // //           '& .MuiPaper-root': {
// // // // //             maxWidth: "650px",
// // // // //             '& .MuiDialog-paper': {
// // // // //               overflowY: 'visible',
// // // // //               width: '70%',
// // // // //               maxWidth: "300px",
// // // // //               margin: 'auto',
// // // // //               borderRadius: 2,
// // // // //               background: "white",
// // // // //             }
// // // // //           },
// // // // //           '& .MuiDialog-container': {
// // // // //             height: 'auto',
// // // // //           }, '& .MuiDialog-paper': { borderRadius: 2 }
// // // // //         }}
// // // // //       >
// // // // //         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
// // // // //           {({ values, handleChange }) => (
// // // // //             <Form>
// // // // //               <IconButton
// // // // //                 aria-label="Close"
// // // // //                 onClick={onClose}
// // // // //                 sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
// // // // //               >
// // // // //                 <CloseIcon />
// // // // //               </IconButton>
// // // // //               <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
// // // // //                 <Grid
// // // // //                   item
// // // // //                   sx={{
// // // // //                     display: 'flex',
// // // // //                     alignItems: 'center',
// // // // //                     justifyContent: 'center',
// // // // //                     width: 40,
// // // // //                     height: 40,
// // // // //                     borderRadius: '50%',
// // // // //                     backgroundColor: 'rgb(237 230 246)',
// // // // //                     color: 'rgb(136 84 192)',
// // // // //                     marginRight: 1,
// // // // //                   }}
// // // // //                 >
// // // // //                   <LuRectangleHorizontal />
// // // // //                 </Grid>
// // // // //                 <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
// // // // //                   Fill in the Blank Settings
// // // // //                 </Typography>
// // // // //               </DialogTitle>
// // // // //               <DialogContent dividers sx={{ padding: 4 }}>
// // // // //                 <Grid container spacing={4}>
// // // // //                   <Grid item alignItems="center" style={{ width: "100%" }}>
// // // // //                     <FormControl component="fieldset" fullWidth>
// // // // //                       <RadioGroup
// // // // //                         name="selectedOption"
// // // // //                         value={values.selectedOption}
// // // // //                         onChange={handleChange}
// // // // //                       >
// // // // //                         {/* Separate Boxes Option */}
// // // // //                         <Grid
// // // // //                           item
// // // // //                           alignItems="center"
// // // // //                           style={{
// // // // //                             width: "100%",
// // // // //                             display: 'flex',
// // // // //                             flexDirection: "row",
// // // // //                             justifyContent: "space-between",
// // // // //                           }}
// // // // //                         >
// // // // //                           {/* Separate Boxes Option */}
// // // // //                           <Grid
// // // // //                             item
// // // // //                             xs={6}
// // // // //                           >
// // // // //                             <img
// // // // //                               src={separate_quizz}
// // // // //                               alt="Separate boxes"
// // // // //                               data-testid="box-variant-image"
// // // // //                               style={{
// // // // //                                 height: "100px",
// // // // //                                 width: "90%",
// // // // //                                 border: values.selectedOption === 'separate-boxes' ? '2px solid #8854C0' : '2px solid transparent',
// // // // //                                 borderRadius: 2,
// // // // //                                 padding: 1,
// // // // //                                 cursor: 'pointer',
// // // // //                               }}
// // // // //                               onClick={() => handleChange({ target: { name: 'selectedOption', value: 'separate-boxes' } })}
// // // // //                             />
// // // // //                             <FormControlLabel
// // // // //                               value="separate-boxes"
// // // // //                               control={<Radio 
// // // // //                                 sx={{
// // // // //                                   color: 'gray', // Default color
// // // // //                                   '&.Mui-checked': {
// // // // //                                     color: 'green', // Color when selected
// // // // //                                   }
// // // // //                                 }}

// // // // //                               />}

// // // // //                             //  MuiButtonBase-root-MuiRadio-root.Mui-checked
// // // // //                               label={
// // // // //                                 <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // // // //                                   Separate boxes
// // // // //                                 </Typography>
// // // // //                               }
// // // // //                             />
// // // // //                           </Grid>
// // // // //                           {/* Single Input Field Option */}
// // // // //                           <Grid
// // // // //                             item
// // // // //                             xs={6}
// // // // //                           >
// // // // //                             <img
// // // // //                               src={single_quizz}
// // // // //                               alt="Single input field"
// // // // //                               data-testid="single-blank-variant-image"
// // // // //                               style={{
// // // // //                                 height: "100px",
// // // // //                                 width: "90%",
// // // // //                                 border: values.selectedOption === 'single-input-field' ? '2px solid #8854C0' : '2px solid transparent',
// // // // //                                 borderRadius: 2,
// // // // //                                 padding: 1,
// // // // //                                 cursor: 'pointer',
// // // // //                               }}
// // // // //                               onClick={() => handleChange({ target: { name: 'selectedOption', value: 'single-input-field' } })}
// // // // //                             />
// // // // //                             <FormControlLabel
// // // // //                               value="single-input-field"
// // // // //                               control={<Radio 
// // // // //                                 sx={{
// // // // //                                   color: 'gray', // Default color
// // // // //                                   '&.Mui-checked': {
// // // // //                                     color: 'green', // Color when selected
// // // // //                                   }
// // // // //                                 }}

// // // // //                               />}
// // // // //                               label={
// // // // //                                 <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // // // //                                   Single input field
// // // // //                                 </Typography>
// // // // //                               }
// // // // //                             />
// // // // //                           </Grid>
// // // // //                         </Grid>
// // // // //                       </RadioGroup>
// // // // //                     </FormControl>
// // // // //                   </Grid>

// // // // //                   {/* Alternative Answers Switch */}
// // // // //                   <CssBaseline />
// // // // //                   <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
// // // // //                     <Typography variant="h6" className="text-sm font-semibold text-dark-2" style={{fontSize:"16px",color:"black"}}>
// // // // //                       Alternative answers
// // // // //                     </Typography>
// // // // //                     <Switch
// // // // //                       checked={alternativeAnswers}
// // // // //                       onChange={(e) => setAlternativeAnswers(e.target.checked)}
// // // // //                       name="alternative-answers"


// // // // //                     />
// // // // //                   </Grid>

// // // // //                   {/* Answer Hints Input */}
// // // // //                   <Grid item xs={12} style={{ paddingTop: "10px" }}>
// // // // //                     <Grid container direction="column" spacing={2}>
// // // // //                       <Grid item>
// // // // //                         <Typography variant="h6" style={{fontSize:"16px",color:'black'}}>
// // // // //                           Answer Hints
// // // // //                         </Typography>
// // // // //                         <Typography variant="body2" style={{ fontSize: "12px",color:"rgb(109 109 109)" }} >
// // // // //                           Write a custom hint to show the students if they're struggling with the answer
// // // // //                         </Typography>
// // // // //                       </Grid>
// // // // //                       <Grid item>
// // // // //                         <Field
// // // // //                           as={TextField}
// // // // //                           fullWidth
// // // // //                           variant="outlined"
// // // // //                           size="small"
// // // // //                           placeholder="Enter your hint here..."
// // // // //                           name="hint"
// // // // //                           value={values.hint}
// // // // //                           onChange={handleChange}
// // // // //                         />
// // // // //                       </Grid>
// // // // //                     </Grid>
// // // // //                   </Grid>

// // // // //                   {/* Show Your Work Switch */}
// // // // //                   <Grid item xs={12}>
// // // // //                     <Grid container direction="column" spacing={1} sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
// // // // //                       <Grid item>
// // // // //                         <Typography variant="h6"  style={{fontSize:"16px",color:"black"}}>
// // // // //                           Show your work
// // // // //                         </Typography>
// // // // //                         <Typography variant="body2" style={{color:"rgb(109 109 109)"}}>
// // // // //                           Students can upload images alongside their answer
// // // // //                         </Typography>
// // // // //                       </Grid>
// // // // //                       <Grid item>
// // // // //                         <Switch
// // // // //                           checked={submitCustomResponse}
// // // // //                           onChange={(e) => setSubmitCustomResponse(e.target.checked)}
// // // // //                           name="submit-custom-response"
// // // // //                         />
// // // // //                       </Grid>
// // // // //                     </Grid>
// // // // //                   </Grid>
// // // // //                 </Grid>
// // // // //               </DialogContent>
// // // // //               <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
// // // // //                 <Button
// // // // //                   onClick={onClose}
// // // // //                   variant="text"
// // // // //                   sx={{
// // // // //                     background: "rgb(249 249 249)",
// // // // //                     color: "black",
// // // // //                     '&:hover': {
// // // // //                       backgroundColor: 'rgb(249 249 249)',
// // // // //                       color: "black",
// // // // //                     },
// // // // //                   }}
// // // // //                 >
// // // // //                   Cancel
// // // // //                 </Button>

// // // // //                 <Button type="submit" variant="contained"

// // // // //                 sx={{
// // // // //                     background: "rgb(136 84 192)",
// // // // //                     color: "white",
// // // // //                     '&:hover': {
// // // // //                       backgroundColor: 'rgb(136 84 192)',
// // // // //                       color: "white",
// // // // //                     },
// // // // //                   }}>
// // // // //                   Save
// // // // //                 </Button>
// // // // //               </DialogActions>
// // // // //             </Form>
// // // // //           )}
// // // // //         </Formik>
// // // // //       </Dialog>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default FillBlankModal;


// // // // import React, { useState } from 'react';
// // // // import {
// // // //   Dialog,
// // // //   DialogTitle,
// // // //   DialogContent,
// // // //   DialogActions,
// // // //   IconButton,
// // // //   Button,
// // // //   Typography,
// // // //   Switch,
// // // //   FormControl,
// // // //   RadioGroup,
// // // //   FormControlLabel,
// // // //   Radio,
// // // //   TextField,
// // // //   Grid,
// // // //   CssBaseline,
// // // // } from '@mui/material';
// // // // import { Close as CloseIcon } from '@mui/icons-material';
// // // // import { LuRectangleHorizontal } from "react-icons/lu";
// // // // import { Formik, Form, Field } from 'formik';

// // // // import separate_quizz from "../../../././../../Assets/Quizz_image.png";
// // // // import single_quizz from "../../../././../../Assets/Quizz_image1.png";

// // // // const FillBlankModal = ({ open, onClose }) => {
// // // //   const [alternativeAnswers, setAlternativeAnswers] = useState(false);
// // // //   const [ignoreAccentMarks, setIgnoreAccentMarks] = useState(false);
// // // //   const [submitCustomResponse, setSubmitCustomResponse] = useState(false);

// // // //   const initialValues = {
// // // //     selectedOption: 'single-input-field',
// // // //     hint: '',
// // // //   };

// // // //   const handleSubmit = (values) => {
// // // //     console.log('Form values:', values);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <Dialog
// // // //         open={open}
// // // //         onClose={onClose}
// // // //         fullWidth
// // // //         maxWidth="md"
// // // //         sx={{
// // // //           overflowX: 'auto',
// // // //           width: "100%",
// // // //           '& .MuiPaper-root': {
// // // //             maxWidth: "650px",
// // // //             '& .MuiDialog-paper': {
// // // //               overflowY: 'visible',
// // // //               width: '70%',
// // // //               maxWidth: "300px",
// // // //               margin: 'auto',
// // // //               borderRadius: 2,
// // // //               background: "white",
// // // //             }
// // // //           },
// // // //           '& .MuiDialog-container': {
// // // //             height: 'auto',
// // // //           },
// // // //           '& .MuiDialog-paper': { borderRadius: 2 }
// // // //         }}
// // // //       >
// // // //         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
// // // //           {({ values, handleChange, setFieldValue }) => (
// // // //             <Form>
// // // //               <IconButton
// // // //                 aria-label="Close"
// // // //                 onClick={onClose}
// // // //                 sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
// // // //               >
// // // //                 <CloseIcon />
// // // //               </IconButton>
// // // //               <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
// // // //                 <Grid
// // // //                   item
// // // //                   sx={{
// // // //                     display: 'flex',
// // // //                     alignItems: 'center',
// // // //                     justifyContent: 'center',
// // // //                     width: 40,
// // // //                     height: 40,
// // // //                     borderRadius: '50%',
// // // //                     backgroundColor: 'rgb(237 230 246)',
// // // //                     color: 'rgb(136 84 192)',
// // // //                     marginRight: 1,
// // // //                   }}
// // // //                 >
// // // //                   <LuRectangleHorizontal />
// // // //                 </Grid>
// // // //                 <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
// // // //                   Fill in the Blank Settings
// // // //                 </Typography>
// // // //               </DialogTitle>
// // // //               <DialogContent dividers sx={{ padding: 4 }}>
// // // //                 <Grid container spacing={4}>
// // // //                   <Grid item alignItems="center" style={{ width: "100%" }}>
// // // //                     <FormControl component="fieldset" fullWidth>
// // // //                       <RadioGroup
// // // //                         name="selectedOption"
// // // //                         value={values.selectedOption}
// // // //                         onChange={(e) => setFieldValue('selectedOption', e.target.value)}
// // // //                       >
// // // //                         <Grid
// // // //                           item
// // // //                           alignItems="center"
// // // //                           style={{
// // // //                             width: "100%",
// // // //                             display: 'flex',
// // // //                             flexDirection: "row",
// // // //                             justifyContent: "space-between",
// // // //                           }}
// // // //                         >
// // // //                           <Grid
// // // //                             item
// // // //                             xs={6}
// // // //                           >
// // // //                             <img
// // // //                               src={separate_quizz}
// // // //                               alt="Separate boxes"
// // // //                               data-testid="box-variant-image"
// // // //                               style={{
// // // //                                 height: "100px",
// // // //                                 width: "90%",
// // // //                                 border: values.selectedOption === 'separate-boxes' ? '2px solid #8854C0' : '2px solid transparent',
// // // //                                 borderRadius: 2,
// // // //                                 padding: 1,
// // // //                                 cursor: 'pointer',
// // // //                               }}
// // // //                               onClick={() => setFieldValue('selectedOption', 'separate-boxes')}
// // // //                             />
// // // //                             <FormControlLabel
// // // //                               value="separate-boxes"
// // // //                               control={<Radio 
// // // //                                 sx={{
// // // //                                   color: 'gray', // Default color
// // // //                                   '&.Mui-checked': {
// // // //                                     color: 'green', // Color when selected
// // // //                                   }
// // // //                                 }}
// // // //                               />}
// // // //                               label={
// // // //                                 <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // // //                                   Separate boxes
// // // //                                 </Typography>
// // // //                               }
// // // //                             />
// // // //                           </Grid>
// // // //                           <Grid
// // // //                             item
// // // //                             xs={6}
// // // //                           >
// // // //                             <img
// // // //                               src={single_quizz}
// // // //                               alt="Single input field"
// // // //                               data-testid="single-blank-variant-image"
// // // //                               style={{
// // // //                                 height: "100px",
// // // //                                 width: "90%",
// // // //                                 border: values.selectedOption === 'single-input-field' ? '2px solid #8854C0' : '2px solid transparent',
// // // //                                 borderRadius: 2,
// // // //                                 padding: 1,
// // // //                                 cursor: 'pointer',
// // // //                               }}
// // // //                               onClick={() => setFieldValue('selectedOption', 'single-input-field')}
// // // //                             />
// // // //                             <FormControlLabel
// // // //                               value="single-input-field"
// // // //                               control={<Radio 
// // // //                                 sx={{
// // // //                                   color: 'gray', // Default color
// // // //                                   '&.Mui-checked': {
// // // //                                     color: 'green', // Color when selected
// // // //                                   }
// // // //                                 }}
// // // //                               />}
// // // //                               label={
// // // //                                 <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // // //                                   Single input field
// // // //                                 </Typography>
// // // //                               }
// // // //                             />
// // // //                           </Grid>
// // // //                         </Grid>
// // // //                       </RadioGroup>
// // // //                     </FormControl>
// // // //                   </Grid>

// // // //                   <CssBaseline />
// // // //                   <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
// // // //                     <Typography variant="h6" className="text-sm font-semibold text-dark-2" style={{fontSize:"16px",color:"black"}}>
// // // //                       Alternative answers
// // // //                     </Typography>
// // // //                     <Switch
// // // //                       checked={alternativeAnswers}
// // // //                       onChange={(e) => setAlternativeAnswers(e.target.checked)}
// // // //                       name="alternative-answers"
// // // //                     />
// // // //                   </Grid>

// // // //                   <Grid item xs={12} style={{ paddingTop: "10px" }}>
// // // //                     <Grid container direction="column" spacing={2}>
// // // //                       <Grid item>
// // // //                         <Typography variant="h6" style={{fontSize:"16px",color:'black'}}>
// // // //                           Answer Hints
// // // //                         </Typography>
// // // //                         <Typography variant="body2" style={{ fontSize: "12px",color:"rgb(109 109 109)" }} >
// // // //                           Write a custom hint to show the students if they're struggling with the answer
// // // //                         </Typography>
// // // //                       </Grid>
// // // //                       <Grid item>
// // // //                         <Field
// // // //                           as={TextField}
// // // //                           fullWidth
// // // //                           variant="outlined"
// // // //                           size="small"
// // // //                           placeholder="Enter your hint here..."
// // // //                           name="hint"
// // // //                           value={values.hint}
// // // //                           onChange={handleChange}
// // // //                         />
// // // //                       </Grid>
// // // //                     </Grid>
// // // //                   </Grid>

// // // //                   <Grid item xs={12}>
// // // //                     <Grid container direction="column" spacing={1} sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
// // // //                       <Grid item>
// // // //                         <Typography variant="h6"  style={{fontSize:"16px",color:"black"}}>
// // // //                           Show your work
// // // //                         </Typography>
// // // //                         <Typography variant="body2" style={{color:"rgb(109 109 109)"}}>
// // // //                           Students can upload images alongside their answer
// // // //                         </Typography>
// // // //                       </Grid>
// // // //                       <Grid item>
// // // //                         <Switch
// // // //                           checked={submitCustomResponse}
// // // //                           onChange={(e) => setSubmitCustomResponse(e.target.checked)}
// // // //                           name="submit-custom-response"
// // // //                         />
// // // //                       </Grid>
// // // //                     </Grid>
// // // //                   </Grid>
// // // //                 </Grid>
// // // //               </DialogContent>
// // // //               <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
// // // //                 <Button
// // // //                   onClick={onClose}
// // // //                   variant="text"
// // // //                   sx={{
// // // //                     background: "rgb(249 249 249)",
// // // //                     color: "black",
// // // //                     '&:hover': {
// // // //                       backgroundColor: 'rgb(249 249 249)',
// // // //                       color: "black",
// // // //                     },
// // // //                   }}
// // // //                 >
// // // //                   Cancel
// // // //                 </Button>

// // // //                 <Button type="submit" variant="contained"
// // // //                   sx={{
// // // //                     background: "rgb(136 84 192)",
// // // //                     color: "white",
// // // //                     '&:hover': {
// // // //                       backgroundColor: 'rgb(136 84 192)',
// // // //                       color: "white",
// // // //                     },
// // // //                   }}>
// // // //                   Save
// // // //                 </Button>
// // // //               </DialogActions>
// // // //             </Form>
// // // //           )}
// // // //         </Formik>
// // // //       </Dialog>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FillBlankModal;

// // // import React, { useState } from 'react';
// // // import {
// // //   Dialog,
// // //   DialogTitle,
// // //   DialogContent,
// // //   DialogActions,
// // //   IconButton,
// // //   Button,
// // //   Typography,
// // //   Switch,
// // //   FormControl,
// // //   RadioGroup,
// // //   FormControlLabel,
// // //   Radio,
// // //   TextField,
// // //   Grid,
// // //   CssBaseline,
// // //   Tooltip,
// // // } from '@mui/material';
// // // import { Close as CloseIcon, Info } from '@mui/icons-material';
// // // import { LuRectangleHorizontal } from "react-icons/lu";
// // // import { Formik, Form, Field } from 'formik';

// // // import separate_quizz from "../../../././../../Assets/Quizz_image.png";
// // // import single_quizz from "../../../././../../Assets/Quizz_image1.png";

// // // const FillBlankModal = ({ open, onClose ,options,setOptions,setAlternativeAnswers,alternativeAnswers}) => {
// // //   // const [alternativeAnswers, setAlternativeAnswers] = useState(false);
// // //   const [ignoreAccentMarks, setIgnoreAccentMarks] = useState(false);
// // //   const [submitCustomResponse, setSubmitCustomResponse] = useState(false);
// // //   console.log(alternativeAnswers,"alternativeAnswers......")

// // //   const initialValues = {
// // //     selectedOption: 'seperate-boxes',
// // //     hint: '',
// // //   };



// // //   const handleSubmit = (values) => {
// // //     console.log('Form values:', values);
// // //     // setoptions(values.selectedOption)
// // //     setOptions(values.selectedOption);
// // //     onClose()
// // //   };

// // //   return (
// // //     <div>
// // //       <Dialog
// // //         open={open}
// // //         onClose={onClose}
// // //         fullWidth
// // //         maxWidth="md"
// // //         sx={{
// // //           overflowX: 'auto',
// // //           width: "100%",
// // //           '& .MuiPaper-root': {
// // //             maxWidth: "650px",
// // //             '& .MuiDialog-paper': {
// // //               overflowY: 'visible',
// // //               width: '70%',
// // //               maxWidth: "300px",
// // //               margin: 'auto',
// // //               borderRadius: 2,
// // //               background: "white",
// // //             }
// // //           },
// // //           '& .MuiDialog-container': {
// // //             height: 'auto',
// // //           },
// // //           '& .MuiDialog-paper': { borderRadius: 2 }
// // //         }}
// // //       >
// // //         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
// // //           {({ values, handleChange, setFieldValue }) => (
// // //             <Form>
// // //               <IconButton
// // //                 aria-label="Close"
// // //                 onClick={onClose}
// // //                 sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
// // //               >
// // //                 <CloseIcon />
// // //               </IconButton>
// // //               <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
// // //                 <Grid
// // //                   item
// // //                   sx={{
// // //                     display: 'flex',
// // //                     alignItems: 'center',
// // //                     justifyContent: 'center',
// // //                     width: 40,
// // //                     height: 40,
// // //                     borderRadius: '50%',
// // //                     backgroundColor: 'rgb(237 230 246)',
// // //                     color: 'rgb(136 84 192)',
// // //                     marginRight: 1,
// // //                   }}
// // //                 >
// // //                   <LuRectangleHorizontal />
// // //                 </Grid>
// // //                 <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
// // //                   Fill in the Blank Settings
// // //                 </Typography>
// // //               </DialogTitle>
// // //               <DialogContent dividers sx={{ padding: 4 }}>
// // //                 <Grid container spacing={4}>
// // //                   <Grid item alignItems="center" style={{ width: "100%" }}>
// // //                     <FormControl component="fieldset" fullWidth>
// // //                       <RadioGroup
// // //                         name="selectedOption"
// // //                         value={values.selectedOption}
// // //                         onChange={(e) => setFieldValue('selectedOption', e.target.value)}
// // //                       >
// // //                         <Grid
// // //                           item
// // //                           alignItems="center"
// // //                           style={{
// // //                             width: "100%",
// // //                             display: 'flex',
// // //                             flexDirection: "row",
// // //                             justifyContent: "space-between",
// // //                             borderBottom: '1px solid rgb(229 229 229)', // Custom bottom border color
// // //                             paddingBottom: '10px', // Space below the border
// // //                           }}
// // //                         >
// // //                           <Grid
// // //                             item
// // //                             xs={6}
// // //                           >
// // //                             <img
// // //                               src={separate_quizz}
// // //                               alt="Separate boxes"
// // //                               data-testid="box-variant-image"
// // //                               style={{
// // //                                 height: "100px",
// // //                                 width: "90%",
// // //                                 border: values.selectedOption === 'separate-boxes' && !alternativeAnswers ? '2px solid #8854C0' : '2px solid transparent',
// // //                                 borderRadius: 2,
// // //                                 padding: 1,
// // //                                 cursor: alternativeAnswers ? 'not-allowed' : 'pointer',
// // //                                 opacity: alternativeAnswers ? 0.5 : 1, // Optional: visually indicate disabled state
// // //                               }}
// // //                               onClick={() => !alternativeAnswers && setFieldValue('selectedOption', 'separate-boxes')}
// // //                             />
// // //                             <FormControlLabel
// // //                               value="separate-boxes"
// // //                               control={<Radio
// // //                                 sx={{
// // //                                   color: 'gray', // Default color
// // //                                   cursor: alternativeAnswers ? 'not-allowed' : 'pointer',
// // //                                   opacity: alternativeAnswers ? 0.5 : 1,
// // //                                   '&.Mui-checked': {
// // //                                     color: 'green', // Color when selected
// // //                                   },
// // //                                   '&.Mui-disabled': {
// // //                                     color: 'gray', // Color when disabled
// // //                                   }
// // //                                 }}
// // //                                 disabled={alternativeAnswers}
// // //                               />}
// // //                               label={
// // //                                 <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // //                                   Separate boxes
// // //                                 </Typography>
// // //                               }
// // //                             />
// // //                           </Grid>
// // //                           <Grid
// // //                             item
// // //                             xs={6}
// // //                           >
// // //                             <img
// // //                               src={single_quizz}
// // //                               alt="Single input field"
// // //                               data-testid="single-blank-variant-image"
// // //                               style={{
// // //                                 height: "100px",
// // //                                 width: "90%",
// // //                                 border: values.selectedOption === 'single-input-field' ? '2px solid #8854C0' : '2px solid transparent',
// // //                                 borderRadius: 2,
// // //                                 padding: 1,
// // //                                 cursor: 'pointer',
// // //                               }}
// // //                               onClick={() => setFieldValue('selectedOption', 'single-input-field')}
// // //                             />
// // //                             <FormControlLabel
// // //                               value="single-input-field"
// // //                               control={<Radio
// // //                                 sx={{
// // //                                   color: 'gray', // Default color
// // //                                   '&.Mui-checked': {
// // //                                     color: 'green', // Color when selected
// // //                                   }
// // //                                 }}
// // //                               />}
// // //                               label={
// // //                                 <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // //                                   Single input field
// // //                                 </Typography>
// // //                               }
// // //                             />
// // //                           </Grid>
// // //                         </Grid>
// // //                       </RadioGroup>
// // //                     </FormControl>
// // //                   </Grid>

                  
// // //                   <Grid item xs={12} >
// // //                     <Grid item xs={12} sx={{ borderBottom: '1px solid rgb(229 229 229)', paddingBottom: '10px' }}>
// // //                       <Grid
// // //                         container
// // //                         alignItems="center"
// // //                         justifyContent="space-between"

// // //                       >
// // //                         <Grid sx={{ display: "flex", flexDirection: "row" }}>
// // //                           <Typography variant="h6" sx={{ fontSize: "16px", color: "black" }}>
// // //                             Alternative answers
// // //                           </Typography>

// // //                         </Grid>

// // //                         {/* Container for Switch and conditionally rendered items */}
// // //                         <Grid container item xs="auto" direction="column" alignItems="flex-end">
// // //                           {/* Switch Button */}
// // //                           <Switch
// // //                             checked={alternativeAnswers}
// // //                             onChange={(e) => setAlternativeAnswers(e.target.checked)}
// // //                             name="alternative-answers"
// // //                           />

// // //                           {/* Conditionally render the info section below the switch */}

// // //                         </Grid>


// // //                       </Grid>{alternativeAnswers && (
// // //                         <>
// // //                           <Grid item sx={{ display: "flex" }}>

// // //                             <Tooltip title="When this setting is on, only a Single input field can be used." >

// // //                               <Info fontSize="small" sx={{ color: 'gray', margintop: "10x" }} />

// // //                             </Tooltip>

// // //                             <Typography variant="body2" sx={{ color: 'gray', fontSize: '12px', }}>
// // //                               When this setting is on, only a Single input field can be used.
// // //                             </Typography>

// // //                           </Grid>
// // //                         </>
// // //                       )}

// // //                     </Grid>
// // //                   </Grid>



// // //                   <Grid item xs={12} style={{ paddingTop: "10px" }}>
// // //                     <Grid container direction="column" spacing={2} style={{ borderBottom: '1px solid rgb(229 229 229)', paddingBottom: "10px" }}>
// // //                       <Grid item>
// // //                         <Typography variant="h6" style={{ fontSize: "16px", color: 'black' }}>
// // //                           Answer Hints
// // //                         </Typography>
// // //                         <Typography variant="body2" style={{ fontSize: "12px", color: "rgb(109 109 109)" }} >
// // //                           Write a custom hint to show the students if they're struggling with the answer
// // //                         </Typography>
// // //                       </Grid>
// // //                       <Grid item>
// // //                         <Field
// // //                           as={TextField}
// // //                           fullWidth
// // //                           variant="outlined"
// // //                           size="small"
// // //                           placeholder="Enter your hint here..."
// // //                           name="hint"
// // //                           value={values.hint}
// // //                           onChange={handleChange}
// // //                         />
// // //                       </Grid>
// // //                     </Grid>
// // //                   </Grid>

// // //                   <Grid item xs={12}>
// // //                     <Grid container direction="column" spacing={1} sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
// // //                       <Grid item>
// // //                         <Typography variant="h6" style={{ fontSize: "16px", color: "black" }}>
// // //                           Show your work
// // //                         </Typography>
// // //                         <Typography variant="body2" style={{ color: "rgb(109 109 109)" }}>
// // //                           Students can upload images alongside their answer
// // //                         </Typography>
// // //                       </Grid>
// // //                       <Grid item>
// // //                         <Switch
// // //                           checked={submitCustomResponse}
// // //                           onChange={(e) => setSubmitCustomResponse(e.target.checked)}
// // //                           name="submit-custom-response"
// // //                         />
// // //                       </Grid>
// // //                     </Grid>
// // //                   </Grid>
// // //                 </Grid>
// // //               </DialogContent>
// // //               <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
// // //                 <Button
// // //                   onClick={onClose}
// // //                   variant="text"
// // //                   sx={{
// // //                     background: "rgb(249 249 249)",
// // //                     color: "black",
// // //                     '&:hover': {
// // //                       backgroundColor: 'rgb(249 249 249)',
// // //                       color: "black",
// // //                     },
// // //                   }}
// // //                 >
// // //                   Cancel
// // //                 </Button>

// // //                 <Button type='submit' variant="contained"
// // //                   sx={{
// // //                     background: "rgb(136 84 192)",
// // //                     color: "white",
// // //                     '&:hover': {
// // //                       backgroundColor: 'rgb(136 84 192)',
// // //                       color: "white",
// // //                     },
// // //                   }}>
// // //                   Save
// // //                 </Button>
// // //               </DialogActions>
// // //             </Form>
// // //           )}
// // //         </Formik>
// // //       </Dialog>
// // //     </div>
// // //   );
// // // };

// // // export default FillBlankModal;


// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   Dialog,
// // //   DialogTitle,
// // //   DialogContent,
// // //   DialogActions,
// // //   IconButton,
// // //   Button,
// // //   Typography,
// // //   Switch,
// // //   FormControl,
// // //   RadioGroup,
// // //   FormControlLabel,
// // //   Radio,
// // //   TextField,
// // //   Grid,
// // //   Tooltip,
// // // } from '@mui/material';
// // // import { Close as CloseIcon, Info } from '@mui/icons-material';
// // // import { LuRectangleHorizontal } from "react-icons/lu";
// // // import { Formik, Form, Field } from 'formik';

// // // import separate_quizz from "../../../././../../Assets/Quizz_image.png";
// // // import single_quizz from "../../../././../../Assets/Quizz_image1.png";

// // // const FillBlankModal = ({ open, onClose, options, setOptions, setAlternativeAnswers, alternativeAnswers }) => {
// // //   const [ignoreAccentMarks, setIgnoreAccentMarks] = useState(false);
// // //   const [submitCustomResponse, setSubmitCustomResponse] = useState(false);

// // //   const initialValues = {
// // //     selectedOption: 'separate-boxes',
// // //     hint: '',
// // //   };

// // //   const handleSubmit = (values) => {
// // //     console.log('Form values:', values);
// // //     setOptions(values.selectedOption);
// // //     onClose();
// // //   };

// // //   useEffect(() => {
// // //     // Reset the selectedOption to default when alternativeAnswers is toggled
// // //     if (alternativeAnswers && initialValues.selectedOption === 'separate-boxes') {
// // //       setOptions('single-input-field');
// // //     }
// // //   }, [alternativeAnswers, setOptions]);

// // //   return (
// // //     <Dialog
// // //       open={open}
// // //       onClose={onClose}
// // //       fullWidth
// // //       maxWidth="md"
// // //       sx={{
// // //         overflowX: 'auto',
// // //         width: "100%",
// // //         '& .MuiPaper-root': {
// // //           maxWidth: "650px",
// // //           '& .MuiDialog-paper': {
// // //             overflowY: 'visible',
// // //             width: '70%',
// // //             maxWidth: "300px",
// // //             margin: 'auto',
// // //             borderRadius: 2,
// // //             background: "white",
// // //           }
// // //         },
// // //         '& .MuiDialog-container': {
// // //           height: 'auto',
// // //         },
// // //         '& .MuiDialog-paper': { borderRadius: 2 }
// // //       }}
// // //     >
// // //       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
// // //         {({ values, handleChange, setFieldValue }) => (
// // //           <Form>
// // //             <IconButton
// // //               aria-label="Close"
// // //               onClick={onClose}
// // //               sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
// // //             >
// // //               <CloseIcon />
// // //             </IconButton>
// // //             <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
// // //               <Grid
// // //                 item
// // //                 sx={{
// // //                   display: 'flex',
// // //                   alignItems: 'center',
// // //                   justifyContent: 'center',
// // //                   width: 40,
// // //                   height: 40,
// // //                   borderRadius: '50%',
// // //                   backgroundColor: 'rgb(237 230 246)',
// // //                   color: 'rgb(136 84 192)',
// // //                   marginRight: 1,
// // //                 }}
// // //               >
// // //                 <LuRectangleHorizontal />
// // //               </Grid>
// // //               <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
// // //                 Fill in the Blank Settings
// // //               </Typography>
// // //             </DialogTitle>
// // //             <DialogContent dividers sx={{ padding: 4 }}>
// // //               <Grid container spacing={4}>
// // //                 <Grid item alignItems="center" style={{ width: "100%" }}>
// // //                   <FormControl component="fieldset" fullWidth>
// // //                     <RadioGroup
// // //                       name="selectedOption"
// // //                       value={values.selectedOption}
// // //                       onChange={(e) => setFieldValue('selectedOption', e.target.value)}
// // //                     >
// // //                       <Grid
// // //                         item
// // //                         alignItems="center"
// // //                         style={{
// // //                           width: "100%",
// // //                           display: 'flex',
// // //                           flexDirection: "row",
// // //                           justifyContent: "space-between",
// // //                           borderBottom: '1px solid rgb(229 229 229)',
// // //                           paddingBottom: '10px',
// // //                         }}
// // //                       >
// // //                         <Grid item xs={6}>
// // //                           <img
// // //                             src={separate_quizz}
// // //                             alt="Separate boxes"
// // //                             data-testid="box-variant-image"
// // //                             style={{
// // //                               height: "100px",
// // //                               width: "90%",
// // //                               border: values.selectedOption === 'separate-boxes' && !alternativeAnswers ? '2px solid #8854C0' : '2px solid transparent',
// // //                               borderRadius: 2,
// // //                               padding: 1,
// // //                               cursor: alternativeAnswers ? 'not-allowed' : 'pointer',
// // //                               opacity: alternativeAnswers ? 0.5 : 1,
// // //                             }}
// // //                             onClick={() => !alternativeAnswers && setFieldValue('selectedOption', 'separate-boxes')}
// // //                           />
// // //                           <FormControlLabel
// // //                             value="separate-boxes"
// // //                             control={<Radio
// // //                               sx={{
// // //                                 color: 'gray',
// // //                                 cursor: alternativeAnswers ? 'not-allowed' : 'pointer',
// // //                                 opacity: alternativeAnswers ? 0.5 : 1,
// // //                                 '&.Mui-checked': {
// // //                                   color: 'green',
// // //                                 },
// // //                                 '&.Mui-disabled': {
// // //                                   color: 'gray',
// // //                                 }
// // //                               }}
// // //                               disabled={alternativeAnswers}
// // //                             />}
// // //                             label={
// // //                               <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // //                                 Separate boxes
// // //                               </Typography>
// // //                             }
// // //                           />
// // //                         </Grid>
// // //                         <Grid item xs={6}>
// // //                           <img
// // //                             src={single_quizz}
// // //                             alt="Single input field"
// // //                             data-testid="single-blank-variant-image"
// // //                             style={{
// // //                               height: "100px",
// // //                               width: "90%",
// // //                               border: values.selectedOption === 'single-input-field' ? '2px solid #8854C0' : '2px solid transparent',
// // //                               borderRadius: 2,
// // //                               padding: 1,
// // //                               cursor: 'pointer',
// // //                             }}
// // //                             onClick={() => setFieldValue('selectedOption', 'single-input-field')}
// // //                           />
// // //                           <FormControlLabel
// // //                             value="single-input-field"
// // //                             control={<Radio
// // //                               sx={{
// // //                                 color: 'gray',
// // //                                 '&.Mui-checked': {
// // //                                   color: 'green',
// // //                                 }
// // //                               }}
// // //                             />}
// // //                             label={
// // //                               <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// // //                                 Single input field
// // //                               </Typography>
// // //                             }
// // //                           />
// // //                         </Grid>
// // //                       </Grid>
// // //                     </RadioGroup>
// // //                   </FormControl>
// // //                 </Grid>

// // //                 <Grid item xs={12}>
// // //                   <Grid item xs={12} sx={{ borderBottom: '1px solid rgb(229 229 229)', paddingBottom: '10px' }}>
// // //                     <Grid container alignItems="center" justifyContent="space-between">
// // //                       <Grid sx={{ display: "flex", flexDirection: "row" }}>
// // //                         <Typography variant="h6" sx={{ fontSize: "16px", color: "black" }}>
// // //                           Alternative answers
// // //                         </Typography>
// // //                       </Grid>
// // //                       <Grid container item xs="auto" direction="column" alignItems="flex-end">
// // //                         <Switch
// // //                           checked={alternativeAnswers}
// // //                           onChange={(e) => setAlternativeAnswers(e.target.checked)}
// // //                           name="alternative-answers"
// // //                         />
// // //                       </Grid>
// // //                     </Grid>
// // //                     {alternativeAnswers && (
// // //                       <>
// // //                         <Grid item sx={{ display: "flex" }}>
// // //                           <Tooltip title="When this setting is on, only a Single input field can be used.">
// // //                             <Info fontSize="small" sx={{ color: 'gray', marginTop: "10px" }} />
// // //                           </Tooltip>
// // //                           <Typography variant="body2" sx={{ color: 'gray', fontSize: '12px' }}>
// // //                             When this setting is on, only a Single input field can be used.
// // //                           </Typography>
// // //                         </Grid>
// // //                       </>
// // //                     )}
// // //                   </Grid>
// // //                 </Grid>

// // //                 <Grid item xs={12} style={{ paddingTop: "10px" }}>
// // //                   <Grid container direction="column" spacing={2} style={{ borderBottom: '1px solid rgb(229 229 229)', paddingBottom: "10px" }}>
// // //                     <Grid item>
// // //                       <Typography variant="h6" style={{ fontSize: "16px", color: 'black' }}>
// // //                         Answer Hints
// // //                       </Typography>
// // //                       <Typography variant="body2" style={{ fontSize: "12px", color: "rgb(109 109 109)" }}>
// // //                         Write a custom hint to show the students if they're struggling with the answer
// // //                       </Typography>
// // //                     </Grid>
// // //                     <Grid item>
// // //                       <Field
// // //                         as={TextField}
// // //                         fullWidth
// // //                         variant="outlined"
// // //                         size="small"
// // //                         placeholder="Enter your hint here..."
// // //                         name="hint"
// // //                         value={values.hint}
// // //                         onChange={handleChange}
// // //                       />
// // //                     </Grid>
// // //                   </Grid>
// // //                 </Grid>

// // //                 <Grid item xs={12}>
// // //                   <Grid container direction="column" spacing={1} sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
// // //                     <Grid item>
// // //                       <Typography variant="h6" style={{ fontSize: "16px", color: "black" }}>
// // //                         Show your work
// // //                       </Typography>
// // //                       <Typography variant="body2" style={{ color: "rgb(109 109 109)" }}>
// // //                         Students can upload images alongside their answer
// // //                       </Typography>
// // //                     </Grid>
// // //                     <Grid item>
// // //                       <Switch
// // //                         checked={submitCustomResponse}
// // //                         onChange={(e) => setSubmitCustomResponse(e.target.checked)}
// // //                         name="submit-custom-response"
// // //                       />
// // //                     </Grid>
// // //                   </Grid>
// // //                 </Grid>
// // //               </Grid>
// // //             </DialogContent>
// // //             <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
// // //               <Button
// // //                 onClick={onClose}
// // //                 variant="text"
// // //                 sx={{
// // //                   background: "rgb(249 249 249)",
// // //                   color: "black",
// // //                   '&:hover': {
// // //                     backgroundColor: 'rgb(249 249 249)',
// // //                     color: "black",
// // //                   },
// // //                 }}
// // //               >
// // //                 Cancel
// // //               </Button>

// // //               <Button type='submit' variant="contained"
// // //                 sx={{
// // //                   background: "rgb(136 84 192)",
// // //                   color: "white",
// // //                   '&:hover': {
// // //                     backgroundColor: 'rgb(136 84 192)',
// // //                     color: "white",
// // //                   },
// // //                 }}>
// // //                 Save
// // //               </Button>
// // //             </DialogActions>
// // //           </Form>
// // //         )}
// // //       </Formik>
// // //     </Dialog>
// // //   );
// // // };

// // // export default FillBlankModal;


// // import React, { useState, useEffect } from 'react';
// // import {
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   IconButton,
// //   Button,
// //   Typography,
// //   Switch,
// //   FormControl,
// //   RadioGroup,
// //   FormControlLabel,
// //   Radio,
// //   TextField,
// //   Grid,
// //   Tooltip,
// // } from '@mui/material';
// // import { Close as CloseIcon, Info } from '@mui/icons-material';
// // import { LuRectangleHorizontal } from "react-icons/lu";
// // import { Formik, Form, Field } from 'formik';

// // import separate_quizz from "../../../././../../Assets/Quizz_image.png";
// // import single_quizz from "../../../././../../Assets/Quizz_image1.png";

// // const FillBlankModal = ({ open, onClose, options, setOptions, setAlternativeAnswers, alternativeAnswers }) => {
// //   const [localAlternativeAnswers, setLocalAlternativeAnswers] = useState(alternativeAnswers);
// //   const [submitCustomResponse, setSubmitCustomResponse] = useState(false);

// //   const initialValues = {
// //     selectedOption: 'separate-boxes',
// //     hint: '',
// //   };

// //   const handleSubmit = (values) => {
// //     console.log('Form values:', values);
// //     setOptions(values.selectedOption);
// //     setAlternativeAnswers(localAlternativeAnswers); // Update the alternativeAnswers state here
// //     onClose();
// //   };

// //   useEffect(() => {
// //     // Reset the selectedOption to default when alternativeAnswers is toggled
// //     if (alternativeAnswers && initialValues.selectedOption === 'separate-boxes') {
// //       setOptions('single-input-field');
// //     }
// //   }, [alternativeAnswers, setOptions]);

// //   return (
// //     <Dialog
// //       open={open}
// //       onClose={onClose}
// //       fullWidth
// //       maxWidth="md"
// //       sx={{
// //         overflowX: 'auto',
// //         width: "100%",
// //         '& .MuiPaper-root': {
// //           maxWidth: "650px",
// //           '& .MuiDialog-paper': {
// //             overflowY: 'visible',
// //             width: '70%',
// //             maxWidth: "300px",
// //             margin: 'auto',
// //             borderRadius: 2,
// //             background: "white",
// //           }
// //         },
// //         '& .MuiDialog-container': {
// //           height: 'auto',
// //         },
// //         '& .MuiDialog-paper': { borderRadius: 2 }
// //       }}
// //     >
// //       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
// //         {({ values, handleChange, setFieldValue }) => (
// //           <Form>
// //             <IconButton
// //               aria-label="Close"
// //               onClick={onClose}
// //               sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
// //             >
// //               <CloseIcon />
// //             </IconButton>
// //             <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
// //               <Grid
// //                 item
// //                 sx={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   width: 40,
// //                   height: 40,
// //                   borderRadius: '50%',
// //                   backgroundColor: 'rgb(237 230 246)',
// //                   color: 'rgb(136 84 192)',
// //                   marginRight: 1,
// //                 }}
// //               >
// //                 <LuRectangleHorizontal />
// //               </Grid>
// //               <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
// //                 Fill in the Blank Settings
// //               </Typography>
// //             </DialogTitle>
// //             <DialogContent dividers sx={{ padding: 4 }}>
// //               <Grid container spacing={4}>
// //                 <Grid item alignItems="center" style={{ width: "100%" }}>
// //                   <FormControl component="fieldset" fullWidth>
// //                     <RadioGroup
// //                       name="selectedOption"
// //                       value={values.selectedOption}
// //                       onChange={(e) => setFieldValue('selectedOption', e.target.value)}
// //                     >
// //                       <Grid
// //                         item
// //                         alignItems="center"
// //                         style={{
// //                           width: "100%",
// //                           display: 'flex',
// //                           flexDirection: "row",
// //                           justifyContent: "space-between",
// //                           borderBottom: '1px solid rgb(229 229 229)',
// //                           paddingBottom: '10px',
// //                         }}
// //                       >
// //                         <Grid item xs={6}>
// //                           <img
// //                             src={separate_quizz}
// //                             alt="Separate boxes"
// //                             data-testid="box-variant-image"
// //                             style={{
// //                               height: "100px",
// //                               width: "90%",
// //                               border: values.selectedOption === 'separate-boxes' && !alternativeAnswers ? '2px solid #8854C0' : '2px solid transparent',
// //                               borderRadius: 2,
// //                               padding: 1,
// //                               cursor: alternativeAnswers ? 'not-allowed' : 'pointer',
// //                               opacity: alternativeAnswers ? 0.5 : 1,
// //                             }}
// //                             onClick={() => !alternativeAnswers && setFieldValue('selectedOption', 'separate-boxes')}
// //                           />
// //                           <FormControlLabel
// //                             value="separate-boxes"
// //                             control={<Radio
// //                               sx={{
// //                                 color: 'gray',
// //                                 cursor: alternativeAnswers ? 'not-allowed' : 'pointer',
// //                                 opacity: alternativeAnswers ? 0.5 : 1,
// //                                 '&.Mui-checked': {
// //                                   color: 'green',
// //                                 },
// //                                 '&.Mui-disabled': {
// //                                   color: 'gray',
// //                                 }
// //                               }}
// //                               disabled={alternativeAnswers}
// //                             />}
// //                             label={
// //                               <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// //                                 Separate boxes
// //                               </Typography>
// //                             }
// //                           />
// //                         </Grid>
// //                         <Grid item xs={6}>
// //                           <img
// //                             src={single_quizz}
// //                             alt="Single input field"
// //                             data-testid="single-blank-variant-image"
// //                             style={{
// //                               height: "100px",
// //                               width: "90%",
// //                               border: values.selectedOption === 'single-input-field' ? '2px solid #8854C0' : '2px solid transparent',
// //                               borderRadius: 2,
// //                               padding: 1,
// //                               cursor: 'pointer',
// //                             }}
// //                             onClick={() => setFieldValue('selectedOption', 'single-input-field')}
// //                           />
// //                           <FormControlLabel
// //                             value="single-input-field"
// //                             control={<Radio
// //                               sx={{
// //                                 color: 'gray',
// //                                 '&.Mui-checked': {
// //                                   color: 'green',
// //                                 }
// //                               }}
// //                             />}
// //                             label={
// //                               <Typography variant="body2" className="text-sm font-semibold text-dark-2">
// //                                 Single input field
// //                               </Typography>
// //                             }
// //                           />
// //                         </Grid>
// //                       </Grid>
// //                     </RadioGroup>
// //                   </FormControl>
// //                 </Grid>

// //                 <Grid item xs={12}>
// //                   <Grid item xs={12} sx={{ borderBottom: '1px solid rgb(229 229 229)', paddingBottom: '10px' }}>
// //                     <Grid container alignItems="center" justifyContent="space-between">
// //                       <Grid sx={{ display: "flex", flexDirection: "row" }}>
// //                         <Typography variant="h6" sx={{ fontSize: "16px", color: "black" }}>
// //                           Alternative answers
// //                         </Typography>
// //                       </Grid>
// //                       <Grid container item xs="auto" direction="column" alignItems="flex-end">
// //                         <Switch
// //                           checked={localAlternativeAnswers}
// //                           onChange={(e) => setLocalAlternativeAnswers(e.target.checked)}
// //                           name="alternative-answers"
// //                         />
// //                       </Grid>
// //                     </Grid>
// //                     {localAlternativeAnswers && (
// //                       <>
// //                         <Grid item sx={{ display: "flex" }}>
// //                           <Tooltip title="When this setting is on, only a Single input field can be used.">
// //                             <Info fontSize="small" sx={{ color: 'gray', marginTop: "10px" }} />
// //                           </Tooltip>
// //                           <Typography variant="body2" sx={{ color: 'gray', fontSize: '12px' }}>
// //                             When this setting is on, only a Single input field can be used.
// //                           </Typography>
// //                         </Grid>
// //                       </>
// //                     )}
// //                   </Grid>
// //                 </Grid>

// //                 <Grid item xs={12} style={{ paddingTop: "10px" }}>
// //                   <Grid container direction="column" spacing={2} style={{ borderBottom: '1px solid rgb(229 229 229)', paddingBottom: "10px" }}>
// //                     <Grid item>
// //                       <Typography variant="h6" style={{ fontSize: "16px", color: 'black' }}>
// //                         Answer Hints
// //                       </Typography>
// //                       <Typography variant="body2" style={{ fontSize: "12px", color: "rgb(109 109 109)" }}>
// //                         Write a custom hint to show the students if they're struggling with the answer
// //                       </Typography>
// //                     </Grid>
// //                     <Grid item>
// //                       <Field
// //                         as={TextField}
// //                         fullWidth
// //                         variant="outlined"
// //                         size="small"
// //                         placeholder="Enter your hint here..."
// //                         name="hint"
// //                         value={values.hint}
// //                         onChange={handleChange}
// //                       />
// //                     </Grid>
// //                   </Grid>
// //                 </Grid>

// //                 <Grid item xs={12}>
// //                   <Grid container direction="column" spacing={1} sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
// //                     <Grid item>
// //                       <Typography variant="h6" style={{ fontSize: "16px", color: "black" }}>
// //                         Show your work
// //                       </Typography>
// //                       <Typography variant="body2" style={{ color: "rgb(109 109 109)" }}>
// //                         Students can upload images alongside their answer
// //                       </Typography>
// //                     </Grid>
// //                     <Grid item>
// //                       <Switch
// //                         checked={submitCustomResponse}
// //                         onChange={(e) => setSubmitCustomResponse(e.target.checked)}
// //                         name="submit-custom-response"
// //                       />
// //                     </Grid>
// //                   </Grid>
// //                 </Grid>
// //               </Grid>
// //             </DialogContent>
// //             <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
// //               <Button
// //                 onClick={onClose}
// //                 variant="text"
// //                 sx={{
// //                   background: "rgb(249 249 249)",
// //                   color: "black",
// //                   '&:hover': {
// //                     backgroundColor: 'rgb(249 249 249)',
// //                     color: "black",
// //                   },
// //                 }}
// //               >
// //                 Cancel
// //               </Button>

// //               <Button type='submit' variant="contained"
// //                 sx={{
// //                   background: "rgb(136 84 192)",
// //                   color: "white",
// //                   '&:hover': {
// //                     backgroundColor: 'rgb(136 84 192)',
// //                     color: "white",
// //                   },
// //                 }}>
// //                 Save
// //               </Button>
// //             </DialogActions>
// //           </Form>
// //         )}
// //       </Formik>
// //     </Dialog>
// //   );
// // };

// // export default FillBlankModal;


// import React, { useState, useEffect } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   Button,
//   Typography,
//   Switch,
//   FormControl,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   TextField,
//   Grid,
//   Tooltip,
// } from '@mui/material';
// import { Close as CloseIcon, Info } from '@mui/icons-material';
// import { LuRectangleHorizontal } from "react-icons/lu";
// import { Formik, Form, Field } from 'formik';

// import separate_quizz from "../../../././../../Assets/Quizz_image.png";
// import single_quizz from "../../../././../../Assets/Quizz_image1.png";

// const FillBlankModal = ({ open, onClose, options, setOptions, setAlternativeAnswers, alternativeAnswers }) => {
//   const [localAlternativeAnswers, setLocalAlternativeAnswers] = useState(alternativeAnswers);
//   const [submitCustomResponse, setSubmitCustomResponse] = useState(false);

//   const initialValues = {
//     selectedOption: 'separate-boxes',
//     hint: '',
//   };

//   const handleSubmit = (values) => {
//     console.log('Form values:', values);
//     setOptions(values.selectedOption);
//     setAlternativeAnswers(localAlternativeAnswers);
//     onClose();
//   };

//   useEffect(() => {
//     if (alternativeAnswers) {
//       setLocalAlternativeAnswers(true);
//       setOptions('single-input-field');
//     } else if (localAlternativeAnswers) {
//       setLocalAlternativeAnswers(false);
//       setOptions('separate-boxes');
//     }
//   }, [alternativeAnswers, setOptions, localAlternativeAnswers]);

//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       fullWidth
//       maxWidth="md"
//       sx={{
//         overflowX: 'auto',
//         width: "100%",
//         '& .MuiPaper-root': {
//           maxWidth: "650px",
//           '& .MuiDialog-paper': {
//             overflowY: 'visible',
//             width: '70%',
//             maxWidth: "300px",
//             margin: 'auto',
//             borderRadius: 2,
//             background: "white",
//           }
//         },
//         '& .MuiDialog-container': {
//           height: 'auto',
//         },
//         '& .MuiDialog-paper': { borderRadius: 2 }
//       }}
//     >
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         {({ values, handleChange, setFieldValue }) => (
//           <Form>
//             <IconButton
//               aria-label="Close"
//               onClick={onClose}
//               sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
//               <Grid
//                 item
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: 40,
//                   height: 40,
//                   borderRadius: '50%',
//                   backgroundColor: 'rgb(237 230 246)',
//                   color: 'rgb(136 84 192)',
//                   marginRight: 1,
//                 }}
//               >
//                 <LuRectangleHorizontal />
//               </Grid>
//               <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
//                 Fill in the Blank Settings
//               </Typography>
//             </DialogTitle>
//             <DialogContent dividers sx={{ padding: 4 }}>
//               <Grid container spacing={4}>
//                 <Grid item alignItems="center" style={{ width: "100%" }}>
//                   <FormControl component="fieldset" fullWidth>
//                     <RadioGroup
//                       name="selectedOption"
//                       value={values.selectedOption}
//                       onChange={(e) => setFieldValue('selectedOption', e.target.value)}
//                     >
//                       <Grid
//                         item
//                         alignItems="center"
//                         style={{
//                           width: "100%",
//                           display: 'flex',
//                           flexDirection: "row",
//                           justifyContent: "space-between",
//                           borderBottom: '1px solid rgb(229 229 229)',
//                           paddingBottom: '10px',
//                         }}
//                       >
//                         <Grid item xs={6}>
//                           <img
//                             src={separate_quizz}
//                             alt="Separate boxes"
//                             data-testid="box-variant-image"
//                             style={{
//                               height: "100px",
//                               width: "90%",
//                               border: values.selectedOption === 'separate-boxes' && !localAlternativeAnswers ? '2px solid #8854C0' : '2px solid transparent',
//                               borderRadius: 2,
//                               padding: 1,
//                               cursor: localAlternativeAnswers ? 'not-allowed' : 'pointer',
//                               opacity: localAlternativeAnswers ? 0.5 : 1,
//                             }}
//                             onClick={() => !localAlternativeAnswers && setFieldValue('selectedOption', 'separate-boxes')}
//                           />
//                           <FormControlLabel
//                             value="separate-boxes"
//                             control={<Radio
//                               sx={{
//                                 color: 'gray',
//                                 cursor: localAlternativeAnswers ? 'not-allowed' : 'pointer',
//                                 opacity: localAlternativeAnswers ? 0.5 : 1,
//                                 '&.Mui-checked': {
//                                   color: 'green',
//                                 },
//                                 '&.Mui-disabled': {
//                                   color: 'gray',
//                                 }
//                               }}
//                               disabled={localAlternativeAnswers}
//                             />}
//                             label={
//                               <Typography variant="body2" className="text-sm font-semibold text-dark-2">
//                                 Separate boxes
//                               </Typography>
//                             }
//                           />
//                         </Grid>
//                         <Grid item xs={6}>
//                           <img
//                             src={single_quizz}
//                             alt="Single input field"
//                             data-testid="single-blank-variant-image"
//                             style={{
//                               height: "100px",
//                               width: "90%",
//                               border: values.selectedOption === 'single-input-field' ? '2px solid #8854C0' : '2px solid transparent',
//                               borderRadius: 2,
//                               padding: 1,
//                               cursor: 'pointer',
//                             }}
//                             onClick={() => setFieldValue('selectedOption', 'single-input-field')}
//                           />
//                           <FormControlLabel
//                             value="single-input-field"
//                             control={<Radio
//                               sx={{
//                                 color: 'gray',
//                                 '&.Mui-checked': {
//                                   color: 'green',
//                                 }
//                               }}
//                             />}
//                             label={
//                               <Typography variant="body2" className="text-sm font-semibold text-dark-2">
//                                 Single input field
//                               </Typography>
//                             }
//                           />
//                         </Grid>
//                       </Grid>
//                     </RadioGroup>
//                   </FormControl>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Grid item xs={12} sx={{ borderBottom: '1px solid rgb(229 229 229)', paddingBottom: '10px' }}>
//                     <Grid container alignItems="center" justifyContent="space-between">
//                       <Grid sx={{ display: "flex", flexDirection: "row" }}>
//                         <Typography variant="h6" sx={{ fontSize: "16px", color: "black" }}>
//                           Alternative answers
//                         </Typography>
//                       </Grid>
//                       <Grid container item xs="auto" direction="column" alignItems="flex-end">
//                         <Switch
//                           checked={localAlternativeAnswers}
//                           onChange={(e) => {
//                             const isChecked = e.target.checked;
//                             setLocalAlternativeAnswers(isChecked);
//                             setOptions(isChecked ? 'single-input-field' : 'separate-boxes');
//                           }}
//                           name="alternative-answers"
//                         />
//                       </Grid>
//                     </Grid>
//                     {localAlternativeAnswers && (
//                       <>
//                         <Grid item sx={{ display: "flex" }}>
//                           <Tooltip title="When this setting is on, only a Single input field can be used.">
//                             <Info fontSize="small" sx={{ color: 'gray', marginTop: "10px" }} />
//                           </Tooltip>
//                           <Typography variant="body2" sx={{ color: 'gray', fontSize: '12px' }}>
//                             When this setting is on, only a Single input field can be used.
//                           </Typography>
//                         </Grid>
//                       </>
//                     )}
//                   </Grid>
//                 </Grid>

//                 <Grid item xs={12} style={{ paddingTop: "10px" }}>
//                   <Grid container direction="column" spacing={2} style={{ borderBottom: '1px solid rgb(229 229 229)', paddingBottom: "10px" }}>
//                     <Grid item>
//                       <Typography variant="h6" style={{ fontSize: "16px", color: 'black' }}>
//                         Answer Hints
//                       </Typography>
//                       <Typography variant="body2" style={{ fontSize: "12px", color: "rgb(109 109 109)" }}>
//                         Write a custom hint to show the students if they're struggling with the answer
//                       </Typography>
//                     </Grid>
//                     <Grid item>
//                       <Field
//                         as={TextField}
//                         fullWidth
//                         variant="outlined"
//                         size="small"
//                         placeholder="Enter your hint here..."
//                         name="hint"
//                         value={values.hint}
//                         onChange={handleChange}
//                       />
//                     </Grid>
//                   </Grid>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Grid container direction="column" spacing={1} sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
//                     <Grid item>
//                       <Typography variant="h6" style={{ fontSize: "16px", color: "black" }}>
//                         Show your work
//                       </Typography>
//                       <Typography variant="body2" style={{ color: "rgb(109 109 109)" }}>
//                         Students can upload images alongside their answer
//                       </Typography>
//                     </Grid>
//                     <Grid item>
//                       <Switch
//                         checked={submitCustomResponse}
//                         onChange={(e) => setSubmitCustomResponse(e.target.checked)}
//                         name="submit-custom-response"
//                       />
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </DialogContent>
//             <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
//               <Button
//                 onClick={onClose}
//                 variant="text"
//                 sx={{
//                   background: "rgb(249 249 249)",
//                   color: "black",
//                   '&:hover': {
//                     backgroundColor: 'rgb(249 249 249)',
//                     color: "black",
//                   },
//                 }}
//               >
//                 Cancel
//               </Button>

//               <Button type='submit' variant="contained"
//                 sx={{
//                   background: "rgb(136 84 192)",
//                   color: "white",
//                   '&:hover': {
//                     backgroundColor: 'rgb(136 84 192)',
//                     color: "white",
//                   },
//                 }}>
//                 Save
//               </Button>
//             </DialogActions>
//           </Form>
//         )}
//       </Formik>
//     </Dialog>
//   );
// };

// export default FillBlankModal;


import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Typography,
  Switch,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Grid,
  Tooltip,
} from '@mui/material';
import { Close as CloseIcon, Info } from '@mui/icons-material';
import { LuRectangleHorizontal } from "react-icons/lu";
import { Formik, Form, Field } from 'formik';

import separate_quizz from "../../../././../../Assets/Quizz_image.png";
import single_quizz from "../../../././../../Assets/Quizz_image1.png";

const FillBlankModal = ({ open, onClose, options, setOptions, setAlternativeAnswers, alternativeAnswers }) => {
  const [localAlternativeAnswers, setLocalAlternativeAnswers] = useState(alternativeAnswers);
  const [submitCustomResponse, setSubmitCustomResponse] = useState(false);

  // Define initial values
  const initialValues = {
    selectedOption: alternativeAnswers ? 'single-input-field' : 'separate-boxes',
    hint: '',
  };

  // Handle form submit
  const handleSubmit = (values) => {
    console.log('Form values:', values);
    setOptions(values.selectedOption);
    setAlternativeAnswers(localAlternativeAnswers);
    onClose();
  };

  // Reset localAlternativeAnswers and submitCustomResponse when modal closes
  useEffect(() => {
    if (!open) {
      setLocalAlternativeAnswers(alternativeAnswers);
      setSubmitCustomResponse(false);
    }
  }, [open, alternativeAnswers]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        overflowX: 'auto',
        width: "100%",
        '& .MuiPaper-root': {
          maxWidth: "650px",
          '& .MuiDialog-paper': {
            overflowY: 'visible',
            width: '70%',
            maxWidth: "300px",
            margin: 'auto',
            borderRadius: 2,
            background: "white",
          }
        },
        '& .MuiDialog-container': {
          height: 'auto',
        },
        '& .MuiDialog-paper': { borderRadius: 2 }
      }}
    >
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <IconButton
              aria-label="Close"
              onClick={() => {
                onClose();
                setLocalAlternativeAnswers(alternativeAnswers);
                setSubmitCustomResponse(false);
              }}
              sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
            >
              <CloseIcon />
            </IconButton>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid
                item
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
                <LuRectangleHorizontal />
              </Grid>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
                Fill in the Blank Settings
              </Typography>
            </DialogTitle>
            <DialogContent dividers sx={{ padding: 4 }}>
              <Grid container spacing={4}>
                <Grid item alignItems="center" style={{ width: "100%" }}>
                  <FormControl component="fieldset" fullWidth>
                    <RadioGroup
                      name="selectedOption"
                      value={values.selectedOption}
                      onChange={(e) => setFieldValue('selectedOption', e.target.value)}
                    >
                      <Grid
                        item
                        alignItems="center"
                        style={{
                          width: "100%",
                          display: 'flex',
                          flexDirection: "row",
                          justifyContent: "space-between",
                          borderBottom: '1px solid rgb(229 229 229)',
                          paddingBottom: '10px',
                        }}
                      >
                        <Grid item xs={6}>
                          <img
                            src={separate_quizz}
                            alt="Separate boxes"
                            data-testid="box-variant-image"
                            style={{
                              height: "100px",
                              width: "90%",
                              border: values.selectedOption === 'separate-boxes' && !localAlternativeAnswers ? '2px solid #8854C0' : '2px solid transparent',
                              borderRadius: 2,
                              padding: 1,
                              cursor: localAlternativeAnswers ? 'not-allowed' : 'pointer',
                              opacity: localAlternativeAnswers ? 0.5 : 1,
                            }}
                            onClick={() => !localAlternativeAnswers && setFieldValue('selectedOption', 'separate-boxes')}
                          />
                          <FormControlLabel
                            value="separate-boxes"
                            control={<Radio
                              sx={{
                                color: 'gray',
                                cursor: localAlternativeAnswers ? 'not-allowed' : 'pointer',
                                opacity: localAlternativeAnswers ? 0.5 : 1,
                                '&.Mui-checked': {
                                  color: 'green',
                                },
                                '&.Mui-disabled': {
                                  color: 'gray',
                                }
                              }}
                              disabled={localAlternativeAnswers}
                            />}
                            label={
                              <Typography variant="body2" className="text-sm font-semibold text-dark-2">
                                Separate boxes
                              </Typography>
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <img
                            src={single_quizz}
                            alt="Single input field"
                            data-testid="single-blank-variant-image"
                            style={{
                              height: "100px",
                              width: "90%",
                              border: values.selectedOption === 'single-input-field' ? '2px solid #8854C0' : '2px solid transparent',
                              borderRadius: 2,
                              padding: 1,
                              cursor: 'pointer',
                            }}
                            onClick={() => setFieldValue('selectedOption', 'single-input-field')}
                          />
                          <FormControlLabel
                            value="single-input-field"
                            control={<Radio
                              sx={{
                                color: 'gray',
                                '&.Mui-checked': {
                                  color: 'green',
                                }
                              }}
                            />}
                            label={
                              <Typography variant="body2" className="text-sm font-semibold text-dark-2">
                                Single input field
                              </Typography>
                            }
                          />
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Grid item xs={12} sx={{ borderBottom: '1px solid rgb(229 229 229)', paddingBottom: '10px' }}>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid sx={{ display: "flex", flexDirection: "row" }}>
                        <Typography variant="h6" sx={{ fontSize: "16px", color: "black" }}>
                          Alternative answers
                        </Typography>
                      </Grid>
                      <Grid container item xs="auto" direction="column" alignItems="flex-end">
                        <Switch
                          checked={localAlternativeAnswers}
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            setLocalAlternativeAnswers(isChecked);
                            setFieldValue('selectedOption', isChecked ? 'single-input-field' : 'separate-boxes');
                            setOptions(isChecked ? 'single-input-field' : 'separate-boxes');
                          }}
                          name="alternative-answers"
                        />
                      </Grid>
                    </Grid>
                    {localAlternativeAnswers && (
                      <>
                        <Grid item sx={{ display: "flex" }}>
                          <Tooltip title="When this setting is on, only a Single input field can be used.">
                            <Info fontSize="small" sx={{ color: 'gray', marginTop: "10px" }} />
                          </Tooltip>
                          <Typography variant="body2" sx={{ color: 'gray', fontSize: '12px' }}>
                            When this setting is on, only a Single input field can be used.
                          </Typography>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </Grid>

                <Grid item xs={12} style={{ paddingTop: "10px" }}>
                  <Grid container direction="column" spacing={2} style={{ borderBottom: '1px solid rgb(229 229 229)', paddingBottom: "10px" }}>
                    <Grid item>
                      <Typography variant="h6" style={{ fontSize: "16px", color: 'black' }}>
                        Answer Hints
                      </Typography>
                      <Typography variant="body2" style={{ color: "rgb(109 109 109)" }}>
                        Provide a hint to help students
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="Enter your hint here..."
                        name="hint"
                        value={values.hint}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container direction="column" spacing={1} sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                    <Grid item>
                      <Typography variant="h6" style={{ fontSize: "16px", color: "black" }}>
                        Show your work
                      </Typography>
                      <Typography variant="body2" style={{ color: "rgb(109 109 109)" }}>
                        Students can upload images alongside their answer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Switch
                        checked={submitCustomResponse}
                        onChange={(e) => setSubmitCustomResponse(e.target.checked)}
                        name="submit-custom-response"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
              <Button
                onClick={() => {
                  onClose();
                  setLocalAlternativeAnswers(alternativeAnswers);
                  setSubmitCustomResponse(false);
                }}
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

              <Button type='submit' variant="contained"
                sx={{
                  background: "rgb(136 84 192)",
                  color: "white",
                  '&:hover': {
                    backgroundColor: 'rgb(136 84 192)',
                    color: "white",
                  },
                }}>
                Save
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default FillBlankModal;
