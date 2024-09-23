// // // import React from 'react';
// // // import { NavLink } from 'react-router-dom';
// // // // import 'bootstrap/dist/css/bootstrap.min.css';

// // // const Sidebar = () => {
// // //   return (
// // //     <div className="d-flex flex-column h-100 bg-light border-end" style={{ maxWidth: '250px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
// // //       <NavLink to="/admin" aria-label="Quizizz" title="Quizizz" className="text-decoration-none">
// // //         <div className="d-flex align-items-center justify-content-center m-2" style={{ height: '40px' }}>
// // //           <img
// // //             className="img-fluid"
// // //             height="40"
// // //             width="146"
// // //             src="https://cf.quizizz.com/img/logos/Purple.webp"
// // //             alt="logo"
// // //           />
// // //         </div>
// // //       </NavLink>
// // //       <div className="p-4">
// // //         <div className="d-flex flex-column align-items-start">
// // //           <NavLink to="/profile/66c04925271abea6d497c8a1" className="text-dark text-decoration-none">
// // //             <span className="fw-semibold">Mr. K</span>
// // //           </NavLink>
// // //           <div className="badge bg-secondary text-dark mt-2">
// // //             Basic account
// // //           </div>
// // //           <button className="btn btn-outline-primary w-100 mt-4">
// // //             Upgrade now
// // //           </button>
// // //         </div>
// // //       </div>
// // //       <div className="flex-grow-1 overflow-auto">
// // //         <NavLink to="/admin" className="nav-link text-decoration-none py-2 px-4 active">
// // //           <i className="fas fa-map-marked-alt me-2"></i>Explore
// // //         </NavLink>
// // //         <NavLink to="/admin/my-library/createdByMe" className="nav-link text-decoration-none py-2 px-4">
// // //           <i className="fal fa-books me-2"></i>My library
// // //         </NavLink>
// // //         <NavLink to="/admin/quizizz-ai" className="nav-link text-decoration-none py-2 px-4">
// // //           <i className="fal fa-sparkles me-2"></i>Quizizz AI
// // //           <span className="badge bg-primary text-light ms-2">NEW</span>
// // //         </NavLink>
// // //         <NavLink to="/admin/reports" className="nav-link text-decoration-none py-2 px-4">
// // //           <i className="fal fa-analytics me-2"></i>Reports
// // //         </NavLink>
// // //         <NavLink to="/admin/classes" className="nav-link text-decoration-none py-2 px-4">
// // //           <i className="fal fa-users-class me-2"></i>Classes
// // //         </NavLink>
// // //         <NavLink to="/settings" className="nav-link text-decoration-none py-2 px-4">
// // //           <i className="fal fa-cog me-2"></i>Settings
// // //         </NavLink>
// // //         <NavLink to="/admin/memes" className="nav-link text-decoration-none py-2 px-4">
// // //           <i className="fal fa-images me-2"></i>Memes
// // //         </NavLink>
// // //         <NavLink to="/profile/66c04925271abea6d497c8a1?section=collections" className="nav-link text-decoration-none py-2 px-4">
// // //           <i className="fal fa-folder me-2"></i>Collections
// // //         </NavLink>
// // //         <NavLink to="/profile/66c04925271abea6d497c8a1?section=library" className="nav-link text-decoration-none py-2 px-4">
// // //           <i className="fal fa-user-circle me-2"></i>Profile
// // //         </NavLink>
// // //         <button type="button" className="nav-link text-decoration-none py-2 px-4">
// // //           <i className="fal fa-sign-out me-2"></i>Logout
// // //         </button>
// // //       </div>
// // //       <div className="p-4">
// // //         <div className="d-flex flex-column align-items-center">
// // //           <span className="text-muted small text-center">Try our AI Chrome extension</span>
// // //           <img
// // //             className="border rounded mt-2"
// // //             height="49"
// // //             src="https://cf.quizizz.com/img/quizizz_ai/ai_extension_banner.webp"
// // //             width="160"
// // //             alt="AI Chrome extension"
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Sidebar;



