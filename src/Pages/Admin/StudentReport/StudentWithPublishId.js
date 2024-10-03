

// // // import React, { useEffect, useState } from 'react'

// // // import { Grid, Box, Typography, Button, IconButton, Tooltip, Avatar } from '@mui/material'; // MUI components
// // // import { Delete, Print, Settings, Code } from '@mui/icons-material'; // MUI icons
// // // import MoreVertIcon from '@mui/icons-material/MoreVert';
// // // import { Menu, MenuItem } from '@mui/material';
// // // import { LuDot } from "react-icons/lu";
// // // import image1 from "../../../Assets/Quizz_image.png"
// // // import { PiShareFat } from "react-icons/pi";
// // // import { FaCaretDown } from "react-icons/fa";
// // // import actions from "../../../ReduxStore/actions/index";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import publishImage from "../../../Assets/publishImage.jpg"
// // // // import { formatDistanceToNow } from 'date-fns';
// // // import { FaListUl } from "react-icons/fa";
// // // import { HiOutlineAcademicCap } from "react-icons/hi2";
// // // import { PiBooksDuotone } from "react-icons/pi";
// // // import { FaHeart } from "react-icons/fa";
// // // import { FaRegFolder } from "react-icons/fa6";
// // // import { RiDeleteBin6Line } from "react-icons/ri";
// // // import { FaUsersRectangle } from "react-icons/fa6";
// // // import { IoMdTime } from "react-icons/io";
// // // import { IoPlayOutline } from "react-icons/io5";
// // // import { Link, useNavigate, useParams } from 'react-router-dom';
// // // import { setQuizPlayPublishId } from '../../../ReduxStore/Slices/QuizzPlay/quizplaypublishidSlice'
// // // import CountDown from '../QuizzPlay/CountDown';
// // // import CustFormDropDown from '../../../Components/CustomInput2/CustFormDropDown';
// // // import { Formik, Form, Field } from "formik";
// // // import { ErrorMessage } from "formik";
// // // import * as Yup from "yup";
// // // import "react-toastify/dist/ReactToastify.css";
// // // import { ToastContainer, toast } from "react-toastify"
// // // import { setInitialStategrantAccessToStudent } from '../../../ReduxStore/Slices/Student/grantAccessToStudent'
// // // import coins_imag from "../../../Assets/money_14999038.png"
// // // import { MdIncompleteCircle } from "react-icons/md";
// // // import user_image from "../../../Assets/user_man_image.png"







// // // const StudentWithPublishId = () => {
// // //     const { publishId } = useParams();
// // //     console.log(publishId, "publishIduseparams")

// // //     const sessionStaffId = parseInt(sessionStorage.getItem('sessionStaffId'));
// // //     const sessionStaffName = sessionStorage.getItem('sessionStaffName');

// // //     const dispatch = useDispatch();
// // //     const navigate = useNavigate()
// // //     const [anchorEl, setAnchorEl] = useState(null);
// // //     const [anchorEl2, setAnchorEl2] = useState(null);
// // //     const handleClick = (event) => {
// // //         setAnchorEl(event.currentTarget);
// // //     };

// // //     const handleClose = () => {
// // //         setAnchorEl(null);
// // //     };

// // //     const handleClick1 = (event) => {
// // //         setAnchorEl2(event.currentTarget);
// // //     };

// // //     const handleClose1 = () => {
// // //         setAnchorEl2(null);
// // //     };

// // //     const { GetPublishByUserId } = useSelector((state) => state?.GetPublishByUserId);
// // //     console.log(GetPublishByUserId, " GetPublishByUserId");
// // //     const { PublishPost } = useSelector((state) => state?.PublishPost);

// // //     const { DeletePublishById } = useSelector((state) => state?.DeletePublishById);






// // //     const { GetStudentInfoByPublishId } = useSelector((state) => state?.GetStudentInfoByPublishId);

// // //     console.log(GetStudentInfoByPublishId, "GetStudentInfoByPublishIdGetStudentInfoByPublishId")
// // //     useEffect(() => {
// // //         const data1 = {
// // //             data: {},
// // //             method: "get",
// // //             apiName: `getAccessGrantedStudentsInfoBypublishId/publish/${publishId}`,
// // //         };

// // //         dispatch(actions.GETSTUDENTINFOBYPUBLISHID(data1));

// // //     }, [])


// // //     const [allPublishData, setAllPublishData] = useState([])
// // //     console.log(allPublishData, "allPublishData,,,,,,")


