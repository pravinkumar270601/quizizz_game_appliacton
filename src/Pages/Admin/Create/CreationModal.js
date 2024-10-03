// // // // import React from 'react';
// // // // import { Box, Button, Typography, Modal, IconButton, Card, CardContent } from '@mui/material';
// // // // import CloseIcon from '@mui/icons-material/Close';

// // // // const CreationModal = ({ open, onClose }) => {
// // // //   return (
// // // //     <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
// // // //       <Box 
// // // //         sx={{
// // // //         //   position: 'fixed',
// // // //           top: 0,
// // // //           left: 0,
// // // //           height: '100%',
// // // //           width: '100%',
// // // //           bgcolor: 'rgba(0, 0, 0, 0.8)',
// // // //         // bgcolor:"rgb(241 233 233 / 50%)",
// // // //           zIndex: 'overlay',
// // // //           display: 'flex',
// // // //           justifyContent: 'center',
// // // //           alignItems: 'center',
// // // //           pt: 6,
// // // //           px: 6,
// // // //         }}
// // // //       >
// // // //         <Box
// // // //           sx={{
// // // //             position: 'relative',
// // // //             width: '100%',
// // // //             maxWidth: '400px',  // Equivalent to `max-w-qxs`
// // // //             bgcolor: 'background.paper',
// // // //             borderRadius: '12px',
// // // //             overflow: 'hidden',
// // // //             boxShadow: 24,
// // // //           }}
// // // //         >
// // // //           <Box sx={{ position: 'relative', p: 2 }}>
// // // //             <IconButton 
// // // //               onClick={onClose}
// // // //               sx={{
// // // //                 position: 'absolute',
// // // //                 top: 8,
// // // //                 right: 8,
// // // //               }}
// // // //             >
// // // //               <CloseIcon />
// // // //             </IconButton>
// // // //             <Typography id="modal-title" variant="h6" component="h2">
// // // //               What would you like to create?
// // // //             </Typography>
// // // //             <Box
// // // //               sx={{
// // // //                 display: 'flex',
// // // //                 flexWrap: 'wrap',
// // // //                 gap: 2,
// // // //                 mt: 3,
// // // //               }}
// // // //             >
// // // //               <ButtonCard
// // // //                 imageSrc="https://cf.quizizz.com/image/icons/quiz_solid_circle.png"
// // // //                 title="Quiz"
// // // //                 description="Reflect on student understanding of skills and concepts by creating quizzes or practice opportunities."
// // // //               />
// // // //               <ButtonCard
// // // //                 imageSrc="https://cf.quizizz.com/image/icons/presentation_solid_circle.png"
// // // //                 title="Lesson"
// // // //                 description="Teach new topics or skills to the whole class with interactive slides."
// // // //               />
// // // //               <ButtonCard
// // // //                 imageSrc="https://cf.quizizz.com/image/icons/video-quiz_solid_circle.png"
// // // //                 title="Interactive video"
// // // //                 description="Make asynchronous assignments into active learning experiences."
// // // //                 infoText="Free up to 10 videos"
// // // //               />
// // // //               <ButtonCard
// // // //                 imageSrc="https://cf.quizizz.com/image/icons/reading-quiz_solid_circle.png"
// // // //                 title="Passage"
// // // //                 description="Help students analyze text or media and improve comprehension skills."
// // // //                 infoText="Free up to 10 passages"
// // // //                 isNew
// // // //               />
// // // //             </Box>
// // // //           </Box>
// // // //         </Box>
// // // //       </Box>
// // // //     </Modal>
// // // //   );
// // // // };

// // // // // export default CreationModal:

// // // // const ButtonCard = ({ imageSrc, title, description, infoText, isNew }) => {
// // // //   return (
// // // //     <Card
// // // //       sx={{
// // // //         width: 'calc(50% - 8px)',  // Taking gap into account
// // // //         minHeight: 160,
// // // //         display: 'flex',
// // // //         flexDirection: 'column',
// // // //         justifyContent: 'space-between',
// // // //         p: 2,
// // // //         borderRadius: 2,
// // // //         boxShadow: 1,
// // // //         '&:hover': {
// // // //           bgcolor: 'primary.light',
// // // //           boxShadow: 3,
// // // //         },
// // // //       }}
// // // //     >
// // // //       <CardContent sx={{ p: 0 }}>
// // // //         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // // //           <img src={imageSrc} alt={`${title} icon`} width={32} height={32} />
// // // //           <Typography variant="h6" fontWeight="bold">
// // // //             {title}
// // // //             {isNew && (
// // // //               <Box
// // // //                 component="span"
// // // //                 sx={{
// // // //                   bgcolor: 'secondary.main',
// // // //                   color: 'secondary.contrastText',
// // // //                   borderRadius: '16px',
// // // //                   ml: 1,
// // // //                   px: 1,
// // // //                   fontSize: '0.75rem',
// // // //                   fontWeight: 'bold',
// // // //                 }}
// // // //               >
// // // //                 New
// // // //               </Box>
// // // //             )}
// // // //           </Typography>
// // // //         </Box>
// // // //         <Typography variant="body2" color="textSecondary" mt={1}>
// // // //           {description}
// // // //         </Typography>
// // // //       </CardContent>
// // // //       {infoText && (
// // // //         <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
// // // //           <Typography variant="caption" color="textSecondary">
// // // //             {infoText}
// // // //           </Typography>
// // // //         </Box>
// // // //       )}
// // // //     </Card>
// // // //   );
// // // // };