// // import React from 'react';
// // import { NavLink } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const Sidebar = () => {
// //   return (
// //     <div className="d-flex flex-column h-100 bg-light border-end" style={{ maxWidth: '250px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
// //       <NavLink to="/admin" aria-label="Quizizz" title="Quizizz" className="text-decoration-none">
// //         <div className="d-flex align-items-center justify-content-center m-2" style={{ height: '40px' }}>
// //           <img
// //             className="img-fluid"
// //             height="40"
// //             width="146"
// //             src="https://cf.quizizz.com/img/logos/Purple.webp"
// //             alt="logo"
// //           />
// //         </div>
// //       </NavLink>
// //       <div className="p-4">
// //         <div className="d-flex flex-column align-items-start">
// //           <NavLink to="/profile/66c04925271abea6d497c8a1" className="text-dark text-decoration-none">
// //             <span className="fw-semibold">Mr. K</span>
// //           </NavLink>
// //           <div className="badge bg-secondary text-dark mt-2">
// //             Basic account
// //           </div>
// //           <button className="btn btn-outline-primary w-100 mt-4">
// //             Upgrade now
// //           </button>
// //         </div>
// //       </div>
// //       <div className="flex-grow-1 overflow-auto">
// //         <NavLink to="/admin" className="nav-link text-decoration-none py-2 px-4">
// //           <i className="fas fa-map-marked-alt me-2"></i>Explore
// //         </NavLink>
// //         <NavLink to="/admin/my-library/createdByMe" className="nav-link text-decoration-none py-2 px-4">
// //           <i className="fal fa-books me-2"></i>My library
// //         </NavLink>
// //         <NavLink to="/admin/quizizz-ai" className="nav-link text-decoration-none py-2 px-4">
// //           <i className="fal fa-sparkles me-2"></i>Quizizz AI
// //           <span className="badge bg-primary text-light ms-2">NEW</span>
// //         </NavLink>
// //         <NavLink to="/admin/reports" className="nav-link text-decoration-none py-2 px-4">
// //           <i className="fal fa-analytics me-2"></i>Reports
// //         </NavLink>
// //         <NavLink to="/admin/classes" className="nav-link text-decoration-none py-2 px-4">
// //           <i className="fal fa-users-class me-2"></i>Classes
// //         </NavLink>
// //         <NavLink to="/settings" className="nav-link text-decoration-none py-2 px-4">
// //           <i className="fal fa-cog me-2"></i>Settings
// //         </NavLink>
// //         <NavLink to="/admin/memes" className="nav-link text-decoration-none py-2 px-4">
// //           <i className="fal fa-images me-2"></i>Memes
// //         </NavLink>
// //         <NavLink to="/profile/66c04925271abea6d497c8a1?section=collections" className="nav-link text-decoration-none py-2 px-4">
// //           <i className="fal fa-folder me-2"></i>Collections
// //         </NavLink>
// //         <NavLink to="/profile/66c04925271abea6d497c8a1?section=library" className="nav-link text-decoration-none py-2 px-4">
// //           <i className="fal fa-user-circle me-2"></i>Profile
// //         </NavLink>
// //         <button type="button" className="nav-link text-decoration-none py-2 px-4">
// //           <i className="fal fa-sign-out me-2"></i>Logout
// //         </button>
// //       </div>
// //       <div className="p-4">
// //         <div className="d-flex flex-column align-items-center">
// //           <span className="text-muted small text-center">Try our AI Chrome extension</span>
// //           <img
// //             className="border rounded mt-2"
// //             height="49"
// //             src="https://cf.quizizz.com/img/quizizz_ai/ai_extension_banner.webp"
// //             width="160"
// //             alt="AI Chrome extension"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;



// // import React from 'react';
// // import { NavLink } from 'react-router-dom';
// // import { Box, Button, IconButton, Divider, Badge } from '@mui/material';
// // import Typography from '@mui/material/Typography';

