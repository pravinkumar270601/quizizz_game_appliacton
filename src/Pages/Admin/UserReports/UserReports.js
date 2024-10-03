
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
import { Link } from 'react-router-dom';
const UserReports = () => {
    const { publishId } = useParams();
    console.log(publishId, "publishIduseparams");

    const dispatch = useDispatch();

    const { UserReportGetAllStudent } = useSelector((state) => state?.UserReportGetAllStudent);
    const [allPublishData, setAllPublishData] = useState([]);

    useEffect(() => {
        const data1 = {
            data: {},
            method: "get",
            apiName: `getAllStudents`,
        };
        dispatch(actions.USERREPORTGETALLSTUDENT(data1));
    }, []);

    useEffect(() => {
        if (UserReportGetAllStudent?.data) {
            const PublishheadContent = UserReportGetAllStudent?.data.map((data) => ({
                student_name: data?.student_name,
                email: data?.email,
                student_id: data?.student_id,
                phone_number: data?.phone_number


            }));
            setAllPublishData(PublishheadContent);
        }
    }, [UserReportGetAllStudent?.data]);

    return (
        <Box>
            <Typography fontSize="28px" color="rgb(98 91 101)" fontWeight="600" textAlign="center">
                Students Reports
            </Typography>

            {allPublishData.length === 0 && (
                <Typography variant="h5" align="center" sx={{ mt: 4 }}>
                    There is no access giving in this publish!!
                </Typography>
            )}

            {allPublishData.length > 0 && (
                <TableContainer sx={{ mt: 4 }}>
                    <Table sx={{ borderCollapse: 'separate', borderSpacing: '0 10px', background: 'rgb(242 242 242)' }}>
                        <TableHead >
                            <TableRow>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "700", background: "white", fontSize: "15px" }}>Student Image</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "700", background: "white", fontSize: "15px" }}>Student ID</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "700", background: "white", fontSize: "15px" }}>Student Name</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "700", background: "white", fontSize: "15px" }}>Email</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "700", background: "white", fontSize: "15px" }}>Phone Number</TableCell>
                                {/* <TableCell align="center" sx={{  color: "black",fontWeight:"700",background:"white",fontSize:"15px"}}>Status</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allPublishData.map((data) => (
                                <Link to={`/admin/student-report/${data.publish_id}`} style={{ textDecoration: "none", color: "inherit" }}>

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
                                            <Typography variant="body2">{data.phone_number}</Typography>
                                        </TableCell>

                                        {/* <TableCell align="center">
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
                                    </TableCell> */}
                                    </TableRow>
                                    </Link>
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

export default UserReports;