// // // // export default CreationModal;



// // // import React from 'react';
// // // import { Box, Button, Typography, Modal, IconButton, Card, CardContent } from '@mui/material';
// // // import CloseIcon from '@mui/icons-material/Close';

// // // const CreationModal = ({ open, onClose }) => {
// // //   return (
// // //     <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
// // //       <Box 
// // //         sx={{
// // //           top: 0,
// // //           left: 0,
// // //           height: '100%',
// // //           width: '100%',
// // //           bgcolor: 'rgba(0, 0, 0, 0.8)',
// // //           zIndex: 'overlay',
// // //           display: 'flex',
// // //           justifyContent: 'center',
// // //           alignItems: 'center',
// // //           pt: 6,
// // //           px: 6,
// // //         }}
// // //       >
// // //         <Box
// // //           sx={{
// // //             position: 'relative',
// // //             width: '100%',
// // //             maxWidth: '70%',  // Increase the maxWidth to make the modal wider
// // //             maxHeight: '70vh',   // Set a maximum height to avoid overflow
// // //             bgcolor: 'background.paper',
// // //             borderRadius: '12px',
// // //             overflowY: 'auto',   // Enable vertical scrolling if content overflows
// // //             boxShadow: 24,
// // //             p: 4,
// // //           }}
// // //         >
// // //           <Box sx={{ position: 'relative', mb: 2 }}>
// // //             {/* <IconButton 
// // //               onClick={onClose}
// // //               sx={{
// // //                 position: 'absolute',
// // //                 top: 8,
// // //                 right: 8,
// // //               }}
// // //             >
// // //               <CloseIcon />
// // //             </IconButton> */}
// // //             <Typography id="modal-title" variant="h6" component="h2">
// // //               What would you like to create?
// // //             </Typography>
// // //           </Box>
// // //           <Box
// // //             sx={{
// // //               display: 'flex',
// // //               flexWrap: 'wrap',
// // //               gap: 3,  // Increase the gap between the cards
// // //             }}
// // //           >
// // //             <ButtonCard
// // //               imageSrc="https://cf.quizizz.com/image/icons/quiz_solid_circle.png"
// // //               title="Quiz"
// // //               description="Reflect on student understanding of skills and concepts by creating quizzes or practice opportunities."
// // //             />
// // //             <ButtonCard
// // //               imageSrc="https://cf.quizizz.com/image/icons/presentation_solid_circle.png"
// // //               title="Lesson"
// // //               description="Teach new topics or skills to the whole class with interactive slides."
// // //             />
// // //             <ButtonCard
// // //               imageSrc="https://cf.quizizz.com/image/icons/video-quiz_solid_circle.png"
// // //               title="Interactive video"
// // //               description="Make asynchronous assignments into active learning experiences."
// // //               infoText="Free up to 10 videos"
// // //             />
// // //             <ButtonCard
// // //               imageSrc="https://cf.quizizz.com/image/icons/reading-quiz_solid_circle.png"
// // //               title="Passage"
// // //               description="Help students analyze text or media and improve comprehension skills."
// // //               infoText="Free up to 10 passages"
// // //               isNew
// // //             />
// // //           </Box>
// // //         </Box>
// // //       </Box>
// // //     </Modal>
// // //   );
// // // };