// // //     useEffect(() => {
// // //         if (GetStudentInfoByPublishId?.data) {
// // //             const PublishheadContent = GetStudentInfoByPublishId?.data.map((data) => {


// // //                 return {

// // //                     student_name: data?.student_name,
// // //                     email: data?.email,
// // //                     student_id: data?.student_id,
// // //                     score: data?.scores[0].score,
// // //                     status: data?.scores[0].status,


// // //                 }

// // //             })


// // //             setAllPublishData(PublishheadContent)
// // //             console.log(PublishheadContent, "PublishheadContentPublishheadContent");


// // //         }

// // //     }, [GetStudentInfoByPublishId?.data])




// // //     const { grantAccessToStudent } = useSelector(
// // //         (state) => state?.grantAccessToStudent
// // //     );
// // //     console.log(grantAccessToStudent, "grantAccessToStudent");




// // //     return (
// // //         <Grid>
// // //             <Box sx={{ textAlign: "center" }}>
// // //                 <Typography fontSize="28px" color="rgb(98 91 101)" fontWeight="600">
// // //                     Students Reports
// // //                 </Typography>
// // //             </Box>

// // //             <Grid container spacing={2}>
// // //                 {allPublishData.length === 0 && (
// // //                     <h1 style={{
// // //                         position: "absolute",
// // //                         top: "55%",
// // //                         left: "65%",
// // //                         transform: "translate(-50%, -50%)",
// // //                         textAlign: "center"
// // //                     }}>There is no publish!!</h1>
// // //                 )}


// // //                 {allPublishData.map((data) => (
// // //                     <Grid item xs={12} key={data.student_id}>
// // //                         {/* <Link to={`/admin/student-report/${data.student_id}`} style={{ textDecoration: "none", color: "inherit" }}> */}
// // //                         <Box
// // //                             data-aos="zoom-in"
// // //                             data-aos-duration="1000"
// // //                             sx={{
// // //                                 position: 'relative',
// // //                                 display: "flex",
// // //                                 justifyContent: "center",
// // //                                 alignItems: "center",
// // //                                 borderRadius: 1,
// // //                                 mt: 2,
// // //                                 // padding: 4,
// // //                                 backgroundColor: 'background.paper',
// // //                                 border: '1px solid',
// // //                                 borderColor: 'divider',
// // //                                 width: "100%", // Adjust the width here to full width for the Grid item
// // //                             }}
// // //                         >

// // //                             <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
// // //                                 <Box sx={{ display: "flex", alignItems: "center" }}>
// // //                                     <Box
// // //                                         sx={{
// // //                                             width: 50,
// // //                                             height: 50,
// // //                                             display: 'flex',
// // //                                             justifyContent: 'center',
// // //                                             alignItems: 'center',
// // //                                             overflow: 'hidden',
// // //                                             backgroundColor: 'background.default',
// // //                                             borderRadius: 1,
// // //                                         }}
// // //                                     >
// // //                                         <img
// // //                                             src={user_image}
// // //                                             alt="Quiz Image"
// // //                                             style={{ width: '100%', height: '100%', objectFit: 'fill' }}
// // //                                         />
// // //                                     </Box>
// // //                                 </Box>

// // //                                 <Box sx={{ mt: 2, display: "flex", justifyContent: "space-evenly", width: "100%" }}>
// // //                                     <Box
// // //                                         sx={{
// // //                                             display: 'flex',
// // //                                             flexDirection: "column",
// // //                                             justifyContent: "center",
// // //                                             alignItems: "center",
// // //                                         }}
// // //                                     >
// // //                                         <Box
// // //                                             sx={{
// // //                                                 paddingX: 1,
// // //                                                 borderRadius: 1,
// // //                                                 border: '1px solid',
// // //                                                 borderColor: '#ffc93333',
// // //                                                 fontSize: '0.75rem',
// // //                                                 backgroundColor: '#ffc93333',
// // //                                             }}
// // //                                         >
// // //                                             <Typography variant="caption" color="rgb(232 169 0)" fontWeight="600">
// // //                                                 Student Id: {data.student_id}
// // //                                             </Typography>
// // //                                         </Box>
// // //                                     </Box>

// // //                                     <Box sx={{ display: 'flex', alignItems: 'center', marginY: 1, justifyContent: "center" }}>
// // //                                         <Typography variant="h6" component="span" sx={{ color: "black", fontSize: "17px", fontWeight: "700" }}>
// // //                                             {data.student_name}
// // //                                         </Typography>
// // //                                     </Box>

