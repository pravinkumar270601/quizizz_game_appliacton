import React, { useEffect, useState } from 'react'

import { Grid, Box, Typography, Button, IconButton, Tooltip, Avatar } from '@mui/material'; // MUI components
import { Delete, Print, Settings, Code } from '@mui/icons-material'; // MUI icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@mui/material';
import { LuDot } from "react-icons/lu";
import image1 from "../../../Assets/Quizz_image.png"
import { PiShareFat } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import actions from "../../../ReduxStore/actions/index";
import { useDispatch, useSelector } from "react-redux";
import publishImage from "../../../Assets/publishImage.jpg"
// import { formatDistanceToNow } from 'date-fns';
import { FaListUl } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { PiBooksDuotone } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsersRectangle } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { setQuizPlayPublishId } from '../../../ReduxStore/Slices/QuizzPlay/quizplaypublishidSlice'
import CountDown from '../QuizzPlay/CountDown';
import CustFormDropDown from '../../../Components/CustomInput2/CustFormDropDown';
import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify"
import { setInitialStategrantAccessToStudent } from '../../../ReduxStore/Slices/Student/grantAccessToStudent'
import CustomDropdownWithSwitch from '../../../Components/CustomDropdownWithSwitch/CustomDropdownWithSwitch';

import { FcUnlock } from "react-icons/fc";

import { FaUnlockKeyhole } from "react-icons/fa6";
import { setInitialStateGrantAccessToMultiStudentPost } from '../../../ReduxStore/Slices/Student/GrantAccessToMultiStudentPost';
import { setInitialStateRevokeAccessToMultiStudentPost } from '../../../ReduxStore/Slices/Student/RevokeAccessToStudentPost';







