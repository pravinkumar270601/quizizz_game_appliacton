// import React, { useState } from 'react';
// import {
//     Box,
//     Button,
//     Typography,
//     List,
//     ListItem,
//     ListItemButton,
//     ListItemIcon,
//     ListItemText,
//     Grid,
// } from '@mui/material';
// import { Folder, FileUpload, History, Favorite, People, Archive } from '@mui/icons-material';
// import {

//     Menu,
//     MenuItem,
//     IconButton,
//     AppBar,
//     Toolbar,
// } from '@mui/material';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import SortIcon from '@mui/icons-material/Sort';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFile, faAlignLeft, faFileText, faTable } from '@fortawesome/free-solid-svg-icons';
// import CustomDropdownMui from '../../../Components/CustomDropDown/CustomDropdown';
// import { PublishContentViewDrop } from '../../../Components/CustomDropDown/DropdownEntrys';
// import { AllPublish } from '../../../Components/CustomDropDown/DropdownEntrys';

// import { Formik, Form, Field } from "formik";


// const DocumentComponent = () => <div>Document Content</div>;
// const TextComponent = () => <div>Text Questions Content</div>;
// const GoogleFormComponent = () => <div>Google Form Content</div>;
// const SpreadsheetComponent = () => <div>Spreadsheet Content</div>;


// const MyLibrary = () => {
//     const sections = [
//         {
//             title: 'Created by me',
//             icon: <People />,
//             count: 13,
//             link: '/admin/my-library/createdByMe?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
//         },
//         {
//             title: 'Imported',
//             icon: <FileUpload />,
//             count: 0,
//             link: '/admin/my-library/imported?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
//         },
//         {
//             title: 'Previously used',
//             icon: <History />,
//             count: 5,
//             link: '/admin/my-library/hostedQuizzes?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
//         },
//         {
//             title: 'Liked by me',
//             icon: <Favorite />,
//             count: 0,
//             link: '/admin/my-library/likedQuizzes?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
//         },
//         {
//             title: 'Shared with me',
//             icon: <People />,
//             count: 0,
//             link: '/admin/my-library/sharedWithMe?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
//         },
//         {
//             title: 'Standards Tagged',
//             icon: <Archive />,
//             count: 0,
//             link: '/admin/my-library/standardTagging?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
//         },
//         {
//             title: 'All my content',
//             icon: <Archive />,
//             count: 78,
//             link: '/admin/my-library/allQuizzes?order=desc&sortBy=createdAt&contentType=all&quizStatus=published&term=',
//         },
//     ];
//     const [anchorElFilter, setAnchorElFilter] = React.useState(null);
//     const [anchorElSort, setAnchorElSort] = React.useState(null);
//     const [filter, setFilter] = React.useState('All');
//     const [sort, setSort] = React.useState('Most Recent');

//     const handleFilterClick = (event) => {
//         setAnchorElFilter(event.currentTarget);
//     };

//     const handleSortClick = (event) => {
//         setAnchorElSort(event.currentTarget);
//     };

//     const handleCloseFilter = (option) => {
//         setFilter(option);
//         setAnchorElFilter(null);
//     };

//     const handleCloseSort = (option) => {
//         setSort(option);
//         setAnchorElSort(null);
//     };

//     const [activeTab, setActiveTab] = useState('document');

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };

//     const tabs = [
//         { id: 'document', label: 'Document', icon: faFile },
//         { id: 'text', label: 'Paste questions', icon: faAlignLeft },
//         // { id: 'google_form', label: 'Google Form', icon: faFileText },
//         // { id: 'spreadsheet', label: 'Spreadsheet', icon: faTable },
//     ];


//     return (
//         <Grid sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}>

//             <Grid sx={{ position: 'sticky', top: 0, left: 0, width: '30%', overflowY: 'auto' }}>
//                 <Box sx={{ p: 1 }}>
//                     <Typography variant="h6" color="text.primary" fontWeight="bold">
//                         My library
//                     </Typography>
//                 </Box>
//                 <List sx={{ width: "260px", border: "1px solid red" }}>
//                     {sections.map((section, index) => (
//                         <ListItem key={index} disablePadding sx={{ display: "flex", alignItems: "center" }}>
//                             <ListItemButton component="a" href={section.link} sx={{ display: "flex", justifyContent: "space-between" }}>
//                                 <Grid sx={{ display: "flex", alignItems: "center" }}>
//                                     {/* <ListItemIcon> */}
//                                     {section.icon}
//                                     {/* </ListItemIcon> */}
//                                     <ListItemText primary={section.title} />
//                                 </Grid>
//                                 <Grid>
//                                     <ListItemText primary={section.count} />
//                                 </Grid>
//                             </ListItemButton>
//                         </ListItem>
//                     ))}
//                 </List>
//             </Grid>

