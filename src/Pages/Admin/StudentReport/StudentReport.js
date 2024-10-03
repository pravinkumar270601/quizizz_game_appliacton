
import React, { useState } from 'react';
import {
    Box,
    Button,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Grid,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { FileUpload, History, Favorite, People, Archive } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import CustomDropdownMui from '../../../Components/CustomDropDown/CustomDropdown';
import { PublishContentViewDrop, AllPublish } from '../../../Components/CustomDropDown/DropdownEntrys';
import { Formik, Form } from "formik";
import AllPublished from '../MyLibrary/AllPublished';
import { useSelector } from 'react-redux';
import StudentReportContentBox from './StudentReportContentBox';


const DocumentComponent = () => <div>Document Content</div>;
const TextComponent = () => <div>Text Questions Content</div>;

const StudentReport  = () => {
    const sessionStaffId = parseInt(sessionStorage.getItem('sessionStaffId'));
    
    console.log(sessionStaffId,"sessionStaffId");
    
    const { AdminLoginPost } = useSelector((state) => state?.AdminLoginPost);
    console.log(AdminLoginPost,"AdminLoginPost>>>>>>>>>>")
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const { GetPublishByUserId } = useSelector((state) => state?.GetPublishByUserId);

    
    const publishlength=GetPublishByUserId?.data?.length 
    const sections = [
        {
            title: 'Created by me',
            icon: <People />,
            count: publishlength,
            // link: '/admin/my-library/createdByMe?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
        },
        {
            title: 'Imported',
            icon: <FileUpload />,
            count: 0,
            // link: '/admin/my-library/imported?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
        },
        {
            title: 'Previously used',
            icon: <History />,
            count: 5,
            // link: '/admin/my-library/hostedQuizzes?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
        },
        {
            title: 'Liked by me',
            icon: <Favorite />,
            count: 0,
            // link: '/admin/my-library/likedQuizzes?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
        },
        {
            title: 'Shared with me',
            icon: <People />,
            count: 0,
            // link: '/admin/my-library/sharedWithMe?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
        },
        {
            title: 'Standards Tagged',
            icon: <Archive />,
            count: 0,
            // link: '/admin/my-library/standardTagging?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
        },
        {
            title: 'All my content',
            icon: <Archive />,
            count: 78,
            // link: '/admin/my-library/allQuizzes?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
        },
    ];

    const [activeTab, setActiveTab] = useState('Published ');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
       
    const tabs = [
        { id: 'Published ', label: `Published (${publishlength})`, icon: faFile },
        // { id: 'Draft', label: `Draft (${3})`, icon: faAlignLeft },
    ];
   
    return (
        <Grid container spacing={2} sx={{ width: '100%', display: "flex", justifyContent: "space-between" }} >
            {/* Sidebar */}
 

            {/* Main Content */}
            <Grid item xs={12} sm={12}>

                <Box>
                    {/* Tabs */}
                    <Grid sx={{ display: "flex", justifyContent: "space-between", backgroundColor: '#f5f5f5', }}>
                        <Box
                            sx={{
                                display: 'flex',
                                // borderBottom: '1px solid #ccc', // General border for the entire box
                                alignItems: 'center',
                            }}
                        >
                            {tabs.map((tab) => (
                                <Box
                                    key={tab.id}
                                    sx={{
                                        flexGrow: 1,
                                        textAlign: 'center',
                                        display: "flex",
                                        padding: 2,
                                        cursor: 'pointer',
                                        color: activeTab === tab.id ? '#8e44ad' : '#2c3e50',
                                        borderBottom: activeTab === tab.id ? '4px solid #8e44ad' : '4px solid transparent', // Border for the active tab
                                        '&:hover': {
                                            color: '#8e44ad',
                                        },
                                    }}
                                    onClick={() => handleTabClick(tab.id)}
                                >
                                    {/* <FontAwesomeIcon icon={tab.icon} style={{ fontSize: 20, marginRight: 8 }} /> */}
                                    <Typography>{tab.label}</Typography>
                                </Box>
                            ))}
                        </Box>


                        {/* Formik Form */}
                        <Box sx={{ display: 'flex', flexDirection: "row", gap: 2, alignItems: "center", justifyContent: "center" }}>
                            <Formik
                                initialValues={{
                                    name: "",
                                    subject: "",
                                    grade: "",
                                    language: "",
                                    visibilityType: "",
                                    imageUrl: "",
                                }}
                            >
                                {({ setFieldValue }) => (
                                    <Form>
                                        <Box sx={{ display: 'flex', flexDirection: "row", gap: 2, alignItems: "center", justifyContent: "center" }}>
                                            <CustomDropdownMui
                                                // label="Grade"

                                                name="allpublish"
                                                options={AllPublish}
                                                custPlaceholder="Select relevant Grade"
                                            />
                                            <CustomDropdownMui
                                                // label="Recent"
                                                name="recent"
                                                options={PublishContentViewDrop}
                                                custPlaceholder="Select relevant Grade"
                                            />
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </Grid>

                    {/* Main Content */}
                    <Box pt={2}>
                        {activeTab === 'Published ' && <StudentReportContentBox />}
                        {activeTab === 'Draft' && <TextComponent />}
                    </Box>
                </Box>
            </Grid>
        </Grid >
    );
};

export default StudentReport;