// // import { useTheme } from '@mui/material/styles';
// // import { Home, LibraryBooks, Star, Assessment, Group, Settings, Image, Folder, Person, ExitToApp } from '@mui/icons-material';
// // import { createFilterOptions } from '@mui/material/Autocomplete';


// // const Sidebar = () => {
// //   const theme = useTheme();

// //   return (
// //     <Box 
// //       sx={{ 
// //         display: 'flex', 
// //         flexDirection: 'column', 
// //         height: '100%', 
// //         maxWidth: '250px', 
// //         bgcolor: 'background.paper', 
// //         borderRight: `1px solid ${theme.palette.divider}`, 
// //         boxShadow: 1 
// //       }}
// //     >
// //       <NavLink to="/admin" aria-label="Quizizz" title="Quizizz" style={{ textDecoration: 'none' }}>
// //         <Box 
// //           sx={{ 
// //             display: 'flex', 
// //             alignItems: 'center', 
// //             justifyContent: 'center', 
// //             m: 2, 
// //             height: '40px' 
// //           }}
// //         >
// //           <img 
// //             src="https://cf.quizizz.com/img/logos/Purple.webp" 
// //             alt="logo" 
// //             style={{ height: '40px', width: '146px' }} 
// //           />
// //         </Box>
// //       </NavLink>

// //       <Box sx={{ p: 4 }}>
// //         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
// //           <NavLink to="/profile/66c04925271abea6d497c8a1" style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
// //             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Mr. K</Typography>
// //           </NavLink>
// //           <Badge 
// //             badgeContent="Basic account" 
// //             color="secondary" 
// //             sx={{ mt: 2 }}
// //           />
// //           <Button 
// //             variant="outlined" 
// //             color="primary" 
// //             sx={{ mt: 4, width: '100%' }}
// //           >
// //             Upgrade now
// //           </Button>
// //         </Box>
// //       </Box>
// //       {/* 
// //       <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
// //         <NavLink to="/admin" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary,
// //               '&.active': { 
// //                 backgroundColor: theme.palette.action.selected 
// //               } 
// //             }}
// //           >
// //             <Home sx={{ mr: 2 }} />
// //             Explore
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/admin/my-library/createdByMe" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary
// //             }}
// //           >
// //             <LibraryBooks sx={{ mr: 2 }} />
// //             My library
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/admin/quizizz-ai" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Star sx={{ mr: 2 }} />
// //             Quizizz AI
// //             <Badge 
// //               badgeContent="NEW" 
// //               color="primary" 
// //               sx={{ ml: 2 }}
// //             />
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/admin/reports" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Assessment sx={{ mr: 2 }} />
// //             Reports
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/admin/classes" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Group sx={{ mr: 2 }} />
// //             Classes
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/settings" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Settings sx={{ mr: 2 }} />
// //             Settings
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/admin/memes" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Image sx={{ mr: 2 }} />
// //             Memes
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/profile/66c04925271abea6d497c8a1?section=collections" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Folder sx={{ mr: 2 }} />
// //             Collections
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/profile/66c04925271abea6d497c8a1?section=library" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Person sx={{ mr: 2 }} />
// //             Profile
// //           </Box>
// //         </NavLink>
// //         <Box 
// //           sx={{ 
// //             display: 'flex', 
// //             alignItems: 'center', 
// //             p: 2, 
// //             color: theme.palette.text.primary, 
// //             cursor: 'pointer' 
// //           }}
// //         >
// //           <ExitToApp sx={{ mr: 2 }} />
// //           Logout
// //         </Box>
// //       </Box>

// //       <Divider />