const AllPublished = () => {
    const sessionStaffId = parseInt(sessionStorage.getItem('sessionStaffId'));
    const sessionStaffName = sessionStorage.getItem('sessionStaffName');

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick1 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorEl2(null);
    };

    const { GetPublishByUserId } = useSelector((state) => state?.GetPublishByUserId);
    console.log(GetPublishByUserId, " GetPublishByUserId");
    const { PublishPost } = useSelector((state) => state?.PublishPost);

    const { DeletePublishById } = useSelector((state) => state?.DeletePublishById);

    const handleDeletePublish = (publishid) => {
        console.log(publishid, "Deletepublishid");
        if (publishid) {
            const data1 = {
                data: {},
                method: "delete",
                apiName: `deletePublishId/${publishid}`,
            };

            dispatch(actions.DELETEPUBLISHBYID(data1));
        }
    }


    const handleQuizzPlay = (publishid) => {

        if (publishid) {

            console.log(publishid, "publishid");

            dispatch(setQuizPlayPublishId(publishid))

            navigate("/admin/countdown")
        }
    }




    useEffect(() => {
        const data1 = {
            data: {},
            method: "get",
            apiName: `getPublishByStaffId/staff/${sessionStaffId}`,
        };

        dispatch(actions.GETPUBLISHBYUSERID(data1));

    }, [PublishPost?.data, DeletePublishById])


    const [allPublishData, setAllPublishData] = useState([])
    console.log(allPublishData, "allPublishData,,,,,,")


    useEffect(() => {

        console.log(GetPublishByUserId, "GetPublishByIdGetPublishById");


        if (GetPublishByUserId?.data) {
            const PublishheadContent = GetPublishByUserId?.data.map((data) => {


                return {

                    name: data?.name,
                    visibilityType: data?.visibilityType,
                    grade: data?.grade,
                    imageUrl: data?.imageUrl || publishImage,
                    language: data?.language,
                    subject: data?.subject,
                    publish_id: data?.publish_id,
                    staff_id: data?.staff_id,
                    question_length: JSON.parse(data?.question_ids).length,
                    // createdat:data?.createdAt
                    //  createdat: formatDistanceToNow(new Date(data?.createdAt), { addSuffix: true })
                }

            })


            setAllPublishData(PublishheadContent)
            console.log(PublishheadContent, "PublishheadContentPublishheadContent");


        }

    }, [GetPublishByUserId?.data])

    const { getAllStudents } = useSelector((state) => state?.getAllStudents);
    console.log(getAllStudents, "getAllStudents");
    const [allStudentsData, setAllStudentsData] = useState([]);
    console.log(allStudentsData, "allStudentsData");

    // useEffect(() => {
    //     console.log("my all student........");

    //     const data = {
    //         data: {},
    //         method: "get",
    //         apiName: "getAllStudents",
    //     };
    //     dispatch(actions.GETALLSTUDENTS(data));
    // }, []);

    const { GetAllPublishesWithStudent } = useSelector((state) => state?.GetAllPublishesWithStudent);
    const [loadingStudents, setLoadingStudents] = useState(true);
    useEffect(() => {
        const tempArr = [];
        console.log(getAllStudents?.data, "inside useEffect");

        getAllStudents?.data?.map((data, index) => {
            return tempArr.push({
                value: data?.student_id,
                label: data?.email,
                access_granted: data?.access_granted,
            });
        });
        setAllStudentsData(tempArr);
        setLoadingStudents(false)
    }, [getAllStudents?.data, GetAllPublishesWithStudent]);

    const { grantAccessToStudent } = useSelector(
        (state) => state?.grantAccessToStudent
    );
    console.log(grantAccessToStudent, "grantAccessToStudent");

    const grandAccessFn = (student_id, publish_id, staff_id) => {
        console.log(student_id, "idddd");
        console.log(typeof (publish_id), "idddd");
        console.log(staff_id, "idddd");

        const data = {
            data: {
                publish_id: parseInt(publish_id),
                staff_id: staff_id,
                student_id: parseInt(student_id),
            },
            method: "post",
            apiName: "grantAccessToStudent",
        };
        dispatch(actions.GRANTACCESSTOSTUDENT(data));
    };

    const { GrantAccessToMultiStudentPost } = useSelector(
        (state) => state?.GrantAccessToMultiStudentPost
    );

    useEffect(() => {
        console.log(GrantAccessToMultiStudentPost.message, "grantAccessToStudent.Message");
        if (GrantAccessToMultiStudentPost.message === "Access granted successfully") {
            toast.success(GrantAccessToMultiStudentPost.message);
            dispatch(setInitialStateGrantAccessToMultiStudentPost())
        }
    }, [GrantAccessToMultiStudentPost]);


    // /////////////////////\
    const [openDropdown, setOpenDropdown] = useState(null);


    const { RevokeAccessToMultiStudentPost } = useSelector(
        (state) => state?.RevokeAccessToMultiStudentPost
    );
    useEffect(() => {
        console.log(RevokeAccessToMultiStudentPost.message, "grantAccessToStudent.Message");
        if (RevokeAccessToMultiStudentPost.message === "Access revoked successfully") {
            toast.warn(RevokeAccessToMultiStudentPost.message);
            dispatch(setInitialStateRevokeAccessToMultiStudentPost())
        }
    }, [RevokeAccessToMultiStudentPost]);


    

    const [toggledSwitches, setToggledSwitches] = useState({});
    const handleSubmitAccsee = (publishId, values) => {
        console.log("submit publish ", publishId);
        console.log("submit values: ", values);
        console.log("submit toggledSwitches", toggledSwitches);
        if (Object.keys(toggledSwitches).length === 0) {
            toast.error("please select student to access");
        }

        if (Object.keys(toggledSwitches).length === 0) {
            console.log("The object is empty.");
            // toast.error("please select student to access");
        } else {
            const formattedData = toggledSwitches
                .filter((item) => item.access_granted === true) // Filter for access_granted true
                .map((item) => ({
                    publish_id: publishId, // Use the publishId passed as an argument
                    staff_id: sessionStaffId,
                    student_id: item.student_id, // Extract student_id from each entry
                }));
            if (formattedData.length!==0) {
                const data = {
                    data: formattedData,
                    method: "post",
                    apiName: "grantAccessToMultiStudent",
                };
                dispatch(actions.GRANTACCESSTOMULTISTUDENTPOST(data));
            }

        }
        if (Object.keys(toggledSwitches).length === 0) {
            console.log("The object is empty.");
            // toast.error("please select student to access");
        } else {
            const formattedData = toggledSwitches
                .filter((item) => item.access_granted === false) // Filter for access_granted true
                .map((item) => ({
                    publish_id: publishId, // Use the publishId passed as an argument
                    staff_id: sessionStaffId,
                    student_id: item.student_id, // Extract student_id from each entry
                }));

            if (formattedData.length!==0) {
                const data = {
                    data: formattedData,
                    method: "post",
                    apiName: "revokeAccessToMultiStudent",
                };
                dispatch(actions.REVOKEACCESSTOMULTISTUDENTPOST(data));
            }




        }

        setToggledSwitches({})
    };


    // Update the switch state in the parent state (allStudentsData) when the switch is toggled
    const handleSwitchChange = (studentId, accessGranted) => {
        const updatedData = allStudentsData.map((student) =>
            student.value === studentId
                ? { ...student, access_granted: accessGranted }
                : student
        );
        setToggledSwitches((prev = []) => {
            // Ensure 'prev' is an array
            if (!Array.isArray(prev)) {
                prev = [];
            }

            const existingIndex = prev.findIndex(
                (entry) => entry.student_id === studentId
            );

            if (existingIndex !== -1) {
                // Update the existing student's access_granted value
                const updatedSwitches = [...prev];
                updatedSwitches[existingIndex].access_granted = accessGranted;
                return updatedSwitches;
            }

            // If not found, add a new entry for the student
            return [...prev, { student_id: studentId, access_granted: accessGranted }];
        });
        setAllStudentsData(updatedData); // Update the parent state
    };


    const updateStudentsData = async (publishId) => {
        const data = {
            data: {},
            method: "get",
            apiName: `getStudentsWithAccessByPublishId/publish/${publishId}`,
        };
        // Dispatch the action and handle the response to update the allStudentsData
        dispatch(actions.GETALLSTUDENTS(data))
        setLoadingStudents(true);

    };

    return (
        <Grid>
            {allPublishData.length === 0 && (
                <h1 style={{
                    position: "absolute",
                    top: "55%",
                    left: "65%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center"
                }}>There is no publish!!</h1>
            )
            }
            {allPublishData.map((data, index) =>
                <Box data-aos="zoom-in" data-aos-duration="1000"
                    sx={{
                        position: 'relative',
                        borderRadius: 1,
                        mt: 2,
                        padding: 4,
                        height: 210,
                        backgroundColor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                    }}
                >

                    <Box sx={{ display: 'flex' }}>
                        <Box
                            sx={{
                                width: 150,
                                height: 150,
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
                                // src={GetPublishByIdData.imageUrl}
                                src={data.imageUrl}
                                alt="Quiz Image"
                                style={{ width: '100%', height: '100%', objectFit: 'fill' }}
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
                                        borderColor: '#ffc93333',
                                        fontSize: '0.75rem',
                                        backgroundColor: '#ffc93333'
                                    }}
                                >

                                    <Typography variant="caption" color="rgb(232 169 0)" fontWeight="600">
                                        Publish Id: {data.publish_id}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginY: 1 }}>
                                <Button sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="h6" component="span" sx={{ color: "black", fontSize: "17px", fontWeight: "700" }}>
                                        {/* {GetPublishByIdData.name} */}
                                        {data.name}
                                    </Typography>

                                </Button>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'start', flexWrap: 'wrap', flexDirection: "column" }}>
                                {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}> */}

                                <Box sx={{ display: "flex", justifyContent: "space-between", width: '70%' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <FaListUl sx={{ fontSize: 12 }} />
                                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: "14px" }} >

                                            {/* {GetPublishByIdData.grade} */}
                                            {data.question_length}Question
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <HiOutlineAcademicCap sx={{ fontSize: 16 }} />
                                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: "14px" }} >

                                            {/* {GetPublishByIdData.subject} */}
                                            {data.grade}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <PiBooksDuotone sx={{ fontSize: 16 }} />
                                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: "14px" }} >

                                            {data.subject}
                                        </Typography>
                                    </Box>

                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2, justifyContent: "space-between" }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar
                                        src="https://lh3.googleusercontent.com/a-/ALV-UjWH-pe0KYTuVxuGFop4NLtrbvB6UtxxpLx6RbXAp5285cA-Iv5quD1PnbYz5tzD9BzfSvxq5TlFuYZhN1dx5k3nnReeSqtjo9iAaAPSmzMhPm8CcoK45lxPjIP-EezJL7mpBG6Nn2jT3buEqBVZUJI0mvoJXfZA7FRmVD9NqrQcMp59N4UrlOM2zniHnM5UhGGGWd8N0b3cyf6qDtv10RW437qphO1Wpi3B-YElRuyhnyR-n7lGAvxkLBiJvOwnordU4WfTwR5XvINpU-MpisYjzXN1YAPXVMOVQrlUw4cG-kd_yc0CtSHz-MQ7RvClStT2zSnxpBk_k_-k5XElre_y1K98K6a0X1XXYDApR8iLvf4L9v-wfH0kWP-_8w6LhssO7m8W3Q6rw-63q6HjfS8x7NY58volpA1YgAW1NHEMTIEBaxuxsDOWoN-enz4Oc9YrK7pXUkhtBPvwyt_PnopMmuwBxLU3a-0Z5cJsjwlDP24AacPtsZAkJFrDTeHvbENv8g68_FkEG7lOqMclHWfUSGu9R1kt7-lUcqYbdYLjcsWd9l7pvPqQuJZuzgHdKf7-wqVGMTTwM5LO9rViuzdTg_WSzCaOW0vQ6AWoYAfx6Wk5Gj-awGLKNEjFq0yk8xjCC-KxVxMaUGlvebfIcrwva-5X9f0hGRb-5J-Fur4sxbUM2BECAiHAKnIEC6-NgTMc9iMT15zqq0KG9cobB4B6tnKaa0pwsjv_WVhOPvoDTseQ15LomLfuf2Tn0gOvdjUrv_doeWnBY2WNM2meQ8jqVUFE9v0TETnT_i9YBs0BXeoIS5lUgKkUYm95huj79n6RHPvYWnfc5jWen7exN1BujW2al9u4zWk7O_RvQZTMM--2HMoN1Biec4XzZixJOAl50P-9FUIFc2ZDRe-FOZN6HWRZ8EFpa8Zs911XkuBgaV5pMUD6iefyYCbbijcsL9nTFG1qpkjvzUWBIqgZin-suG1T=s96-c"
                                        sx={{ width: 32, height: 32, marginRight: 1 }}
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography variant="caption" component="a" href="/profile/66c04925271abea6d497c8a1" color="text.primary" sx={{ textDecoration: 'none' }}>
                                            {sessionStaffName}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            <LuDot /> 2days ago
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                                    <Box>
                                        <Button
                                            // onClick={handleDelete}
                                            variant="outlined"
                                            endIcon={<PiShareFat />}
                                            style={{ background: "#f4f4f4", color: "#444", fontSize: "14px", border: "1px solid #f4f4f4", height: "30px", width: "100px", marginRight: "5px" }}>
                                            Share
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Button
                                            // onClick={handleClick1}
                                            onClick={() => {
                                                // handleClose1()
                                                handleQuizzPlay(data.publish_id)
                                            }}
                                            variant="outlined"
                                            // endIcon={<FaCaretDown />}
                                            textDecoration="none"
                                            style={{ backgroundColor: "rgb(136 84 192)", fontSize: "14px", color: "white", border: "1px solid #f4f4f4", height: "30px", width: "100px", }}>
                                            Preview
                                        </Button>

                                        {/* <Menu
                                            anchorEl={anchorEl2}
                                            open={Boolean(anchorEl2)}
                                            onClose={handleClose1}
                                            sx={{ boxShadow: "none" }}
                                            transitionDuration={0}
                                            PaperProps={{
                                                sx: {
                                                    padding: 1,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 1,
                                                    boxShadow: "none",
                                                    transition: "none",
                                                    transformOrigin: "unset",
                                                    transitionDuration: 100
                                                },
                                            }}
                                        >
                                            <MenuItem onClick={handleClose1}>
                                                <Tooltip title="Delete">
                                                    <IconButton size="small">
                                                        <FaUsersRectangle sx={{ fontSize: 16 }} />
                                                    </IconButton>
                                                </Tooltip>
                                                Live Quizz
                                            </MenuItem>
                                            <MenuItem onClick={handleClose1}>
                                                <Tooltip title="Print">
                                                    <IconButton size="small">
                                                        <IoMdTime sx={{ fontSize: 16 }} />
                                                    </IconButton>
                                                </Tooltip>
                                                Assign homework
                                            </MenuItem>
                                            <MenuItem onClick={() => {
                                                handleClose1()
                                                handleQuizzPlay(data.publish_id)
                                            }}>
                                                <Tooltip title="Settings">
                                                    <IconButton size="small">
                                                        <IoPlayOutline sx={{ fontSize: 16 }} />
                                                    </IconButton>
                                                </Tooltip>
                                                Preview
                                            </MenuItem>
                                        </Menu> */}
                                    </Box>

                                </Box>
                            </Box>
                        </Box>



                        <Box
                            sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                display: "flex"
                            }}
                        >
                            <Box>
                                <Formik
                                    key={data.publish_id}
                                    initialValues={{
                                        [`accessControl${data.publish_id}`]: allStudentsData,
                                    }}
                                    onSubmit={(values) => handleSubmitAccsee(data.publish_id, values)}
                                >
                                    {({ isSubmitting, resetForm, setFieldValue }) => (
                                        <Form>
                                            <Box sx={{ display: "flex", mt: 0.5 }}>

                                                <CustomDropdownWithSwitch

                                                    name={`accessControl${data.publish_id}`}
                                                    options={allStudentsData}
                                                    formikValues={allStudentsData} // Pass the latest formik state
                                                    isOpen={openDropdown === index}
                                                    publishId={data.publish_id}
                                                    allStudentsData={allStudentsData}
                                                    toggleDropdown={() => {
                                                        //  Toggle dropdown state
                                                        setOpenDropdown(
                                                            openDropdown === index ? null : index
                                                        ); // Close if already open, open if not
                                                        updateStudentsData(data.publish_id);
                                                    }}
                                                    onSwitchChange={handleSwitchChange}
                                                    loading={loadingStudents}
                                                />
                                                <Button type="submit" sx={{
                                                    height: "30px", borderRadius: "5px", border: "1px solid",
                                                    // background: "#4F75FF",
                                                    fontSize: "12px",
                                                    color: "black",
                                                    borderColor: "rgb(136, 84, 192)"
                                                }}> <FaUnlockKeyhole style={{ fontSize: "16px", marginRight: "2px", color: "black" }} />Access</Button>
                                            </Box>
                                        </Form>
                                    )}
                                </Formik>
                            </Box>
                            <Box>
                                <IconButton size="small" onClick={handleClick}>
                                    <MoreVertIcon />
                                </IconButton>

                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    sx={{ boxShadow: "none" }}
                                    transitionDuration={0}
                                    PaperProps={{
                                        sx: {
                                            padding: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 1,
                                            boxShadow: "none",
                                            transition: "none",
                                            transformOrigin: "unset",
                                            transitionDuration: 100
                                        },
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Tooltip title="Delete">
                                            <IconButton size="small">
                                                <FaHeart sx={{ fontSize: 16 }} />
                                            </IconButton>
                                        </Tooltip>
                                        Like
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Tooltip title="Print">
                                            <IconButton size="small">
                                                <FaRegFolder sx={{ fontSize: 16 }} />
                                            </IconButton>
                                        </Tooltip>
                                        Save
                                    </MenuItem>
                                    <MenuItem onClick={() => {
                                        handleClose()
                                        handleDeletePublish(data.publish_id)
                                    }
                                    }>
                                        <Tooltip title="Settings">
                                            <IconButton size="small">
                                                <RiDeleteBin6Line sx={{ fontSize: 16 }} />
                                            </IconButton>
                                        </Tooltip>
                                        Delete
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Box>

                    </Box>

                </Box>
            )
            }
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
                theme="dark" />

        </Grid >
    )
}

export default AllPublished