// // // const ButtonCard = ({ imageSrc, title, description, infoText, isNew }) => {
// // //   return (
// // //     <Card
// // //       sx={{
// // //         width: 'calc(50% - 12px)',  // Adjust the width of the cards
// // //         minHeight: 180,  // Increase the minimum height
// // //         display: 'flex',
// // //         flexDirection: 'column',
// // //         justifyContent: 'space-between',
// // //         p: 3,  // Increase the padding inside the cards
// // //         borderRadius: 2,
// // //         boxShadow: 1,
// // //         '&:hover': {
// // //           bgcolor: 'primary.light',
// // //           boxShadow: 3,
// // //         },
// // //       }}
// // //     >
// // //       <CardContent sx={{ p: 0 }}>
// // //         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // //           <img src={imageSrc} alt={`${title} icon`} width={36} height={36} />  {/* Increase icon size */}
// // //           <Typography variant="h6" fontWeight="bold">
// // //             {title}
// // //             {isNew && (
// // //               <Box
// // //                 component="span"
// // //                 sx={{
// // //                   bgcolor: 'secondary.main',
// // //                   color: 'secondary.contrastText',
// // //                   borderRadius: '16px',
// // //                   ml: 1,
// // //                   px: 1,
// // //                   fontSize: '0.75rem',
// // //                   fontWeight: 'bold',
// // //                 }}
// // //               >
// // //                 New
// // //               </Box>
// // //             )}
// // //           </Typography>
// // //         </Box>
// // //         <Typography variant="body2" color="textSecondary" mt={1}>
// // //           {description}
// // //         </Typography>
// // //       </CardContent>
// // //       {infoText && (
// // //         <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
// // //           <Typography variant="caption" color="textSecondary">
// // //             {infoText}
// // //           </Typography>
// // //         </Box>
// // //       )}
// // //     </Card>
// // //   );
// // // };

// // // export default CreationModal;



// // import React from 'react';
// // import { Box, Typography, Modal, Card, CardContent } from '@mui/material';

// // const CreationModal = ({ open, onClose }) => {
// //     return (
// //         <Modal
// //             open={open}
// //             onClose={onClose}  // Ensure this function updates the state to close the modal
// //             aria-labelledby="modal-title"
// //             sx={{
// //                 display: 'flex',
// //                 justifyContent: 'center',
// //                 alignItems: 'center',
// //                 bgcolor: "#090909cc"
// //             }}
// //         >
// //             {/* <Box sx={{
// //                 position: "fixed",
// //                 top: 0,
// //                 left: 0,
// //                 width: "100%",
// //                 backgroundColor: "white",
// //                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
// //                 padding: 2
// //             }}>
// //                 <h1>valla</h1>

// //             </Box> */}

// //             <Box
// //                 sx={{
// //                     width: '100%',
// //                     maxWidth: '50%',  // Increased width
// //                     maxHeight: '70vh',  // Set a max height
// //                     bgcolor: 'background.paper',
// //                     borderRadius: '12px',
// //                     overflowY: 'auto',  // Allow vertical scrolling if needed
// //                     boxShadow: 24,
// //                     p: 4,
// //                 }}
// //             >
// //                 <Typography id="modal-title" variant="h6" component="h2">
// //                     What would you like to create?
// //                 </Typography>
// //                 <Box
// //                     sx={{
// //                         display: 'flex',
// //                         flexWrap: 'wrap',
// //                         gap: 3,  // Adjust gap between cards
// //                     }}
// //                 >
// //                     <ButtonCard
// //                         imageSrc="https://cf.quizizz.com/image/icons/quiz_solid_circle.png"
// //                         title="Quiz"
// //                         description="Reflect on student understanding of skills and concepts by creating quizzes or practice opportunities."
// //                     />
// //                     <ButtonCard
// //                         imageSrc="https://cf.quizizz.com/image/icons/presentation_solid_circle.png"
// //                         title="Lesson"
// //                         description="Teach new topics or skills to the whole class with interactive slides."
// //                     />
// //                     <ButtonCard
// //                         imageSrc="https://cf.quizizz.com/image/icons/video-quiz_solid_circle.png"
// //                         title="Interactive video"
// //                         description="Make asynchronous assignments into active learning experiences."
// //                         infoText="Free up to 10 videos"
// //                     />
// //                     <ButtonCard
// //                         imageSrc="https://cf.quizizz.com/image/icons/reading-quiz_solid_circle.png"
// //                         title="Passage"
// //                         description="Help students analyze text or media and improve comprehension skills."
// //                         infoText="Free up to 10 passages"
// //                         isNew
// //                     />
// //                 </Box>
// //             </Box>
// //         </Modal >
// //     );
// // };

