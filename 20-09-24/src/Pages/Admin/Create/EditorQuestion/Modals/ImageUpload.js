


// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import {
// // // // // // // // // //     Dialog, DialogTitle, DialogContent, DialogActions,
// // // // // // // // // //     Button, IconButton, Grid, Typography,
// // // // // // // // // // } from '@mui/material';
// // // // // // // // // // import CloseIcon from '@mui/icons-material/Close';
// // // // // // // // // // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // // // // // // // // // import { Formik, Form } from 'formik';


// // // // // // // // // // import { Box } from '@mui/material';
// // // // // // // // // // import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
// // // // // // // // // // import "./ImageUpload.css"
// // // // // // // // // // import { styled } from '@mui/material/styles';
// // // // // // // // // // import { tableCellClasses } from '@mui/material/TableCell';
// // // // // // // // // // import { FaImage } from "react-icons/fa6";
// // // // // // // // // // import {   Tabs, Tab, Input } from '@mui/material';
// // // // // // // // // // import UploadIcon from '@mui/icons-material/Upload';
// // // // // // // // // // import SearchIcon from '@mui/icons-material/Search';
// // // // // // // // // // import LinkIcon from '@mui/icons-material/Link';




// // // // // // // // // // const theme = createTheme({
// // // // // // // // // //     components: {
// // // // // // // // // //         MuiButton: {
// // // // // // // // // //             styleOverrides: {
// // // // // // // // // //                 contained: {
// // // // // // // // // //                     backgroundColor: '#1976d2',
// // // // // // // // // //                     color: '#fff',
// // // // // // // // // //                     '&:hover': {
// // // // // // // // // //                         backgroundColor: '#115293',
// // // // // // // // // //                     },
// // // // // // // // // //                 },
// // // // // // // // // //                 outlined: {
// // // // // // // // // //                     color: '#1976d2',
// // // // // // // // // //                     borderColor: '#1976d2',
// // // // // // // // // //                     '&:hover': {
// // // // // // // // // //                         borderColor: '#115293',
// // // // // // // // // //                         color: '#115293',
// // // // // // // // // //                     },
// // // // // // // // // //                 },
// // // // // // // // // //             },
// // // // // // // // // //         },
// // // // // // // // // //     },
// // // // // // // // // // });



// // // // // // // // // // const styles = {
// // // // // // // // // //     dialogPaper: {
// // // // // // // // // //       padding: '24px',
// // // // // // // // // //       position: 'relative',
// // // // // // // // // //       width: '100%',
// // // // // // // // // //       maxWidth: 600,
// // // // // // // // // //       borderRadius: '8px',
// // // // // // // // // //     },
// // // // // // // // // //     tab: {
// // // // // // // // // //       fontWeight: 'bold',
// // // // // // // // // //       textAlign: 'center',
// // // // // // // // // //       padding: '12px',
// // // // // // // // // //       cursor: 'pointer',
// // // // // // // // // //     },
// // // // // // // // // //     activeTab: {
// // // // // // // // // //       color: '#884CC0',
// // // // // // // // // //       borderBottom: '4px solid #884CC0',
// // // // // // // // // //     },
// // // // // // // // // //     tabContent: {
// // // // // // // // // //       padding: '16px',
// // // // // // // // // //       backgroundColor: '#e3e3e3',
// // // // // // // // // //       borderRadius: '4px',
// // // // // // // // // //       textAlign: 'center',
// // // // // // // // // //       position: 'relative',
// // // // // // // // // //     },
// // // // // // // // // //     uploadButton: {
// // // // // // // // // //       backgroundColor: '#D8B7FF',
// // // // // // // // // //       color: '#6A1B9A',
// // // // // // // // // //       '&:hover': {
// // // // // // // // // //         backgroundColor: '#D8B7FF',
// // // // // // // // // //       },
// // // // // // // // // //       marginTop: '16px',
// // // // // // // // // //     },
// // // // // // // // // //     inputFile: {
// // // // // // // // // //       position: 'absolute',
// // // // // // // // // //       width: '100%',
// // // // // // // // // //       height: '100%',
// // // // // // // // // //       opacity: 0,
// // // // // // // // // //       cursor: 'pointer',
// // // // // // // // // //     },
// // // // // // // // // //   };




// // // // // // // // // // const ImageUpload = ({ open, onClose }) => {
// // // // // // // // // //     const [amount, setAmount] = useState('');
// // // // // // // // // //     const [paidOn, setPaidOn] = useState('');
// // // // // // // // // //     const [method, setMethod] = useState('cash');
// // // // // // // // // //     const [document, setDocument] = useState(null);
// // // // // // // // // //     const [note, setNote] = useState('');


// // // // // // // // // //     const [tabIndex, setTabIndex] = useState(0);

// // // // // // // // // //     const handleTabChange = (event, newValue) => {
// // // // // // // // // //         setTabIndex(newValue);
// // // // // // // // // //     };

// // // // // // // // // //     const CurrencyDrop = [
// // // // // // // // // //         { value: 'cash', label: 'Cash' },
// // // // // // // // // //         { value: 'card', label: 'Card' },
// // // // // // // // // //         { value: 'cheque', label: 'Cheque' },
// // // // // // // // // //         { value: 'bank_transfer', label: 'Bank Transfer' },
// // // // // // // // // //         { value: 'other', label: 'Other' },
// // // // // // // // // //         { value: 'custom1', label: 'Custom Payment 1' },
// // // // // // // // // //         { value: 'custom2', label: 'Custom Payment 2' },
// // // // // // // // // //         { value: 'custom3', label: 'Custom Payment 3' },
// // // // // // // // // //         { value: 'custom4', label: 'Custom Payment 4' },
// // // // // // // // // //         { value: 'custom5', label: 'Custom Payment 5' },
// // // // // // // // // //         { value: 'custom6', label: 'Custom Payment 6' },
// // // // // // // // // //         { value: 'custom7', label: 'Custom Payment 7' },
// // // // // // // // // //         // Add more options as needed
// // // // // // // // // //     ];

// // // // // // // // // //     const Cardtypedata = [
// // // // // // // // // //         { value: '1', label: 'Credit Card' },
// // // // // // // // // //         { value: '2', label: ' Debit Card' },
// // // // // // // // // //         { value: '3', label: 'Visa' },
// // // // // // // // // //         { value: '4', label: 'Master Card' },

// // // // // // // // // //     ]
// // // // // // // // // //     const handleMethodChange = (e) => {
// // // // // // // // // //         setMethod(e.target.value);
// // // // // // // // // //     };

// // // // // // // // // //     const handleSubmit = (event) => {
// // // // // // // // // //         event.preventDefault();
// // // // // // // // // //         console.log({
// // // // // // // // // //             amount,
// // // // // // // // // //             paidOn,
// // // // // // // // // //             method,
// // // // // // // // // //             document,
// // // // // // // // // //             note,
// // // // // // // // // //         });
// // // // // // // // // //     };

// // // // // // // // // //     return (
// // // // // // // // // //         <ThemeProvider theme={theme}>
// // // // // // // // // //             <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" sx={{
// // // // // // // // // //                 overflowX: "auto",
// // // // // // // // // //                 '& .MuiDialog-paper': {
// // // // // // // // // //                     overflowY: 'visible',
// // // // // // // // // //                     width: '60%', // You can adjust this value to your preferred width
// // // // // // // // // //                     maxWidth: 'none',
// // // // // // // // // //                 },
// // // // // // // // // //                 '& .MuiDialog-container': {
// // // // // // // // // //                     height: 'auto',
// // // // // // // // // //                 }
// // // // // // // // // //             }}>
// // // // // // // // // //                 <Formik
// // // // // // // // // //                     initialValues={{
// // // // // // // // // //                         amount: ""
// // // // // // // // // //                     }}
// // // // // // // // // //                     onSubmit={(values, { setSubmitting }) => {
// // // // // // // // // //                         // Handle submission
// // // // // // // // // //                         setSubmitting(false);
// // // // // // // // // //                     }}
// // // // // // // // // //                 >
// // // // // // // // // //                     {({ isSubmitting, resetForm, setFieldValue }) => (
// // // // // // // // // //                         <Form>
// // // // // // // // // //                             <DialogTitle>
// // // // // // // // // //                                 <FaImage />
// // // // // // // // // //                                 <IconButton
// // // // // // // // // //                                     edge="end"
// // // // // // // // // //                                     color="inherit"
// // // // // // // // // //                                     onClick={onClose}
// // // // // // // // // //                                     aria-label="close"
// // // // // // // // // //                                     sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
// // // // // // // // // //                                 >
// // // // // // // // // //                                     <CloseIcon />
// // // // // // // // // //                                 </IconButton>
// // // // // // // // // //                             </DialogTitle>
// // // // // // // // // //                             <DialogContent dividers>
// // // // // // // // // //                                 <Typography variant="body2" color="textSecondary" id="dialog-description">
// // // // // // // // // //                                     Use ctrl + V to paste image from your clipboard
// // // // // // // // // //                                 </Typography >
// // // // // // // // // //                                 <Tabs
// // // // // // // // // //                                     value={tabIndex}
// // // // // // // // // //                                     onChange={handleTabChange}
// // // // // // // // // //                                     aria-label="image upload tabs"
// // // // // // // // // //                                 >
// // // // // // // // // //                                     <Tab label={<><UploadIcon /> Upload</>} sx={[styles.tab, tabIndex === 0 && styles.activeTab]} />
// // // // // // // // // //                                     <Tab label={<><SearchIcon /> Search</>} sx={[styles.tab, tabIndex === 1 && styles.activeTab]} />
// // // // // // // // // //                                     <Tab label={<><LinkIcon /> Paste Link</>} sx={[styles.tab, tabIndex === 2 && styles.activeTab]} />
// // // // // // // // // //                                 </Tabs>
// // // // // // // // // //                                 <Box sx={styles.tabContent}>
// // // // // // // // // //                                     {tabIndex === 0 && (
// // // // // // // // // //                                         <>
// // // // // // // // // //                                             <Input
// // // // // // // // // //                                                 type="file"
// // // // // // // // // //                                                 accept="image/*"
// // // // // // // // // //                                                 sx={styles.inputFile}
// // // // // // // // // //                                             />
// // // // // // // // // //                                             <Typography variant="body2" color="textSecondary">
// // // // // // // // // //                                                 Drag your image here or
// // // // // // // // // //                                             </Typography>
// // // // // // // // // //                                             <Button variant="contained" sx={styles.uploadButton}>
// // // // // // // // // //                                                 Upload from device
// // // // // // // // // //                                             </Button>
// // // // // // // // // //                                             <Typography variant="caption" color="textSecondary">
// // // // // // // // // //                                                 Use a JPG, PNG or GIF, up to 5 MB
// // // // // // // // // //                                             </Typography>
// // // // // // // // // //                                         </>
// // // // // // // // // //                                     )}
// // // // // // // // // //                                 </Box>
// // // // // // // // // //                             </DialogContent>
// // // // // // // // // //                             <DialogActions>

// // // // // // // // // //                                 <Button onClick={onClose} variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" }}>
// // // // // // // // // //                                     Close
// // // // // // // // // //                                 </Button>
// // // // // // // // // //                             </DialogActions>
// // // // // // // // // //                         </Form>
// // // // // // // // // //                     )}
// // // // // // // // // //                 </Formik>
// // // // // // // // // //             </Dialog>
// // // // // // // // // //         </ThemeProvider>
// // // // // // // // // //     );
// // // // // // // // // // };

// // // // // // // // // // export default ImageUpload;






// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import {
// // // // // // // // //     Dialog, DialogTitle, DialogContent, DialogActions,
// // // // // // // // //     Button, IconButton, Typography, Tabs, Tab, Input, Box,
// // // // // // // // // } from '@mui/material';
// // // // // // // // // import CloseIcon from '@mui/icons-material/Close';
// // // // // // // // // import UploadIcon from '@mui/icons-material/Upload';
// // // // // // // // // import SearchIcon from '@mui/icons-material/Search';
// // // // // // // // // import LinkIcon from '@mui/icons-material/Link';
// // // // // // // // // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // // // // // // // // import { Formik, Form } from 'formik';
// // // // // // // // // import { FaImage } from 'react-icons/fa6';
// // // // // // // // // import "./ImageUpload.css"

// // // // // // // // // const theme = createTheme({
// // // // // // // // //     components: {
// // // // // // // // //         MuiButton: {
// // // // // // // // //             styleOverrides: {
// // // // // // // // //                 contained: {
// // // // // // // // //                     backgroundColor: '#1976d2',
// // // // // // // // //                     color: '#fff',
// // // // // // // // //                     '&:hover': {
// // // // // // // // //                         backgroundColor: '#115293',
// // // // // // // // //                     },
// // // // // // // // //                 },
// // // // // // // // //                 outlined: {
// // // // // // // // //                     color: '#1976d2',
// // // // // // // // //                     borderColor: '#1976d2',
// // // // // // // // //                     '&:hover': {
// // // // // // // // //                         borderColor: '#115293',
// // // // // // // // //                         color: '#115293',
// // // // // // // // //                     },
// // // // // // // // //                 },
// // // // // // // // //             },
// // // // // // // // //         },
// // // // // // // // //     },
// // // // // // // // // });

// // // // // // // // // const styles = {
// // // // // // // // //     dialogPaper: {
// // // // // // // // //         padding: '24px',
// // // // // // // // //         position: 'relative',
// // // // // // // // //         width: '100%',
// // // // // // // // //         maxWidth: 600,
// // // // // // // // //         borderRadius: '8px',
// // // // // // // // //     },
// // // // // // // // //     tab: {
// // // // // // // // //         fontWeight: 'bold',
// // // // // // // // //         textAlign: 'center',
// // // // // // // // //         padding: '12px',
// // // // // // // // //         cursor: 'pointer',
// // // // // // // // //     },
// // // // // // // // //     activeTab: {
// // // // // // // // //         color: '#884CC0',
// // // // // // // // //         borderBottom: '4px solid #884CC0',
// // // // // // // // //     },
// // // // // // // // //     tabContent: {
// // // // // // // // //         padding: '16px',
// // // // // // // // //         backgroundColor: '#e3e3e3',
// // // // // // // // //         borderRadius: '4px',
// // // // // // // // //         textAlign: 'center',
// // // // // // // // //         position: 'relative',
// // // // // // // // //     },
// // // // // // // // //     uploadButton: {
// // // // // // // // //         backgroundColor: '#D8B7FF',
// // // // // // // // //         color: '#6A1B9A',
// // // // // // // // //         '&:hover': {
// // // // // // // // //             backgroundColor: '#D8B7FF',
// // // // // // // // //         },
// // // // // // // // //         marginTop: '16px',
// // // // // // // // //     },
// // // // // // // // //     inputFile: {
// // // // // // // // //         position: 'absolute',
// // // // // // // // //         width: '100%',
// // // // // // // // //         height: '100%',
// // // // // // // // //         opacity: 0,
// // // // // // // // //         cursor: 'pointer',
// // // // // // // // //     },
// // // // // // // // // };

// // // // // // // // // const ImageUpload = ({ open, onClose }) => {
// // // // // // // // //     const [tabIndex, setTabIndex] = useState(0);

// // // // // // // // //     const handleTabChange = (event, newValue) => {
// // // // // // // // //         setTabIndex(newValue);
// // // // // // // // //     };