// // //                                     <Box sx={{ display: 'flex', alignItems: 'center', marginY: 1, justifyContent: "center" }}>
// // //                                         <Typography variant="h6" component="span" sx={{ color: "#777070", fontSize: "14px" }}>
// // //                                             {data.email}
// // //                                         </Typography>
// // //                                     </Box>

// // //                                     <Box sx={{ mt: 1, p: 1, display: "flex", alignItems: "center", justifyContent: 'center' }}>
// // //                                         <Box sx={{ width: "100px", height: "40px", display: "flex", alignItems: "center", justifyContent: 'center', border: '1px solid #ffb74d', borderRadius: "5px" }}>
// // //                                             <Box component="img" src={coins_imag} sx={{ width: 20, height: 20 }} />
// // //                                             <Typography sx={{ fontWeight: "bold", color: "#ffb74d", fontSize: "15px" }}>
// // //                                                 {data.score} Points
// // //                                             </Typography>
// // //                                         </Box>
// // //                                     </Box>

// // //                                     <Box sx={{ p: 1, display: "flex", alignItems: "center", justifyContent: 'center' }}>
// // //                                         <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
// // //                                             {data.status === "pending" ? (
// // //                                                 <>
// // //                                                     <MdIncompleteCircle style={{ color: "red", marginRight: "4px" }} />
// // //                                                     <Typography sx={{ fontWeight: "bold", color: "red", fontSize: "15px" }}>
// // //                                                         {data.status}
// // //                                                     </Typography>
// // //                                                 </>
// // //                                             ) : (
// // //                                                 <>
// // //                                                     <MdIncompleteCircle style={{ color: "green", marginRight: "4px" }} />
// // //                                                     <Typography sx={{ fontWeight: "bold", color: "green", fontSize: "15px" }}>
// // //                                                         {data.status}
// // //                                                     </Typography>
// // //                                                 </>
// // //                                             )}
// // //                                         </Box>
// // //                                     </Box>
// // //                                 </Box>
// // //                             </Box>
// // //                         </Box>
// // //                     </Grid>
// // //                 ))}


// // //                 <ToastContainer


// // //                     position="top-right"
// // //                     autoClose={5000}
// // //                     hideProgressBar={false}
// // //                     newestOnTop={false}
// // //                     closeOnClick
// // //                     rtl={false}
// // //                     pauseOnFocusLoss
// // //                     draggable
// // //                     pauseOnHover
// // //                     theme="dark" />

// // //             </Grid >
// // //         </Grid >

// // //     )
// // // }

// // // export default StudentWithPublishId


// // import React, { useEffect, useState } from 'react';
// // import { Grid, Box, Typography, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// // import { MdIncompleteCircle } from "react-icons/md";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useParams } from 'react-router-dom';
// // import actions from "../../../ReduxStore/actions/index";
// // import coins_imag from "../../../Assets/money_14999038.png";
// // import user_image from "../../../Assets/user_man_image.png";
// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const StudentWithPublishId = () => {
// //     const { publishId } = useParams();
// //     console.log(publishId, "publishIduseparams");

// //     const dispatch = useDispatch();

// //     const { GetStudentInfoByPublishId } = useSelector((state) => state?.GetStudentInfoByPublishId);
// //     const [allPublishData, setAllPublishData] = useState([]);

// //     useEffect(() => {
// //         const data1 = {
// //             data: {},
// //             method: "get",
// //             apiName: `getAccessGrantedStudentsInfoBypublishId/publish/${publishId}`,
// //         };
// //         dispatch(actions.GETSTUDENTINFOBYPUBLISHID(data1));
// //     }, []);

// //     useEffect(() => {
// //         if (GetStudentInfoByPublishId?.data) {
// //             const PublishheadContent = GetStudentInfoByPublishId?.data.map((data) => ({
// //                 student_name: data?.student_name,
// //                 email: data?.email,
// //                 student_id: data?.student_id,
// //                 score: data?.scores[0]?.score,
// //                 status: data?.scores[0]?.status,
// //             }));
// //             setAllPublishData(PublishheadContent);
// //         }
// //     }, [GetStudentInfoByPublishId?.data]);

// //     return (
// //         <Box>
// //             <Typography fontSize="28px" color="rgb(98 91 101)" fontWeight="600" textAlign="center">
// //                 Students Reports
// //             </Typography>

// //             {allPublishData.length === 0 && (
// //                 <Typography variant="h5" align="center" sx={{ mt: 4 }}>
// //                     There is no publish!!
// //                 </Typography>
// //             )}