//             <Grid container sx={{ height: "70vh", width: "70%",display:"flex" }}>
//                 {/* <Grid container sx={{ height: "70vh", width: "70%" }}> */}
//                     <Box
//                         sx={{
//                             width: '100%',
//                             height: '12%',
//                             border: '1px solid #09090933',
//                             borderRadius: '4px',
//                             overflow: 'hidden',
//                             display: 'flex', // Make sure this is a flexbox
//                             flexDirection: 'column' // Manage layout direction for internal elements
//                         }}
//                     >
//                         <Box
//                             sx={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 height: '100%',
//                                 backgroundColor: '#f5f5f5',
//                                 borderRadius: '4px',
//                                 position: 'relative',
//                             }}
//                         >
//                             {tabs.map((tab) => (
//                                 <Box
//                                     key={tab.id}
//                                     sx={{
//                                         flexGrow: 1,
//                                         textAlign: 'center',
//                                         paddingX: 1,
//                                         paddingY: 1,
//                                         cursor: 'pointer',
//                                         color: activeTab === tab.id ? '#8e44ad' : '#2c3e50',
//                                         '&:hover': {
//                                             color: '#8e44ad',
//                                         },
//                                         display: 'flex', // Flexbox for centering items
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         overflow: 'hidden',
//                                         textOverflow: 'ellipsis',
//                                         whiteSpace: 'nowrap',
//                                     }}
//                                     onClick={() => handleTabClick(tab.id)}
//                                 >
//                                     <FontAwesomeIcon icon={tab.icon} style={{ fontSize: 20, marginRight: 8 }} />
//                                     <Typography noWrap>{tab.label}</Typography>
//                                 </Box>
//                             ))}

//                             <Box
//                                 sx={{
//                                     position: 'absolute',
//                                     bottom: 0,
//                                     left: `${(100 / tabs.length) * tabs.findIndex((tab) => tab.id === activeTab)}%`,
//                                     width: `${100 / tabs.length}%`,
//                                     height: '4px',
//                                     backgroundColor: '#8e44ad',
//                                     transition: 'left 0.2s ease-in-out',
//                                 }}
//                             />
//                         </Box>

//                         <Formik
//                             initialValues={{
//                                 name: "",
//                                 subject: "",
//                                 grade: "",
//                                 language: "",
//                                 visibilityType: "",
//                                 imageUrl: "",
//                             }}
//                         // validationSchema={validationSchema}
//                         // onSubmit={handleSubmit}
//                         // innerRef={formikRef}
//                         >
//                             {({ isSubmitting, resetForm, setFieldValue }) => (
//                                 <Form>
//                                     <Box
//                                         sx={{
//                                             display: 'flex', // Ensures the dropdowns are side-by-side
//                                             gap: 2, // Optional: Adds spacing between dropdowns
//                                             paddingTop: 2,
//                                         }}
//                                     >
//                                         <CustomDropdownMui
//                                             label="grade"
//                                             name="allpublish"
//                                             options={AllPublish}
//                                             custPlaceholder="Select relevant Grade"
//                                         // setFieldValue={setFieldValue}
//                                         // selectmovieIdfn={selectmovieIdfn}
//                                         />
//                                         <CustomDropdownMui
//                                             label="grade"
//                                             name="recent"
//                                             options={PublishContentViewDrop}
//                                             custPlaceholder="Select relevant Grade"
//                                         // setFieldValue={setFieldValue}
//                                         // selectmovieIdfn={selectmovieIdfn}
//                                         />
//                                     </Box>
//                                 </Form>
//                             )}
//                         </Formik>
//                     </Box>
//                 {/* </Grid> */}


//                 <Box mt={2} sx={{ paddingX: 2, height: "98%", width: "100%", border: "1px solid #09090933" }}>
//                     {/* {renderContent()} */}
//                 </Box>
//             </Grid>
//         </Grid >
//     );
// };

// export default MyLibrary;


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
import AllPublished from './AllPublished';
import { useSelector } from 'react-redux';


const DocumentComponent = () => <div>Document Content</div>;
const TextComponent = () => <div>Text Questions Content</div>;

const MyLibrary = () => {
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
            <Grid item xs={12} md={3} >
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" fontWeight="bold">
                        My library
                    </Typography>
                </Box>
                <List >
                    {sections.map((section, index) => (
                        
                        <ListItem key={index} disablePadding>
                            {/* <ListItemButton component="a" href={section.link} sx={{ width:"100%",display:"flex",justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    {section.icon}
                                    <ListItemText primary={section.title} sx={{ ml: 1 }} />
                                </Box>
                                <ListItemText primary={section.count} />
                            </ListItemButton> */}
                            <ListItemButton component="a" href={section.link} sx={{ width: "100%", display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                                    {section.icon}
                                    <ListItemText primary={section.title} sx={{ ml: 1 }} />
                                </Box>
                                <Box>
                                    <Typography variant="body2">{section.count}</Typography>
                                </Box>
                            </ListItemButton>

                        </ListItem>
                    ))}
                </List>
            </Grid>

            {/* Main Content */}
            <Grid item xs={12} sm={12} md={9} >

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
                        {activeTab === 'Published ' && <AllPublished />}
                        {activeTab === 'Draft' && <TextComponent />}
                    </Box>
                </Box>
            </Grid>
        </Grid >
    );
};

export default MyLibrary;