// // // // // // // // //     return (
// // // // // // // // //         <ThemeProvider theme={theme}>
// // // // // // // // //             <Dialog
// // // // // // // // //                 open={open}
// // // // // // // // //                 onClose={onClose}
// // // // // // // // //                 fullWidth
// // // // // // // // //                 maxWidth="sm"
// // // // // // // // //                 sx={{
// // // // // // // // //                     overflowX: 'auto',
// // // // // // // // //                     '& .MuiDialog-paper': {
// // // // // // // // //                         overflowY: 'visible',
// // // // // // // // //                         width: '60%',
// // // // // // // // //                         maxWidth: 'none',
// // // // // // // // //                     },
// // // // // // // // //                     '& .MuiDialog-container': {
// // // // // // // // //                         height: 'auto',
// // // // // // // // //                     },
// // // // // // // // //                 }}
// // // // // // // // //             >
// // // // // // // // //                 <Formik
// // // // // // // // //                     initialValues={{ image: null }}
// // // // // // // // //                     onSubmit={(values, { setSubmitting }) => {
// // // // // // // // //                         console.log('Uploaded image:', values.image);
// // // // // // // // //                         setSubmitting(false);
// // // // // // // // //                     }}
// // // // // // // // //                 >
// // // // // // // // //                     {({ setFieldValue ,formik}) => (
// // // // // // // // //                         <Form>
// // // // // // // // //                             <DialogTitle>
// // // // // // // // //                                 <FaImage />
// // // // // // // // //                                 <IconButton
// // // // // // // // //                                     edge="end"
// // // // // // // // //                                     color="inherit"
// // // // // // // // //                                     onClick={onClose}
// // // // // // // // //                                     aria-label="close"
// // // // // // // // //                                     sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
// // // // // // // // //                                 >
// // // // // // // // //                                     <CloseIcon />
// // // // // // // // //                                 </IconButton>
// // // // // // // // //                             </DialogTitle>
// // // // // // // // //                             <DialogContent dividers>
// // // // // // // // //                                 <Typography variant="body2" color="textSecondary">
// // // // // // // // //                                     Use ctrl + V to paste image from your clipboard
// // // // // // // // //                                 </Typography>
// // // // // // // // //                                 <Tabs
// // // // // // // // //                                     value={tabIndex}
// // // // // // // // //                                     onChange={handleTabChange}
// // // // // // // // //                                     aria-label="image upload tabs"
// // // // // // // // //                                 >
// // // // // // // // //                                     <Tab label={<><UploadIcon /> Upload</>} sx={[styles.tab, tabIndex === 0 && styles.activeTab]} />
// // // // // // // // //                                     <Tab label={<><SearchIcon /> Search</>} sx={[styles.tab, tabIndex === 1 && styles.activeTab]} />
// // // // // // // // //                                     <Tab label={<><LinkIcon /> Paste Link</>} sx={[styles.tab, tabIndex === 2 && styles.activeTab]} />
// // // // // // // // //                                 </Tabs>
// // // // // // // // //                                 <Box sx={styles.tabContent}>
// // // // // // // // //                                     {tabIndex === 0 && (
// // // // // // // // //                                         <Box
// // // // // // // // //                                             className="flex flex-auto bg-light-2 flex-col font-semibold border-dark-6 border relative min-h-0 rounded p-4"
// // // // // // // // //                                             sx={{
// // // // // // // // //                                                 display: 'flex',
// // // // // // // // //                                                 flexDirection: 'column',
// // // // // // // // //                                                 alignItems: 'center',
// // // // // // // // //                                                 justifyContent: 'center',
// // // // // // // // //                                                 bgcolor: 'light-2',
// // // // // // // // //                                                 border: '1px solid',
// // // // // // // // //                                                 borderColor: 'dark-6',
// // // // // // // // //                                                 borderRadius: '8px',
// // // // // // // // //                                                 p: 4,
// // // // // // // // //                                                 minHeight: 0,
// // // // // // // // //                                                 position: 'relative',
// // // // // // // // //                                             }}
// // // // // // // // //                                         >
// // // // // // // // //                                             <input
// // // // // // // // //                                                 type="file"
// // // // // // // // //                                                 accept="image/jpg,image/jpeg,image/png,image/gif"
// // // // // // // // //                                                 onChange={(event) => {
// // // // // // // // //                                                     formik.setFieldValue('image', event.currentTarget.files[0]);
// // // // // // // // //                                                 }}
// // // // // // // // //                                                 style={{
// // // // // // // // //                                                     position: 'absolute',
// // // // // // // // //                                                     inset: 0,
// // // // // // // // //                                                     zIndex: 20,
// // // // // // // // //                                                     width: '100%',
// // // // // // // // //                                                     height: '100%',
// // // // // // // // //                                                     opacity: 0,
// // // // // // // // //                                                     cursor: 'pointer',
// // // // // // // // //                                                 }}
// // // // // // // // //                                             />
// // // // // // // // //                                             <Box
// // // // // // // // //                                                 className="flex flex-col m-2 justify-center items-center"
// // // // // // // // //                                                 sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
// // // // // // // // //                                             >
// // // // // // // // //                                                 <Typography variant="body2" color="text.secondary">
// // // // // // // // //                                                     Drag your image here
// // // // // // // // //                                                 </Typography>
// // // // // // // // //                                                 <Typography variant="caption" color="text.secondary">
// // // // // // // // //                                                     or
// // // // // // // // //                                                 </Typography>
// // // // // // // // //                                             </Box>
// // // // // // // // //                                             <Button
// // // // // // // // //                                                 variant="contained"
// // // // // // // // //                                                 color="secondary"
// // // // // // // // //                                                 sx={{
// // // // // // // // //                                                     bgcolor: 'lilac-faded',
// // // // // // // // //                                                     color: 'lilac',
// // // // // // // // //                                                     '&:hover': {
// // // // // // // // //                                                         color: 'lilac-light',
// // // // // // // // //                                                     },
// // // // // // // // //                                                     '&:active': {
// // // // // // // // //                                                         color: 'lilac-dark',
// // // // // // // // //                                                     },
// // // // // // // // //                                                     minWidth: 'max-content',
// // // // // // // // //                                                 }}
// // // // // // // // //                                                 aria-label="Upload from device"
// // // // // // // // //                                                 onClick={() => document.querySelector('input[type="file"]').click()}
// // // // // // // // //                                             >
// // // // // // // // //                                                 Upload from device
// // // // // // // // //                                             </Button>
// // // // // // // // //                                             <Typography variant="caption" color="text.secondary" sx={{ pt: 6, textAlign: 'center' }}>
// // // // // // // // //                                                 Use a JPG, PNG or GIF, up to 5 MB
// // // // // // // // //                                             </Typography>
// // // // // // // // //                                         </Box>
// // // // // // // // //                                     )}
// // // // // // // // //                                 </Box>
// // // // // // // // //                             </DialogContent>
// // // // // // // // //                             <DialogActions>
// // // // // // // // //                                 <Button onClick={onClose} variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" }}>
// // // // // // // // //                                     Close
// // // // // // // // //                                 </Button>
// // // // // // // // //                             </DialogActions>
// // // // // // // // //                         </Form>
// // // // // // // // //                     )}
// // // // // // // // //                 </Formik>
// // // // // // // // //             </Dialog>
// // // // // // // // //         </ThemeProvider>
// // // // // // // // //     );
// // // // // // // // // };

// // // // // // // // // export default ImageUpload;




// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import {
// // // // // // // //     Dialog, DialogTitle, DialogContent, DialogActions,
// // // // // // // //     Button, IconButton, Typography, Tabs, Tab, Box,
// // // // // // // // } from '@mui/material';
// // // // // // // // import CloseIcon from '@mui/icons-material/Close';
// // // // // // // // import UploadIcon from '@mui/icons-material/Upload';
// // // // // // // // import SearchIcon from '@mui/icons-material/Search';
// // // // // // // // import LinkIcon from '@mui/icons-material/Link';
// // // // // // // // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // // // // // // // import { Formik, Form } from 'formik';
// // // // // // // // import { FaImage } from 'react-icons/fa6';
// // // // // // // // import "./ImageUpload.css"

// // // // // // // // const theme = createTheme({
// // // // // // // //     components: {
// // // // // // // //         MuiButton: {
// // // // // // // //             styleOverrides: {
// // // // // // // //                 contained: {
// // // // // // // //                     backgroundColor: '#1976d2',
// // // // // // // //                     color: '#fff',
// // // // // // // //                     '&:hover': {
// // // // // // // //                         backgroundColor: '#115293',
// // // // // // // //                     },
// // // // // // // //                 },
// // // // // // // //                 outlined: {
// // // // // // // //                     color: '#1976d2',
// // // // // // // //                     borderColor: '#1976d2',
// // // // // // // //                     '&:hover': {
// // // // // // // //                         borderColor: '#115293',
// // // // // // // //                         color: '#115293',
// // // // // // // //                     },
// // // // // // // //                 },
// // // // // // // //             },
// // // // // // // //         },
// // // // // // // //     },
// // // // // // // // });

// // // // // // // // const styles = {
// // // // // // // //     dialogPaper: {
// // // // // // // //         padding: '24px',
// // // // // // // //         position: 'relative',
// // // // // // // //         width: '100%',
// // // // // // // //         maxWidth: 600,
// // // // // // // //         borderRadius: '8px',
// // // // // // // //     },
// // // // // // // //     tab: {
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //         textAlign: 'center',
// // // // // // // //         padding: '12px',
// // // // // // // //         cursor: 'pointer',
// // // // // // // //     },
// // // // // // // //     activeTab: {
// // // // // // // //         color: '#884CC0',
// // // // // // // //         borderBottom: '4px solid #884CC0',
// // // // // // // //     },
// // // // // // // //     tabContent: {
// // // // // // // //         padding: '16px',
// // // // // // // //         backgroundColor: '#e3e3e3',
// // // // // // // //         borderRadius: '4px',
// // // // // // // //         textAlign: 'center',
// // // // // // // //         position: 'relative',
// // // // // // // //     },
// // // // // // // //     uploadButton: {
// // // // // // // //         backgroundColor: '#D8B7FF',
// // // // // // // //         color: '#6A1B9A',
// // // // // // // //         '&:hover': {
// // // // // // // //             backgroundColor: '#D8B7FF',
// // // // // // // //         },
// // // // // // // //         marginTop: '16px',
// // // // // // // //     },
// // // // // // // //     inputFile: {
// // // // // // // //         position: 'absolute',
// // // // // // // //         width: '100%',
// // // // // // // //         height: '100%',
// // // // // // // //         opacity: 0,
// // // // // // // //         cursor: 'pointer',
// // // // // // // //     },
// // // // // // // // };

// // // // // // // // const ImageUpload = ({ open, onClose }) => {
// // // // // // // //     const [tabIndex, setTabIndex] = useState(0);

// // // // // // // //     const handleTabChange = (event, newValue) => {
// // // // // // // //         setTabIndex(newValue);
// // // // // // // //     };

// // // // // // // //     return (
// // // // // // // //         <ThemeProvider theme={theme}>
// // // // // // // //             <Dialog
// // // // // // // //                 open={open}
// // // // // // // //                 onClose={onClose}
// // // // // // // //                 fullWidth
// // // // // // // //                 maxWidth="sm"
// // // // // // // //                 sx={{
// // // // // // // //                     overflowX: 'auto',
// // // // // // // //                     '& .MuiDialog-paper': {
// // // // // // // //                         overflowY: 'visible',
// // // // // // // //                         width: '60%',
// // // // // // // //                         maxWidth: 'none',
// // // // // // // //                     },
// // // // // // // //                     '& .MuiDialog-container': {
// // // // // // // //                         height: 'auto',
// // // // // // // //                     },
// // // // // // // //                 }}
// // // // // // // //             >
// // // // // // // //                 <Formik
// // // // // // // //                     initialValues={{ image: null }}
// // // // // // // //                     onSubmit={(values, { setSubmitting }) => {
// // // // // // // //                         console.log('Uploaded image:', values.image);
// // // // // // // //                         setSubmitting(false);
// // // // // // // //                     }}
// // // // // // // //                 >
// // // // // // // //                     {({ setFieldValue }) => (
// // // // // // // //                         <Form>
// // // // // // // //                             <DialogTitle>
// // // // // // // //                                 <FaImage />
// // // // // // // //                                 <IconButton
// // // // // // // //                                     edge="end"
// // // // // // // //                                     color="inherit"
// // // // // // // //                                     onClick={onClose}
// // // // // // // //                                     aria-label="close"
// // // // // // // //                                     sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
// // // // // // // //                                 >
// // // // // // // //                                     <CloseIcon />
// // // // // // // //                                 </IconButton>
// // // // // // // //                             </DialogTitle>
// // // // // // // //                             <DialogContent dividers>
// // // // // // // //                                 <Typography variant="body2" color="textSecondary">
// // // // // // // //                                     Use ctrl + V to paste image from your clipboard
// // // // // // // //                                 </Typography>
// // // // // // // //                                 <Tabs
// // // // // // // //                                     value={tabIndex}
// // // // // // // //                                     onChange={handleTabChange}
// // // // // // // //                                     aria-label="image upload tabs"
// // // // // // // //                                 >
// // // // // // // //                                     <Tab label={<><UploadIcon /> Upload</>} sx={[styles.tab, tabIndex === 0 && styles.activeTab]} />
// // // // // // // //                                     <Tab label={<><SearchIcon /> Search</>} sx={[styles.tab, tabIndex === 1 && styles.activeTab]} />
// // // // // // // //                                     <Tab label={<><LinkIcon /> Paste Link</>} sx={[styles.tab, tabIndex === 2 && styles.activeTab]} />
// // // // // // // //                                 </Tabs>
// // // // // // // //                                 <Box sx={styles.tabContent}>
// // // // // // // //                                     {tabIndex === 0 && (
// // // // // // // //                                         <Box
// // // // // // // //                                             className="flex flex-auto bg-light-2 flex-col font-semibold border-dark-6 border relative min-h-0 rounded p-4"
// // // // // // // //                                             sx={{
// // // // // // // //                                                 display: 'flex',
// // // // // // // //                                                 flexDirection: 'column',
// // // // // // // //                                                 alignItems: 'center',
// // // // // // // //                                                 justifyContent: 'center',
// // // // // // // //                                                 bgcolor: 'light-2',
// // // // // // // //                                                 border: '1px solid',
// // // // // // // //                                                 borderColor: 'dark-6',
// // // // // // // //                                                 borderRadius: '8px',
// // // // // // // //                                                 p: 4,
// // // // // // // //                                                 minHeight: 0,
// // // // // // // //                                                 position: 'relative',
// // // // // // // //                                             }}
// // // // // // // //                                         >
// // // // // // // //                                             <input
// // // // // // // //                                                 type="file"
// // // // // // // //                                                 accept="image/jpg,image/jpeg,image/png,image/gif"
// // // // // // // //                                                 onChange={(event) => {
// // // // // // // //                                                     setFieldValue('image', event.currentTarget.files[0]); // Use setFieldValue directly
// // // // // // // //                                                 }}
// // // // // // // //                                                 style={{
// // // // // // // //                                                     position: 'absolute',
// // // // // // // //                                                     inset: 0,
// // // // // // // //                                                     zIndex: 20,
// // // // // // // //                                                     width: '100%',
// // // // // // // //                                                     height: '100%',
// // // // // // // //                                                     opacity: 0,
// // // // // // // //                                                     cursor: 'pointer',
// // // // // // // //                                                 }}
// // // // // // // //                                             />
// // // // // // // //                                             <Box
// // // // // // // //                                                 className="flex flex-col m-2 justify-center items-center"
// // // // // // // //                                                 sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
// // // // // // // //                                             >
// // // // // // // //                                                 <Typography variant="body2" color="text.secondary">
// // // // // // // //                                                     Drag your image here
// // // // // // // //                                                 </Typography>
// // // // // // // //                                                 <Typography variant="caption" color="text.secondary">
// // // // // // // //                                                     or
// // // // // // // //                                                 </Typography>
// // // // // // // //                                             </Box>
// // // // // // // //                                             <Button
// // // // // // // //                                                 variant="contained"
// // // // // // // //                                                 color="secondary"
// // // // // // // //                                                 sx={{
// // // // // // // //                                                     bgcolor: 'lilac-faded',
// // // // // // // //                                                     color: 'lilac',
// // // // // // // //                                                     '&:hover': {
// // // // // // // //                                                         color: 'lilac-light',
// // // // // // // //                                                     },
// // // // // // // //                                                     '&:active': {
// // // // // // // //                                                         color: 'lilac-dark',
// // // // // // // //                                                     },
// // // // // // // //                                                     minWidth: 'max-content',
// // // // // // // //                                                 }}
// // // // // // // //                                                 aria-label="Upload from device"
// // // // // // // //                                                 onClick={() => document.querySelector('input[type="file"]').click()}
// // // // // // // //                                             >
// // // // // // // //                                                 Upload from device
// // // // // // // //                                             </Button>
// // // // // // // //                                             <Typography variant="caption" color="text.secondary" sx={{ pt: 6, textAlign: 'center' }}>
// // // // // // // //                                                 Use a JPG, PNG or GIF, up to 5 MB
// // // // // // // //                                             </Typography>
// // // // // // // //                                         </Box>
// // // // // // // //                                     )}
// // // // // // // //                                 </Box>
// // // // // // // //                             </DialogContent>
// // // // // // // //                             <DialogActions>
// // // // // // // //                                 <Button onClick={onClose} variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" }}>
// // // // // // // //                                     Close
// // // // // // // //                                 </Button>
// // // // // // // //                             </DialogActions>
// // // // // // // //                         </Form>
// // // // // // // //                     )}
// // // // // // // //                 </Formik>
// // // // // // // //             </Dialog>
// // // // // // // //         </ThemeProvider>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default ImageUpload;






// // // // // // // import React, { useState, useRef } from 'react';
// // // // // // // import {
// // // // // // //     Dialog, DialogTitle, DialogContent, DialogActions,
// // // // // // //     Button, IconButton, Typography, Tabs, Tab, Box,
// // // // // // //     Tooltip, CircularProgress
// // // // // // // } from '@mui/material';
// // // // // // // import CloseIcon from '@mui/icons-material/Close';
// // // // // // // import UploadIcon from '@mui/icons-material/Upload';
// // // // // // // import SearchIcon from '@mui/icons-material/Search';
// // // // // // // import LinkIcon from '@mui/icons-material/Link';
// // // // // // // import CropIcon from '@mui/icons-material/Crop';
// // // // // // // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // // // // // // import { Formik, Form } from 'formik';
// // // // // // // import { FaImage } from 'react-icons/fa6';
// // // // // // // import Cropper from 'react-cropper';
// // // // // // // import 'cropperjs/dist/cropper.css';

// // // // // // // const theme = createTheme({
// // // // // // //     components: {
// // // // // // //         MuiButton: {
// // // // // // //             styleOverrides: {
// // // // // // //                 contained: {
// // // // // // //                     backgroundColor: '#1976d2',
// // // // // // //                     color: '#fff',
// // // // // // //                     '&:hover': {
// // // // // // //                         backgroundColor: '#115293',
// // // // // // //                     },
// // // // // // //                 },
// // // // // // //                 outlined: {
// // // // // // //                     color: '#1976d2',
// // // // // // //                     borderColor: '#1976d2',
// // // // // // //                     '&:hover': {
// // // // // // //                         borderColor: '#115293',
// // // // // // //                         color: '#115293',
// // // // // // //                     },
// // // // // // //                 },
// // // // // // //             },
// // // // // // //         },
// // // // // // //     },
// // // // // // // });

// // // // // // // const styles = {
// // // // // // //     dialogPaper: {
// // // // // // //         padding: '24px',
// // // // // // //         position: 'relative',
// // // // // // //         width: '100%',
// // // // // // //         maxWidth: 600,
// // // // // // //         borderRadius: '8px',
// // // // // // //     },
// // // // // // //     tab: {
// // // // // // //         fontWeight: 'bold',
// // // // // // //         textAlign: 'center',
// // // // // // //         padding: '12px',
// // // // // // //         cursor: 'pointer',
// // // // // // //     },
// // // // // // //     activeTab: {
// // // // // // //         color: '#884CC0',
// // // // // // //         borderBottom: '4px solid #884CC0',
// // // // // // //     },
// // // // // // //     tabContent: {
// // // // // // //         padding: '16px',
// // // // // // //         backgroundColor: '#e3e3e3',
// // // // // // //         borderRadius: '4px',
// // // // // // //         textAlign: 'center',
// // // // // // //         position: 'relative',
// // // // // // //     },
// // // // // // //     uploadButton: {
// // // // // // //         backgroundColor: '#D8B7FF',
// // // // // // //         color: '#6A1B9A',
// // // // // // //         '&:hover': {
// // // // // // //             backgroundColor: '#D8B7FF',
// // // // // // //         },
// // // // // // //         marginTop: '16px',
// // // // // // //     },
// // // // // // //     inputFile: {
// // // // // // //         position: 'absolute',
// // // // // // //         width: '100%',
// // // // // // //         height: '100%',
// // // // // // //         opacity: 0,
// // // // // // //         cursor: 'pointer',
// // // // // // //     },
// // // // // // // };

// // // // // // // const ImageUpload = ({ open, onClose }) => {
// // // // // // //     const [tabIndex, setTabIndex] = useState(0);
// // // // // // //     const [imageSrc, setImageSrc] = useState('');
// // // // // // //     const [croppedImage, setCroppedImage] = useState(null);
// // // // // // //     const [loading, setLoading] = useState(false);
// // // // // // //     const cropperRef = useRef(null);

// // // // // // //     const handleTabChange = (event, newValue) => {
// // // // // // //         setTabIndex(newValue);
// // // // // // //     };