// //       <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// //         <Typography variant="body2" color="text.secondary" textAlign="center">
// //           Try our AI Chrome extension
// //         </Typography>
// //         <img 
// //           src="https://cf.quizizz.com/img/quizizz_ai/ai_extension_banner.webp" 
// //           alt="AI Chrome extension" 
// //           style={{ border: '1px solid', borderRadius: '4px', marginTop: '16px', height: '49px', width: '160px' }} 
// //         />
// //       </Box> */}
// //       <Box 
// //       sx={{ 
// //         display: 'flex', 
// //         flexDirection: 'column', 
// //         flexGrow: 1, 
// //         overflowY: 'auto', 
// //         maxHeight: 'calc(100vh - 64px)' // Adjust based on your layout
// //       }}
// //     >
// //       <Box sx={{ flexGrow: 1 }}>
// //         <NavLink to="/admin" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary,
// //               '&.active': { 
// //                 backgroundColor: theme.palette.action.selected 
// //               } 
// //             }}
// //           >
// //             <Home sx={{ mr: 2 }} />
// //             Explore
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/admin/my-library/createdByMe" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary
// //             }}
// //           >
// //             <LibraryBooks sx={{ mr: 2 }} />
// //             My library
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/admin/quizizz-ai" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Star sx={{ mr: 2 }} />
// //             Quizizz AI
// //             <Badge 
// //               badgeContent="NEW" 
// //               color="primary" 
// //               sx={{ ml: 2 }}
// //             />
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/admin/reports" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Assessment sx={{ mr: 2 }} />
// //             Reports
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/admin/classes" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Group sx={{ mr: 2 }} />
// //             Classes
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/settings" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Settings sx={{ mr: 2 }} />
// //             Settings
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/admin/memes" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Image sx={{ mr: 2 }} />
// //             Memes
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/profile/66c04925271abea6d497c8a1?section=collections" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Folder sx={{ mr: 2 }} />
// //             Collections
// //           </Box>
// //         </NavLink>
// //         <NavLink to="/profile/66c04925271abea6d497c8a1?section=library" style={{ textDecoration: 'none' }}>
// //           <Box 
// //             sx={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               p: 2, 
// //               color: theme.palette.text.primary 
// //             }}
// //           >
// //             <Person sx={{ mr: 2 }} />
// //             Profile
// //           </Box>
// //         </NavLink>
// //         <Box 
// //           sx={{ 
// //             display: 'flex', 
// //             alignItems: 'center', 
// //             p: 2, 
// //             color: theme.palette.text.primary, 
// //             cursor: 'pointer' 
// //           }}
// //         >
// //           <ExitToApp sx={{ mr: 2 }} />
// //           Logout
// //         </Box>
// //       </Box>

// //       <Divider />

// //       <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// //         <Typography variant="body2" color="text.secondary" textAlign="center">
// //           Try our AI Chrome extension
// //         </Typography>
// //         <img 
// //           src="https://cf.quizizz.com/img/quizizz_ai/ai_extension_banner.webp" 
// //           alt="AI Chrome extension" 
// //           style={{ border: '1px solid', borderRadius: '4px', marginTop: '16px', height: '49px', width: '160px' }} 
// //         />
// //       </Box>
// //     </Box>
// //     </Box>
// //   );
// // };

// // export default Sidebar;



import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, IconButton, Divider, Badge ,useMediaQuery, Drawer} from '@mui/material';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import { Home, LibraryBooks, Star, Assessment, Group, Settings, Image, Folder, Person, ExitToApp } from '@mui/icons-material';
import { createFilterOptions } from '@mui/material/Autocomplete';
import "./Sidebar.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";