// //             {allPublishData.length > 0 && (
// //                 <TableContainer component={Paper} sx={{ mt: 4 }}>
// //                     <Table sx={{ borderSpacing: "0 10px" }} style={{ borderCollapse: 'separate' }}>
// //                         <TableHead>
// //                             <TableRow>
// //                                 <TableCell align="center">Student Image</TableCell>
// //                                 <TableCell align="center">Student ID</TableCell>
// //                                 <TableCell align="center">Student Name</TableCell>
// //                                 <TableCell align="center">Email</TableCell>
// //                                 <TableCell align="center">Score</TableCell>
// //                                 <TableCell align="center">Status</TableCell>
// //                             </TableRow>
// //                         </TableHead>
// //                         <TableBody>
// //                             {allPublishData.map((data) => (
// //                                 <TableRow key={data.student_id} sx={{ mb: 2 }}>
// //                                     <TableCell align="center" textAlign="center" sx={{ mt: 2 }}>
// //                                         <Box
// //                                             sx={{
// //                                                 display: 'flex',
// //                                                 alignItems: 'center',
// //                                                 justifyContent: 'center',
// //                                             }}
// //                                         >
// //                                             <Avatar src={user_image} alt="Student Avatar" sx={{ width: 50, height: 50, mr: 2 }} />
// //                                             {/* <Typography variant="body1">{data.student_id}</Typography> */}
// //                                         </Box>
// //                                     </TableCell>
// //                                     <TableCell align="center">
// //                                         {/* <Box
// //                                             sx={{
// //                                                 display: 'flex',
// //                                                 alignItems: 'center',
// //                                                 justifyContent: 'center',
// //                                             }}
// //                                         > */}
// //                                         {/* <Avatar src={user_image} alt="Student Avatar" sx={{ width: 50, height: 50, mr: 2 }} /> */}
// //                                         <Typography variant="body1">{data.student_id}</Typography>
// //                                         {/* </Box> */}
// //                                     </TableCell>

// //                                     <TableCell align="center">
// //                                         <Typography variant="body1" fontWeight="600">
// //                                             {data.student_name}
// //                                         </Typography>
// //                                     </TableCell>

// //                                     <TableCell align="center">
// //                                         <Typography variant="body2">{data.email}</Typography>
// //                                     </TableCell>

// //                                     <TableCell align="center">
// //                                         <Box
// //                                             sx={{
// //                                                 display: 'flex',
// //                                                 alignItems: 'center',
// //                                                 justifyContent: 'center',
// //                                                 // border: '1px solid #ffb74d',
// //                                                 // borderRadius: "5px",
// //                                                 // padding: "5px 10px",
// //                                             }}
// //                                         >
// //                                             <Box component="img" src={coins_imag} sx={{ width: 20, height: 20, mr: 1 }} />
// //                                             <Typography sx={{ fontWeight: "bold", color: "#ffb74d" }}>
// //                                                 {data.score} Points
// //                                             </Typography>
// //                                         </Box>
// //                                     </TableCell>

// //                                     <TableCell align="center">
// //                                         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
// //                                             {data.status === "pending" ? (
// //                                                 <>
// //                                                     <MdIncompleteCircle style={{ color: "red", marginRight: "4px" }} />
// //                                                     <Typography sx={{ fontWeight: "bold", color: "red" }}>
// //                                                         {data.status}
// //                                                     </Typography>
// //                                                 </>
// //                                             ) : (
// //                                                 <>
// //                                                     <MdIncompleteCircle style={{ color: "green", marginRight: "4px" }} />
// //                                                     <Typography sx={{ fontWeight: "bold", color: "green" }}>
// //                                                         {data.status}
// //                                                     </Typography>
// //                                                 </>
// //                                             )}
// //                                         </Box>
// //                                     </TableCell>
// //                                 </TableRow>
// //                             ))}
// //                         </TableBody>
// //                     </Table>
// //                 </TableContainer>
// //             )}

// //             <ToastContainer
// //                 position="top-right"
// //                 autoClose={5000}
// //                 hideProgressBar={false}
// //                 newestOnTop={false}
// //                 closeOnClick
// //                 rtl={false}
// //                 pauseOnFocusLoss
// //                 draggable
// //                 pauseOnHover
// //                 theme="dark"
// //             />
// //         </Box>
// //     );
// // };

// // export default StudentWithPublishId;