// // // // // // //     const handleCrop = () => {
// // // // // // //         if (cropperRef.current) {
// // // // // // //             const cropper = cropperRef.current.cropper;
// // // // // // //             setCroppedImage(cropper.getCroppedCanvas().toDataURL());
// // // // // // //         }
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <ThemeProvider theme={theme}>
// // // // // // //             <Dialog
// // // // // // //                 open={open}
// // // // // // //                 onClose={onClose}
// // // // // // //                 fullWidth
// // // // // // //                 maxWidth="sm"
// // // // // // //                 sx={{
// // // // // // //                     overflowX: 'auto',
// // // // // // //                     '& .MuiDialog-paper': {
// // // // // // //                         overflowY: 'visible',
// // // // // // //                         width: '60%',
// // // // // // //                         maxWidth: 'none',
// // // // // // //                     },
// // // // // // //                     '& .MuiDialog-container': {
// // // // // // //                         height: 'auto',
// // // // // // //                     },
// // // // // // //                 }}
// // // // // // //             >
// // // // // // //                 <Formik
// // // // // // //                     initialValues={{ image: null }}
// // // // // // //                     onSubmit={(values, { setSubmitting }) => {
// // // // // // //                         console.log('Uploaded image:', values.image);
// // // // // // //                         setSubmitting(false);
// // // // // // //                     }}
// // // // // // //                 >
// // // // // // //                     {({ setFieldValue }) => (
// // // // // // //                         <Form>
// // // // // // //                             <DialogTitle>
// // // // // // //                                 <FaImage />
// // // // // // //                                 <IconButton
// // // // // // //                                     edge="end"
// // // // // // //                                     color="inherit"
// // // // // // //                                     onClick={onClose}
// // // // // // //                                     aria-label="close"
// // // // // // //                                     sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
// // // // // // //                                 >
// // // // // // //                                     <CloseIcon />
// // // // // // //                                 </IconButton>
// // // // // // //                             </DialogTitle>
// // // // // // //                             <DialogContent dividers>
// // // // // // //                                 <Typography variant="body2" color="textSecondary">
// // // // // // //                                     Use ctrl + V to paste image from your clipboard
// // // // // // //                                 </Typography>
// // // // // // //                                 <Tabs
// // // // // // //                                     value={tabIndex}
// // // // // // //                                     onChange={handleTabChange}
// // // // // // //                                     aria-label="image upload tabs"
// // // // // // //                                 >
// // // // // // //                                     <Tab label={<><UploadIcon /> Upload</>} sx={[styles.tab, tabIndex === 0 && styles.activeTab]} />
// // // // // // //                                     <Tab label={<><SearchIcon /> Search</>} sx={[styles.tab, tabIndex === 1 && styles.activeTab]} />
// // // // // // //                                     <Tab label={<><LinkIcon /> Paste Link</>} sx={[styles.tab, tabIndex === 2 && styles.activeTab]} />
// // // // // // //                                 </Tabs>
// // // // // // //                                 <Box sx={styles.tabContent}>
// // // // // // //                                     {tabIndex === 0 && (
// // // // // // //                                         <Box
// // // // // // //                                             className="flex flex-auto bg-light-2 flex-col font-semibold border-dark-6 border relative min-h-0 rounded p-4"
// // // // // // //                                             sx={{
// // // // // // //                                                 display: 'flex',
// // // // // // //                                                 flexDirection: 'column',
// // // // // // //                                                 alignItems: 'center',
// // // // // // //                                                 justifyContent: 'center',
// // // // // // //                                                 bgcolor: 'light-2',
// // // // // // //                                                 border: '1px solid',
// // // // // // //                                                 borderColor: 'dark-6',
// // // // // // //                                                 borderRadius: '8px',
// // // // // // //                                                 p: 4,
// // // // // // //                                                 minHeight: 0,
// // // // // // //                                                 position: 'relative',
// // // // // // //                                             }}
// // // // // // //                                         >
// // // // // // //                                             {loading && (
// // // // // // //                                                 <Box
// // // // // // //                                                     className="absolute flex items-center justify-center w-full h-full z-5 bg-dark-6"
// // // // // // //                                                     sx={{ display: 'flex' }}
// // // // // // //                                                 >
// // // // // // //                                                     <CircularProgress size={100} />
// // // // // // //                                                 </Box>
// // // // // // //                                             )}
// // // // // // //                                             {imageSrc && (
// // // // // // //                                                 <>
// // // // // // //                                                     <Cropper
// // // // // // //                                                         ref={cropperRef}
// // // // // // //                                                         src={imageSrc}
// // // // // // //                                                         style={{ height: 400, width: '100%' }}
// // // // // // //                                                         aspectRatio={16 / 9}
// // // // // // //                                                         guides={false}
// // // // // // //                                                         cropBoxResizable={true}
// // // // // // //                                                     />
// // // // // // //                                                     <Box
// // // // // // //                                                         className="absolute top-0 right-0 m-2 flex gap-2 z-1"
// // // // // // //                                                     >
// // // // // // //                                                         <Tooltip title="Delete">
// // // // // // //                                                             <IconButton
// // // // // // //                                                                 onClick={() => {
// // // // // // //                                                                     setImageSrc('');
// // // // // // //                                                                     setCroppedImage(null);
// // // // // // //                                                                 }}
// // // // // // //                                                                 sx={{
// // // // // // //                                                                     width: 36,
// // // // // // //                                                                     height: 36,
// // // // // // //                                                                     bgcolor: 'lightgrey',
// // // // // // //                                                                     border: '1px solid darkgrey',
// // // // // // //                                                                     color: 'darkgrey',
// // // // // // //                                                                     '&:hover': {
// // // // // // //                                                                         bgcolor: 'lightblue',
// // // // // // //                                                                     },
// // // // // // //                                                                 }}
// // // // // // //                                                             >
// // // // // // //                                                                 <CloseIcon />
// // // // // // //                                                             </IconButton>
// // // // // // //                                                         </Tooltip>
// // // // // // //                                                         <Tooltip title="Crop Image">
// // // // // // //                                                             <IconButton
// // // // // // //                                                                 onClick={handleCrop}
// // // // // // //                                                                 sx={{
// // // // // // //                                                                     width: 36,
// // // // // // //                                                                     height: 36,
// // // // // // //                                                                     bgcolor: 'lightgrey',
// // // // // // //                                                                     border: '1px solid darkgrey',
// // // // // // //                                                                     color: 'darkgrey',
// // // // // // //                                                                     '&:hover': {
// // // // // // //                                                                         bgcolor: 'lightblue',
// // // // // // //                                                                     },
// // // // // // //                                                                 }}
// // // // // // //                                                             >
// // // // // // //                                                                 <CropIcon />
// // // // // // //                                                             </IconButton>
// // // // // // //                                                         </Tooltip>
// // // // // // //                                                     </Box>
// // // // // // //                                                     {croppedImage && (
// // // // // // //                                                         <Box className="absolute bottom-0 left-0 p-2">
// // // // // // //                                                             <img src={croppedImage} alt="Cropped" style={{ maxWidth: '100%', height: 'auto' }} />
// // // // // // //                                                         </Box>
// // // // // // //                                                     )}
// // // // // // //                                                 </>
// // // // // // //                                             )}
// // // // // // //                                             {!imageSrc && (
// // // // // // //                                                 <Box
// // // // // // //                                                     className="absolute flex items-center justify-center w-full h-full"
// // // // // // //                                                     sx={{ display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
// // // // // // //                                                 >
// // // // // // //                                                     <Button
// // // // // // //                                                         variant="contained"
// // // // // // //                                                         color="secondary"
// // // // // // //                                                         sx={{
// // // // // // //                                                             bgcolor: 'lilac-faded',
// // // // // // //                                                             color: 'lilac',
// // // // // // //                                                             '&:hover': {
// // // // // // //                                                                 color: 'lilac-light',
// // // // // // //                                                             },
// // // // // // //                                                             '&:active': {
// // // // // // //                                                                 color: 'lilac-dark',
// // // // // // //                                                             },
// // // // // // //                                                             minWidth: 'max-content',
// // // // // // //                                                         }}
// // // // // // //                                                         aria-label="Upload from device"
// // // // // // //                                                         onClick={() => document.querySelector('input[type="file"]').click()}
// // // // // // //                                                     >
// // // // // // //                                                         Upload from device
// // // // // // //                                                     </Button>
// // // // // // //                                                     <input
// // // // // // //                                                         type="file"
// // // // // // //                                                         accept="image/jpg,image/jpeg,image/png,image/gif"
// // // // // // //                                                         onChange={(event) => {
// // // // // // //                                                             setFieldValue('image', event.currentTarget.files[0]); // Use setFieldValue directly
// // // // // // //                                                             const file = event.currentTarget.files[0];
// // // // // // //                                                             if (file) {
// // // // // // //                                                                 const reader = new FileReader();
// // // // // // //                                                                 reader.onloadend = () => {
// // // // // // //                                                                     setImageSrc(reader.result);
// // // // // // //                                                                     setLoading(false);
// // // // // // //                                                                 };
// // // // // // //                                                                 reader.readAsDataURL(file);
// // // // // // //                                                             }
// // // // // // //                                                         }}
// // // // // // //                                                         style={styles.inputFile}
// // // // // // //                                                     />
// // // // // // //                                                 </Box>
// // // // // // //                                             )}
// // // // // // //                                         </Box>
// // // // // // //                                     )}
// // // // // // //                                 </Box>
// // // // // // //                             </DialogContent>
// // // // // // //                             <DialogActions>
// // // // // // //                                 <Button onClick={onClose} variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" }}>
// // // // // // //                                     Close
// // // // // // //                                 </Button>
// // // // // // //                             </DialogActions>
// // // // // // //                         </Form>
// // // // // // //                     )}
// // // // // // //                 </Formik>
// // // // // // //             </Dialog>
// // // // // // //         </ThemeProvider>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default ImageUpload;



// // // // // // import React, { useState, useRef } from 'react';
// // // // // // import {
// // // // // //     Dialog, DialogTitle, DialogContent, DialogActions,
// // // // // //     Button, IconButton, Typography, Tabs, Tab, Box,
// // // // // // } from '@mui/material';
// // // // // // import CloseIcon from '@mui/icons-material/Close';
// // // // // // import UploadIcon from '@mui/icons-material/Upload';
// // // // // // import SearchIcon from '@mui/icons-material/Search';
// // // // // // import LinkIcon from '@mui/icons-material/Link';
// // // // // // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // // // // // import { Formik, Form } from 'formik';
// // // // // // import { FaImage } from 'react-icons/fa';
// // // // // // import CropIcon from '@mui/icons-material/Crop';
// // // // // // import Cropper from 'react-cropper';
// // // // // // import 'cropperjs/dist/cropper.css';
// // // // // // import "./ImageUpload.css"

// // // // // // const theme = createTheme({
// // // // // //     components: {
// // // // // //         MuiButton: {
// // // // // //             styleOverrides: {
// // // // // //                 contained: {
// // // // // //                     backgroundColor: '#1976d2',
// // // // // //                     color: '#fff',
// // // // // //                     '&:hover': {
// // // // // //                         backgroundColor: '#115293',
// // // // // //                     },
// // // // // //                 },
// // // // // //                 outlined: {
// // // // // //                     color: '#1976d2',
// // // // // //                     borderColor: '#1976d2',
// // // // // //                     '&:hover': {
// // // // // //                         borderColor: '#115293',
// // // // // //                         color: '#115293',
// // // // // //                     },
// // // // // //                 },
// // // // // //             },
// // // // // //         },
// // // // // //     },
// // // // // // });

// // // // // // const styles = {
// // // // // //     dialogPaper: {
// // // // // //         padding: '24px',
// // // // // //         position: 'relative',
// // // // // //         width: '100%',
// // // // // //         maxWidth: 600,
// // // // // //         borderRadius: '8px',
// // // // // //     },
// // // // // //     tab: {
// // // // // //         fontWeight: 'bold',
// // // // // //         textAlign: 'center',
// // // // // //         padding: '12px',
// // // // // //         cursor: 'pointer',
// // // // // //     },
// // // // // //     activeTab: {
// // // // // //         color: '#884CC0',
// // // // // //         borderBottom: '4px solid #884CC0',
// // // // // //     },
// // // // // //     tabContent: {
// // // // // //         padding: '16px',
// // // // // //         backgroundColor: '#e3e3e3',
// // // // // //         borderRadius: '4px',
// // // // // //         textAlign: 'center',
// // // // // //         position: 'relative',
// // // // // //     },
// // // // // //     uploadButton: {
// // // // // //         backgroundColor: '#D8B7FF',
// // // // // //         color: '#6A1B9A',
// // // // // //         '&:hover': {
// // // // // //             backgroundColor: '#D8B7FF',
// // // // // //         },
// // // // // //         marginTop: '16px',
// // // // // //     },
// // // // // //     inputFile: {
// // // // // //         position: 'absolute',
// // // // // //         width: '100%',
// // // // // //         height: '100%',
// // // // // //         opacity: 0,
// // // // // //         cursor: 'pointer',
// // // // // //     },
// // // // // // };

// // // // // // const ImageUpload = ({ open, onClose }) => {
// // // // // //     const [tabIndex, setTabIndex] = useState(0);
// // // // // //     const [image, setImage] = useState(null);
// // // // // //     const [cropper, setCropper] = useState(null);
// // // // // //     const imageInputRef = useRef(null);

// // // // // //     const handleTabChange = (event, newValue) => {
// // // // // //         setTabIndex(newValue);
// // // // // //     };

// // // // // //     const handleImageUpload = (event) => {
// // // // // //         const file = event.target.files[0];
// // // // // //         if (file) {
// // // // // //             setImage(URL.createObjectURL(file));
// // // // // //         }
// // // // // //     };

// // // // // //     const handleCrop = () => {
// // // // // //         if (cropper) {
// // // // // //             const croppedImage = cropper.getCroppedCanvas().toDataURL();
// // // // // //             console.log('Cropped image:', croppedImage);
// // // // // //         }
// // // // // //     };

// // // // // //     const handleDelete = () => {
// // // // // //         setImage(null);
// // // // // //         setCropper(null);
// // // // // //     };

// // // // // //     return (
// // // // // //         <ThemeProvider theme={theme}>
// // // // // //             <Dialog
// // // // // //                 open={open}
// // // // // //                 onClose={onClose}
// // // // // //                 fullWidth
// // // // // //                 maxWidth="sm"
// // // // // //                 sx={{
// // // // // //                     overflowX: 'auto',
// // // // // //                     '& .MuiDialog-paper': {
// // // // // //                         overflowY: 'visible',
// // // // // //                         width: '60%',
// // // // // //                         maxWidth: 'none',
// // // // // //                     },
// // // // // //                     '& .MuiDialog-container': {
// // // // // //                         height: 'auto',
// // // // // //                     },
// // // // // //                 }}
// // // // // //             >
// // // // // //                 <Formik
// // // // // //                     initialValues={{ image: null }}
// // // // // //                     onSubmit={(values, { setSubmitting }) => {
// // // // // //                         console.log('Uploaded image:', values.image);
// // // // // //                         setSubmitting(false);
// // // // // //                     }}
// // // // // //                 >
// // // // // //                     {({ setFieldValue }) => (
// // // // // //                         <Form>
// // // // // //                             <DialogTitle>
// // // // // //                                 <FaImage />
// // // // // //                                 <IconButton
// // // // // //                                     edge="end"
// // // // // //                                     color="inherit"
// // // // // //                                     onClick={onClose}
// // // // // //                                     aria-label="close"
// // // // // //                                     sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
// // // // // //                                 >
// // // // // //                                     <CloseIcon />
// // // // // //                                 </IconButton>
// // // // // //                             </DialogTitle>
// // // // // //                             <DialogContent dividers>
// // // // // //                                 <Typography variant="body2" color="textSecondary">
// // // // // //                                     Use ctrl + V to paste image from your clipboard
// // // // // //                                 </Typography>
// // // // // //                                 <Tabs
// // // // // //                                     value={tabIndex}
// // // // // //                                     onChange={handleTabChange}
// // // // // //                                     aria-label="image upload tabs"
// // // // // //                                 >
// // // // // //                                     <Tab label={<><UploadIcon /> Upload</>} sx={[styles.tab, tabIndex === 0 && styles.activeTab]} />
// // // // // //                                     <Tab label={<><SearchIcon /> Search</>} sx={[styles.tab, tabIndex === 1 && styles.activeTab]} />
// // // // // //                                     <Tab label={<><LinkIcon /> Paste Link</>} sx={[styles.tab, tabIndex === 2 && styles.activeTab]} />
// // // // // //                                 </Tabs>
// // // // // //                                 <Box sx={styles.tabContent}>
// // // // // //                                     {tabIndex === 0 && (
// // // // // //                                         <Box
// // // // // //                                             className="flex flex-auto bg-light-2 flex-col font-semibold border-dark-6 border relative min-h-0 rounded p-4"
// // // // // //                                             sx={{
// // // // // //                                                 display: 'flex',
// // // // // //                                                 flexDirection: 'column',
// // // // // //                                                 alignItems: 'center',
// // // // // //                                                 justifyContent: 'center',
// // // // // //                                                 bgcolor: 'light-2',
// // // // // //                                                 border: '1px solid',
// // // // // //                                                 borderColor: 'dark-6',
// // // // // //                                                 borderRadius: '8px',
// // // // // //                                                 p: 4,
// // // // // //                                                 minHeight: 0,
// // // // // //                                                 position: 'relative',
// // // // // //                                             }}
// // // // // //                                         >
// // // // // //                                             <input
// // // // // //                                                 type="file"
// // // // // //                                                 accept="image/jpg,image/jpeg,image/png,image/gif"
// // // // // //                                                 ref={imageInputRef}
// // // // // //                                                 onChange={handleImageUpload}
// // // // // //                                                 style={styles.inputFile}
// // // // // //                                             />
// // // // // //                                             {image && (
// // // // // //                                                 <Box
// // // // // //                                                     sx={{
// // // // // //                                                         position: 'relative',
// // // // // //                                                         width: '100%',
// // // // // //                                                         height: 'auto',
// // // // // //                                                         display: 'flex',
// // // // // //                                                         alignItems: 'center',
// // // // // //                                                         justifyContent: 'center',
// // // // // //                                                     }}
// // // // // //                                                 >
// // // // // //                                                     <Cropper
// // // // // //                                                         src={image}
// // // // // //                                                         style={{ height: 400, width: '100%' }}
// // // // // //                                                         initialAspectRatio={16 / 9}
// // // // // //                                                         aspectRatio={16 / 9}
// // // // // //                                                         guides={false}
// // // // // //                                                         ref={setCropper}
// // // // // //                                                     />
// // // // // //                                                     <IconButton
// // // // // //                                                         sx={{
// // // // // //                                                             position: 'absolute',
// // // // // //                                                             top: 8,
// // // // // //                                                             left: 8,
// // // // // //                                                             color: 'red',
// // // // // //                                                         }}
// // // // // //                                                         onClick={handleDelete}
// // // // // //                                                     >
// // // // // //                                                         <CloseIcon />
// // // // // //                                                     </IconButton>
// // // // // //                                                     <Button
// // // // // //                                                         variant="contained"
// // // // // //                                                         color="primary"
// // // // // //                                                         sx={{
// // // // // //                                                             position: 'absolute',
// // // // // //                                                             bottom: 16,
// // // // // //                                                             right: 16,
// // // // // //                                                         }}
// // // // // //                                                         onClick={handleCrop}
// // // // // //                                                     >
// // // // // //                                                         Save
// // // // // //                                                     </Button>
// // // // // //                                                 </Box>
// // // // // //                                             )}
// // // // // //                                             {!image && (
// // // // // //                                                 <Box
// // // // // //                                                     className="flex flex-col m-2 justify-center items-center"
// // // // // //                                                     sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
// // // // // //                                                 >
// // // // // //                                                     <Typography variant="body2" color="text.secondary">
// // // // // //                                                         Drag your image here
// // // // // //                                                     </Typography>
// // // // // //                                                     <Typography variant="caption" color="text.secondary">
// // // // // //                                                         or
// // // // // //                                                     </Typography>
// // // // // //                                                 </Box>
// // // // // //                                             )}
// // // // // //                                             <Button
// // // // // //                                                 variant="contained"
// // // // // //                                                 color="secondary"
// // // // // //                                                 sx={styles.uploadButton}
// // // // // //                                                 aria-label="Upload from device"
// // // // // //                                                 onClick={() => imageInputRef.current.click()}
// // // // // //                                             >
// // // // // //                                                 Upload from device
// // // // // //                                             </Button>
// // // // // //                                             <Typography variant="caption" color="text.secondary" sx={{ pt: 6, textAlign: 'center' }}>
// // // // // //                                                 Use a JPG, PNG or GIF, up to 5 MB
// // // // // //                                             </Typography>
// // // // // //                                         </Box>
// // // // // //                                     )}
// // // // // //                                 </Box>
// // // // // //                             </DialogContent>
// // // // // //                             <DialogActions>
// // // // // //                                 <Button onClick={onClose} variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" }}>
// // // // // //                                     Close
// // // // // //                                 </Button>
// // // // // //                             </DialogActions>
// // // // // //                         </Form>
// // // // // //                     )}
// // // // // //                 </Formik>
// // // // // //             </Dialog>
// // // // // //         </ThemeProvider>
// // // // // //     );
// // // // // // };