// // const ButtonCard = ({ imageSrc, title, description, infoText, isNew }) => {
// //     return (
// //         <Card
// //             sx={{
// //                 width: 'calc(50% - 12px)',  // Adjust width
// //                 minHeight: 180,  // Increased min height
// //                 display: 'flex',
// //                 flexDirection: 'column',
// //                 justifyContent: 'space-between',
// //                 p: 3,  // Increased padding
// //                 borderRadius: 2,
// //                 boxShadow: 1,
// //                 '&:hover': {
// //                     bgcolor: 'primary.light',
// //                     boxShadow: 3,
// //                 },
// //             }}
// //         >
// //             <CardContent sx={{ p: 0 }}>
// //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //                     <img src={imageSrc} alt={`${title} icon`} width={36} height={36} />
// //                     <Typography variant="h6" fontWeight="bold">
// //                         {title}
// //                         {isNew && (
// //                             <Box
// //                                 component="span"
// //                                 sx={{
// //                                     bgcolor: 'secondary.main',
// //                                     color: 'secondary.contrastText',
// //                                     borderRadius: '16px',
// //                                     ml: 1,
// //                                     px: 1,
// //                                     fontSize: '0.75rem',
// //                                     fontWeight: 'bold',
// //                                 }}
// //                             >
// //                                 New
// //                             </Box>
// //                         )}
// //                     </Typography>
// //                 </Box>
// //                 <Typography variant="body2" color="textSecondary" mt={1}>
// //                     {description}
// //                 </Typography>
// //             </CardContent>
// //             {infoText && (
// //                 <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
// //                     <Typography variant="caption" color="textSecondary">
// //                         {infoText}
// //                     </Typography>
// //                 </Box>
// //             )}
// //         </Card>
// //     );
// // };

// // export default CreationModal;


// import React from 'react';
// import { Box, Typography, Modal, Card, CardContent } from '@mui/material';

// const CreationModal = ({ open, onClose }) => {
//     return (
//         <Modal
//             open={open}
//             onClose={onClose}
//             aria-labelledby="modal-title"
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 bgcolor: "#090909cc",
//                 overflow: 'auto', // Ensure modal container does not scroll
//             }}
//         >
//             <Box
//                 sx={{
//                     width: '90%', // Adjust width to be more flexible
//                     maxWidth: '600px', // Set a maximum width
//                     maxHeight: '80vh', // Set a maximum height
//                     bgcolor: 'background.paper',
//                     borderRadius: '12px',
//                     overflow: 'hidden', // Hide any overflow from box shadows
//                     boxShadow: 24,
//                     display: 'flex',
//                     flexDirection: 'column',
//                 }}
//             >
//                 <Box
//                     sx={{
//                         padding: 2,
//                         bgcolor: 'background.default',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         borderBottom: '1px solid',
//                         borderColor: 'divider',
//                     }}
//                 >
//                     <Typography id="modal-title" variant="h6" component="h2">
//                         What would you like to create?
//                     </Typography>
//                 </Box>
//                 <Box
//                     sx={{
//                         flex: 1, // Allow this box to grow and take available space
//                         overflowY: 'auto', // Only vertical scroll
//                         p: 2,
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             flexWrap: 'wrap',
//                             gap: 3, // Adjust gap between cards
//                         }}
//                     >
//                         <ButtonCard
//                             imageSrc="https://cf.quizizz.com/image/icons/quiz_solid_circle.png"
//                             title="Quiz"
//                             description="Reflect on student understanding of skills and concepts by creating quizzes or practice opportunities."
//                         />
//                         <ButtonCard
//                             imageSrc="https://cf.quizizz.com/image/icons/presentation_solid_circle.png"
//                             title="Lesson"
//                             description="Teach new topics or skills to the whole class with interactive slides."
//                         />
//                         <ButtonCard
//                             imageSrc="https://cf.quizizz.com/image/icons/video-quiz_solid_circle.png"
//                             title="Interactive video"
//                             description="Make asynchronous assignments into active learning experiences."
//                             infoText="Free up to 10 videos"
//                         />
//                         <ButtonCard
//                             imageSrc="https://cf.quizizz.com/image/icons/reading-quiz_solid_circle.png"
//                             title="Passage"
//                             description="Help students analyze text or media and improve comprehension skills."
//                             infoText="Free up to 10 passages"
//                             isNew
//                         />
//                     </Box>
//                 </Box>
//             </Box>
//         </Modal>
//     );
// };