// import React, { useEffect, useState } from 'react';
// import { Grid, Box, Typography, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import { MdIncompleteCircle } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from 'react-router-dom';
// import actions from "../../../ReduxStore/actions/index";
// import coins_imag from "../../../Assets/money_14999038.png";
// import user_image from "../../../Assets/user_man_image.png";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const StudentWithPublishId = () => {
//     const { publishId } = useParams();
//     console.log(publishId, "publishIduseparams");

//     const dispatch = useDispatch();

//     const { GetStudentInfoByPublishId } = useSelector((state) => state?.GetStudentInfoByPublishId);
//     const [allPublishData, setAllPublishData] = useState([]);

//     useEffect(() => {
//         const data1 = {
//             data: {},
//             method: "get",
//             apiName: `getAccessGrantedStudentsInfoBypublishId/publish/${publishId}`,
//         };
//         dispatch(actions.GETSTUDENTINFOBYPUBLISHID(data1));
//     }, []);

//     useEffect(() => {
//         if (GetStudentInfoByPublishId?.data) {
//             const PublishheadContent = GetStudentInfoByPublishId?.data.map((data) => ({
//                 student_name: data?.student_name,
//                 email: data?.email,
//                 student_id: data?.student_id,
//                 score: data?.scores[0]?.score,
//                 status: data?.scores[0]?.status,
//             }));
//             setAllPublishData(PublishheadContent);
//         }
//     }, [GetStudentInfoByPublishId?.data]);

//     return (
//         <Box>
//             <Typography fontSize="28px" color="rgb(98 91 101)" fontWeight="600" textAlign="center">
//                 Students Reports
//             </Typography>

//             {allPublishData.length === 0 && (
//                 <Typography variant="h5" align="center" sx={{ mt: 4 }}>
//                     There is no publish!!
//                 </Typography>
//             )}

//             {allPublishData.length > 0 && (
//                 <TableContainer component={Paper} sx={{ mt: 4 }}>
//                     <Table sx={{ borderSpacing: "0 10px" }} style={{ borderCollapse: 'separate' }}>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell align="center">Student Image</TableCell>
//                                 <TableCell align="center">Student ID</TableCell>
//                                 <TableCell align="center">Student Name</TableCell>
//                                 <TableCell align="center">Email</TableCell>
//                                 <TableCell align="center">Score</TableCell>
//                                 <TableCell align="center">Status</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {allPublishData.map((data, index) => (
//                                 <TableRow 
//                                     key={data.student_id}
//                                     sx={{
//                                         // Add top margin to each row except the first one
//                                         mt: index !== 0 ? 2 : 0,
//                                         '&:not(:last-child)': {
//                                             borderBottom: '10px solid transparent',  // Add gap between rows
//                                         }
//                                     }}
//                                 >
//                                     <TableCell align="center">
//                                         <Box
//                                             sx={{
//                                                 display: 'flex',
//                                                 alignItems: 'center',
//                                                 justifyContent: 'center',
//                                             }}
//                                         >
//                                             <Avatar src={user_image} alt="Student Avatar" sx={{ width: 50, height: 50, mr: 2 }} />
//                                         </Box>
//                                     </TableCell>
//                                     <TableCell align="center">
//                                         <Typography variant="body1">{data.student_id}</Typography>
//                                     </TableCell>
//                                     <TableCell align="center">
//                                         <Typography variant="body1" fontWeight="600">
//                                             {data.student_name}
//                                         </Typography>
//                                     </TableCell>
//                                     <TableCell align="center">
//                                         <Typography variant="body2">{data.email}</Typography>
//                                     </TableCell>
//                                     <TableCell align="center">
//                                         <Box
//                                             sx={{
//                                                 display: 'flex',
//                                                 alignItems: 'center',
//                                                 justifyContent: 'center',
//                                             }}
//                                         >
//                                             <Box component="img" src={coins_imag} sx={{ width: 20, height: 20, mr: 1 }} />
//                                             <Typography sx={{ fontWeight: "bold", color: "#ffb74d" }}>
//                                                 {data.score} Points
//                                             </Typography>
//                                         </Box>
//                                     </TableCell>
//                                     <TableCell align="center">
//                                         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                             {data.status === "pending" ? (
//                                                 <>
//                                                     <MdIncompleteCircle style={{ color: "red", marginRight: "4px" }} />
//                                                     <Typography sx={{ fontWeight: "bold", color: "red" }}>
//                                                         {data.status}
//                                                     </Typography>
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                     <MdIncompleteCircle style={{ color: "green", marginRight: "4px" }} />
//                                                     <Typography sx={{ fontWeight: "bold", color: "green" }}>
//                                                         {data.status}
//                                                     </Typography>
//                                                 </>
//                                             )}
//                                         </Box>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             )}