// // // // // // export default ImageUpload;



// // // // // import React, { useState, useRef } from 'react';
// // // // // import {
// // // // //     Dialog, DialogTitle, DialogContent, DialogActions,
// // // // //     Button, IconButton, Typography, Tabs, Tab, Box,
// // // // // } from '@mui/material';
// // // // // import CloseIcon from '@mui/icons-material/Close';
// // // // // import UploadIcon from '@mui/icons-material/Upload';
// // // // // import SearchIcon from '@mui/icons-material/Search';
// // // // // import LinkIcon from '@mui/icons-material/Link';
// // // // // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // // // // import { Formik, Form } from 'formik';
// // // // // import { FaImage } from 'react-icons/fa';
// // // // // import Cropper from 'react-cropper';
// // // // // import 'cropperjs/dist/cropper.css';
// // // // // import "./ImageUpload.css";

// // // // // const theme = createTheme({
// // // // //     components: {
// // // // //         MuiButton: {
// // // // //             styleOverrides: {
// // // // //                 contained: {
// // // // //                     backgroundColor: '#1976d2',
// // // // //                     color: '#fff',
// // // // //                     '&:hover': {
// // // // //                         backgroundColor: '#115293',
// // // // //                     },
// // // // //                 },
// // // // //                 outlined: {
// // // // //                     color: '#1976d2',
// // // // //                     borderColor: '#1976d2',
// // // // //                     '&:hover': {
// // // // //                         borderColor: '#115293',
// // // // //                         color: '#115293',
// // // // //                     },
// // // // //                 },
// // // // //             },
// // // // //         },
// // // // //     },
// // // // // });

// // // // // const styles = {
// // // // //     dialogPaper: {
// // // // //         padding: '24px',
// // // // //         position: 'relative',
// // // // //         width: '100%',
// // // // //         maxWidth: 600,
// // // // //         borderRadius: '8px',
// // // // //     },
// // // // //     tab: {
// // // // //         fontWeight: 'bold',
// // // // //         textAlign: 'center',
// // // // //         padding: '12px',
// // // // //         cursor: 'pointer',
// // // // //     },
// // // // //     activeTab: {
// // // // //         color: '#884CC0',
// // // // //         borderBottom: '4px solid #884CC0',
// // // // //     },
// // // // //     tabContent: {
// // // // //         padding: '16px',
// // // // //         backgroundColor: '#e3e3e3',
// // // // //         borderRadius: '4px',
// // // // //         textAlign: 'center',
// // // // //         position: 'relative',
// // // // //     },
// // // // //     uploadButton: {
// // // // //         backgroundColor: '#D8B7FF',
// // // // //         color: '#6A1B9A',
// // // // //         '&:hover': {
// // // // //             backgroundColor: '#D8B7FF',
// // // // //         },
// // // // //         marginTop: '16px',
// // // // //     },
// // // // //     inputFile: {
// // // // //         position: 'absolute',
// // // // //         width: '100%',
// // // // //         height: '100%',
// // // // //         opacity: 0,
// // // // //         cursor: 'pointer',
// // // // //     },
// // // // // };

// // // // // const ImageUploadDialog = ({ open, onClose }) => {
// // // // //     const [tabIndex, setTabIndex] = useState(0);
// // // // //     const [image, setImage] = useState(null);
// // // // //     const [cropper, setCropper] = useState(null);
// // // // //     const imageInputRef = useRef(null);

// // // // //     const handleTabChange = (event, newValue) => {
// // // // //         setTabIndex(newValue);
// // // // //     };

// // // // //     const handleImageUpload = (event) => {
// // // // //         const file = event.target.files[0];
// // // // //         if (file) {
// // // // //             setImage(URL.createObjectURL(file));
// // // // //         }
// // // // //     };

// // // // //     const handleCrop = () => {
// // // // //         if (cropper) {
// // // // //             const croppedImage = cropper.getCroppedCanvas().toDataURL();
// // // // //             console.log('Cropped image:', croppedImage);
// // // // //         }
// // // // //     };

// // // // //     const handleDelete = () => {
// // // // //         setImage(null);
// // // // //         setCropper(null);
// // // // //     };

// // // // //     return (
// // // // //         <ThemeProvider theme={theme}>
// // // // //             <Dialog
// // // // //                 open={open}
// // // // //                 onClose={onClose}
// // // // //                 fullWidth
// // // // //                 maxWidth="sm"
// // // // //                 sx={{
// // // // //                     overflowX: 'auto',
// // // // //                     '& .MuiDialog-paper': {
// // // // //                         overflowY: 'visible',
// // // // //                         width: '60%',
// // // // //                         maxWidth: 'none',
// // // // //                     },
// // // // //                     '& .MuiDialog-container': {
// // // // //                         height: 'auto',
// // // // //                     },
// // // // //                 }}
// // // // //             >
// // // // //                 <Formik
// // // // //                     initialValues={{ image: null }}
// // // // //                     onSubmit={(values, { setSubmitting }) => {
// // // // //                         console.log('Uploaded image:', values.image);
// // // // //                         setSubmitting(false);
// // // // //                     }}
// // // // //                 >
// // // // //                     {({ setFieldValue }) => (
// // // // //                         <Form>
// // // // //                             <DialogTitle>
// // // // //                                 <FaImage />
// // // // //                                 <IconButton
// // // // //                                     edge="end"
// // // // //                                     color="inherit"
// // // // //                                     onClick={onClose}
// // // // //                                     aria-label="close"
// // // // //                                     sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
// // // // //                                 >
// // // // //                                     <CloseIcon />
// // // // //                                 </IconButton>
// // // // //                             </DialogTitle>
// // // // //                             <DialogContent dividers>
// // // // //                                 <Typography variant="body2" color="textSecondary">
// // // // //                                     Use ctrl + V to paste image from your clipboard
// // // // //                                 </Typography>
// // // // //                                 <Tabs
// // // // //                                     value={tabIndex}
// // // // //                                     onChange={handleTabChange}
// // // // //                                     aria-label="image upload tabs"
// // // // //                                 >
// // // // //                                     <Tab label={<><UploadIcon /> Upload</>} sx={[styles.tab, tabIndex === 0 && styles.activeTab]} />
// // // // //                                     <Tab label={<><SearchIcon /> Search</>} sx={[styles.tab, tabIndex === 1 && styles.activeTab]} />
// // // // //                                     <Tab label={<><LinkIcon /> Paste Link</>} sx={[styles.tab, tabIndex === 2 && styles.activeTab]} />
// // // // //                                 </Tabs>
// // // // //                                 <Box sx={styles.tabContent}>
// // // // //                                     {tabIndex === 0 && (
// // // // //                                         <Box
// // // // //                                             className="flex flex-auto bg-light-2 flex-col font-semibold border-dark-6 border relative min-h-0 rounded p-4"
// // // // //                                             sx={{
// // // // //                                                 display: 'flex',
// // // // //                                                 flexDirection: 'column',
// // // // //                                                 alignItems: 'center',
// // // // //                                                 justifyContent: 'center',
// // // // //                                                 bgcolor: 'light-2',
// // // // //                                                 border: '1px solid',
// // // // //                                                 borderColor: 'dark-6',
// // // // //                                                 borderRadius: '8px',
// // // // //                                                 p: 4,
// // // // //                                                 minHeight: 0,
// // // // //                                                 position: 'relative',
// // // // //                                             }}
// // // // //                                         >
// // // // //                                             <input
// // // // //                                                 type="file"
// // // // //                                                 accept="image/jpg,image/jpeg,image/png,image/gif"
// // // // //                                                 ref={imageInputRef}
// // // // //                                                 onChange={handleImageUpload}
// // // // //                                                 style={styles.inputFile}
// // // // //                                             />
// // // // //                                             {image && (
// // // // //                                                 <Box
// // // // //                                                     sx={{
// // // // //                                                         position: 'relative',
// // // // //                                                         width: '100%',
// // // // //                                                         height: 'auto',
// // // // //                                                         display: 'flex',
// // // // //                                                         alignItems: 'center',
// // // // //                                                         justifyContent: 'center',
// // // // //                                                     }}
// // // // //                                                 >
// // // // //                                                     <Cropper
// // // // //                                                         src={image}
// // // // //                                                         style={{ height: 400, width: '100%' }}
// // // // //                                                         initialAspectRatio={16 / 9}
// // // // //                                                         aspectRatio={16 / 9}
// // // // //                                                         guides={false}
// // // // //                                                         viewMode={1}
// // // // //                                                         zoomable={false}
// // // // //                                                         scalable={false}
// // // // //                                                         rotatable={false}
// // // // //                                                         ref={setCropper}
// // // // //                                                     />
// // // // //                                                     <IconButton
// // // // //                                                         sx={{
// // // // //                                                             position: 'absolute',
// // // // //                                                             top: 8,
// // // // //                                                             left: 8,
// // // // //                                                             color: 'red',
// // // // //                                                         }}
// // // // //                                                         onClick={handleDelete}
// // // // //                                                     >
// // // // //                                                         <CloseIcon />
// // // // //                                                     </IconButton>
// // // // //                                                     <Button
// // // // //                                                         variant="contained"
// // // // //                                                         color="primary"
// // // // //                                                         sx={{
// // // // //                                                             position: 'absolute',
// // // // //                                                             bottom: 16,
// // // // //                                                             right: 16,
// // // // //                                                         }}
// // // // //                                                         onClick={handleCrop}
// // // // //                                                     >
// // // // //                                                         Save
// // // // //                                                     </Button>
// // // // //                                                 </Box>
// // // // //                                             )}
// // // // //                                             {!image && (
// // // // //                                                 <Box
// // // // //                                                     className="flex flex-col m-2 justify-center items-center"
// // // // //                                                     sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
// // // // //                                                 >
// // // // //                                                     <Typography variant="body2" color="text.secondary">
// // // // //                                                         Drag your image here
// // // // //                                                     </Typography>
// // // // //                                                     <Typography variant="caption" color="text.secondary">
// // // // //                                                         or
// // // // //                                                     </Typography>
// // // // //                                                 </Box>
// // // // //                                             )}
// // // // //                                             <Button
// // // // //                                                 variant="contained"
// // // // //                                                 color="secondary"
// // // // //                                                 sx={styles.uploadButton}
// // // // //                                                 aria-label="Upload from device"
// // // // //                                                 onClick={() => imageInputRef.current.click()}
// // // // //                                             >
// // // // //                                                 Upload from device
// // // // //                                             </Button>
// // // // //                                             <Typography variant="caption" color="text.secondary" sx={{ pt: 6, textAlign: 'center' }}>
// // // // //                                                 Use a JPG, PNG or GIF, up to 5 MB
// // // // //                                             </Typography>
// // // // //                                         </Box>
// // // // //                                     )}
// // // // //                                 </Box>
// // // // //                             </DialogContent>
// // // // //                             <DialogActions>
// // // // //                                 <Button onClick={onClose} variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" }}>
// // // // //                                     Close
// // // // //                                 </Button>
// // // // //                             </DialogActions>
// // // // //                         </Form>
// // // // //                     )}
// // // // //                 </Formik>
// // // // //             </Dialog>
// // // // //         </ThemeProvider>
// // // // //     );
// // // // // };

// // // // // export default ImageUploadDialog;






// // // // import React, { useState, useRef } from 'react';
// // // // import {
// // // //     Dialog, DialogTitle, DialogContent, DialogActions,
// // // //     Button, IconButton, Typography, Tabs, Tab, Box,
// // // // } from '@mui/material';
// // // // import CloseIcon from '@mui/icons-material/Close';
// // // // import UploadIcon from '@mui/icons-material/Upload';
// // // // import SearchIcon from '@mui/icons-material/Search';
// // // // import LinkIcon from '@mui/icons-material/Link';
// // // // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // // // import { Formik, Form } from 'formik';
// // // // import { FaImage } from 'react-icons/fa';
// // // // import Cropper from 'react-cropper';
// // // // import 'cropperjs/dist/cropper.css';
// // // // import "./ImageUpload.css";

// // // // const theme = createTheme({
// // // //     components: {
// // // //         MuiButton: {
// // // //             styleOverrides: {
// // // //                 contained: {
// // // //                     backgroundColor: '#1976d2',
// // // //                     color: '#fff',
// // // //                     '&:hover': {
// // // //                         backgroundColor: '#115293',
// // // //                     },
// // // //                 },
// // // //                 outlined: {
// // // //                     color: '#1976d2',
// // // //                     borderColor: '#1976d2',
// // // //                     '&:hover': {
// // // //                         borderColor: '#115293',
// // // //                         color: '#115293',
// // // //                     },
// // // //                 },
// // // //             },
// // // //         },
// // // //     },
// // // // });

// // // // const styles = {
// // // //     dialogPaper: {
// // // //         padding: '24px',
// // // //         position: 'relative',
// // // //         width: '100%',
// // // //         maxWidth: 600,
// // // //         borderRadius: '8px',
// // // //     },
// // // //     tab: {
// // // //         fontWeight: 'bold',
// // // //         textAlign: 'center',
// // // //         padding: '12px',
// // // //         cursor: 'pointer',
// // // //     },
// // // //     activeTab: {
// // // //         color: '#884CC0',
// // // //         borderBottom: '4px solid #884CC0',
// // // //     },
// // // //     tabContent: {
// // // //         padding: '16px',
// // // //         backgroundColor: '#e3e3e3',
// // // //         borderRadius: '4px',
// // // //         textAlign: 'center',
// // // //         position: 'relative',
// // // //     },
// // // //     uploadButton: {
// // // //         backgroundColor: '#D8B7FF',
// // // //         color: '#6A1B9A',
// // // //         '&:hover': {
// // // //             backgroundColor: '#D8B7FF',
// // // //         },
// // // //         marginTop: '16px',
// // // //     },
// // // //     inputFile: {
// // // //         position: 'absolute',
// // // //         width: '100%',
// // // //         height: '100%',
// // // //         opacity: 0,
// // // //         cursor: 'pointer',
// // // //     },
// // // //     cropperContainer: {
// // // //         position: 'relative',
// // // //         width: '100%',
// // // //         height: 400,
// // // //         backgroundColor: 'transparent', // Ensure container background is transparent
// // // //     },
// // // //     deleteButton: {
// // // //         position: 'absolute',
// // // //         top: 8,
// // // //         left: 8,
// // // //         color: 'red',
// // // //     },
// // // //     saveButton: {
// // // //         position: 'absolute',
// // // //         bottom: 16,
// // // //         right: 16,
// // // //     },
// // // // };

// // // // const ImageUploadDialog = ({ open, onClose }) => {
// // // //     const [tabIndex, setTabIndex] = useState(0);
// // // //     const [image, setImage] = useState(null);
// // // //     const [cropper, setCropper] = useState(null);
// // // //     const imageInputRef = useRef(null);

// // // //     const handleTabChange = (event, newValue) => {
// // // //         setTabIndex(newValue);
// // // //     };

// // // //     const handleImageUpload = (event) => {
// // // //         const file = event.target.files[0];
// // // //         if (file) {
// // // //             setImage(URL.createObjectURL(file));
// // // //         }
// // // //     };

// // // //     const handleCrop = () => {
// // // //         if (cropper) {
// // // //             const croppedImage = cropper.getCroppedCanvas().toDataURL();
// // // //             console.log('Cropped image:', croppedImage);
// // // //         }
// // // //     };

// // // //     const handleDelete = () => {
// // // //         setImage(null);
// // // //         setCropper(null);
// // // //     };