import { TbBooks } from "react-icons/tb";
import { RiSparkling2Line } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbPhotoCog } from "react-icons/tb";
import { CiFolderOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

import { RxExit } from "react-icons/rx";
import CreateButton from './CreateButton';












const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));



  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant={isMobile ? 'temporary' : 'permanent'}
      sx={{
        width: 200,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 200,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          maxWidth: '200px',
          bgcolor: 'background.paper',
          borderRight: `1px solid ${theme.palette.divider}`,
          boxShadow: 1
        }}
      >
        <NavLink to="/admin" aria-label="Quizizz" title="Quizizz" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: "5px 0px",
              height: '40px'
            }}
          >
            <img
              src="https://cf.quizizz.com/img/logos/Purple.webp"
              alt="logo"
              style={{ height: '40px', width: '146px' }}
            />
          </Box>
        </NavLink>

        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <NavLink to="/profile/66c04925271abea6d497c8a1" style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
              <Typography sx={{ fontSize: '15px', fontWeight: "bold" }}>Mr. K</Typography>
            </NavLink>
            {/* <Badge
            badgeContent="Basic account"
            // color="secondary"
            sx={{ mt: 2 ,width:"5%"}}
          /> */}
            <Typography className="basic_account" style={{ fontWeight: "bold", fontSize: "12px", mt: 1 }}>Basic account</Typography>
            <Button


              // sx={{ mt: 2, width: '100%' }}


              sx={{
                mt: 2,
                fontSize: '12px',
                fontWeight: '700',
                color: 'rgb(232, 169, 0)',
                backgroundColor: '#ffc93333',
                borderRadius: '20px',

                width: '100%',
                '&:hover': {
                  backgroundColor: '#ffc93333',
                  boxShadow: 'none',
                },
              }}
              // sx={{
              //   mt: 2,
              //   width: '100%',
              //   '&:hover': {
              //     backgroundColor: '#ffc93333',
              //     boxShadow: 'none',
              //   },
              // }}
              className='upgrade_button'
            >
              Upgrade now
            </Button>
          </Box>
        </Box>
        {/* <Box sx={{ p: 1 }}>
          <Button

            className='create_button'
            startIcon={<IoIosAddCircleOutline />}
            // sx={{ mt: 1, width: '100%' }}

            sx={{
              backgroundColor: " rgb(136 84 192)",
              height: "40px",
              color: "white",
              // mt: 1,
              width: '100%',
              '&:hover': {
                backgroundColor: 'rgb(136 84 192)',
                boxShadow: '0 4px #6c4298',

              },
            }}>
            Create
          </Button>
        </Box> */}
        <CreateButton />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            overflowY: 'auto',
            maxHeight: 'calc(100vh - 64px)' // Adjust based on your layout
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary,
                  '&.active': {
                    backgroundColor: theme.palette.action.selected
                  }
                }}
              >
                <FaMapMarkedAlt style={{marginRight:"10px"}} />
                Explore
              </Box>
            </NavLink>
            <NavLink to="/mylibrary" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <TbBooks style={{marginRight:"10px"}} />
                My library
              </Box>
            </NavLink>
            <NavLink to="/admin/quizizz-ai" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <RiSparkling2Line style={{marginRight:"10px"}} />
                Quizizz AI
                <Badge
                  badgeContent="NEW"
                  color="primary"
                  sx={{ ml: 2 }}
                />
              </Box>
            </NavLink>
            <NavLink to="/admin/reports" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <SiSimpleanalytics style={{marginRight:"10px"}} />
                Reports
              </Box>
            </NavLink>
            <NavLink to="/admin/classes" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <PiUsersThreeFill style={{marginRight:"10px"}} />
                Classes
              </Box>
            </NavLink>
            <NavLink to="/settings" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <IoSettingsOutline style={{marginRight:"10px"}} />
                Settings
              </Box>
            </NavLink>
            <NavLink to="/admin/memes" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <TbPhotoCog style={{marginRight:"10px"}} />
                Memes
              </Box>
            </NavLink>
            <NavLink to="/profile/66c04925271abea6d497c8a1?section=collections" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <CiFolderOn style={{marginRight:"10px"}} />
                Collections
              </Box>
            </NavLink>
            <NavLink to="/profile/66c04925271abea6d497c8a1?section=library" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <FaRegUserCircle style={{marginRight:"10px"}} />
                Profile
              </Box>
            </NavLink>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                color: theme.palette.text.primary,
                cursor: 'pointer'
              }}
            >
              <RxExit style={{marginRight:"10px"}} />
              Logout
            </Box>
          </Box>

          <Divider />

          <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Try our AI Chrome extension
            </Typography>
            <img
              src="https://cf.quizizz.com/img/quizizz_ai/ai_extension_banner.webp"
              alt="AI Chrome extension"
              style={{ border: '1px solid', borderRadius: '4px', marginTop: '16px', height: '49px', width: '160px' }}
            />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;