// const ButtonCard = ({ imageSrc, title, description, infoText, isNew }) => {
//     return (
//         <Card
//             sx={{
//                 width: 'calc(50% - 12px)', // Adjust width
//                 minHeight: 180, // Increased min height
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 p: 3, // Increased padding
//                 borderRadius: 2,
//                 boxShadow: 1,
//                 '&:hover': {
//                     bgcolor: 'primary.light',
//                     boxShadow: 3,
//                 },
//             }}
//         >
//             <CardContent sx={{ p: 0 }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                     <img src={imageSrc} alt={`${title} icon`} width={36} height={36} />
//                     <Typography variant="h6" fontWeight="bold">
//                         {title}
//                         {isNew && (
//                             <Box
//                                 component="span"
//                                 sx={{
//                                     bgcolor: 'secondary.main',
//                                     color: 'secondary.contrastText',
//                                     borderRadius: '16px',
//                                     ml: 1,
//                                     px: 1,
//                                     fontSize: '0.75rem',
//                                     fontWeight: 'bold',
//                                 }}
//                             >
//                                 New
//                             </Box>
//                         )}
//                     </Typography>
//                 </Box>
//                 <Typography variant="body2" color="textSecondary" mt={1}>
//                     {description}
//                 </Typography>
//             </CardContent>
//             {infoText && (
//                 <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
//                     <Typography variant="caption" color="textSecondary">
//                         {infoText}
//                     </Typography>
//                 </Box>
//             )}
//         </Card>
//     );
// };

// export default CreationModal;



import React, { useState } from 'react';
import { Box, Typography, Modal, Card, CardContent } from '@mui/material';
import { useNavigate } from "react-router-dom"
import QuizEditor from './QuizEditor';
import CreateNewActivity from './CreateNewActivity';
import tik_quiz_solid_circle from "../../../Assets/quiz_solid_circle.png"

import presentation_solid_circle from "../../../Assets/presentation_solid_circle.png"
import reading_solid from "../../../Assets/reading-quiz_solid_circle.png"
import video_quiz_solid_circle from "../../../Assets/video-quiz_solid_circle.png"


const CreationModal = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: "#090909cc",
                overflow: 'hidden', // Prevents modal from scrolling
            }}
        >
            <Box
                sx={{
                    width: '90%',
                    maxWidth: '600px',
                    maxHeight: '80vh', // Set a maximum height
                    bgcolor: 'background.paper',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        padding: 2,
                        bgcolor: 'background.default',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        What would you like to create?
                    </Typography>
                </Box>
                <Box
                    sx={{
                        flex: 1, // Take up available space
                        overflowY: 'auto', // Only vertical scroll
                        p: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 3,
                        }}
                    >
                        <ButtonCard
                            imageSrc={tik_quiz_solid_circle}
                            title="Quiz"
                            description="Reflect on student understanding of skills and concepts by creating quizzes or practice opportunities."
                        />
                        <ButtonCard
                            imageSrc={presentation_solid_circle}
                            title="Lesson"
                            description="Teach new topics or skills to the whole class with interactive slides."
                        />
                        <ButtonCard
                            imageSrc={video_quiz_solid_circle}
                            title="Interactive video"
                            description="Make asynchronous assignments into active learning experiences."
                            infoText="Free up to 10 videos"
                        />
                        <ButtonCard
                            imageSrc={reading_solid}
                            title="Passage"
                            description="Help students analyze text or media and improve comprehension skills."
                            infoText="Free up to 10 passages"
                            isNew
                        />
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

const ButtonCard = ({ imageSrc, title, description, infoText, isNew }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = () => {
        navigate('/admin/quizeditor'); // Navigate to QuizEditor page
        // window.open('/quizeditor');
        // window.open('/quizeditor', '_self');


    };
    return (
        <Card
            onClick={handleClick}
            sx={{
                width: 'calc(50% - 12px)',
                minHeight: 180,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 3,
                borderRadius: 2,
                boxShadow: 1,
                border: " 1px solid #b6b6b6",
                bgcolor: "rgba(229, 229 ,229,0.5)", boxShadow: " 0 4px #b6b6b6",
                '&:hover': {

                    // backgroundColor: 'rgba(136 84 192,0.9)',
                    backgroundColor: 'rgba(136, 84, 192, 0.2)',
                    boxShadow: '0 4px rgb(136 84 192)',
                    border: " 1px solid rgb(136 84 192)",
                },
            }}
        >
            <CardContent sx={{ p: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img src={imageSrc} alt={`${title} icon`} width={36} height={36} />
                    <Typography variant="h6" fontWeight="bold">
                        {title}
                        {isNew && (
                            <Box
                                component="span"
                                sx={{
                                    bgcolor: 'secondary.main',
                                    color: 'secondary.contrastText',
                                    borderRadius: '16px',
                                    ml: 1,
                                    p: 1,
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                New
                            </Box>
                        )}
                    </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary" mt={1}>
                    {description}
                </Typography>
            </CardContent>
            {infoText && (
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Typography variant="caption" color="textSecondary">
                        {infoText}
                    </Typography>
                </Box>
            )}
        </Card>
    );
};

export default CreationModal;