// // // //     return (
// // // //         <ThemeProvider theme={theme}>
// // // //             <Dialog
// // // //                 open={open}
// // // //                 onClose={onClose}
// // // //                 fullWidth
// // // //                 maxWidth="sm"
// // // //                 sx={{
// // // //                     overflowX: 'auto',
// // // //                     '& .MuiDialog-paper': {
// // // //                         overflowY: 'visible',
// // // //                         width: '60%',
// // // //                         maxWidth: 'none',
// // // //                     },
// // // //                     '& .MuiDialog-container': {
// // // //                         height: 'auto',
// // // //                     },
// // // //                 }}
// // // //             >
// // // //                 <Formik
// // // //                     initialValues={{ image: null }}
// // // //                     onSubmit={(values, { setSubmitting }) => {
// // // //                         console.log('Uploaded image:', values.image);
// // // //                         setSubmitting(false);
// // // //                     }}
// // // //                 >
// // // //                     {({ setFieldValue }) => (
// // // //                         <Form>
// // // //                             <DialogTitle>
// // // //                                 <FaImage />
// // // //                                 <IconButton
// // // //                                     edge="end"
// // // //                                     color="inherit"
// // // //                                     onClick={onClose}
// // // //                                     aria-label="close"
// // // //                                     sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
// // // //                                 >
// // // //                                     <CloseIcon />
// // // //                                 </IconButton>
// // // //                             </DialogTitle>
// // // //                             <DialogContent dividers>
// // // //                                 <Typography variant="body2" color="textSecondary">
// // // //                                     Use ctrl + V to paste image from your clipboard
// // // //                                 </Typography>
// // // //                                 <Tabs
// // // //                                     value={tabIndex}
// // // //                                     onChange={handleTabChange}
// // // //                                     aria-label="image upload tabs"
// // // //                                 >
// // // //                                     <Tab label={<><UploadIcon /> Upload</>} sx={[styles.tab, tabIndex === 0 && styles.activeTab]} />
// // // //                                     <Tab label={<><SearchIcon /> Search</>} sx={[styles.tab, tabIndex === 1 && styles.activeTab]} />
// // // //                                     <Tab label={<><LinkIcon /> Paste Link</>} sx={[styles.tab, tabIndex === 2 && styles.activeTab]} />
// // // //                                 </Tabs>
// // // //                                 <Box sx={styles.tabContent}>
// // // //                                     {tabIndex === 0 && (
// // // //                                         <Box
// // // //                                             className="flex flex-auto bg-light-2 flex-col font-semibold border-dark-6 border relative min-h-0 rounded p-4"
// // // //                                             sx={{
// // // //                                                 display: 'flex',
// // // //                                                 flexDirection: 'column',
// // // //                                                 alignItems: 'center',
// // // //                                                 justifyContent: 'center',
// // // //                                                 bgcolor: 'light-2',
// // // //                                                 border: '1px solid',
// // // //                                                 borderColor: 'dark-6',
// // // //                                                 borderRadius: '8px',
// // // //                                                 p: 4,
// // // //                                                 minHeight: 0,
// // // //                                                 position: 'relative',
// // // //                                             }}
// // // //                                         >
// // // //                                             <input
// // // //                                                 type="file"
// // // //                                                 accept="image/jpg,image/jpeg,image/png,image/gif"
// // // //                                                 ref={imageInputRef}
// // // //                                                 onChange={handleImageUpload}
// // // //                                                 style={styles.inputFile}
// // // //                                             />
// // // //                                             {image && (
// // // //                                                 <Box sx={styles.cropperContainer}>
// // // //                                                     <Cropper
// // // //                                                         src={image}
// // // //                                                         style={{ height: '100%', width: '100%' }}
// // // //                                                         initialAspectRatio={16 / 9}
// // // //                                                         aspectRatio={16 / 9}
// // // //                                                         guides={false}
// // // //                                                         viewMode={1}
// // // //                                                         zoomable={false}
// // // //                                                         scalable={false}
// // // //                                                         rotatable={false}
// // // //                                                         ref={setCropper}
// // // //                                                     />
// // // //                                                     <IconButton
// // // //                                                         sx={styles.deleteButton}
// // // //                                                         onClick={handleDelete}
// // // //                                                     >
// // // //                                                         <CloseIcon />
// // // //                                                     </IconButton>
// // // //                                                     <Button
// // // //                                                         variant="contained"
// // // //                                                         color="primary"
// // // //                                                         sx={styles.saveButton}
// // // //                                                         onClick={handleCrop}
// // // //                                                     >
// // // //                                                         Save
// // // //                                                     </Button>
// // // //                                                 </Box>
// // // //                                             )}
// // // //                                             {!image && (
// // // //                                                 <Box
// // // //                                                     className="flex flex-col m-2 justify-center items-center"
// // // //                                                     sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
// // // //                                                 >
// // // //                                                     <Typography variant="body2" color="text.secondary">
// // // //                                                         Drag your image here
// // // //                                                     </Typography>
// // // //                                                     <Typography variant="caption" color="text.secondary">
// // // //                                                         or
// // // //                                                     </Typography>
// // // //                                                 </Box>
// // // //                                             )}
// // // //                                             <Button
// // // //                                                 variant="contained"
// // // //                                                 color="secondary"
// // // //                                                 sx={styles.uploadButton}
// // // //                                                 aria-label="Upload from device"
// // // //                                                 onClick={() => imageInputRef.current.click()}
// // // //                                             >
// // // //                                                 Upload from device
// // // //                                             </Button>
// // // //                                             <Typography variant="caption" color="text.secondary" sx={{ pt: 6, textAlign: 'center' }}>
// // // //                                                 Use a JPG, PNG or GIF, up to 5 MB
// // // //                                             </Typography>
// // // //                                         </Box>
// // // //                                     )}
// // // //                                 </Box>
// // // //                             </DialogContent>
// // // //                             <DialogActions>
// // // //                                 <Button onClick={onClose} variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" }}>
// // // //                                     Close
// // // //                                 </Button>
// // // //                             </DialogActions>
// // // //                         </Form>
// // // //                     )}
// // // //                 </Formik>
// // // //             </Dialog>
// // // //         </ThemeProvider>
// // // //     );
// // // // };

// // // // export default ImageUploadDialog;




// // // import React, { useState, useRef } from 'react';
// // // import {
// // //     Dialog, DialogTitle, DialogContent, DialogActions,
// // //     Button, IconButton, Typography, Tabs, Tab, Box,
// // // } from '@mui/material';
// // // import CloseIcon from '@mui/icons-material/Close';
// // // import UploadIcon from '@mui/icons-material/Upload';
// // // import SearchIcon from '@mui/icons-material/Search';
// // // import LinkIcon from '@mui/icons-material/Link';
// // // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // // import { Formik, Form } from 'formik';
// // // import { FaImage } from 'react-icons/fa';
// // // import Cropper from 'react-cropper';
// // // import 'cropperjs/dist/cropper.css';
// // // import "./ImageUpload.css";

// // // const theme = createTheme({
// // //     components: {
// // //         MuiButton: {
// // //             styleOverrides: {
// // //                 contained: {
// // //                     backgroundColor: '#1976d2',
// // //                     color: '#fff',
// // //                     '&:hover': {
// // //                         backgroundColor: '#115293',
// // //                     },
// // //                 },
// // //                 outlined: {
// // //                     color: '#1976d2',
// // //                     borderColor: '#1976d2',
// // //                     '&:hover': {
// // //                         borderColor: '#115293',
// // //                         color: '#115293',
// // //                     },
// // //                 },
// // //             },
// // //         },
// // //     },
// // // });

// // // const styles = {
// // //     dialogPaper: {
// // //         padding: '24px',
// // //         position: 'relative',
// // //         width: '100%',
// // //         maxWidth: 600,
// // //         borderRadius: '8px',
// // //     },
// // //     tab: {
// // //         fontWeight: 'bold',
// // //         textAlign: 'center',
// // //         padding: '12px',
// // //         cursor: 'pointer',
// // //     },
// // //     activeTab: {
// // //         color: '#884CC0',
// // //         borderBottom: '4px solid #884CC0',
// // //     },
// // //     tabContent: {
// // //         padding: '16px',
// // //         backgroundColor: '#e3e3e3',
// // //         borderRadius: '4px',
// // //         textAlign: 'center',
// // //         position: 'relative',
// // //     },
// // //     uploadButton: {
// // //         backgroundColor: '#D8B7FF',
// // //         color: '#6A1B9A',
// // //         '&:hover': {
// // //             backgroundColor: '#D8B7FF',
// // //         },
// // //         marginTop: '16px',
// // //     },
// // //     inputFile: {
// // //         position: 'absolute',
// // //         width: '100%',
// // //         height: '100%',
// // //         opacity: 0,
// // //         cursor: 'pointer',
// // //     },
// // //     cropperContainer: {
// // //         position: 'relative',
// // //         width: '100%',
// // //         height: 400,
// // //         backgroundColor: 'transparent', // Ensure container background is transparent
// // //     },
// // //     deleteButton: {
// // //         position: 'absolute',
// // //         top: 8,
// // //         left: 8,
// // //         color: 'red',
// // //     },
// // //     saveButton: {
// // //         position: 'absolute',
// // //         bottom: 16,
// // //         right: 16,
// // //     },
// // // };

// // // const ImageUpload = ({ open, onClose }) => {
// // //     const [tabIndex, setTabIndex] = useState(0);
// // //     const [image, setImage] = useState(null);
// // //     const [cropper, setCropper] = useState(null);
// // //     const [openCropperDialog, setOpenCropperDialog] = useState(false);
// // //     const imageInputRef = useRef(null);

// // //     const handleTabChange = (event, newValue) => {
// // //         setTabIndex(newValue);
// // //     };

// // //     const handleImageUpload = (event) => {
// // //         const file = event.target.files[0];
// // //         if (file) {
// // //             setImage(URL.createObjectURL(file));
// // //             setOpenCropperDialog(true); // Open the cropper dialog
// // //         }
// // //     };

// // //     const handleCrop = () => {
// // //         if (cropper) {
// // //             const croppedImage = cropper.getCroppedCanvas().toDataURL();
// // //             console.log('Cropped image:', croppedImage);
// // //             setOpenCropperDialog(false); // Close the cropper dialog
// // //         }
// // //     };

// // //     const handleDelete = () => {
// // //         setImage(null);
// // //         setCropper(null);
// // //     };

// // //     const handleCloseCropperDialog = () => {
// // //         setOpenCropperDialog(false);
// // //         setImage(null);
// // //         setCropper(null);
// // //     };

// // //     return (
// // //         <ThemeProvider theme={theme}>
// // //             <Dialog
// // //                 open={open}
// // //                 onClose={onClose}
// // //                 fullWidth
// // //                 maxWidth="sm"
// // //                 sx={{
// // //                     overflowX: 'auto',
// // //                     '& .MuiDialog-paper': {
// // //                         overflowY: 'visible',
// // //                         width: '60%',
// // //                         maxWidth: 'none',
// // //                     },
// // //                     '& .MuiDialog-container': {
// // //                         height: 'auto',
// // //                     },
// // //                 }}
// // //             >
// // //                 <Formik
// // //                     initialValues={{ image: null }}
// // //                     onSubmit={(values, { setSubmitting }) => {
// // //                         console.log('Uploaded image:', values.image);
// // //                         setSubmitting(false);
// // //                     }}
// // //                 >
// // //                     {({ setFieldValue }) => (
// // //                         <Form>
// // //                             <DialogTitle>
// // //                                 <FaImage />
// // //                                 <IconButton
// // //                                     edge="end"
// // //                                     color="inherit"
// // //                                     onClick={onClose}
// // //                                     aria-label="close"
// // //                                     sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
// // //                                 >
// // //                                     <CloseIcon />
// // //                                 </IconButton>
// // //                             </DialogTitle>
// // //                             <DialogContent dividers>
// // //                                 <Typography variant="body2" color="textSecondary">
// // //                                     Use ctrl + V to paste image from your clipboard
// // //                                 </Typography>
// // //                                 <Tabs
// // //                                     value={tabIndex}
// // //                                     onChange={handleTabChange}
// // //                                     aria-label="image upload tabs"
// // //                                 >
// // //                                     <Tab label={<><UploadIcon /> Upload</>} sx={[styles.tab, tabIndex === 0 && styles.activeTab]} />
// // //                                     <Tab label={<><SearchIcon /> Search</>} sx={[styles.tab, tabIndex === 1 && styles.activeTab]} />
// // //                                     <Tab label={<><LinkIcon /> Paste Link</>} sx={[styles.tab, tabIndex === 2 && styles.activeTab]} />
// // //                                 </Tabs>
// // //                                 <Box sx={styles.tabContent}>
// // //                                     {tabIndex === 0 && (
// // //                                         <Box
// // //                                             className="flex flex-auto bg-light-2 flex-col font-semibold border-dark-6 border relative min-h-0 rounded p-4"
// // //                                             sx={{
// // //                                                 display: 'flex',
// // //                                                 flexDirection: 'column',
// // //                                                 alignItems: 'center',
// // //                                                 justifyContent: 'center',
// // //                                                 bgcolor: 'light-2',
// // //                                                 border: '1px solid',
// // //                                                 borderColor: 'dark-6',
// // //                                                 borderRadius: '8px',
// // //                                                 p: 4,
// // //                                                 minHeight: 0,
// // //                                                 position: 'relative',
// // //                                             }}
// // //                                         >
// // //                                             <input
// // //                                                 type="file"
// // //                                                 accept="image/jpg,image/jpeg,image/png,image/gif"
// // //                                                 ref={imageInputRef}
// // //                                                 onChange={handleImageUpload}
// // //                                                 style={styles.inputFile}
// // //                                             />
// // //                                             <Button
// // //                                                 variant="contained"
// // //                                                 color="secondary"
// // //                                                 sx={styles.uploadButton}
// // //                                                 aria-label="Upload from device"
// // //                                                 onClick={() => imageInputRef.current.click()}
// // //                                             >
// // //                                                 Upload from device
// // //                                             </Button>
// // //                                             <Typography variant="caption" color="text.secondary" sx={{ pt: 6, textAlign: 'center' }}>
// // //                                                 Use a JPG, PNG or GIF, up to 5 MB
// // //                                             </Typography>

// // //                                             <Dialog
// // //                                                 open={openCropperDialog}
// // //                                                 onClose={handleCloseCropperDialog}
// // //                                                 fullWidth
// // //                                                 maxWidth="md"
// // //                                                 sx={{
// // //                                                     '& .MuiDialog-paper': {
// // //                                                         overflowY: 'visible',
// // //                                                     },
// // //                                                 }}
// // //                                             >
// // //                                                 <DialogTitle>
// // //                                                     Crop Image
// // //                                                     <IconButton
// // //                                                         edge="end"
// // //                                                         color="inherit"
// // //                                                         onClick={handleCloseCropperDialog}
// // //                                                         aria-label="close"
// // //                                                         sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
// // //                                                     >
// // //                                                         <CloseIcon />
// // //                                                     </IconButton>
// // //                                                 </DialogTitle>
// // //                                                 <DialogContent dividers>
// // //                                                     {image && (
// // //                                                         <Box sx={styles.cropperContainer}>
// // //                                                             <Cropper
// // //                                                                 src={image}
// // //                                                                 style={{ height: '100%', width: '100%' }}
// // //                                                                 initialAspectRatio={16 / 9}
// // //                                                                 aspectRatio={16 / 9}
// // //                                                                 guides={false}
// // //                                                                 viewMode={1}
// // //                                                                 zoomable={false}
// // //                                                                 scalable={false}
// // //                                                                 rotatable={false}
// // //                                                                 ref={setCropper}
// // //                                                             />
// // //                                                             <IconButton
// // //                                                                 sx={styles.deleteButton}
// // //                                                                 onClick={handleDelete}
// // //                                                             >
// // //                                                                 <CloseIcon />
// // //                                                             </IconButton>
// // //                                                             <Button
// // //                                                                 variant="contained"
// // //                                                                 color="primary"
// // //                                                                 sx={styles.saveButton}
// // //                                                                 onClick={handleCrop}
// // //                                                             >
// // //                                                                 Save
// // //                                                             </Button>
// // //                                                         </Box>
// // //                                                     )}
// // //                                                 </DialogContent>
// // //                                             </Dialog>
// // //                                         </Box>


// // //                                     )}
// // //                                 </Box>
// // //                             </DialogContent>
// // //                             <DialogActions>
// // //                                 <Button onClick={onClose} variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" }}>
// // //                                     Close
// // //                                 </Button>
// // //                             </DialogActions>
// // //                         </Form>
// // //                     )}
// // //                 </Formik>
// // //             </Dialog>

// // //         </ThemeProvider>
// // //     );
// // // };

// // // export default ImageUpload;



// // // import React, { useState, useRef } from 'react';
// // // import {
// // //     Dialog, DialogTitle, DialogContent, DialogActions,
// // //     Button, IconButton, Typography, Tabs, Tab, Box,
// // // } from '@mui/material';
// // // import CloseIcon from '@mui/icons-material/Close';
// // // import UploadIcon from '@mui/icons-material/Upload';
// // // import SearchIcon from '@mui/icons-material/Search';
// // // import LinkIcon from '@mui/icons-material/Link';
// // // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // // import { FaImage } from 'react-icons/fa';
// // // import Cropper from 'react-cropper';
// // // import 'cropperjs/dist/cropper.css';
// // // import "./ImageUpload.css";
// // // import { Formik, Form } from 'formik';


// // // const theme = createTheme({
// // //     components: {
// // //         MuiButton: {
// // //             styleOverrides: {
// // //                 contained: {
// // //                     backgroundColor: '#1976d2',
// // //                     color: '#fff',
// // //                     '&:hover': {
// // //                         backgroundColor: '#115293',
// // //                     },
// // //                 },
// // //                 outlined: {
// // //                     color: '#1976d2',
// // //                     borderColor: '#1976d2',
// // //                     '&:hover': {
// // //                         borderColor: '#115293',
// // //                         color: '#115293',
// // //                     },
// // //                 },
// // //             },
// // //         },
// // //     },
// // // });

// // // const styles = {
// // //     dialogPaper: {
// // //         padding: '24px',
// // //         position: 'relative',
// // //         width: '100%',
// // //         maxWidth: 600,
// // //         borderRadius: '8px',
// // //     },
// // //     tab: {
// // //         fontWeight: 'bold',
// // //         textAlign: 'center',
// // //         padding: '12px',
// // //         cursor: 'pointer',
// // //     },
// // //     activeTab: {
// // //         color: '#884CC0',
// // //         borderBottom: '4px solid #884CC0',
// // //     },
// // //     tabContent: {
// // //         padding: '16px',
// // //         backgroundColor: '#e3e3e3',
// // //         borderRadius: '4px',
// // //         textAlign: 'center',
// // //         position: 'relative',
// // //         height: '400px', // Ensure tab content has a fixed height
// // //         display: 'flex',
// // //         flexDirection: 'column',
// // //     },
// // //     uploadButton: {
// // //         backgroundColor: '#D8B7FF',
// // //         color: '#6A1B9A',
// // //         '&:hover': {
// // //             backgroundColor: '#D8B7FF',
// // //         },
// // //         marginTop: '16px',
// // //     },
// // //     inputFile: {
// // //         position: 'absolute',
// // //         width: '100%',
// // //         height: '100%',
// // //         opacity: 0,
// // //         cursor: 'pointer',
// // //     },
// // //     cropperContainer: {
// // //         flex: 1, // Allow the container to expand
// // //         display: 'flex',
// // //         position: 'relative',
// // //         width: '100%',
// // //         height: '100%',
// // //     },
// // //     deleteButton: {
// // //         position: 'absolute',
// // //         top: 8,
// // //         left: 8,
// // //         color: 'red',
// // //     },
// // //     saveButton: {
// // //         position: 'absolute',
// // //         bottom: 16,
// // //         right: 16,
// // //     },
// // // };