// import React from 'react';
// import { Box, Button, Divider, Typography, IconButton, Drawer, useTheme, useMediaQuery } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { Home, LibraryBooks, Star, Assessment, Group, Settings, Image, Folder, Person, ExitToApp } from '@mui/icons-material';
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { Menu as MenuIcon } from '@mui/icons-material';

// const Sidebar = ({ open, onClose }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Drawer
//       anchor="left"
//       open={open}
//       onClose={onClose}
//       variant={isMobile ? 'temporary' : 'permanent'}
//       sx={{
//         width: 240,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: 240,
//           boxSizing: 'border-box',
//         },
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           height: '100%',
//           bgcolor: 'background.paper',
//         }}
//       >
//         <NavLink to="/admin" aria-label="Quizizz" title="Quizizz" style={{ textDecoration: 'none' }}>
//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               margin: "5px 0px",
//               height: '40px'
//             }}
//           >
//             <img
//               src="https://cf.quizizz.com/img/logos/Purple.webp"
//               alt="logo"
//               style={{ height: '40px', width: '146px' }}
//             />
//           </Box>
//         </NavLink>

//         <Box sx={{ p: 3 }}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
//             <NavLink to="/profile/66c04925271abea6d497c8a1" style={{ textDecoration: 'none' }}>
//               <Typography sx={{ fontSize: '15px', fontWeight: "bold" }}>Mr. K</Typography>
//             </NavLink>
//             <Typography className="basic_account" style={{ fontWeight: "bold", fontSize: "12px", mt: 1 }}>Basic account</Typography>
//             <Button
//               sx={{
//                 mt: 2,
//                 fontSize: '12px',
//                 fontWeight: '700',
//                 color: 'rgb(232, 169, 0)',
//                 backgroundColor: '#ffc93333',
//                 borderRadius: '20px',
//                 width: '100%',
//                 '&:hover': {
//                   backgroundColor: '#ffc93333',
//                   boxShadow: 'none',
//                 },
//               }}
//               className='upgrade_button'
//             >
//               Upgrade now
//             </Button>
//           </Box>
//         </Box>
//         <Box sx={{ p: 1 }}>
//           <Button
//             className='create_button'
//             startIcon={<IoIosAddCircleOutline />}
//             sx={{
//               backgroundColor: "rgb(136 84 192)",
//               height: "40px",
//               color: "white",
//               width: '100%',
//               '&:hover': {
//                 backgroundColor: 'rgb(136 84 192)',
//                 boxShadow: '0 4px #6c4298',
//               },
//             }}
//           >
//             Create
//           </Button>
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             flexGrow: 1,
//             overflowY: 'auto',
//             maxHeight: 'calc(100vh - 64px)'
//           }}
//         >
//           <Box sx={{ flexGrow: 1 }}>
//             {/* Navigation Links */}
//             {['/admin', '/admin/my-library/createdByMe', '/admin/quizizz-ai', '/admin/reports', '/admin/classes', '/settings', '/admin/memes', '/profile/66c04925271abea6d497c8a1?section=collections', '/profile/66c04925271abea6d497c8a1?section=library'].map((path, index) => (
//               <NavLink to={path} key={index} style={{ textDecoration: 'none' }}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     p: 2,
//                     color: theme.palette.text.primary,
//                   }}
//                 >
//                   {/* Add corresponding icons here */}
//                   <Typography>{path.split('/').pop()}</Typography>
//                 </Box>
//               </NavLink>
//             ))}
//           </Box>

//           <Divider />

//           <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <Typography variant="body2" color="text.secondary" textAlign="center">
//               Try our AI Chrome extension
//             </Typography>
//             <img
//               src="https://cf.quizizz.com/img/quizizz_ai/ai_extension_banner.webp"
//               alt="AI Chrome extension"
//               style={{ border: '1px solid', borderRadius: '4px', marginTop: '16px', height: '49px', width: '160px' }}
//             />
//           </Box>
//         </Box>
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;