//             <ToastContainer
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="dark"
//             />
//         </Box>
//     );
// };

// export default StudentWithPublishId;


import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { MdIncompleteCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import actions from "../../../ReduxStore/actions/index";
import coins_imag from "../../../Assets/money_14999038.png";
import user_image from "../../../Assets/user_man_image.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentWithPublishId = () => {
    const { publishId } = useParams();
    console.log(publishId, "publishIduseparams");

    const dispatch = useDispatch();

    const { GetStudentInfoByPublishId } = useSelector((state) => state?.GetStudentInfoByPublishId);
    const [allPublishData, setAllPublishData] = useState([]);

    useEffect(() => {
        const data1 = {
            data: {},
            method: "get",
            apiName: `getAccessGrantedStudentsInfoBypublishId/publish/${publishId}`,
        };
        dispatch(actions.GETSTUDENTINFOBYPUBLISHID(data1));
    }, []);

    useEffect(() => {
        if (GetStudentInfoByPublishId?.data) {
            const PublishheadContent = GetStudentInfoByPublishId?.data.map((data) => ({
                student_name: data?.student_name,
                email: data?.email,
                student_id: data?.student_id,
                score: data?.scores[0]?.score,
                status: data?.scores[0]?.status,
            }));
            setAllPublishData(PublishheadContent);
        }
    }, [GetStudentInfoByPublishId?.data]);

    return (
        <Box>
            <Typography fontSize="28px" color="rgb(98 91 101)" fontWeight="600" textAlign="center">
                Students Reports
            </Typography>

            {allPublishData.length === 0 && (
                <Typography variant="h5" align="center" sx={{ mt: 4 }}>
                    There is no publish!!
                </Typography>
            )}

            {allPublishData.length > 0 && (
                <TableContainer  sx={{ mt: 4 }}>
                    <Table sx={{ borderCollapse: 'separate', borderSpacing: '0 10px',background:'rgb(242 242 242)'}}>
                        <TableHead >
                            <TableRow>
                                <TableCell align="center" sx={{  color: "black",fontWeight:"700",background:"white",fontSize:"15px"}}>Student Image</TableCell>
                                <TableCell align="center" sx={{ color: "black",fontWeight:"700",background:"white",fontSize:"15px"}}>Student ID</TableCell>
                                <TableCell align="center" sx={{  color: "black",fontWeight:"700",background:"white",fontSize:"15px"}}>Student Name</TableCell>
                                <TableCell align="center" sx={{ color: "black",fontWeight:"700",background:"white",fontSize:"15px"}}>Email</TableCell>
                                <TableCell align="center" sx={{  color: "black",fontWeight:"700",background:"white",fontSize:"15px"}}>Score</TableCell>
                                <TableCell align="center" sx={{  color: "black",fontWeight:"700",background:"white",fontSize:"15px"}}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allPublishData.map((data) => (
                                <TableRow 
                                    key={data.student_id}
                                    sx={{
                                        backgroundColor: '#f9f9f9',
                                        '&:not(:last-child)': {
                                            marginBottom: '10px', // Gap between rows
                                        },
                                        borderRadius: '10px', // Rounded corners for row
                                    }}
                                >
                                    <TableCell align="center">
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Avatar src={user_image} alt="Student Avatar" sx={{ width: 50, height: 50, mr: 2 }} />
                                        </Box>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="body1">{data.student_id}</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="body1"
                                        //  fontWeight="600"
                                         >
                                            {data.student_name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="body2">{data.email}</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Box component="img" src={coins_imag} sx={{ width: 20, height: 20, mr: 1 }} />
                                            <Typography sx={{ fontWeight: "bold", color: "#ffb74d" }}>
                                                {data.score} Points
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {data.status === "pending" ? (
                                                <>
                                                    <MdIncompleteCircle style={{ color: "red", marginRight: "4px" }} />
                                                    <Typography sx={{ fontWeight: "bold", color: "red" }}>
                                                        {data.status}
                                                    </Typography>
                                                </>
                                            ) : (
                                                <>
                                                    <MdIncompleteCircle style={{ color: "green", marginRight: "4px" }} />
                                                    <Typography sx={{ fontWeight: "bold", color: "green" }}>
                                                        {data.status}
                                                    </Typography>
                                                </>
                                            )}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </Box>
    );
};

export default StudentWithPublishId;