// // // const ImageUpload = ({ open, onClose }) => {
// // //     const [tabIndex, setTabIndex] = useState(0);
// // //     const [image, setImage] = useState(null);
// // //     const [cropper, setCropper] = useState(null);
// // //     const [openCropperDialog, setOpenCropperDialog] = useState(false);
// // //     const imageInputRef = useRef(null);

// // //     const handleTabChange = (event, newValue) => {
// // //         setTabIndex(newValue);
// // //     };

// // //     const handleImageUpload = (event) => {
// // //         const file = event.target.files[0];
// // //         if (file) {
// // //             setImage(URL.createObjectURL(file));
// // //             setOpenCropperDialog(true); // Open the cropper dialog
// // //         }
// // //     };

// // //     const handleCrop = () => {
// // //         if (cropper) {
// // //             const croppedImage = cropper.getCroppedCanvas().toDataURL();
// // //             console.log('Cropped image:', croppedImage);
// // //             setOpenCropperDialog(false); // Close the cropper dialog
// // //         }
// // //     };

// // //     const handleDelete = () => {
// // //         setImage(null);
// // //         setCropper(null);
// // //     };

// // //     const handleCloseCropperDialog = () => {
// // //         setOpenCropperDialog(false);
// // //         setImage(null);
// // //         setCropper(null);
// // //     };

// // //     return (
// // //         <ThemeProvider theme={theme}>
// // //             <Dialog
// // //                 open={open}
// // //                 onClose={onClose}
// // //                 fullWidth
// // //                 maxWidth="sm"
// // //                 sx={{
// // //                     overflowX: 'auto',
// // //                     '& .MuiDialog-paper': {
// // //                         overflowY: 'visible',
// // //                         width: '60%',
// // //                         maxWidth: 'none',
// // //                     },
// // //                     '& .MuiDialog-container': {
// // //                         height: 'auto',
// // //                     },
// // //                 }}
// // //             >
// // //                 <Formik
// // //                     initialValues={{ image: null }}
// // //                     onSubmit={(values, { setSubmitting }) => {
// // //                         console.log('Uploaded image:', values.image);
// // //                         setSubmitting(false);
// // //                     }}
// // //                 >
// // //                     {({ setFieldValue }) => (
// // //                         <Form>
// // //                             <DialogTitle>
// // //                                 <FaImage />
// // //                                 <IconButton
// // //                                     edge="end"
// // //                                     color="inherit"
// // //                                     onClick={onClose}
// // //                                     aria-label="close"
// // //                                     sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
// // //                                 >
// // //                                     <CloseIcon />
// // //                                 </IconButton>
// // //                             </DialogTitle>
// // //                             <DialogContent dividers>
// // //                                 <Typography variant="body2" color="textSecondary">
// // //                                     Use ctrl + V to paste image from your clipboard
// // //                                 </Typography>
// // //                                 <Tabs
// // //                                     value={tabIndex}
// // //                                     onChange={handleTabChange}
// // //                                     aria-label="image upload tabs"
// // //                                 >
// // //                                     <Tab label={<><UploadIcon /> Upload</>} sx={[styles.tab, tabIndex === 0 && styles.activeTab]} />
// // //                                     <Tab label={<><SearchIcon /> Search</>} sx={[styles.tab, tabIndex === 1 && styles.activeTab]} />
// // //                                     <Tab label={<><LinkIcon /> Paste Link</>} sx={[styles.tab, tabIndex === 2 && styles.activeTab]} />
// // //                                 </Tabs>
// // //                                 <Box sx={styles.tabContent}>
// // //                                     {tabIndex === 0 && (
// // //                                         <Box
// // //                                             sx={{
// // //                                                 display: 'flex',
// // //                                                 flexDirection: 'column',
// // //                                                 alignItems: 'center',
// // //                                                 justifyContent: 'center',
// // //                                                 bgcolor: 'light-2',
// // //                                                 border: '1px solid',
// // //                                                 borderColor: 'dark-6',
// // //                                                 borderRadius: '8px',
// // //                                                 p: 4,
// // //                                                 minHeight: 0,
// // //                                                 position: 'relative',
// // //                                             }}
// // //                                         >
// // //                                             <input
// // //                                                 type="file"
// // //                                                 accept="image/jpg,image/jpeg,image/png,image/gif"
// // //                                                 ref={imageInputRef}
// // //                                                 onChange={handleImageUpload}
// // //                                                 style={styles.inputFile}
// // //                                             />
// // //                                             <Button
// // //                                                 variant="contained"
// // //                                                 color="secondary"
// // //                                                 sx={styles.uploadButton}
// // //                                                 aria-label="Upload from device"
// // //                                                 onClick={() => imageInputRef.current.click()}
// // //                                             >
// // //                                                 Upload from device
// // //                                             </Button>
// // //                                             <Typography variant="caption" color="text.secondary" sx={{ pt: 6, textAlign: 'center' }}>
// // //                                                 Use a JPG, PNG or GIF, up to 5 MB
// // //                                             </Typography>

// // //                                             <Dialog
// // //                                                 open={openCropperDialog}
// // //                                                 onClose={handleCloseCropperDialog}
// // //                                                 fullWidth
// // //                                                 maxWidth="md"
// // //                                                 sx={{
// // //                                                     '& .MuiDialog-paper': {
// // //                                                         overflowY: 'visible',
// // //                                                     },
// // //                                                 }}
// // //                                             >
// // //                                                 <DialogTitle>
// // //                                                     Crop Image
// // //                                                     <IconButton
// // //                                                         edge="end"
// // //                                                         color="inherit"
// // //                                                         onClick={handleCloseCropperDialog}
// // //                                                         aria-label="close"
// // //                                                         sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
// // //                                                     >
// // //                                                         <CloseIcon />
// // //                                                     </IconButton>
// // //                                                 </DialogTitle>
// // //                                                 <DialogContent dividers>
// // //                                                     {image && (
// // //                                                         <Box sx={styles.cropperContainer}>
// // //                                                             <Cropper
// // //                                                                 src={image}
// // //                                                                 style={{ height: '100%', width: '100%' }}
// // //                                                                 initialAspectRatio={16 / 9}
// // //                                                                 aspectRatio={16 / 9}
// // //                                                                 guides={false}
// // //                                                                 viewMode={1}
// // //                                                                 zoomable={false}
// // //                                                                 scalable={false}
// // //                                                                 rotatable={false}
// // //                                                                 ref={setCropper}
// // //                                                             />
// // //                                                             <IconButton
// // //                                                                 sx={styles.deleteButton}
// // //                                                                 onClick={handleDelete}
// // //                                                             >
// // //                                                                 <CloseIcon />
// // //                                                             </IconButton>
// // //                                                             <Button
// // //                                                                 variant="contained"
// // //                                                                 color="primary"
// // //                                                                 sx={styles.saveButton}
// // //                                                                 onClick={handleCrop}
// // //                                                             >
// // //                                                                 Save
// // //                                                             </Button>
// // //                                                         </Box>
// // //                                                     )}
// // //                                                 </DialogContent>
// // //                                             </Dialog>
// // //                                         </Box>
// // //                                     )}
// // //                                 </Box>
// // //                             </DialogContent>
// // //                             <DialogActions>
// // //                                 <Button onClick={onClose} variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" }}>
// // //                                     Close
// // //                                 </Button>
// // //                             </DialogActions>
// // //                         </Form>
// // //                     )}
// // //                 </Formik>
// // //             </Dialog>
// // //         </ThemeProvider>
// // //     );
// // // };

// // // export default ImageUpload;


// // import React, { useState, useRef } from 'react';
// // import {
// //     Dialog, DialogTitle, DialogContent, DialogActions,
// //     Button, IconButton, Typography, Tabs, Tab, Box,
// // } from '@mui/material';
// // import CloseIcon from '@mui/icons-material/Close';
// // import UploadIcon from '@mui/icons-material/Upload';
// // import SearchIcon from '@mui/icons-material/Search';
// // import LinkIcon from '@mui/icons-material/Link';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import { FaImage } from 'react-icons/fa';
// // import Cropper from 'react-cropper';
// // import 'cropperjs/dist/cropper.css';
// // import "./ImageUpload.css";
// // import { Formik, Form } from 'formik';

// // const theme = createTheme({
// //     components: {
// //         MuiButton: {
// //             styleOverrides: {
// //                 contained: {
// //                     backgroundColor: '#1976d2',
// //                     color: '#fff',
// //                     '&:hover': {
// //                         backgroundColor: '#115293',
// //                     },
// //                 },
// //                 outlined: {
// //                     color: '#1976d2',
// //                     borderColor: '#1976d2',
// //                     '&:hover': {
// //                         borderColor: '#115293',
// //                         color: '#115293',
// //                     },
// //                 },
// //             },
// //         },
// //     },
// // });

// // const styles = {
// //     dialogPaper: {
// //         padding: '24px',
// //         position: 'relative',
// //         width: '100%',
// //         maxWidth: 600,
// //         borderRadius: '8px',
// //     },
// //     tab: {
// //         fontWeight: 'bold',
// //         textAlign: 'center',
// //         padding: '12px',
// //         cursor: 'pointer',
// //     },
// //     activeTab: {
// //         color: '#884CC0',
// //         borderBottom: '4px solid #884CC0',
// //     },
// //     tabContent: {
// //         padding: '16px',
// //         backgroundColor: '#e3e3e3',
// //         borderRadius: '4px',
// //         textAlign: 'center',
// //         position: 'relative',
// //         height: '400px',
// //         display: 'flex',
// //         flexDirection: 'column',
// //     },
// //     uploadButton: {
// //         backgroundColor: '#D8B7FF',
// //         color: '#6A1B9A',
// //         '&:hover': {
// //             backgroundColor: '#D8B7FF',
// //         },
// //         marginTop: '16px',
// //     },
// //     inputFile: {
// //         position: 'absolute',
// //         width: '100%',
// //         height: '100%',
// //         opacity: 0,
// //         cursor: 'pointer',
// //     },
// //     cropperContainer: {
// //         flex: 1,
// //         display: 'flex',
// //         position: 'relative',
// //         width: '100%',
// //         height: '100%',
// //     },
// //     deleteButton: {
// //         position: 'absolute',
// //         top: 8,
// //         left: 8,
// //         color: 'red',
// //     },
// //     saveButton: {
// //         position: 'absolute',
// //         bottom: 16,
// //         right: 16,
// //     },
// // };

// // const ImageUpload = ({ open, onClose }) => {
// //     const [tabIndex, setTabIndex] = useState(0);
// //     const [image, setImage] = useState(null);
// //     const [cropper, setCropper] = useState(null);
// //     const [openCropperDialog, setOpenCropperDialog] = useState(false);
// //     const imageInputRef = useRef(null);

// //     const handleTabChange = (event, newValue) => {
// //         setTabIndex(newValue);
// //     };

// //     const handleImageUpload = (event) => {
// //         const file = event.target.files[0];
// //         if (file) {
// //             setImage(URL.createObjectURL(file));
// //             setOpenCropperDialog(true);
// //         }
// //     };

// //     const handleCrop = () => {
// //         if (cropper) {
// //             const croppedImage = cropper.getCroppedCanvas().toDataURL();
// //             console.log('Cropped image:', croppedImage);
// //             setOpenCropperDialog(false);
// //         }
// //     };

// //     const handleDelete = () => {
// //         setImage(null);
// //         setCropper(null);
// //     };

// //     const handleCloseCropperDialog = () => {
// //         setOpenCropperDialog(false);
// //         setImage(null);
// //         setCropper(null);
// //     };

// //     return (
// //         <ThemeProvider theme={theme}>
// //             <Dialog
// //                 open={open}
// //                 onClose={onClose}
// //                 fullWidth
// //                 maxWidth="sm"
// //                 sx={{
// //                     overflowX: 'auto',
// //                     '& .MuiDialog-paper': {
// //                         overflowY: 'visible',
// //                         width: '60%',
// //                         maxWidth: 'none',
// //                     },
// //                     '& .MuiDialog-container': {
// //                         height: 'auto',
// //                     },
// //                 }}
// //             >
// //                 <Formik
// //                     initialValues={{ image: null }}
// //                     onSubmit={(values, { setSubmitting }) => {
// //                         console.log('Uploaded image:', values.image);
// //                         setSubmitting(false);
// //                     }}
// //                 >
// //                     {({ setFieldValue }) => (
// //                         <Form>
// //                             <DialogTitle>
// //                                 <FaImage />
// //                                 <IconButton
// //                                     edge="end"
// //                                     color="inherit"
// //                                     onClick={onClose}
// //                                     aria-label="close"
// //                                     sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
// //                                 >
// //                                     <CloseIcon />
// //                                 </IconButton>
// //                             </DialogTitle>
// //                             <DialogContent dividers>
// //                                 <Typography variant="body2" color="textSecondary">
// //                                     Use ctrl + V to paste image from your clipboard
// //                                 </Typography>
// //                                 <Tabs
// //                                     value={tabIndex}
// //                                     onChange={handleTabChange}
// //                                     aria-label="image upload tabs"
// //                                 >
// //                                     <Tab label={<><UploadIcon /> Upload</>} sx={[styles.tab, tabIndex === 0 && styles.activeTab]} />
// //                                     <Tab label={<><SearchIcon /> Search</>} sx={[styles.tab, tabIndex === 1 && styles.activeTab]} />
// //                                     <Tab label={<><LinkIcon /> Paste Link</>} sx={[styles.tab, tabIndex === 2 && styles.activeTab]} />
// //                                 </Tabs>
// //                                 <Box sx={styles.tabContent}>
// //                                     {tabIndex === 0 && (
// //                                         <Box
// //                                             sx={{
// //                                                 display: 'flex',
// //                                                 flexDirection: 'column',
// //                                                 alignItems: 'center',
// //                                                 justifyContent: 'center',
// //                                                 bgcolor: 'light-2',
// //                                                 border: '1px solid',
// //                                                 borderColor: 'dark-6',
// //                                                 borderRadius: '8px',
// //                                                 p: 4,
// //                                                 minHeight: 0,
// //                                                 position: 'relative',
// //                                             }}
// //                                         >
// //                                             <input
// //                                                 type="file"
// //                                                 accept="image/jpg,image/jpeg,image/png,image/gif"
// //                                                 ref={imageInputRef}
// //                                                 onChange={handleImageUpload}
// //                                                 style={styles.inputFile}
// //                                             />
// //                                             <Button
// //                                                 variant="contained"
// //                                                 color="secondary"
// //                                                 sx={styles.uploadButton}
// //                                                 aria-label="Upload from device"
// //                                                 onClick={() => imageInputRef.current.click()}
// //                                             >
// //                                                 Upload from device
// //                                             </Button>
// //                                             <Typography variant="caption" color="text.secondary" sx={{ pt: 6, textAlign: 'center' }}>
// //                                                 Use a JPG, PNG or GIF, up to 5 MB
// //                                             </Typography>

// //                                             <Dialog
// //                                                 open={openCropperDialog}
// //                                                 onClose={handleCloseCropperDialog}
// //                                                 fullWidth
// //                                                 maxWidth="md"
// //                                                 sx={{
// //                                                     '& .MuiDialog-paper': {
// //                                                         overflowY: 'visible',
// //                                                     },
// //                                                 }}
// //                                             >
// //                                                 <DialogTitle>
// //                                                     Crop Image
// //                                                     <IconButton
// //                                                         edge="end"
// //                                                         color="inherit"
// //                                                         onClick={handleCloseCropperDialog}
// //                                                         aria-label="close"
// //                                                         sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
// //                                                     >
// //                                                         <CloseIcon />
// //                                                     </IconButton>
// //                                                 </DialogTitle>
// //                                                 <DialogContent dividers>
// //                                                     {image && (
// //                                                         <Box sx={styles.cropperContainer}>
// //                                                             <Cropper
// //                                                                 src={image}
// //                                                                 style={{ height: '100%', width: '100%' }}
// //                                                                 initialAspectRatio={16 / 9}
// //                                                                 aspectRatio={16 / 9}
// //                                                                 guides={false}
// //                                                                 viewMode={1}
// //                                                                 zoomable={false}
// //                                                                 scalable={false}
// //                                                                 rotatable={false}
// //                                                                 ref={setCropper}
// //                                                             />
// //                                                             <IconButton
// //                                                                 sx={styles.deleteButton}
// //                                                                 onClick={handleDelete}
// //                                                             >
// //                                                                 <CloseIcon />
// //                                                             </IconButton>
// //                                                             <Button
// //                                                                 variant="contained"
// //                                                                 color="primary"
// //                                                                 sx={styles.saveButton}
// //                                                                 onClick={handleCrop}
// //                                                             >
// //                                                                 Save
// //                                                             </Button>
// //                                                         </Box>
// //                                                     )}
// //                                                 </DialogContent>
// //                                             </Dialog>
// //                                         </Box>
// //                                     )}
// //                                 </Box>
// //                             </DialogContent>
// //                             <DialogActions>
// //                                 <Button onClick={onClose} variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" }}>
// //                                     Close
// //                                 </Button>
// //                             </DialogActions>
// //                         </Form>
// //                     )}
// //                 </Formik>
// //             </Dialog>
// //         </ThemeProvider>
// //     );
// // };

// // export default ImageUpload;


// import React, { useState, useRef } from 'react';
// import {
//     Dialog, DialogTitle, DialogContent, DialogActions,
//     Button, IconButton, Typography, Tabs, Tab, Box,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import UploadIcon from '@mui/icons-material/Upload';
// import SearchIcon from '@mui/icons-material/Search';
// import LinkIcon from '@mui/icons-material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { FaImage } from 'react-icons/fa';
// import Cropper from 'react-cropper';
// import 'cropperjs/dist/cropper.css';
// import "./ImageUpload.css";
// import { Formik, Form } from 'formik';

// const theme = createTheme({
//     components: {
//         MuiButton: {
//             styleOverrides: {
//                 contained: {
//                     backgroundColor: '#1976d2',
//                     color: '#fff',
//                     '&:hover': {
//                         backgroundColor: '#115293',
//                     },
//                 },
//                 outlined: {
//                     color: '#1976d2',
//                     borderColor: '#1976d2',
//                     '&:hover': {
//                         borderColor: '#115293',
//                         color: '#115293',
//                     },
//                 },
//             },
//         },
//     },
// });

// const styles = {
//     dialogPaper: {
//         padding: '24px',
//         position: 'relative',
//         width: '100%',
//         maxWidth: 600,
//         borderRadius: '8px',
//     },
//     tab: {
//         fontWeight: 'bold',
//         textAlign: 'center',
//         padding: '12px',
//         cursor: 'pointer',
//     },
//     activeTab: {
//         color: '#884CC0',
//         borderBottom: '4px solid #884CC0',
//     },
//     tabContent: {
//         padding: '16px',
//         backgroundColor: '#e3e3e3',
//         borderRadius: '4px',
//         textAlign: 'center',
//         position: 'relative',
//         height: '400px',
//         display: 'flex',
//         flexDirection: 'column',
//         overflow: 'hidden', // Ensure content does not overflow
//     },
//     uploadButton: {
//         backgroundColor: '#D8B7FF',
//         color: '#6A1B9A',
//         '&:hover': {
//             backgroundColor: '#D8B7FF',
//         },
//         marginTop: '16px',
//     },
//     inputFile: {
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         opacity: 0,
//         cursor: 'pointer',
//     },
//     cropperContainer: {
//         display: 'flex',
//         position: 'relative',
//         width: '100%',
//         height: '100%',
//     },
//     cropperModal: {
//         width: '100%',
//         maxWidth: '600px',
//         margin: 'auto',
//         padding: '16px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     deleteButton: {
//         position: 'absolute',
//         top: 8,
//         left: 8,
//         color: 'red',
//     },
//     saveButton: {
//         position: 'absolute',
//         bottom: 16,
//         right: 16,
//     },
// };

// const ImageUpload = ({ open, onClose }) => {
//     const [tabIndex, setTabIndex] = useState(0);
//     const [image, setImage] = useState(null);
//     const [cropper, setCropper] = useState(null);
//     const [openCropperDialog, setOpenCropperDialog] = useState(false);
//     const imageInputRef = useRef(null);

//     const handleTabChange = (event, newValue) => {
//         setTabIndex(newValue);
//     };

//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setImage(URL.createObjectURL(file));
//             setOpenCropperDialog(true);
//         }
//     };

//     const handleCrop = () => {
//         if (cropper) {
//             const croppedImage = cropper.getCroppedCanvas().toDataURL();
//             console.log('Cropped image:', croppedImage);
//             setOpenCropperDialog(false);
//         }
//     };

//     const handleDelete = () => {
//         setImage(null);
//         setCropper(null);
//     };

//     const handleCloseCropperDialog = () => {
//         setOpenCropperDialog(false);
//         setImage(null);
//         setCropper(null);
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <Dialog
//                 open={open}
//                 onClose={onClose}
//                 fullWidth
//                 maxWidth="sm"
//                 sx={{
//                     overflowX: 'auto',
//                     '& .MuiDialog-paper': {
//                         overflowY: 'visible',
//                         width: '60%',
//                         maxWidth: 'none',
//                     },
//                     '& .MuiDialog-container': {
//                         height: 'auto',
//                     },
//                 }}
//             >
//                 <Formik
//                     initialValues={{ image: null }}
//                     onSubmit={(values, { setSubmitting }) => {
//                         console.log('Uploaded image:', values.image);
//                         setSubmitting(false);
//                     }}
//                 >
//                     {({ setFieldValue }) => (
//                         <Form>
//                             <DialogTitle>
//                                 <FaImage />
//                                 <IconButton
//                                     edge="end"
//                                     color="inherit"
//                                     onClick={onClose}
//                                     aria-label="close"
//                                     sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
//                                 >
//                                     <CloseIcon />
//                                 </IconButton>
//                             </DialogTitle>
//                             <DialogContent dividers>
//                                 <Typography variant="body2" color="textSecondary">
//                                     Use ctrl + V to paste image from your clipboard
//                                 </Typography>
//                                 <Tabs
//                                     value={tabIndex}
//                                     onChange={handleTabChange}
//                                     aria-label="image upload tabs"
//                                 >
//                                     <Tab label={<><UploadIcon /> Upload</>} sx={[styles.tab, tabIndex === 0 && styles.activeTab]} />
//                                     <Tab label={<><SearchIcon /> Search</>} sx={[styles.tab, tabIndex === 1 && styles.activeTab]} />
//                                     <Tab label={<><LinkIcon /> Paste Link</>} sx={[styles.tab, tabIndex === 2 && styles.activeTab]} />
//                                 </Tabs>
//                                 <Box sx={styles.tabContent}>
//                                     {tabIndex === 0 && (
//                                         <Box
//                                             sx={{
//                                                 display: 'flex',
//                                                 flexDirection: 'column',
//                                                 alignItems: 'center',
//                                                 justifyContent: 'center',
//                                                 bgcolor: 'light-2',
//                                                 border: '1px solid',
//                                                 borderColor: 'dark-6',
//                                                 borderRadius: '8px',
//                                                 p: 4,
//                                                 minHeight: 0,
//                                                 position: 'relative',
//                                             }}
//                                         >
//                                             <input
//                                                 type="file"
//                                                 accept="image/jpg,image/jpeg,image/png,image/gif"
//                                                 ref={imageInputRef}
//                                                 onChange={handleImageUpload}
//                                                 style={styles.inputFile}
//                                             />
//                                             <Button
//                                                 variant="contained"
//                                                 color="secondary"
//                                                 sx={styles.uploadButton}
//                                                 aria-label="Upload from device"
//                                                 onClick={() => imageInputRef.current.click()}
//                                             >
//                                                 Upload from device
//                                             </Button>
//                                             <Typography variant="caption" color="text.secondary" sx={{ pt: 6, textAlign: 'center' }}>
//                                                 Use a JPG, PNG or GIF, up to 5 MB
//                                             </Typography>

//                                             {openCropperDialog && (
//                                                 <Dialog
//                                                     open={true}
//                                                     onClose={handleCloseCropperDialog}
//                                                     maxWidth="md"
//                                                     fullWidth
//                                                     sx={styles.cropperModal}
//                                                 >
//                                                     <DialogTitle>
//                                                         Crop Image
//                                                         <IconButton
//                                                             edge="end"
//                                                             color="inherit"
//                                                             onClick={handleCloseCropperDialog}
//                                                             aria-label="close"
//                                                             sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
//                                                         >
//                                                             <CloseIcon />
//                                                         </IconButton>
//                                                     </DialogTitle>
//                                                     <DialogContent dividers>
//                                                         {image && (
//                                                             <Box sx={styles.cropperContainer}>
//                                                                 <Cropper
//                                                                     src={image}
//                                                                     style={{ height: '100%', width: '100%' }}
//                                                                     initialAspectRatio={16 / 9}
//                                                                     aspectRatio={16 / 9}
//                                                                     guides={false}
//                                                                     viewMode={1}
//                                                                     zoomable={false}
//                                                                     scalable={false}
//                                                                     rotatable={false}
//                                                                     ref={setCropper}
//                                                                 />
//                                                                 <IconButton
//                                                                     sx={styles.deleteButton}
//                                                                     onClick={handleDelete}
//                                                                 >
//                                                                     <CloseIcon />
//                                                                 </IconButton>
//                                                                 <Button
//                                                                     variant="contained"
//                                                                     color="primary"
//                                                                     sx={styles.saveButton}
//                                                                     onClick={handleCrop}
//                                                                 >
//                                                                     Save
//                                                                 </Button>
//                                                             </Box>
//                                                         )}
//                                                     </DialogContent>
//                                                 </Dialog>
//                                             )}
//                                         </Box>
//                                     )}
//                                 </Box>
//                             </DialogContent>
//                             <DialogActions>
//                                 <Button onClick={onClose} variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" }}>
//                                     Close
//                                 </Button>
//                             </DialogActions>
//                         </Form>
//                     )}
//                 </Formik>
//             </Dialog>
//         </ThemeProvider>
//     );
// };

// export default ImageUpload;



// import React, { useState, useRef } from 'react';
// import {
//     Dialog, DialogTitle, DialogContent, DialogActions,
//     Button, IconButton, Typography, Tabs, Tab, Box,
//     useMediaQuery,
//     Grid,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import UploadIcon from '@mui/icons-material/Upload';
// import SearchIcon from '@mui/icons-material/Search';
// import LinkIcon from '@mui/icons-material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { FaImage } from 'react-icons/fa';
// import Cropper from 'react-cropper';
// import 'cropperjs/dist/cropper.css';
// import "./ImageUpload.css";
// import { Formik, Form } from 'formik';

// const theme = createTheme({
//     components: {
//         MuiButton: {
//             styleOverrides: {
//                 contained: {
//                     backgroundColor: '#1976d2',
//                     color: '#fff',
//                     '&:hover': {
//                         backgroundColor: '#115293',
//                     },
//                 },
//                 outlined: {
//                     color: '#1976d2',
//                     borderColor: '#1976d2',
//                     '&:hover': {
//                         borderColor: '#115293',
//                         color: '#115293',
//                     },
//                 },
//             },
//         },
//     },
// });

// const styles = {
//     dialogPaper: {
//         padding: '24px',
//         position: 'relative',
//         width: '100%',
//         maxWidth: 600,
//         borderRadius: '8px',

//     },
//     tab: {
//         fontWeight: 'bold',
//         textAlign: 'center',
//         padding: '12px',
//         cursor: 'pointer',
//     },
//     activeTab: {
//         color: '#884CC0',
//         borderBottom: '4px solid #884CC0',
//     },
//     tabContent: {
//         // padding: '16px',
//         backgroundColor: '#e3e3e3',
//         borderRadius: '4px',
//         textAlign: 'center',
//         position: 'relative',
//         height: '500px',
//         display: 'flex',
//         flexDirection: 'column',
//         overflow: 'hidden',
//     },
//     uploadButton: {
//         backgroundColor: '#D8B7FF',
//         color: '#6A1B9A',
//         '&:hover': {
//             backgroundColor: '#D8B7FF',
//         },
//         marginTop: '16px',
//     },
//     inputFile: {
//         // position: 'absolute',
//         width: '100%',
//         // height: '50%',
//         opacity: 0,
//         cursor: 'pointer',
//     },
//     cropperContainer: {
//         display: 'flex',
//         position: 'relative',
//         width: '100%',
//         height: '100%',
//         background: "white"
//     },
//     cropperModal: {
//         width: '100%',
//         // maxWidth: '600px',
//         margin: 'auto',
//         // padding: '16px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         background: "white"
//     },
//     deleteButton: {
//         position: 'absolute',
//         top: 8,
//         left: 8,
//         color: 'red',
//     },
//     saveButton: {
//         position: 'absolute',
//         bottom: 16,
//         right: 16,
//     },
// };

// const ImageUpload = ({ open, onClose }) => {
//     const [tabIndex, setTabIndex] = useState(0);
//     const [image, setImage] = useState(null);
//     const [cropper, setCropper] = useState(null);
//     const imageInputRef = useRef(null);

//     const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
//     const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

//     const handleTabChange = (event, newValue) => {
//         setTabIndex(newValue);
//     };

//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setImage(URL.createObjectURL(file));
//             setTabIndex(0); // Switch to the upload tab (which now contains the cropper)
//         }
//     };

//     const handleCrop = () => {
//         if (cropper) {
//             const croppedImage = cropper.getCroppedCanvas().toDataURL();
//             console.log('Cropped image:', croppedImage);
//             setImage(null); // Clear image after cropping
//             setCropper(null); // Reset cropper
//             setTabIndex(1); // Optionally switch tabs or close dialog
//         }
//     };

//     const handleDelete = () => {
//         setImage(null);
//         setCropper(null);
//     };

//     const handleCloseCropperDialog = () => {
//         setImage(null);
//         setCropper(null);
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <Dialog
//                 open={open}
//                 onClose={onClose}
//                 fullWidth
//                 maxWidth="sm"
//                 sx={{
//                     overflowX: 'auto',
//                     '& .MuiDialog-paper': {
//                         overflowY: 'visible',
//                         width: isLg ? '50%' : '100%',
//                         // width:"100%",
//                         // border: isXs ? '1px solid #fff3' : 'none',
//                         maxWidth: 'none',
//                     },
//                     '& .MuiDialog-container': {
//                         height: isLg ? 'auto' : 'auto',
//                     },
//                 }}
//             >
//                 <Formik
//                     initialValues={{ image: null }}
//                     onSubmit={(values, { setSubmitting }) => {
//                         console.log('Uploaded image:', values.image);
//                         setSubmitting(false);
//                     }}
//                 >
//                     {({ setFieldValue }) => (
//                         <Form>
//                             <DialogTitle>
//                                 <FaImage />
//                                 <IconButton
//                                     edge="end"
//                                     color="inherit"
//                                     onClick={onClose}
//                                     aria-label="close"
//                                     sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
//                                 >
//                                     <CloseIcon />
//                                 </IconButton>
//                             </DialogTitle>
//                             <DialogContent dividers>
//                                 <Typography variant="body2" color="textSecondary">
//                                     Use ctrl + V to paste image from your clipboard
//                                 </Typography>
//                                 <Tabs
//                                     value={tabIndex}
//                                     onChange={handleTabChange}
//                                     aria-label="image upload tabs"
//                                 >
//                                     <Tab label={<><UploadIcon /> Upload</>} sx={[styles.tab, tabIndex === 0 && styles.activeTab]} />
//                                     <Tab label={<><SearchIcon /> Search</>} sx={[styles.tab, tabIndex === 1 && styles.activeTab]} />
//                                     <Tab label={<><LinkIcon /> Paste Link</>} sx={[styles.tab, tabIndex === 2 && styles.activeTab]} />
//                                 </Tabs>
//                                 <Box sx={styles.tabContent}>
//                                     {tabIndex === 0 && (
//                                         <Box
//                                             sx={{
//                                                 display: 'flex',
//                                                 flexDirection: 'column',
//                                                 alignItems: 'center',
//                                                 justifyContent: 'center',
//                                                 bgcolor: 'light-2',
//                                                 border: '1px solid',
//                                                 borderColor: 'dark-6',
//                                                 borderRadius: '8px',
//                                                 p: 4,
//                                                 minHeight: 0,
//                                                 position: 'relative',
//                                                 margin: "auto",
//                                                 height: "100%",
//                                                 width: "100%"

//                                             }}
//                                         >
//                                             {!image ? (
//                                                 <>
//                                                     <input
//                                                         type="file"
//                                                         accept="image/jpg,image/jpeg,image/png,image/gif"
//                                                         ref={imageInputRef}
//                                                         onChange={handleImageUpload}
//                                                         style={styles.inputFile}
//                                                     />
//                                                     <Button
//                                                         variant="contained"
//                                                         color="secondary"
//                                                         sx={styles.uploadButton}
//                                                         aria-label="Upload from device"
//                                                         onClick={() => imageInputRef.current.click()}
//                                                     >
//                                                         Upload from device
//                                                     </Button>
//                                                     <Typography variant="caption" color="text.secondary" sx={{ pt: 6, textAlign: 'center' }}>
//                                                         Use a JPG, PNG or GIF, up to 5 MB
//                                                     </Typography>
//                                                 </>
//                                             ) : (
//                                                 <Box sx={styles.cropperContainer}>
//                                                     <Grid sx={{display:"flex"}}>
//                                                         <IconButton
//                                                             sx={styles.deleteButton}
//                                                             onClick={handleDelete}
//                                                         >
//                                                             <CloseIcon />
//                                                         </IconButton>
//                                                     </Grid>
//                                                     <Cropper
//                                                         src={image}
//                                                         style={{ height: '100%', width: '100%' }}
//                                                         initialAspectRatio={16 / 9}
//                                                         aspectRatio={16 / 9}
//                                                         // initialAspectRatio={NaN}  // or you can remove this prop
//                                                         // aspectRatio={NaN}  
//                                                         guides={false}
//                                                         viewMode={1}
//                                                         zoomable={false}
//                                                         scalable={false}
//                                                         rotatable={false}
//                                                         ref={setCropper}
//                                                     />
//                                                     <IconButton
//                                                         sx={styles.deleteButton}
//                                                         onClick={handleDelete}
//                                                     >
//                                                         <CloseIcon />
//                                                     </IconButton>
//                                                     <Button
//                                                         variant="contained"
//                                                         color="primary"
//                                                         sx={styles.saveButton}
//                                                         onClick={handleCrop}
//                                                     >
//                                                         Save
//                                                     </Button>
//                                                 </Box>
//                                             )}
//                                         </Box>
//                                     )}
//                                 </Box>
//                             </DialogContent>
//                             <DialogActions>
//                                 <Button onClick={onClose} variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" }}>
//                                     Close
//                                 </Button>
//                             </DialogActions>
//                         </Form>
//                     )}
//                 </Formik>
//             </Dialog>
//         </ThemeProvider>
//     );
// };

// export default ImageUpload;



// import React, { useState, useRef } from 'react';
// import {
//     Dialog, DialogTitle, DialogContent, DialogActions,
//     Button, IconButton, Typography, Tabs, Tab, Box,
//     useMediaQuery,
//     Grid,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import UploadIcon from '@mui/icons-material/Upload';
// import SearchIcon from '@mui/icons-material/Search';
// import LinkIcon from '@mui/icons-material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { FaImage } from 'react-icons/fa';
// import Cropper from 'react-cropper';
// import 'cropperjs/dist/cropper.css';
// import "./ImageUpload.css";
// import { Formik, Form } from 'formik';

// const theme = createTheme({
//     components: {
//         MuiButton: {
//             styleOverrides: {
//                 contained: {
//                     backgroundColor: '#1976d2',
//                     color: '#fff',
//                     '&:hover': {
//                         backgroundColor: '#115293',
//                     },
//                 },
//                 outlined: {
//                     color: '#1976d2',
//                     borderColor: '#1976d2',
//                     '&:hover': {
//                         borderColor: '#115293',
//                         color: '#115293',
//                     },
//                 },
//             },
//         },
//     },
// });

// const styles = {
//     dialogPaper: {
//         padding: '24px',
//         position: 'relative',
//         width: '100%',
//         maxWidth: 600,
//         borderRadius: '8px',
//     },
//     tab: {
//         fontWeight: 'bold',
//         textAlign: 'center',
//         padding: '12px',
//         cursor: 'pointer',
//     },
//     activeTab: {
//         color: '#884CC0',
//         borderBottom: '4px solid #884CC0',
//     },
//     tabContent: {
//         backgroundColor: '#e3e3e3',
//         borderRadius: '4px',
//         textAlign: 'center',
//         position: 'relative',
//         height: '500px',
//         display: 'flex',
//         flexDirection: 'column',
//         overflow: 'hidden',
//     },
//     uploadButton: {
//         backgroundColor: '#D8B7FF',
//         color: '#6A1B9A',
//         '&:hover': {
//             backgroundColor: '#D8B7FF',
//         },
//         marginTop: '16px',
//     },
//     inputFile: {
//         width: '100%',
//         opacity: 0,
//         cursor: 'pointer',
//     },
//     cropperContainer: {
//         display: 'flex',
//         position: 'relative',
//         width: '100%',
//         height: '100%',
//         background: "white"
//     },
//     cropperModal: {
//         width: '100%',
//         margin: 'auto',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         background: "white"
//     },
//     deleteButton: {
//         position: 'absolute',
//         top: 16,
//         right: 16,
//         color: 'red',
//     },
//     saveButton: {
//         position: 'absolute',
//         bottom: 16,
//         right: 16,
//     },
// };

// const ImageUpload = ({ open, onClose }) => {
//     const [tabIndex, setTabIndex] = useState(0);
//     const [image, setImage] = useState(null);
//     const [cropper, setCropper] = useState(null);
//     const imageInputRef = useRef(null);

//     const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
//     const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

//     const handleTabChange = (event, newValue) => {
//         setTabIndex(newValue);
//     };

//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setImage(URL.createObjectURL(file));
//             setTabIndex(0); // Switch to the upload tab (which now contains the cropper)
//         }
//     };

//     const handleCrop = () => {
//         if (cropper) {
//             const croppedImage = cropper.getCroppedCanvas().toDataURL();
//             console.log('Cropped image:', croppedImage);
//             setImage(null); // Clear image after cropping
//             setCropper(null); // Reset cropper
//             setTabIndex(1); // Optionally switch tabs or close dialog
//         }
//     };

//     const handleDelete = () => {
//         setImage(null);
//         setCropper(null);
//     };

//     const handleCloseCropperDialog = () => {
//         setImage(null);
//         setCropper(null);
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <Dialog
//                 open={open}
//                 onClose={onClose}
//                 fullWidth
//                 maxWidth="sm"
//                 sx={{
//                     overflowX: 'auto',
//                     '& .MuiDialog-paper': {
//                         overflowY: 'visible',
//                         width: isLg ? '50%' : '100%',
//                         maxWidth: 'none',
//                     },
//                     '& .MuiDialog-container': {
//                         height: isLg ? 'auto' : 'auto',
//                     },
//                 }}
//             >
//                 <Formik
//                     initialValues={{ image: null }}
//                     onSubmit={(values, { setSubmitting }) => {
//                         console.log('Uploaded image:', values.image);
//                         setSubmitting(false);
//                     }}
//                 >
//                     {({ setFieldValue }) => (
//                         <Form>
//                             <DialogTitle>
//                                 <FaImage />
//                                 <IconButton
//                                     edge="end"
//                                     color="inherit"
//                                     onClick={onClose}
//                                     aria-label="close"
//                                     sx={{ position: 'absolute', right: 10, top: 8, color: 'grey.500' }}
//                                 >
//                                     <CloseIcon />
//                                 </IconButton>
//                             </DialogTitle>
//                             <DialogContent dividers>
//                                 <Typography variant="body2" color="textSecondary">
//                                     Use ctrl + V to paste image from your clipboard
//                                 </Typography>
//                                 <Tabs
//                                     value={tabIndex}
//                                     onChange={handleTabChange}
//                                     aria-label="image upload tabs"
//                                 >
//                                     <Tab label={<><UploadIcon /> Upload</>} sx={[styles.tab, tabIndex === 0 && styles.activeTab]} />
//                                     <Tab label={<><SearchIcon /> Search</>} sx={[styles.tab, tabIndex === 1 && styles.activeTab]} />
//                                     <Tab label={<><LinkIcon /> Paste Link</>} sx={[styles.tab, tabIndex === 2 && styles.activeTab]} />
//                                 </Tabs>
//                                 <Box sx={styles.tabContent}>
//                                     {tabIndex === 0 && (
//                                         <Box
//                                             sx={{
//                                                 display: 'flex',
//                                                 flexDirection: 'column',
//                                                 alignItems: 'center',
//                                                 justifyContent: 'center',
//                                                 bgcolor: 'light-2',
//                                                 border: '1px solid',
//                                                 borderColor: 'dark-6',
//                                                 borderRadius: '8px',
//                                                 p: 4,
//                                                 minHeight: 0,
//                                                 position: 'relative',
//                                                 margin: "auto",
//                                                 height: "100%",
//                                                 width: "100%"

//                                             }}
//                                         >
//                                             {!image ? (
//                                                 <>
//                                                     <input
//                                                         type="file"
//                                                         accept="image/jpg,image/jpeg,image/png,image/gif"
//                                                         ref={imageInputRef}
//                                                         onChange={handleImageUpload}
//                                                         style={styles.inputFile}
//                                                     />
//                                                     <Button
//                                                         variant="contained"
//                                                         color="secondary"
//                                                         sx={styles.uploadButton}
//                                                         aria-label="Upload from device"
//                                                         onClick={() => imageInputRef.current.click()}
//                                                     >
//                                                         Upload from device
//                                                     </Button>
//                                                     <Typography variant="caption" color="text.secondary" sx={{ pt: 6, textAlign: 'center' }}>
//                                                         Use a JPG, PNG or GIF, up to 5 MB
//                                                     </Typography>
//                                                 </>
//                                             ) : (

//                                                 <Box sx={styles.cropperContainer}>
//                                                     <IconButton
//                                                         sx={styles.deleteButton}
//                                                         onClick={handleDelete}
//                                                     >
//                                                         <CloseIcon />
//                                                     </IconButton>
//                                                     <Cropper
//                                                         src={image}
//                                                         style={{ height: '100%', width: '100%' }}
//                                                         initialAspectRatio={16 / 9}
//                                                         aspectRatio={16 / 9}
//                                                         guides={false}
//                                                         viewMode={1}
//                                                         zoomable={false}
//                                                         scalable={false}
//                                                         rotatable={false}
//                                                         ref={setCropper}
//                                                     />
//                                                     <IconButton
//                                                         sx={styles.deleteButton}
//                                                         onClick={handleDelete}
//                                                     >
//                                                         <CloseIcon />
//                                                     </IconButton>
//                                                     {/* <Button
//                                                         variant="contained"
//                                                         color="primary"
//                                                         sx={styles.saveButton}
//                                                         onClick={handleCrop}
//                                                     >
//                                                         Save
//                                                     </Button> */}
//                                                     <Grid sx={styles.saveButton} style={{
//                                                         display: "flex", justifyContent: "flex-end"

//                                                     }}>
//                                                         <Button
//                                                             // onClick={onClose}
//                                                             onClick={handleDelete}
//                                                             variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" ,marginRight:"30px"}}>
//                                                             Cancel
//                                                         </Button>
//                                                         <Button
//                                                             variant="contained"
//                                                             color="primary"
//                                                             // sx={styles.saveButton}
//                                                             onClick={handleCrop}
//                                                         >
//                                                             Save
//                                                         </Button>
//                                                     </Grid>
//                                                 </Box>


//                                             )}
//                                         </Box>
//                                     )}
//                                 </Box>
//                             </DialogContent>
//                             {/* <DialogActions style={{ display: "flex" }}>
//                                 <Button
//                                     // onClick={onClose}
//                                     onClick={handleDelete}
//                                     variant="outlined" style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4" }}>
//                                     Close
//                                 </Button>
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     // sx={styles.saveButton}
//                                     onClick={handleCrop}
//                                 >
//                                     Save
//                                 </Button>
//                             </DialogActions> */}
//                         </Form>
//                     )}
//                 </Formik>
//             </Dialog>
//         </ThemeProvider>
//     );
// };

// export default ImageUpload;



import React, { useState, useRef } from 'react';
import {
    Dialog, DialogTitle, DialogContent, Button, IconButton, Typography, Tabs, Tab, Box, useMediaQuery, Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from '@mui/icons-material/Upload';
import SearchIcon from '@mui/icons-material/Search';
import LinkIcon from '@mui/icons-material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaImage } from 'react-icons/fa';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import "./ImageUpload.css";
import { Formik, Form } from 'formik';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import actions from "../../../../../ReduxStore/actions/index";
import { useEffect } from 'react';


const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: '#1976d2',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#115293',
                    },
                },
                outlined: {
                    color: '#1976d2',
                    borderColor: '#1976d2',
                    '&:hover': {
                        borderColor: '#115293',
                        color: '#115293',
                    },
                },
            },
        },
    },
});

const styles = {
    dialogPaper: {
        padding: '24px',
        position: 'relative',
        width: '100%',
        maxWidth: 600,
        borderRadius: '8px',
    },
    tab: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '12px',
        cursor: 'pointer',
    },
    activeTab: {
        color: 'rgb(136 84 192)',
        borderBottom: '4px solid rgb(136 84 192)',
    },
    tabContent: {
        marginTop: "20px",
        backgroundColor: 'rgba(229,229 ,229 ,0.2)',
        borderRadius: '4px',
        textAlign: 'center',
        position: 'relative',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: "1px solid rgba(229,229 ,229 ,1)"
    },
    uploadButton: {
        backgroundColor: 'rgba(237, 230, 246,1)',
        color: 'rgb(136 84 192)',
        '&:hover': {
            backgroundColor: 'rgba(237, 230, 246,1)',
        },
        marginTop: '16px',
        fontSize: "13px"
    },
    inputFile: {
        width: '100%',
        opacity: 0,
        cursor: 'pointer',
    },
    cropperContainer: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: '100%',
        background: "white"
    },
    deleteButton: {
        position: 'absolute',
        top: 16,
        right: 16,
        color: 'black',
        border: "1px solid white",
        fontSize: "15px",
        borderRadius: "5px",
        background: "white"
    },
    saveButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
    },
};

const ImageUpload = ({ open, onClose, onCrop, setCroppedImage, setQuestionImage }) => {
    const dispatch = useDispatch();
    const [tabIndex, setTabIndex] = useState(0);
    const [image, setImage] = useState(null)

    const cropperRef = useRef(null);
    const imageInputRef = useRef(null);

    console.log(image, "image111222qqw222jw28")

    const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
    const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const [originalImageFile, setOriginalImageFile] = useState("")

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setOriginalImageFile(file)
        console.log(file, "filesssssssssssssssss")
        if (file) {
            setImage(URL.createObjectURL(file));
            setTabIndex(0); // Switch to the upload tab (which now contains the cropper)
        }
    };

    // const handleCrop = () => {
    //     const cropperInstance = cropperRef.current?.cropper;
    //     if (cropperInstance) {
    //         const croppedImage = cropperInstance.getCroppedCanvas().toDataURL();
    //         console.log('Cropped image:', croppedImage);
    //         setImage(null); // Clear image after cropping
    //         // setTabIndex(1); // Optionally switch tabs or close dialog
    //         onCrop(croppedImage);
    //         onClose()

    //     }
    // };

    const { ImageUploadPost } = useSelector((state) => state?.ImageUploadPost);
    // console.log(ImageUploadPost, "ImageUploadPost")

    // const handleCrop = () => {
    //     const cropperInstance = cropperRef.current?.cropper;
    //     const croppedCanvas = cropperInstance.getCroppedCanvas();



    //     croppedCanvas.toBlob((blob) => {
    //         if (blob) {
    //             // Create a File object from the Blob
    //             const file = new File([blob], originalImageFile.name, { type: originalImageFile.type })
    //             console.log(file.name, "crofile[[[[[[")

    //             const data3 = {
    //                 data:
    //                 {
    //                     uploadImage: file
    //                 },
    //                 method: "post",
    //                 apiName: "uploadImage",
    //             };
    //             dispatch(actions.IMAGEUPLOADPOST(data3));

    //         }
    //     })
    //     console.log(cropperInstance, "cropinstance.....................")
    //     if (cropperInstance) {
    //         const croppedImage = cropperInstance.getCroppedCanvas().toDataURL();
    //         onCrop(croppedImage); // Notify parent with the cropped image
    //         onClose()
    //     }
    // };

    // useEffect(()=>{
    //     handleCrop()
    // },[])

    const handleCrop = () => {

        const cropperInstance = cropperRef.current?.cropper;
        const croppedCanvas = cropperInstance.getCroppedCanvas();

        croppedCanvas.toBlob((blob) => {
            if (blob) {
                // Create a File object from the Blob
                const file = new File([blob], originalImageFile.name, { type: originalImageFile.type });
                console.log(file.name, "crofile[[[[[[");

                // Create a FormData object and append the file
                const formData = new FormData();
                formData.append('uploadImage', file); // Append the file with a key 'uploadImage'
                console.log(formData, "imageFormData..............");

                // Optional: Append any additional data if nee
                // formData.append('anotherKey', 'anotherValue');

                // Prepare the API payload using FormData
                // const data3 = {
                //     data: formData, // Pass FormData object here
                //     method: "post",
                //     apiName: "uploadImage",
                // };

                // dispatch(actions.IMAGEUPLOADPOST(data3));
                onCrop(formData); // Notify parent with the cropped image
                onClose();
            }
        });

        // console.log(cropperInstance, "cropinstance.....................");
        // if (cropperInstance) {
        //     // const croppedImage = cropperInstance.getCroppedCanvas().toDataURL();
        //     onCrop(formData); // Notify parent with the cropped image
        //     onClose();
        // }
    };


    const handleDelete = () => {
        setImage(null);
    };
    const handleiImageCloseModal = () => {
        setImage(null);


        onClose(); // Call the passed `onClose` prop to handle additional closing actions
    };

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                onClose={onClose}
                fullWidth
                maxWidth="sm"
                sx={{
                    overflowX: 'auto',
                    '& .MuiDialog-paper': {
                        overflowY: 'visible',
                        width: isLg ? '50%' : '100%',
                        maxWidth: 'none',
                    },
                    '& .MuiDialog-container': {
                        height: isLg ? 'auto' : 'auto',
                    },
                }}
            >
                <Formik
                    initialValues={{ image: null }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log('Uploaded image:', values.image);
                        setSubmitting(false);
                    }}
                >
                    {() => (
                        <Form>
                            <DialogTitle  >
                                <Grid style={{ display: "flex" }}>
                                    <Grid
                                        style={{ border: "1px solid rgb(237 230 246)", borderRadius: "50%", height: "35px", width: "35px", textAlign: "center", color: 'rgb(136 84 192)', background: "rgb(237 230 246)" }}>
                                        <FaImage /></Grid>
                                    <Grid style={{ fontSize: "22px", fontWeight: "700", marginLeft: "15px" }}>Add image</Grid>


                                </Grid>
                                <IconButton
                                    edge="end"
                                    color="inherit"
                                    onClick={onClose}
                                    aria-label="close"
                                    sx={{ position: 'absolute', right: 10, top: 12, color: 'grey.500' }}
                                >
                                    <CloseIcon />
                                </IconButton>

                            </DialogTitle>
                            <DialogContent dividers>

                                <Tabs
                                    value={tabIndex}
                                    onChange={handleTabChange}
                                    aria-label="image upload tabs"
                                    textColor="inherit" // Prevents the default primary color
                                    indicatorColor="none" // Removes the default indicator (underline)
                                >
                                    <Tab
                                        label={
                                            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: "12px", }}>
                                                <UploadIcon sx={{ marginRight: '5px' }} /> Upload
                                            </Box>
                                        }
                                        sx={{
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            padding: '12px',
                                            cursor: 'pointer',

                                            color: tabIndex === 0 ? 'rgb(136 84 192)' : 'inherit',
                                            borderBottom: tabIndex === 0 ? '4px solid rgb(136 84 192)' : 'none',
                                        }}
                                    />
                                    <Tab
                                        label={
                                            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: "12px", }}>
                                                <SearchIcon sx={{ marginRight: '5px' }} /> Search
                                            </Box>
                                        }
                                        sx={{
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            padding: '12px',
                                            cursor: 'pointer',
                                            color: tabIndex === 1 ? 'rgb(136 84 192)' : 'inherit',
                                            borderBottom: tabIndex === 1 ? '4px solid rgb(136 84 192)' : 'none',
                                        }}
                                    />
                                    <Tab
                                        label={
                                            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: "12px", }}>
                                                <LinkIcon sx={{ marginRight: '5px' }} /> Paste Link
                                            </Box>
                                        }
                                        sx={{
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            padding: '12px',
                                            cursor: 'pointer',
                                            color: tabIndex === 2 ? 'rgb(136 84 192)' : 'inherit',
                                            borderBottom: tabIndex === 2 ? '4px solid rgb(136 84 192)' : 'none',
                                        }}
                                    />
                                </Tabs>


                                <Box sx={styles.tabContent}>
                                    {tabIndex === 0 && (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                bgcolor: 'light-2',
                                                // border: '1px solid',
                                                borderColor: 'dark-6',
                                                borderRadius: '8px',
                                                p: 4,
                                                minHeight: 0,
                                                position: 'relative',
                                                margin: "auto",
                                                height: "100%",
                                                width: "100%"

                                            }}
                                        >
                                            {!image ? (
                                                <>
                                                    <input
                                                        type="file"
                                                        accept="image/jpg,image/jpeg,image/png,image/gif"
                                                        ref={imageInputRef}
                                                        onChange={handleImageUpload}
                                                        style={styles.inputFile}
                                                    />
                                                    <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', fontSize: "15px", color: "black" }}>
                                                        Drag your image here
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', fontSize: "15px" }}>
                                                        or
                                                    </Typography>
                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        sx={styles.uploadButton}
                                                        aria-label="Upload from device"
                                                        onClick={() => imageInputRef.current.click()}
                                                    >
                                                        Upload from device
                                                    </Button>
                                                    <Typography variant="caption" color="text.secondary" sx={{ pt: 6, textAlign: 'center' }}>
                                                        Use a JPG, PNG or GIF, up to 5 MB
                                                    </Typography>
                                                </>
                                            ) : (
                                                <Box sx={styles.cropperContainer}>

                                                    <Cropper
                                                        src={image}
                                                        style={{ height: '100%', width: '100%' }}
                                                        initialAspectRatio={16 / 9}
                                                        aspectRatio={16 / 9}
                                                        guides={false}
                                                        viewMode={1}
                                                        zoomable={false}
                                                        scalable={false}
                                                        rotatable={false}
                                                        ref={cropperRef}
                                                    />
                                                    <IconButton
                                                        sx={styles.deleteButton}
                                                        onClick={handleDelete}
                                                    >
                                                        <RiDeleteBin6Line />
                                                    </IconButton>
                                                    <Grid sx={styles.saveButton} style={{
                                                        display: "flex", justifyContent: "flex-end"

                                                    }}>
                                                        <Button
                                                            onClick={handleDelete}
                                                            variant="outlined"
                                                            style={{ background: "#f4f4f4", color: "#444", border: "1px solid #f4f4f4", marginRight: "30px" }}>
                                                            Cancel
                                                        </Button>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={handleCrop}
                                                        >
                                                            Save
                                                        </Button>
                                                    </Grid>
                                                </Box>
                                            )}
                                        </Box>
                                    )}
                                </Box>
                            </DialogContent>
                        </Form>
                    )}
                </Formik>
            </Dialog>
        </ThemeProvider>
    );
};

export default ImageUpload;
